export function ZabsAdminLogo() {
  return (
    <div className="zabs-admin-brand">
      <img
        alt="ZABS"
        src="/images/zabs-logo.svg"
        style={{
          display: "block",
          height: "2.5rem",
          width: "auto",
        }}
      />
      <div className="zabs-admin-brand__copy">
        <p className="zabs-admin-brand__eyebrow">Content Studio</p>
        <p className="zabs-admin-brand__title">ZABS Admin</p>
        <p className="zabs-admin-brand__subtitle">Zambia Bureau of Standards</p>
      </div>
    </div>
  );
}
