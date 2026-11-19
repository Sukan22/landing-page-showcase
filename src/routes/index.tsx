import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Banknote,
  CircleHelp,
  GitBranch,
  Layers3,
  Network,
  Search,
  ShieldAlert,
  UserRound,
} from "lucide-react";

import circleDiagram from "@/assets/circel.png.asset.json";

const navItems = [
  { label: "Find & Explore", icon: Search, tone: "teal", active: true },
  { label: "Connect the Dots", icon: Network, tone: "violet" },
  { label: "Risk at a glance", icon: ShieldAlert, tone: "coral" },
  { label: "Business Impact", icon: GitBranch, tone: "amber" },
  { label: "Trust your data", icon: Activity, tone: "mint" },
  { label: "Manage & Govern", icon: Layers3, tone: "pink" },
  { label: "Modernization strategy", icon: Layers3, tone: "pink" },
];

const services = [
  { name: "General Ledger Posting Service", risk: true },
  { name: "Interest Posting Service", risk: true },
  { name: "Daily Reconciliation Service", risk: true },
  { name: "Tax Computation Service" },
  { name: "Trade Order Management" },
  { name: "Trade Settlement Service", risk: true },
];

const suggestions = ["GLPOST01", "tax", "settlement", "WS-BUS-DATE", "reconciliation"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian CI | Connected Intelligence" },
      {
        name: "description",
        content: "Explore connected banking systems, business risk, and legacy knowledge with Meridian CI.",
      },
      { property: "og:title", content: "Meridian CI | Connected Intelligence" },
      {
        property: "og:description",
        content: "Explore connected banking systems, business risk, and legacy knowledge with Meridian CI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="meridian-app">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Meridian CI home">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span className="brand-name">Meridian <b>CI</b></span>
        </a>

        <label className="global-search">
          <Search aria-hidden="true" size={19} />
          <input aria-label="Search the knowledge graph" placeholder="Search the knowledge graph…" />
        </label>

        <div className="topbar-actions">
          <div className="persona-pill"><UserRound size={17} aria-hidden="true" /> <span>Persona: Business</span></div>
          <a className="help-button" href="#help" aria-label="Help"><CircleHelp size={19} /></a>
        </div>
      </header>

      <div className="app-body">
        <aside className="left-rail" aria-label="Main navigation">
          <nav className="primary-nav">
            {navItems.map(({ label, icon: Icon, tone, active }) => (
              <a
                href="#workspace"
                className={`nav-item${active ? " is-active" : ""}`}
                aria-current={active ? "page" : undefined}
                key={label}
              >
                <span className={`nav-icon tone-${tone}`}><Icon size={20} aria-hidden="true" /></span>
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <section className="risk-list" aria-labelledby="risk-heading">
            <h2 id="risk-heading"><span className="risk-heading-icon"><Activity size={15} /></span> Risk at a glance</h2>
            <ul>
              {services.map(({ name, risk }) => (
                <li key={name}><span className={`status-dot${risk ? " is-risk" : ""}`} />{name}</li>
              ))}
            </ul>
          </section>
        </aside>

        <main className="workspace" id="workspace">
          <div className="workspace-layout">
            <section className="explore-column" aria-label="Find and explore">
              <div className="platform-banner">
                <span className="banner-icon"><Banknote size={27} aria-hidden="true" /></span>
                <div className="banner-copy">
                  <div className="eyebrow"><span /> Connected Intelligence</div>
                  <h1>Meridian Connected Intelligence Platform</h1>
                  <p>Trade and Settlement Banking System <span className="banner-divider">—</span> Legacy COBOL Knowledge Graph</p>
                </div>
                <div className="system-status"><span />Systems online</div>
                <div className="banner-network" aria-hidden="true"><i /><i /><i /><i /><i /><b /></div>
              </div>

              <div className="query-form">
                <label className="query-input-wrap">
                  <Search className="query-icon" size={21} aria-hidden="true" />
                  <input aria-label="Search programs, data, and business processes" placeholder="e.g. Which programs post settlement entries to the ledger?" />
                </label>
                <button className="search-button" type="button"><Search size={20} aria-hidden="true" />Search</button>
                <button className="more-button" type="button">Show More Results</button>
              </div>

              <div className="suggestion-row"><span>Try:</span>{suggestions.map((suggestion) => (
                <span key={suggestion} className="suggestion-chip">{suggestion}</span>
              ))}</div>
            </section>

            <aside className="visual-panel" aria-label="Connected intelligence and evidence">
              <img className="circle-diagram" src={circleDiagram.url} alt="Connected intelligence relationship diagram" />
              <div className="evidence-empty" aria-label="Evidence: no data yet">
                <span className="evidence-empty-mark" aria-hidden="true"><Search size={18} /></span>
                <span>No data yet</span>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
