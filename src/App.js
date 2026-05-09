import './App.css';

const stats = [
  { value: '99.95%', label: 'service uptime target' },
  { value: '12+', label: 'tools in active stack' },
  { value: '24/7', label: 'monitoring mindset' },
];

const skills = [
  {
    title: 'Cloud Infrastructure',
    description: 'Provisioning scalable environments with Kubernetes, containers, and deployment-first architecture.',
  },
  {
    title: 'CI/CD Automation',
    description: 'Building reliable pipelines that move from commit to production with confidence and observability.',
  },
  {
    title: 'Security & Reliability',
    description: 'Hardening delivery workflows with secrets handling, policy thinking, and incident-ready systems.',
  },
];

const projects = [
  {
    tag: 'Kubernetes',
    title: 'Cluster Operations Dashboard',
    text: 'A command-center inspired experience to present workloads, health signals, and rollout activity clearly.',
  },
  {
    tag: 'DevOps',
    title: 'Pipeline Acceleration',
    text: 'Focused on faster deployments, cleaner release gates, and developer workflows that feel smooth under pressure.',
  },
  {
    tag: 'Monitoring',
    title: 'Observability Setup',
    text: 'Metrics, logs, and alert thinking arranged into one operational story instead of scattered tooling.',
  },
];

const timeline = [
  'Design resilient delivery systems for modern apps.',
  'Automate repeatable infrastructure and release tasks.',
  'Transform technical complexity into clear, production-ready workflows.',
];

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <main className="portfolio-page">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">DevOps Portfolio</span>
            <h1>
              Shubham Dadwal
              <span>building reliable systems with bold execution.</span>
            </h1>
            <p className="hero-text">
              I create cloud-native delivery experiences that are fast, resilient,
              and visually clear. This page reframes the starter app into a modern
              DevOps showcase with stronger design, richer structure, and built-in
              visual storytelling.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>
              <a className="secondary-btn" href="#stack">
                Explore Stack
              </a>
            </div>

            <div className="stats-grid" aria-label="highlights">
              {stats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-card visual-card-main">
              <div className="visual-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="visual-grid">
                <div className="cluster-node cluster-core">K8s Core</div>
                <div className="cluster-node">Ingress</div>
                <div className="cluster-node">CI Runner</div>
                <div className="cluster-node">Metrics</div>
                <div className="cluster-node">Autoscale</div>
              </div>
              <div className="signal-bars">
                <span className="bar bar-a" />
                <span className="bar bar-b" />
                <span className="bar bar-c" />
                <span className="bar bar-d" />
              </div>
            </div>

            <div className="visual-card visual-card-float">
              <p>Deployment flow</p>
              <div className="flow-line">
                <span>Code</span>
                <span>Build</span>
                <span>Ship</span>
              </div>
            </div>
          </div>
        </section>

        <section className="insight-banner">
          <div>
            <span className="eyebrow">Mission</span>
            <h2>From source code to stable production, every layer should feel intentional.</h2>
          </div>
          <div className="mini-diagram" aria-hidden="true">
            <div className="diagram-ring">
              <div className="diagram-center">Ops</div>
            </div>
          </div>
        </section>

        <section className="content-grid" id="stack">
          <div className="section-heading">
            <span className="eyebrow">Core Strengths</span>
            <h2>Practical engineering with a clean systems view.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <div className="skill-icon" />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline-section">
          <div className="section-heading">
            <span className="eyebrow">Approach</span>
            <h2>A workflow shaped around clarity, speed, and uptime.</h2>
          </div>

          <div className="timeline-list">
            {timeline.map((item, index) => (
              <article className="timeline-item" key={item}>
                <span className="timeline-index">0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <span className="eyebrow">Featured Work</span>
            <h2>Project blocks with more personality and visual weight.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-art" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-panel">
          <div>
            <span className="eyebrow">Role</span>
            <h2>DevOps Engineer</h2>
            <p>
              Focused on Kubernetes, automation, release confidence, and
              production-friendly design that leaves a stronger first impression.
            </p>
          </div>
          <a className="primary-btn" href="mailto:shubham@example.com">
            Contact Me
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
