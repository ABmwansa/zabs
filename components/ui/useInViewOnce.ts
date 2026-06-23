"use client";

import { useEffect, useRef, useState } from "react";

type ObserverStore = {
  callbacks: WeakMap<Element, () => void>;
  observer: IntersectionObserver;
};

const observerStores = new Map<string, ObserverStore>();

function getObserverStore(threshold: number, rootMargin: string): ObserverStore | null {
  if (typeof window === "undefined") {
    return null;
  }

  const key = `${threshold}:${rootMargin}`;
  const existingStore = observerStores.get(key);

  if (existingStore) {
    return existingStore;
  }

  const callbacks = new WeakMap<Element, () => void>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        const callback = callbacks.get(entry.target);

        if (!callback) {
          continue;
        }

        callbacks.delete(entry.target);
        observer.unobserve(entry.target);
        callback();
      }
    },
    {
      rootMargin,
      threshold,
    },
  );

  const store = {
    callbacks,
    observer,
  };

  observerStores.set(key, store);
  return store;
}

type UseInViewOnceOptions = {
  rootMargin?: string;
  threshold?: number;
};

export function useInViewOnce<T extends Element>({
  rootMargin = "0px",
  threshold = 0.2,
}: UseInViewOnceOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const store = getObserverStore(threshold, rootMargin);

    if (!store) {
      setInView(true);
      return;
    }

    store.callbacks.set(element, () => setInView(true));
    store.observer.observe(element);

    return () => {
      store.callbacks.delete(element);
      store.observer.unobserve(element);
    };
  }, [inView, rootMargin, threshold]);

  return { inView, ref };
}
