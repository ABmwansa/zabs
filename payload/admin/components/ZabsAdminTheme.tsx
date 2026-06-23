const adminThemeCss = `
  :root {
    --zabs-admin-navy: #12304f;
    --zabs-admin-blue: #008fd5;
    --zabs-admin-blue-soft: #eaf5ff;
    --zabs-admin-ink: #14263d;
    --zabs-admin-muted: #62758c;
    --zabs-admin-line: rgba(18, 48, 79, 0.12);
    --zabs-admin-line-strong: rgba(18, 48, 79, 0.18);
    --zabs-admin-surface: rgba(255, 255, 255, 0.96);
    --zabs-admin-surface-soft: #f7fbff;
    --zabs-admin-surface-tint: #eef5fb;
    --zabs-admin-success: #22784e;
    --zabs-admin-success-soft: #ebf7f0;
    --zabs-admin-warning: #9a670e;
    --zabs-admin-warning-soft: #fff3df;
    --zabs-admin-shadow: 0 22px 50px rgba(18, 48, 79, 0.08);
    --zabs-admin-shadow-soft: 0 12px 28px rgba(18, 48, 79, 0.06);
    --theme-elevation-0: #f4f8fc;
    --theme-elevation-50: #ffffff;
    --theme-elevation-100: #f8fbfe;
    --theme-elevation-150: #eff5fb;
    --theme-elevation-200: #e4edf6;
    --theme-elevation-300: #d2deea;
    --theme-elevation-400: #bccbdd;
    --theme-elevation-500: #8395a9;
    --theme-elevation-600: #647487;
    --theme-elevation-700: #4d5d70;
    --theme-elevation-800: #344355;
    --theme-elevation-900: #1f2d3f;
    --theme-elevation-1000: #15202e;
    --theme-text: #14263d;
    --theme-success-100: #ebf7f0;
    --theme-success-500: #22784e;
    --theme-warning-500: #9a670e;
    --theme-error-100: #fdecef;
    --theme-error-500: #bf3f49;
  }

  body {
    background:
      radial-gradient(circle at top left, rgba(0, 124, 194, 0.08), transparent 24%),
      linear-gradient(180deg, #f6f9fc 0%, #edf3f8 100%);
    color: var(--zabs-admin-ink);
  }

  .payload-admin-theme {
    color: var(--zabs-admin-ink);
    isolation: isolate;
    position: relative;
  }

  .payload-admin-theme::after {
    background: radial-gradient(circle, rgba(0, 124, 194, 0.1), transparent 65%);
    content: "";
    height: 20rem;
    pointer-events: none;
    position: fixed;
    right: -7rem;
    top: -6rem;
    width: 20rem;
    z-index: -1;
  }

  .template-default,
  .template-minimal {
    position: relative;
  }

  .payload-admin-shell,
  .template-default,
  .template-minimal,
  .collection-list,
  .edit-view,
  .dashboard,
  .render-fields,
  .doc-controls {
    color: var(--zabs-admin-ink);
  }

  .payload-admin-shell,
  .template-default {
    min-height: 100vh;
  }

  @media (min-width: 1101px) {
    .payload-admin-shell,
    .template-default {
      display: grid;
      grid-template-columns: minmax(18.75rem, 20.5rem) minmax(0, 1fr);
    }

    .nav,
    .app-nav,
    nav[aria-label="Main navigation"] {
      align-self: stretch;
      height: 100vh;
      max-width: none;
      overflow-y: auto;
      position: sticky;
      scrollbar-width: thin;
      top: 0;
      z-index: 12;
    }

    .template-default__wrap {
      grid-column: 2;
      min-width: 0;
    }
  }

  .nav,
  .app-nav,
  nav[aria-label="Main navigation"] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(243, 248, 253, 0.98)),
      radial-gradient(circle at top, rgba(0, 124, 194, 0.08), transparent 34%);
    border-right: 1px solid var(--zabs-admin-line);
    box-shadow:
      inset -1px 0 0 rgba(255, 255, 255, 0.78),
      20px 0 40px rgba(18, 48, 79, 0.03);
    padding: 1rem 0.85rem 1.2rem;
    position: relative;
  }

  .nav::before,
  .app-nav::before,
  nav[aria-label="Main navigation"]::before {
    background: linear-gradient(180deg, rgba(0, 124, 194, 0.1), transparent 72%);
    content: "";
    inset: 0 0 auto;
    height: 12rem;
    pointer-events: none;
    position: absolute;
  }

  .nav a,
  .app-nav a,
  nav[aria-label="Main navigation"] a {
    align-items: center;
    border-radius: 14px;
    color: var(--zabs-admin-muted);
    display: flex;
    font-weight: 600;
    min-height: 2.9rem;
    padding: 0.78rem 0.85rem;
    position: relative;
    transition:
      transform 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      box-shadow 160ms ease,
      border-color 160ms ease;
  }

  .nav a::before,
  .app-nav a::before,
  nav[aria-label="Main navigation"] a::before {
    background: linear-gradient(180deg, var(--zabs-admin-blue), var(--zabs-admin-navy));
    border-radius: 999px;
    content: "";
    height: 1.35rem;
    left: 0.3rem;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 160ms ease;
    width: 0.22rem;
  }

  .nav a:hover,
  .app-nav a:hover,
  nav[aria-label="Main navigation"] a:hover {
    background: rgba(0, 124, 194, 0.08);
    box-shadow: inset 0 0 0 1px rgba(0, 124, 194, 0.1);
    color: var(--zabs-admin-navy);
    transform: translateX(2px);
  }

  .nav a[aria-current="page"],
  .nav a.active,
  .app-nav a[aria-current="page"],
  .app-nav a.active,
  nav[aria-label="Main navigation"] a[aria-current="page"] {
    background: linear-gradient(135deg, rgba(0, 124, 194, 0.12), rgba(18, 48, 79, 0.08));
    box-shadow:
      inset 0 0 0 1px rgba(0, 124, 194, 0.12),
      0 10px 24px rgba(18, 48, 79, 0.07);
    color: var(--zabs-admin-navy);
    font-weight: 700;
  }

  .nav a[aria-current="page"]::before,
  .nav a.active::before,
  .app-nav a[aria-current="page"]::before,
  .app-nav a.active::before,
  nav[aria-label="Main navigation"] a[aria-current="page"]::before {
    opacity: 1;
  }

  .nav__home {
    margin-bottom: 0.9rem;
  }

  .nav-group {
    margin-bottom: 1rem;
  }

  .nav-group__toggle {
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    color: #55677d;
    display: flex;
    font-size: 0.8rem;
    font-weight: 700;
    justify-content: space-between;
    letter-spacing: 0.08em;
    margin-bottom: 0.45rem;
    padding: 0.68rem 0.8rem;
    text-transform: uppercase;
    width: 100%;
  }

  .nav-group__toggle:hover,
  .nav-group__toggle:focus-visible {
    background: rgba(18, 48, 79, 0.05);
    color: var(--zabs-admin-navy);
  }

  .nav-group__content {
    display: grid;
    gap: 0.35rem;
    padding-left: 0.2rem;
  }

  .nav-group__indicator svg .stroke {
    stroke: rgba(18, 48, 79, 0.3);
  }

  .app-header__content {
    backdrop-filter: blur(12px);
  }

  .app-header__actions-wrapper {
    margin-right: 0.85rem;
  }

  .app-header__account {
    align-items: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 249, 253, 0.98));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 999px;
    box-shadow: var(--zabs-admin-shadow-soft);
    display: inline-flex;
    gap: 0.65rem;
    justify-content: center;
    min-height: 3rem;
    min-width: 3rem;
    padding: 0.35rem 0.45rem 0.35rem 0.8rem;
    position: relative;
    text-decoration: none;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease;
  }

  .app-header__account::before {
    color: var(--zabs-admin-navy);
    content: "Account";
    font-size: 0.84rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
  }

  .app-header__account::after {
    border: 1px solid transparent;
    content: "";
    inset: -3px;
    pointer-events: none;
    position: absolute;
    transition: border-color 160ms ease;
    border-radius: 999px;
  }

  .app-header__account:hover {
    border-color: rgba(0, 124, 194, 0.18);
    box-shadow: 0 14px 28px rgba(18, 48, 79, 0.1);
    transform: translateY(-1px);
  }

  .app-header__account:focus-visible {
    outline: none;
  }

  .app-header__account:focus-visible::after {
    border-color: rgba(0, 124, 194, 0.35);
  }

  .app-header__account .graphic-account,
  .app-header__account .gravatar-account {
    flex-shrink: 0;
  }

  .graphic-account {
    display: block;
    height: 2rem;
    width: 2rem;
  }

  .graphic-account__bg {
    fill: rgba(0, 124, 194, 0.12);
    stroke: rgba(0, 124, 194, 0.2);
    stroke-width: 1px;
  }

  .graphic-account__head,
  .graphic-account__body {
    fill: var(--zabs-admin-navy);
  }

  .graphic-account--active .graphic-account__bg {
    fill: rgba(0, 124, 194, 0.18);
    stroke: rgba(0, 124, 194, 0.28);
  }

  .graphic-account--active .graphic-account__head,
  .graphic-account--active .graphic-account__body {
    fill: var(--zabs-admin-blue);
  }

  .gravatar-account {
    border: 2px solid rgba(0, 124, 194, 0.16);
    box-shadow: 0 6px 14px rgba(18, 48, 79, 0.1);
    display: block;
    height: 2rem;
    object-fit: cover;
    width: 2rem;
  }

  .dashboard__wrap,
  .list-controls,
  .collection-edit,
  .document-fields,
  .doc-tab-content,
  .render-fields,
  .login,
  form[action],
  .table-wrap,
  .relationship-field,
  .upload-field,
  .popup,
  .drawer__content,
  .card,
  .collection-list__wrap,
  .template-default__wrap {
    backdrop-filter: blur(12px);
  }

  .card,
  .dashboard__group,
  .render-fields,
  .document-fields,
  .drawer__content,
  .popup,
  .template-default__wrap,
  .collection-list__wrap,
  .list-controls,
  .doc-controls,
  .login form,
  .table-wrap {
    background: var(--zabs-admin-surface);
    border: 1px solid var(--zabs-admin-line);
    border-radius: 20px;
    box-shadow: var(--zabs-admin-shadow);
  }

  .login form,
  .dashboard__wrap,
  .template-default__wrap,
  .collection-list__wrap {
    overflow: hidden;
  }

  .btn,
  button,
  [role="button"],
  .pill {
    border-radius: 12px;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      background-color 160ms ease,
      border-color 160ms ease;
  }

  .btn--style-primary,
  .btn.btn--style-primary,
  button[type="submit"] {
    background: linear-gradient(135deg, var(--zabs-admin-blue), var(--zabs-admin-navy));
    border-color: transparent;
    box-shadow: 0 12px 24px rgba(18, 48, 79, 0.16);
    color: #ffffff;
  }

  .btn--style-primary:hover,
  .btn.btn--style-primary:hover,
  button[type="submit"]:hover {
    transform: translateY(-1px);
  }

  .btn--style-secondary,
  .btn--style-subtle,
  .btn--style-pill {
    border-color: rgba(18, 48, 79, 0.1);
    box-shadow: 0 8px 16px rgba(18, 48, 79, 0.04);
  }

  .doc-controls {
    margin-bottom: 1rem;
    overflow: hidden;
    top: 0.7rem;
  }

  .doc-controls__wrapper {
    align-items: center;
    gap: 1rem;
    min-height: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .doc-controls__content {
    padding-bottom: 0.65rem;
    padding-top: 0.65rem;
  }

  .doc-controls__label {
    color: var(--zabs-admin-muted);
    font-weight: 600;
  }

  .doc-controls__value {
    color: var(--zabs-admin-ink);
  }

  .render-fields,
  .document-fields {
    padding: 1.1rem;
  }

  .render-fields > .tabs-field {
    margin-top: 0;
  }

  .tabs-field {
    margin-left: 0;
    margin-right: 0;
    margin-top: 1rem;
  }

  .tabs-field--within-collapsible {
    margin: 0;
  }

  .tabs-field__tabs-wrap {
    margin-bottom: 1rem;
    padding: 0;
  }

  .tabs-field__tabs {
    align-items: center;
    background: rgba(234, 245, 255, 0.72);
    border: 1px solid rgba(0, 124, 194, 0.12);
    border-radius: 16px;
    display: inline-flex;
    gap: 0.35rem;
    min-width: 100%;
    padding: 0.35rem;
  }

  .tabs-field__tabs::before,
  .tabs-field__tabs::after {
    display: none;
  }

  .tabs-field__content-wrap {
    background: var(--zabs-admin-surface);
    border: 1px solid var(--zabs-admin-line);
    border-radius: 20px;
    box-shadow: var(--zabs-admin-shadow-soft);
    padding: 1rem;
  }

  .tabs-field .tab,
  .doc-tabs__tab,
  .tabs .tabs__tab-button {
    border-radius: 12px;
    min-height: 2.65rem;
  }

  .tabs-field .tab--active,
  .doc-tabs__tab--active,
  .tabs .tabs__tab-button--active {
    background: linear-gradient(135deg, rgba(0, 124, 194, 0.14), rgba(18, 48, 79, 0.08));
    box-shadow: inset 0 0 0 1px rgba(0, 124, 194, 0.12);
    color: var(--zabs-admin-navy);
  }

  .tabs-field .tab:hover,
  .doc-tabs__tab:hover,
  .tabs .tabs__tab-button:hover {
    background: rgba(0, 124, 194, 0.08);
  }

  .render-fields .row,
  .tabs-field__content-wrap .row,
  .collapsible__content .row {
    gap: 1rem;
  }

  .field-type {
    background: var(--zabs-admin-surface-soft);
    border: 1px solid rgba(18, 48, 79, 0.08);
    border-radius: 16px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);
    margin-bottom: 0.95rem;
    padding: 0.95rem 1rem;
  }

  .field-type:last-child {
    margin-bottom: 0;
  }

  .collapsible {
    background: var(--zabs-admin-surface);
    border: 1px solid var(--zabs-admin-line);
    border-radius: 20px;
    box-shadow: var(--zabs-admin-shadow-soft);
    margin-bottom: 1rem;
    overflow: hidden;
  }

  .collapsible__toggle-wrap {
    align-items: center;
    background: linear-gradient(180deg, rgba(248, 251, 255, 1), rgba(241, 246, 252, 0.96));
    border-bottom: 1px solid rgba(18, 48, 79, 0.08);
    min-height: 3.6rem;
    padding: 0.7rem 0.9rem 0.7rem 1rem;
  }

  .collapsible__toggle-wrap:hover {
    background: linear-gradient(180deg, rgba(243, 248, 253, 1), rgba(235, 243, 250, 1));
  }

  .collapsible__content {
    background: transparent;
    padding: 1rem;
  }

  .field-label,
  .field-label label,
  label {
    color: var(--zabs-admin-ink);
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .required,
  .field-label .required {
    color: var(--theme-error-500);
  }

  .field-description,
  .field-description p,
  .field-admin-description,
  .rich-text-lexical__wrap .description {
    color: var(--zabs-admin-muted);
    line-height: 1.6;
  }

  input,
  textarea,
  select,
  .rs__control,
  .field-type input,
  .field-type textarea,
  .field-type select {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(18, 48, 79, 0.14);
    border-radius: 14px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
    min-height: 3rem;
    padding: 0.8rem 0.95rem;
  }

  textarea,
  .field-type textarea {
    min-height: 8rem;
  }

  .rs__control {
    padding: 0.15rem 0.4rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(98, 117, 140, 0.84);
  }

  input:focus,
  textarea:focus,
  select:focus,
  .rs__control--is-focused,
  .field-type input:focus,
  .field-type textarea:focus,
  .field-type select:focus {
    border-color: rgba(0, 124, 194, 0.55);
    box-shadow:
      0 0 0 4px rgba(0, 124, 194, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
    outline: none;
  }

  .relationship-field,
  .upload-field,
  .rich-text-lexical__wrap,
  .array-field,
  .blocks-field {
    background: rgba(255, 255, 255, 0.84);
    border: 1px solid rgba(18, 48, 79, 0.08);
    border-radius: 16px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
    padding: 0.9rem;
  }

  .rich-text-lexical__wrap {
    padding: 0.8rem;
  }

  .array-field {
    display: grid;
    gap: 0.9rem;
  }

  .array-field__header {
    background: linear-gradient(180deg, rgba(247, 251, 255, 0.98), rgba(239, 246, 252, 0.96));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 18px;
    box-shadow: var(--zabs-admin-shadow-soft);
    padding: 0.95rem 1rem;
  }

  .array-field__header-wrap {
    align-items: center;
    gap: 1rem;
  }

  .array-field__header-actions {
    align-items: center;
    gap: 0.5rem;
  }

  .array-field__header-action {
    background: rgba(0, 124, 194, 0.08);
    border: 1px solid rgba(0, 124, 194, 0.12);
    border-radius: 999px;
    color: var(--zabs-admin-navy);
    font-size: 0.74rem;
    font-weight: 700;
    margin-left: 0;
    padding: 0.38rem 0.7rem;
    text-decoration: none;
    transition:
      background-color 160ms ease,
      border-color 160ms ease,
      color 160ms ease;
  }

  .array-field__header-action:hover,
  .array-field__header-action:focus-visible {
    background: rgba(0, 124, 194, 0.14);
    border-color: rgba(0, 124, 194, 0.2);
    color: var(--zabs-admin-blue);
    text-decoration: none;
  }

  .array-field__draggable-rows {
    display: grid;
    gap: 0.9rem;
  }

  .array-field .array-field__row {
    border-radius: 20px;
    overflow: hidden;
  }

  .array-field .array-field__row > .collapsible__toggle-wrap {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.99), rgba(243, 248, 253, 0.98));
    min-height: 4.3rem;
    padding: 0.85rem 1rem;
  }

  .array-field .array-field__row .collapsible__content {
    padding: 1rem;
  }

  .array-field__row-header {
    align-items: center;
    gap: 0.8rem;
    min-width: 0;
  }

  .array-field__row-header .row-label {
    min-width: 0;
  }

  .zabs-array-row-label {
    display: grid;
    gap: 0.18rem;
    min-width: 0;
  }

  .zabs-array-row-label__index {
    color: var(--zabs-admin-blue);
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .zabs-array-row-label__title {
    color: var(--zabs-admin-navy);
    font-size: 0.94rem;
    font-weight: 800;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .zabs-array-row-label__meta {
    color: var(--zabs-admin-muted);
    font-size: 0.76rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .array-field .array-field__add-row.btn {
    background: rgba(255, 255, 255, 0.92);
    border: 1px dashed rgba(0, 124, 194, 0.2);
    border-radius: 16px;
    box-shadow: var(--zabs-admin-shadow-soft);
    padding: 0.65rem 0.85rem;
  }

  .array-field .array-field__add-row.btn:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.98);
    border-color: rgba(0, 124, 194, 0.32);
  }

  .upload-field-card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 249, 255, 0.96));
    border: 1px solid rgba(18, 48, 79, 0.12);
    border-radius: 16px;
    box-shadow: var(--zabs-admin-shadow-soft);
  }

  .field-error.tooltip {
    border: 1px solid rgba(191, 63, 73, 0.12);
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(191, 63, 73, 0.12);
    color: #8b1d2e;
    padding: 0.55rem 0.75rem;
  }

  .banner--type-success {
    border-radius: 14px;
    box-shadow: var(--zabs-admin-shadow-soft);
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  th,
  td {
    border-bottom: 1px solid rgba(18, 48, 79, 0.08);
  }

  thead th {
    background: rgba(234, 245, 255, 0.88);
    color: var(--zabs-admin-navy);
  }

  .table-wrap table,
  .list-table table {
    border-radius: 16px;
    overflow: hidden;
  }

  .login {
    min-height: 100vh;
    position: relative;
  }

  .login::before {
    background:
      radial-gradient(circle at top right, rgba(0, 124, 194, 0.14), transparent 28%),
      radial-gradient(circle at bottom left, rgba(18, 48, 79, 0.1), transparent 24%);
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
  }

  .login form {
    background: rgba(255, 255, 255, 0.88);
    padding: 1.3rem;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: -0.02em;
  }

  .zabs-admin-brand,
  .zabs-admin-panel,
  .zabs-admin-login {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 249, 253, 0.98));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 20px;
    box-shadow: var(--zabs-admin-shadow);
    overflow: hidden;
    position: relative;
  }

  .zabs-admin-brand::before,
  .zabs-admin-panel::before,
  .zabs-admin-login::before {
    background: linear-gradient(90deg, var(--zabs-admin-navy), var(--zabs-admin-blue));
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .zabs-admin-brand {
    align-items: center;
    display: flex;
    gap: 0.85rem;
    padding: 0.8rem 1rem;
  }

  .zabs-admin-mark {
    align-items: center;
    background: linear-gradient(135deg, var(--zabs-admin-blue), var(--zabs-admin-navy));
    border-radius: 15px;
    box-shadow: 0 12px 24px rgba(18, 48, 79, 0.16);
    color: #ffffff;
    display: inline-flex;
    font-size: 0.98rem;
    font-weight: 800;
    height: 2.75rem;
    justify-content: center;
    letter-spacing: 0.14em;
    width: 2.75rem;
  }

  .zabs-admin-brand__copy {
    display: grid;
    gap: 0.1rem;
  }

  .zabs-admin-brand__eyebrow {
    color: var(--zabs-admin-blue);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    margin: 0;
    text-transform: uppercase;
  }

  .zabs-admin-brand__title {
    color: var(--zabs-admin-navy);
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.1;
    margin: 0;
  }

  .zabs-admin-brand__subtitle {
    color: var(--zabs-admin-muted);
    font-size: 0.76rem;
    margin: 0;
  }

  .zabs-admin-panel,
  .zabs-admin-login {
    padding: 1rem;
  }

  .zabs-admin-panel__topbar {
    align-items: center;
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
  }

  .zabs-admin-panel__eyebrow,
  .zabs-admin-login__eyebrow {
    color: var(--zabs-admin-blue);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    margin: 0;
    text-transform: uppercase;
  }

  .zabs-admin-panel__status {
    background: rgba(34, 120, 78, 0.08);
    border: 1px solid rgba(34, 120, 78, 0.12);
    border-radius: 999px;
    color: var(--zabs-admin-success);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.35rem 0.55rem;
    white-space: nowrap;
  }

  .zabs-admin-panel__hero {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: auto minmax(0, 1fr);
    margin-top: 0.9rem;
  }

  .zabs-admin-panel__seal {
    align-items: center;
    background: linear-gradient(135deg, var(--zabs-admin-blue), var(--zabs-admin-navy));
    border-radius: 18px;
    box-shadow: 0 16px 28px rgba(18, 48, 79, 0.16);
    color: #ffffff;
    display: inline-flex;
    font-size: 0.98rem;
    font-weight: 800;
    height: 3rem;
    justify-content: center;
    letter-spacing: 0.12em;
    width: 3rem;
  }

  .zabs-admin-panel__hero-copy {
    display: grid;
    gap: 0.35rem;
  }

  .zabs-admin-panel__title,
  .zabs-admin-login__title {
    color: var(--zabs-admin-navy);
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 0.45rem 0 0.55rem;
  }

  .zabs-admin-panel__body,
  .zabs-admin-login__body {
    color: var(--zabs-admin-muted);
    line-height: 1.65;
    margin: 0;
  }

  .zabs-admin-panel__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1rem;
  }

  .zabs-admin-panel__badge {
    background: rgba(0, 124, 194, 0.07);
    border: 1px solid rgba(0, 124, 194, 0.1);
    border-radius: 999px;
    color: var(--zabs-admin-navy);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    padding: 0.4rem 0.7rem;
  }

  .zabs-admin-panel__list {
    display: grid;
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .zabs-admin-panel__item {
    align-items: flex-start;
    background: linear-gradient(180deg, rgba(250, 252, 255, 0.98), rgba(243, 248, 253, 0.98));
    border: 1px solid rgba(18, 48, 79, 0.08);
    border-radius: 16px;
    color: var(--zabs-admin-navy);
    display: grid;
    gap: 0.75rem;
    grid-template-columns: auto minmax(0, 1fr);
    padding: 0.8rem;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      border-color 160ms ease;
  }

  .zabs-admin-panel__item:hover {
    border-color: rgba(0, 124, 194, 0.15);
    box-shadow: 0 14px 24px rgba(18, 48, 79, 0.08);
    transform: translateY(-1px);
  }

  .zabs-admin-panel__item-icon {
    align-items: center;
    background: rgba(0, 124, 194, 0.08);
    border-radius: 12px;
    display: inline-flex;
    height: 2rem;
    justify-content: center;
    width: 2rem;
  }

  .zabs-admin-panel__item-copy {
    display: grid;
    gap: 0.24rem;
  }

  .zabs-admin-panel__item-title {
    color: var(--zabs-admin-navy);
    font-size: 0.84rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .zabs-admin-panel__item-text {
    color: var(--zabs-admin-muted);
    font-size: 0.77rem;
    line-height: 1.5;
  }

  .zabs-admin-panel__dot {
    background: var(--zabs-admin-blue);
    border-radius: 999px;
    height: 0.45rem;
    width: 0.45rem;
  }

  .zabs-admin-panel__footer {
    background: rgba(18, 48, 79, 0.04);
    border: 1px solid rgba(18, 48, 79, 0.08);
    border-radius: 16px;
    display: grid;
    gap: 0.8rem;
    margin-top: 1rem;
    padding: 0.8rem 0.85rem;
  }

  .zabs-admin-panel__footer-copy {
    color: var(--zabs-admin-muted);
    font-size: 0.78rem;
    line-height: 1.55;
    margin: 0;
  }

  .zabs-admin-panel__actions {
    display: grid;
    gap: 0.65rem;
  }

  .zabs-panel-button {
    align-items: center;
    border-radius: 14px;
    display: inline-flex;
    font-size: 0.84rem;
    font-weight: 700;
    gap: 0.55rem;
    justify-content: center;
    min-height: 2.9rem;
    padding: 0.78rem 0.9rem;
    text-decoration: none;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease;
  }

  .zabs-panel-button:hover {
    transform: translateY(-1px);
  }

  .zabs-panel-button--primary {
    background: linear-gradient(135deg, var(--zabs-admin-blue), var(--zabs-admin-navy));
    box-shadow: 0 14px 28px rgba(18, 48, 79, 0.16);
    color: #ffffff;
  }

  .zabs-panel-button--primary:hover {
    box-shadow: 0 18px 34px rgba(18, 48, 79, 0.22);
    color: #ffffff;
  }

  .zabs-panel-button--secondary {
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid rgba(18, 48, 79, 0.12);
    box-shadow: 0 10px 22px rgba(18, 48, 79, 0.08);
    color: var(--zabs-admin-navy);
  }

  .zabs-panel-button--secondary:hover {
    background: rgba(255, 255, 255, 0.98);
    border-color: rgba(0, 124, 194, 0.18);
    box-shadow: 0 16px 30px rgba(18, 48, 79, 0.12);
    color: var(--zabs-admin-navy);
  }

  .zabs-admin-login__layout {
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: auto minmax(0, 1fr);
  }

  .zabs-admin-login__logo {
    display: block;
    height: 2.8rem;
    width: auto;
  }

  .zabs-dashboard {
    display: grid;
    gap: 1.2rem;
  }

  .zabs-dashboard__hero,
  .zabs-dashboard__section {
    background: var(--zabs-admin-surface);
    border: 1px solid var(--zabs-admin-line);
    border-radius: 22px;
    box-shadow: var(--zabs-admin-shadow);
    padding: 1.25rem;
  }

  .zabs-dashboard__hero {
    overflow: hidden;
    position: relative;
  }

  .zabs-dashboard__hero::before {
    background:
      radial-gradient(circle at top right, rgba(0, 124, 194, 0.12), transparent 34%),
      linear-gradient(90deg, rgba(0, 124, 194, 0.04), transparent 55%);
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
  }

  .zabs-dashboard__hero-layout,
  .zabs-dashboard__split-grid,
  .zabs-dashboard__metrics-grid,
  .zabs-dashboard__quick-actions-grid,
  .zabs-dashboard__mini-grid {
    display: grid;
    gap: 1rem;
  }

  .zabs-dashboard__hero-layout,
  .zabs-dashboard__split-grid {
    grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.95fr);
  }

  .zabs-dashboard__metrics-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .zabs-dashboard__module-rail {
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1.05fr);
  }

  .zabs-dashboard__module-rail-lead,
  .zabs-dashboard__module-rail-list {
    min-width: 0;
  }

  .zabs-dashboard__module-rail-list {
    display: grid;
    gap: 0.85rem;
  }

  .zabs-dashboard__quick-actions-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .zabs-dashboard__mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .zabs-dashboard__hero-copy,
  .zabs-dashboard__hero-aside {
    min-width: 0;
    position: relative;
  }

  .zabs-dashboard__eyebrow {
    color: var(--zabs-admin-blue);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    margin: 0;
    text-transform: uppercase;
  }

  .zabs-dashboard__hero-title,
  .zabs-dashboard__section-title {
    color: var(--zabs-admin-navy);
    font-size: 1.85rem;
    font-weight: 800;
    line-height: 1.05;
    margin: 0.55rem 0 0.75rem;
  }

  .zabs-dashboard__hero-description,
  .zabs-dashboard__section-description {
    color: var(--zabs-admin-muted);
    line-height: 1.7;
    margin: 0;
    max-width: 52rem;
  }

  .zabs-dashboard__hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 1rem;
  }

  .zabs-dashboard__hero-toolbar {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 1.1rem;
  }

  .zabs-dashboard__hero-toolbar-link {
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--zabs-admin-line);
    border-radius: 18px;
    box-shadow: var(--zabs-admin-shadow-soft);
    color: inherit;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: auto minmax(0, 1fr);
    padding: 0.9rem;
    text-decoration: none;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .zabs-dashboard__hero-toolbar-link:hover {
    border-color: rgba(0, 124, 194, 0.2);
    box-shadow: 0 16px 32px rgba(18, 48, 79, 0.1);
    transform: translateY(-2px);
  }

  .zabs-dashboard__hero-toolbar-title {
    color: var(--zabs-admin-navy);
    font-size: 0.92rem;
    font-weight: 700;
    margin: 0;
  }

  .zabs-dashboard__hero-toolbar-meta {
    color: var(--zabs-admin-muted);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin: 0.2rem 0 0;
    text-transform: uppercase;
  }

  .zabs-dashboard__hero-tag,
  .zabs-status-chip {
    align-items: center;
    border-radius: 999px;
    display: inline-flex;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 0.42rem 0.72rem;
    text-transform: uppercase;
  }

  .zabs-dashboard__hero-tag {
    background: rgba(0, 124, 194, 0.08);
    color: var(--zabs-admin-navy);
  }

  .zabs-dashboard__hero-note {
    background: linear-gradient(180deg, rgba(247, 251, 255, 0.96), rgba(238, 245, 251, 0.96));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 18px;
    box-shadow: var(--zabs-admin-shadow-soft);
    padding: 1rem;
  }

  .zabs-dashboard__hero-note-title {
    color: var(--zabs-admin-navy);
    font-size: 0.96rem;
    font-weight: 700;
    margin: 0 0 0.45rem;
  }

  .zabs-dashboard__hero-note-copy {
    color: var(--zabs-admin-muted);
    font-size: 0.92rem;
    line-height: 1.65;
    margin: 0;
  }

  .zabs-dashboard__hero-note-list {
    display: grid;
    gap: 0.55rem;
    margin: 0.95rem 0 0;
    padding: 0;
  }

  .zabs-dashboard__hero-note-item {
    align-items: flex-start;
    color: var(--zabs-admin-ink);
    display: flex;
    gap: 0.55rem;
    list-style: none;
    line-height: 1.55;
  }

  .zabs-dashboard__hero-note-bullet {
    background: var(--zabs-admin-blue);
    border-radius: 999px;
    height: 0.42rem;
    margin-top: 0.45rem;
    width: 0.42rem;
  }

  .zabs-dashboard__section-header {
    align-items: end;
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .zabs-dashboard__section-header-copy {
    min-width: 0;
  }

  .zabs-dashboard__badge {
    align-items: center;
    background: var(--zabs-admin-blue-soft);
    border: 1px solid rgba(0, 124, 194, 0.14);
    border-radius: 16px;
    color: var(--zabs-admin-navy);
    display: inline-flex;
    font-size: 0.9rem;
    font-weight: 700;
    gap: 0.5rem;
    padding: 0.75rem 0.9rem;
  }

  .zabs-dashboard-card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 251, 255, 0.98));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 18px;
    box-shadow: var(--zabs-admin-shadow-soft);
    color: inherit;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      border-color 160ms ease;
  }

  .zabs-dashboard-card:hover {
    border-color: rgba(0, 124, 194, 0.2);
    box-shadow: 0 18px 36px rgba(18, 48, 79, 0.1);
    transform: translateY(-2px);
  }

  .zabs-dashboard-card--interactive {
    cursor: pointer;
  }

  .zabs-dashboard-card__inner {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    height: 100%;
    padding: 1rem;
  }

  .zabs-dashboard-card__header {
    align-items: flex-start;
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;
  }

  .zabs-dashboard-card__icon {
    align-items: center;
    border-radius: 16px;
    color: var(--zabs-admin-navy);
    display: inline-flex;
    flex-shrink: 0;
    height: 2.85rem;
    justify-content: center;
    width: 2.85rem;
  }

  .zabs-dashboard-card__title {
    color: var(--zabs-admin-ink);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.35;
    margin: 0;
  }

  .zabs-dashboard-card__value {
    color: var(--zabs-admin-navy);
    font-size: 2.25rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    margin-top: 0.2rem;
  }

  .zabs-dashboard-card__description {
    color: var(--zabs-admin-muted);
    font-size: 0.92rem;
    line-height: 1.62;
    margin: 0;
  }

  .zabs-dashboard-card__footer {
    align-items: center;
    color: var(--zabs-admin-navy);
    display: flex;
    font-size: 0.88rem;
    font-weight: 600;
    gap: 0.45rem;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 0.15rem;
  }

  .zabs-dashboard-card__footer span {
    background: rgba(0, 124, 194, 0.08);
    border: 1px solid rgba(0, 124, 194, 0.1);
    border-radius: 999px;
    color: var(--zabs-admin-navy);
    display: inline-flex;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.38rem 0.7rem;
    text-transform: uppercase;
  }

  .zabs-dashboard-card__footer svg {
    color: var(--zabs-admin-blue);
  }

  .zabs-dashboard-card__helper {
    color: var(--zabs-admin-muted);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin: 0;
    text-transform: uppercase;
  }

  .zabs-status-chip--neutral {
    background: rgba(98, 117, 140, 0.12);
    color: #4f6278;
  }

  .zabs-status-chip--info {
    background: rgba(0, 124, 194, 0.1);
    color: #005b95;
  }

  .zabs-status-chip--success {
    background: rgba(34, 120, 78, 0.12);
    color: #22784e;
  }

  .zabs-status-chip--warning {
    background: rgba(154, 103, 14, 0.14);
    color: #9a670e;
  }

  .zabs-tone-blue {
    background: rgba(0, 124, 194, 0.12);
  }

  .zabs-tone-green {
    background: rgba(34, 120, 78, 0.12);
  }

  .zabs-tone-amber {
    background: rgba(154, 103, 14, 0.14);
  }

  .zabs-tone-slate {
    background: rgba(18, 48, 79, 0.09);
  }

  .zabs-dashboard__activity-card,
  .zabs-dashboard__stack {
    display: grid;
    gap: 1rem;
  }

  .zabs-dashboard__metric-row {
    align-items: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 251, 255, 0.98));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 18px;
    box-shadow: var(--zabs-admin-shadow-soft);
    color: inherit;
    display: grid;
    gap: 0.85rem;
    grid-template-columns: auto minmax(0, 1fr) auto;
    padding: 1rem;
    text-decoration: none;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .zabs-dashboard__metric-row:hover {
    border-color: rgba(0, 124, 194, 0.2);
    box-shadow: 0 18px 34px rgba(18, 48, 79, 0.1);
    transform: translateY(-2px);
  }

  .zabs-dashboard__metric-row-main {
    min-width: 0;
  }

  .zabs-dashboard__metric-row-top {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    justify-content: space-between;
  }

  .zabs-dashboard__metric-row-value {
    color: var(--zabs-admin-navy);
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .zabs-dashboard__activity-list {
    display: grid;
    gap: 0.8rem;
  }

  .zabs-dashboard__activity-row {
    align-items: center;
    background: rgba(255, 255, 255, 0.86);
    border: 1px solid rgba(18, 48, 79, 0.08);
    border-radius: 16px;
    color: inherit;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: auto minmax(0, 1fr) auto;
    padding: 0.9rem 0.95rem;
    text-decoration: none;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      border-color 160ms ease;
  }

  .zabs-dashboard__activity-row:hover {
    border-color: rgba(0, 124, 194, 0.16);
    box-shadow: 0 12px 24px rgba(18, 48, 79, 0.08);
    transform: translateY(-1px);
  }

  .zabs-dashboard__activity-icon {
    align-items: center;
    background: rgba(0, 124, 194, 0.1);
    border-radius: 13px;
    color: var(--zabs-admin-blue);
    display: flex;
    height: 2.45rem;
    justify-content: center;
    width: 2.45rem;
  }

  .zabs-dashboard__activity-main {
    min-width: 0;
  }

  .zabs-dashboard__activity-title {
    color: var(--zabs-admin-ink);
    font-weight: 700;
    line-height: 1.35;
    margin: 0;
  }

  .zabs-dashboard__activity-meta {
    align-items: center;
    color: var(--zabs-admin-muted);
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.25rem;
  }

  .zabs-dashboard__activity-date {
    color: #6a7c92;
    font-size: 0.82rem;
    text-align: right;
    white-space: nowrap;
  }

  .zabs-dashboard__empty-state {
    border: 1px dashed rgba(18, 48, 79, 0.18);
    border-radius: 16px;
    color: var(--zabs-admin-muted);
    line-height: 1.7;
    padding: 1rem;
  }

  .collection-list__wrap,
  .template-default__wrap {
    padding: 1rem;
  }

  .collection-list__wrap > *:not(:last-child),
  .template-default__wrap > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  .collection-list__header,
  .list-header {
    gap: 0.9rem;
  }

  .list-header__content {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 249, 253, 0.98));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 18px;
    box-shadow: var(--zabs-admin-shadow-soft);
    gap: 1rem;
    padding: 1rem 1.05rem;
  }

  .list-header__title {
    color: var(--zabs-admin-navy);
    font-size: 1.85rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.02;
  }

  .list-header__title-actions,
  .list-header__actions {
    align-items: center;
    gap: 0.55rem;
  }

  .list-header__after-header-content,
  .collection-list__sub-header {
    background: rgba(0, 124, 194, 0.04);
    border: 1px solid rgba(0, 124, 194, 0.08);
    border-radius: 14px;
    color: var(--zabs-admin-muted);
    margin-top: 0.85rem;
    padding: 0.85rem 0.95rem;
  }

  .search-bar {
    align-items: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 251, 255, 0.98));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 18px;
    box-shadow: var(--zabs-admin-shadow-soft);
    gap: 0.75rem;
    padding: 0.8rem 0.9rem;
  }

  .search-bar__actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-left: auto;
  }

  .search-filter {
    flex: 1;
  }

  .search-filter__input {
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(18, 48, 79, 0.14);
    border-radius: 14px;
    color: var(--zabs-admin-ink);
    min-height: 2.9rem;
    padding: 0.76rem 0.95rem;
  }

  .search-filter__input:focus {
    border-color: rgba(0, 124, 194, 0.55);
    box-shadow: 0 0 0 4px rgba(0, 124, 194, 0.12);
    outline: none;
  }

  .list-controls__columns,
  .list-controls__where,
  .list-controls__group-by {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 251, 255, 0.98));
    border: 1px solid var(--zabs-admin-line);
    border-radius: 18px;
    box-shadow: var(--zabs-admin-shadow-soft);
    margin-top: 0.85rem;
    padding: 1rem;
  }

  .field-select,
  .group-by-builder,
  .where-builder,
  .auth-fields,
  .auth-fields__api-key {
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid rgba(18, 48, 79, 0.08);
    border-radius: 16px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.76);
    padding: 0.95rem;
  }

  .group-by-builder__header,
  .auth-fields__controls {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    justify-content: space-between;
  }

  .auth-fields__changing-password,
  .auth-fields__api-key {
    margin-top: 0.9rem;
  }

  .table-wrap {
    padding: 0.35rem;
  }

  .table table {
    width: 100%;
  }

  .table thead th {
    background: rgba(234, 245, 255, 0.88);
    color: var(--zabs-admin-navy);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 0.9rem 1rem;
    text-transform: uppercase;
  }

  .table tbody td {
    background: transparent;
    padding: 0.95rem 1rem;
    vertical-align: top;
  }

  .table tbody tr:hover td {
    background: rgba(0, 124, 194, 0.04);
  }

  .table .cell-_select,
  .table #heading-_select,
  .table .cell-_dragHandle,
  .table #heading-_dragHandle {
    text-align: center;
  }

  .popup-button-list {
    gap: 0.25rem;
  }

  .popup-button-list__button {
    border-radius: 10px;
    padding: 0.45rem 0.6rem;
  }

  .popup-button-list__button:hover,
  .popup-button-list__button:focus-visible,
  .popup-button-list__button:focus-within {
    background: rgba(0, 124, 194, 0.08);
  }

  .collection-list__list-selection {
    backdrop-filter: blur(14px);
    background: rgba(255, 255, 255, 0.94);
    border-top: 1px solid var(--zabs-admin-line);
    box-shadow: 0 -10px 24px rgba(18, 48, 79, 0.06);
  }

  .collection-list__list-selection .btn {
    border-radius: 12px;
  }

  .app-header,
  .app-header__content {
    position: sticky;
    top: 0;
    z-index: 24;
  }

  .app-header__content {
    background: rgba(248, 251, 255, 0.78);
    border-bottom: 1px solid rgba(18, 48, 79, 0.08);
    box-shadow: 0 10px 30px rgba(18, 48, 79, 0.05);
    padding: 0.85rem 1rem;
  }

  .dashboard__wrap,
  .collection-list__wrap,
  .template-default__wrap {
    margin-inline: auto;
    max-width: 84rem;
  }

  .dashboard,
  .collection-edit,
  .collection-list,
  .edit-view {
    display: grid;
    gap: 1rem;
  }

  .collection-edit,
  .dashboard__wrap,
  .collection-list__wrap,
  .template-default__wrap {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 249, 253, 0.94)),
      radial-gradient(circle at top right, rgba(0, 124, 194, 0.06), transparent 32%);
  }

  .dashboard__wrap,
  .collection-list__wrap,
  .template-default__wrap,
  .list-controls,
  .doc-controls,
  .render-fields,
  .document-fields,
  .table-wrap {
    border-radius: 24px;
  }

  .app-header__content,
  .list-header__content,
  .doc-controls,
  .search-bar,
  .list-controls__columns,
  .list-controls__where,
  .list-controls__group-by,
  .render-fields,
  .document-fields,
  .table-wrap,
  .collapsible,
  .array-field__header,
  .zabs-admin-panel,
  .zabs-admin-login,
  .zabs-admin-brand {
    position: relative;
    overflow: hidden;
  }

  .list-header__content::before,
  .doc-controls::before,
  .search-bar::before,
  .list-controls__columns::before,
  .list-controls__where::before,
  .list-controls__group-by::before,
  .render-fields::before,
  .document-fields::before,
  .table-wrap::before {
    background: linear-gradient(90deg, rgba(0, 124, 194, 0.95), rgba(18, 48, 79, 0.9));
    content: "";
    height: 4px;
    inset: 0 0 auto;
    position: absolute;
  }

  .list-header__content {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 249, 253, 0.98)),
      radial-gradient(circle at top right, rgba(0, 124, 194, 0.08), transparent 35%);
    padding: 1.15rem 1.15rem 1.1rem;
  }

  .list-header__content > * {
    position: relative;
    z-index: 1;
  }

  .list-header__title {
    font-size: clamp(1.85rem, 2.8vw, 2.35rem);
    line-height: 0.98;
  }

  .list-header__after-header-content,
  .collection-list__sub-header {
    background: linear-gradient(180deg, rgba(239, 247, 255, 0.8), rgba(233, 243, 251, 0.92));
    border-color: rgba(0, 124, 194, 0.12);
  }

  .doc-controls {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 249, 253, 0.98)),
      radial-gradient(circle at top right, rgba(0, 124, 194, 0.06), transparent 28%);
    box-shadow:
      0 20px 40px rgba(18, 48, 79, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }

  .doc-controls__wrapper {
    min-height: 4.35rem;
    padding-left: 1.15rem;
    padding-right: 1.15rem;
  }

  .doc-controls__label {
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .doc-controls__value {
    font-size: 1rem;
    font-weight: 800;
  }

  .render-fields,
  .document-fields {
    display: grid;
    gap: 1rem;
    padding: 1.2rem;
  }

  .render-fields > *,
  .document-fields > * {
    min-width: 0;
  }

  .tabs-field__tabs {
    backdrop-filter: blur(10px);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
    padding: 0.4rem;
  }

  .tabs-field .tab,
  .doc-tabs__tab,
  .tabs .tabs__tab-button {
    color: var(--zabs-admin-muted);
    font-weight: 700;
    padding-left: 0.95rem;
    padding-right: 0.95rem;
  }

  .tabs-field .tab--active,
  .doc-tabs__tab--active,
  .tabs .tabs__tab-button--active {
    box-shadow:
      inset 0 0 0 1px rgba(0, 124, 194, 0.14),
      0 8px 18px rgba(18, 48, 79, 0.08);
  }

  .tabs-field__content-wrap {
    padding: 1.1rem;
  }

  .field-type {
    position: relative;
    transition:
      border-color 160ms ease,
      box-shadow 160ms ease,
      transform 160ms ease;
  }

  .field-type::before {
    background: linear-gradient(180deg, rgba(0, 124, 194, 0.85), rgba(18, 48, 79, 0.88));
    border-radius: 999px;
    content: "";
    inset: 0 auto 0 0;
    opacity: 0.72;
    position: absolute;
    width: 4px;
  }

  .field-type:hover {
    border-color: rgba(0, 124, 194, 0.14);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.82),
      0 12px 24px rgba(18, 48, 79, 0.05);
    transform: translateY(-1px);
  }

  .field-label,
  .field-label label {
    margin-bottom: 0.45rem;
  }

  .field-description,
  .field-description p,
  .field-admin-description,
  .rich-text-lexical__wrap .description {
    font-size: 0.9rem;
  }

  input,
  textarea,
  select,
  .rs__control,
  .field-type input,
  .field-type textarea,
  .field-type select {
    font-weight: 500;
  }

  .relationship-field,
  .upload-field,
  .rich-text-lexical__wrap,
  .array-field,
  .blocks-field,
  .field-select,
  .group-by-builder,
  .where-builder,
  .auth-fields,
  .auth-fields__api-key {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(247, 251, 255, 0.9)),
      radial-gradient(circle at top right, rgba(0, 124, 194, 0.04), transparent 42%);
  }

  .array-field,
  .blocks-field {
    padding: 1rem;
  }

  .array-field__header,
  .collapsible__toggle-wrap {
    backdrop-filter: blur(8px);
  }

  .table-wrap {
    padding: 0.45rem;
  }

  .table-wrap table,
  .list-table table {
    background: rgba(255, 255, 255, 0.82);
    border-radius: 18px;
    overflow: hidden;
  }

  .table thead th {
    backdrop-filter: blur(8px);
    font-size: 0.74rem;
    letter-spacing: 0.12em;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .table tbody tr {
    transition:
      background-color 160ms ease,
      transform 160ms ease,
      box-shadow 160ms ease;
  }

  .table tbody tr:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 124, 194, 0.08);
    transform: translateY(-1px);
  }

  .table tbody td {
    font-weight: 500;
  }

  .search-bar,
  .list-controls__columns,
  .list-controls__where,
  .list-controls__group-by {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 249, 253, 0.98)),
      radial-gradient(circle at top right, rgba(0, 124, 194, 0.06), transparent 30%);
  }

  .search-bar {
    padding: 0.95rem 1rem;
  }

  .search-filter__input {
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.65),
      0 6px 18px rgba(18, 48, 79, 0.04);
  }

  .btn--style-primary,
  .btn.btn--style-primary,
  button[type="submit"] {
    box-shadow:
      0 16px 30px rgba(18, 48, 79, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.16);
  }

  .btn--style-secondary,
  .btn--style-subtle,
  .btn--style-pill {
    background: rgba(255, 255, 255, 0.9);
  }

  .popup-button-list__button {
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(18, 48, 79, 0.08);
    box-shadow: 0 6px 16px rgba(18, 48, 79, 0.05);
  }

  @media (max-width: 1100px) {
    .payload-admin-shell,
    .template-default {
      display: block;
    }

    .nav,
    .app-nav,
    nav[aria-label="Main navigation"] {
      height: auto;
      position: relative;
      top: auto;
    }

    .zabs-admin-panel__hero {
      grid-template-columns: 1fr;
    }

    .app-header__account {
      min-height: 2.8rem;
      min-width: 2.8rem;
      padding-left: 0.55rem;
    }

    .app-header__account::before {
      font-size: 0.78rem;
    }

    .zabs-dashboard__hero-layout,
    .zabs-dashboard__split-grid {
      grid-template-columns: 1fr;
    }

    .zabs-dashboard__hero-toolbar,
    .zabs-dashboard__module-rail,
    .zabs-dashboard__metrics-grid,
    .zabs-dashboard__quick-actions-grid,
    .zabs-dashboard__mini-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .nav,
    .app-nav,
    nav[aria-label="Main navigation"] {
      padding-left: 0.7rem;
      padding-right: 0.7rem;
    }

    .app-header__actions-wrapper {
      margin-right: 0.4rem;
    }

    .app-header__account {
      padding: 0.35rem;
    }

    .app-header__account::before {
      content: "";
      display: none;
    }

    .doc-controls {
      top: 0;
    }

    .render-fields,
    .document-fields,
    .tabs-field__content-wrap,
    .collapsible__content {
      padding: 0.9rem;
    }

    .field-type {
      padding: 0.85rem 0.9rem;
    }

    .array-field__header-wrap {
      align-items: flex-start;
      flex-direction: column;
    }

    .array-field__header-actions {
      flex-wrap: wrap;
    }

    .array-field .array-field__row > .collapsible__toggle-wrap {
      padding: 0.8rem 0.9rem;
    }

    .zabs-admin-login__layout {
      grid-template-columns: 1fr;
    }

    .zabs-admin-panel__topbar {
      align-items: flex-start;
      flex-direction: column;
    }

    .zabs-admin-panel__hero {
      grid-template-columns: 1fr;
    }

    .zabs-dashboard__hero-title,
    .zabs-dashboard__section-title {
      font-size: 1.55rem;
    }

    .collection-list__wrap,
    .template-default__wrap {
      padding: 0.8rem;
    }

    .list-header__content,
    .search-bar,
    .list-controls__columns,
    .list-controls__where,
    .list-controls__group-by {
      padding: 0.85rem;
    }

    .zabs-dashboard__hero-toolbar,
    .zabs-dashboard__module-rail,
    .zabs-dashboard__metrics-grid,
    .zabs-dashboard__quick-actions-grid,
    .zabs-dashboard__mini-grid {
      grid-template-columns: 1fr;
    }

    .zabs-dashboard__metric-row,
    .zabs-dashboard__activity-row {
      grid-template-columns: 1fr;
    }

    .zabs-dashboard__metric-row-value,
    .zabs-dashboard__activity-date {
      text-align: left;
    }
  }
`;

type ZabsAdminThemeProps = {
  children: React.ReactNode;
};

export function ZabsAdminTheme({ children }: ZabsAdminThemeProps) {
  return (
    <div className="payload-admin-theme">
      <style>{adminThemeCss}</style>
      {children}
    </div>
  );
}
