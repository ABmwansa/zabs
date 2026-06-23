import { ArrowRight, House, MonitorUp } from "lucide-react";

const sidebarBadges = ["Website", "Operations", "Publishing"];

const sidebarSections = [
  {
    title: "Website Content",
    description: "Pages, homepage content, news, events, and public media updates.",
  },
  {
    title: "Company Modules",
    description: "Projects, services, team profiles, and core organizational records.",
  },
  {
    title: "Communications",
    description: "Media assets, enquiries, and editorial materials ready for publishing.",
  },
];

export function ZabsAdminNavPanel() {
  return (
    <section className="zabs-admin-panel">
      <div className="zabs-admin-panel__topbar">
        <p className="zabs-admin-panel__eyebrow">Navigation Hub</p>
        <span className="zabs-admin-panel__status">Live workspace</span>
      </div>

      <div className="zabs-admin-panel__hero">
        <div className="zabs-admin-panel__seal">ZS</div>
        <div className="zabs-admin-panel__hero-copy">
          <h3 className="zabs-admin-panel__title">ZABS Content Studio</h3>
          <p className="zabs-admin-panel__body">
            Move through website content, operations, and publishing tools from
            one structured admin workspace.
          </p>
        </div>
      </div>

      <div className="zabs-admin-panel__badges">
        {sidebarBadges.map((item) => (
          <span key={item} className="zabs-admin-panel__badge">
            {item}
          </span>
        ))}
      </div>

      <div className="zabs-admin-panel__list">
        {sidebarSections.map((item) => (
          <div key={item.title} className="zabs-admin-panel__item">
            <div className="zabs-admin-panel__item-icon">
              <span className="zabs-admin-panel__dot" />
            </div>
            <div className="zabs-admin-panel__item-copy">
              <span className="zabs-admin-panel__item-title">{item.title}</span>
              <span className="zabs-admin-panel__item-text">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="zabs-admin-panel__footer">
        <p className="zabs-admin-panel__footer-copy">
          Use the grouped collections below to manage each part of the public
          website with clearer editorial flow.
        </p>
        <div className="zabs-admin-panel__actions">
          <a href="/admin" className="zabs-panel-button zabs-panel-button--primary">
            <House size={16} strokeWidth={2.1} />
            <span>Home</span>
          </a>
          <a href="/" className="zabs-panel-button zabs-panel-button--secondary">
            <MonitorUp size={16} strokeWidth={2.1} />
            <span>View Website</span>
            <ArrowRight size={15} strokeWidth={2.1} />
          </a>
        </div>
      </div>
    </section>
  );
}
