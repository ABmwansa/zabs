// app/types/css.d.ts
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// For Font Awesome specific import
declare module '@fortawesome/fontawesome-free/css/all.min.css' {
  const content: string;
  export default content;
}