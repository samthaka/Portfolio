import './App.css'

const projects = [
  {
    number: '01',
    name: 'Decentralized Refugee Identity Management System',
    type: 'Django · Identity management',
    description:
      'A Django-based identity verification workflow integrated with IPFS for decentralized record storage and retrieval, verification history, secure record management, and operational tracking.',
    tags: ['Python', 'Django', 'IPFS'],
    visual: 'identity',
    artwork: {
      label: 'IDENTITY / VERIFICATION',
      index: '01—03',
      overline: 'DECENTRALIZED RECORDS',
      title: 'Verify with confidence.',
      steps: ['Submit record', 'Verify identity', 'Review history'],
    },
  },
  {
    number: '02',
    name: 'CRPAS — Climate Resilient Precision Agriculture System',
    type: 'AI · Climate-resilient agriculture',
    description:
      'An AI-powered precision agriculture system using TensorFlow and Python deep-learning models to interpret climate and agricultural data for predictive farming recommendations.',
    tags: ['Python', 'TensorFlow', 'Deep learning'],
    visual: 'agriculture',
    artwork: {
      label: 'CLIMATE / FIELD INSIGHTS',
      index: '02—03',
      overline: 'PRECISION AGRICULTURE',
      title: 'Plan for changing conditions.',
      steps: ['Climate data', 'Model analysis', 'Farm insights'],
    },
  },
  {
    number: '03',
    name: 'Productivity Monitoring and Task Optimization System',
    type: 'Computer vision · Machine learning',
    description:
      'A desktop app combining real-time computer vision (OpenCV, MediaPipe, DeepFace, and InsightFace) with focus and fatigue insights, NLP task processing, machine-learning prioritization, and reinforcement-learning-based scheduling.',
    tags: ['OpenCV', 'MediaPipe', 'DeepFace', 'InsightFace', 'NLP'],
    visual: 'productivity',
    artwork: {
      label: 'FOCUS / TASKS / SCHEDULE',
      index: '03—03',
      overline: 'PRODUCTIVITY TOOLS',
      title: 'Make room for focused work.',
      steps: ['Focus signals', 'Task priorities', 'Smart schedule'],
    },
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function ProjectArtwork({ project }) {
  return (
    <div className={`project-artwork project-artwork--${project.visual}`} aria-hidden="true">
      <div className="artwork-window">
        <div className="artwork-header">
          <span>{project.artwork.label}</span>
          <span>{project.artwork.index}</span>
        </div>
        <div className="artwork-content">
          <span className="artwork-overline">{project.artwork.overline}</span>
          <strong>{project.artwork.title}</strong>
          <div className="artwork-flow">
            {project.artwork.steps.map((step, index) => (
              <span className="artwork-step" key={step}>
                <i>{String(index + 1).padStart(2, '0')}</i>
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.visual}`}>
      <div className={`project-preview preview--${project.visual}`}>
        <ProjectArtwork project={project} />
        <span className="preview-number">{project.number} / 03</span>
      </div>
      <div className="project-info">
        <div className="project-heading">
          <div>
            <span className="project-type">{project.type}</span>
            <h3>{project.name}</h3>
          </div>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  )
}

function App() {
  return (
    <main>
      <header className="site-header page-wrap">
        <a className="wordmark" href="#home" aria-label="Samuel Thaka home">
          <span className="wordmark-mark">s<span>.</span></span>
          <span className="wordmark-name">Samuel Thaka</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work <span>03</span></a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:samuelthaka9@gmail.com">Contact <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <section className="hero page-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow">FULL-STACK DEVELOPMENT <span className="eyebrow-divider">/</span> IT SUPPORT</div>
          <h1>Building useful<br />digital <span className="hero-highlight">tools<span className="hero-period">.</span></span></h1>
          <div className="hero-bottom">
            <p>I&apos;m Samuel Kirangi Thaka, a full-stack developer and IT support professional focused on practical software and reliable technology.</p>
            <a href="#work" className="text-link">Explore selected projects <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-side-note" aria-hidden="true">
          <span>SOFTWARE</span><i /><span>DATA</span><i /><span>TECHNICAL SUPPORT</span>
        </div>
        <div className="hero-index" aria-hidden="true">SAMUEL KIRANGI THAKA — PORTFOLIO</div>
      </section>

      <section className="work-section page-wrap" id="work">
        <div className="section-heading">
          <div>
            <span className="section-kicker">PROJECTS & APPLICATIONS <span>↘</span></span>
            <h2>Selected work<span className="heading-period">.</span></h2>
          </div>
          <p>Software projects spanning identity management,<br />precision agriculture, and productivity.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </section>

      <section className="career-section page-wrap" id="experience">
        <div className="section-heading">
          <div>
            <span className="section-kicker">WORK & EDUCATION</span>
            <h2>Experience<span className="heading-period">.</span></h2>
          </div>
          <p>Hands-on software development and<br />first-line technical support.</p>
        </div>
        <div className="career-grid">
          <article className="career-card">
            <div className="career-card-heading">
              <div>
                <span className="project-type">MAY 2025 — AUGUST 2025</span>
                <h3>ICT Department Intern / IT Support Technician</h3>
              </div>
              <span className="career-location">THIKA, KENYA</span>
            </div>
            <p className="career-organization">Trail My Car (TMC) — Thika Branch</p>
            <ul className="experience-list">
              <li>Built Python and Playwright automation to collect and normalize vehicle and client data for internal verification workflows.</li>
              <li>Developed Flask services with SQLite and used Pandas and NumPy to validate records and identify mismatches.</li>
              <li>Packaged, configured, deployed, and maintained Windows software for renewal checks, reconciliation, and operational reporting.</li>
              <li>Provided first-line workstation, operating system, application, peripheral, and network troubleshooting for staff.</li>
              <li>Maintained office systems through software and driver updates, hardware checks, printer and peripheral setup, user guidance, and clear support logs.</li>
            </ul>
          </article>
          <article className="career-card education-card">
            <span className="project-type">EXPECTED GRADUATION 2026</span>
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="career-organization">Kisii University</p>
            <p className="education-note">Fourth-year student</p>
          </article>
        </div>
      </section>

      <section className="skills-section page-wrap" id="skills" aria-labelledby="skills-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TECHNICAL TOOLKIT</span>
            <h2 id="skills-title">Skills<span className="heading-period">.</span></h2>
          </div>
          <p>Development, data, systems,<br />and people-focused support.</p>
        </div>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Frontend</h3>
            <p>React, Angular, TypeScript, Next.js, JavaScript, HTML5, CSS3</p>
          </div>
          <div className="skill-group">
            <h3>Backend & mobile</h3>
            <p>Python, Django, FastAPI, Flask, Django REST APIs, React Native, Java</p>
          </div>
          <div className="skill-group">
            <h3>Data & machine learning</h3>
            <p>TensorFlow, PyTorch, Pandas, NumPy, Scikit-learn, OpenCV</p>
          </div>
          <div className="skill-group">
            <h3>Databases & tools</h3>
            <p>PostgreSQL, MySQL, MongoDB, SQLite, Git, GitHub, Docker, Postman, Figma</p>
          </div>
          <div className="skill-group">
            <h3>Systems & networking</h3>
            <p>Windows 10/11 deployment and maintenance, basic Linux, TCP/IP, Wi-Fi profile setup, LAN/WAN troubleshooting, router and switch checks</p>
          </div>
          <div className="skill-group">
            <h3>IT support</h3>
            <p>Workstation setup, computer assembly, component diagnostics, printer/peripheral setup, replacement coordination, Teams and AnyDesk/RDP support, ticketing, Office 365, and Google Workspace</p>
          </div>
          <div className="skill-group">
            <h3>Ways of working</h3>
            <p>Problem-solving, user communication, time management, Figma collaboration, accessible and SEO-aware web development, and AI-assisted workflows</p>
          </div>
        </div>
      </section>

      <section className="about-section page-wrap" id="about">
        <div className="about-label"><span className="section-kicker">ABOUT SAMUEL</span><span className="about-scribble">✳</span></div>
        <div className="about-copy">
          <h2>Full-stack software developer and entry-level IT support professional with a customer-focused approach to solving technical problems.</h2>
          <div className="about-bottom">
            <p>Experienced in building responsive frontends, backend services, REST APIs, and database-backed applications while supporting reliable office operations.</p>
            <a href="mailto:samuelthaka9@gmail.com" className="contact-button">Get in touch <span>Email Samuel <ArrowIcon diagonal /></span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer page-wrap">
        <span>© 2026 Samuel Kirangi Thaka</span>
        <a href="tel:+254790341425">+254 790 341 425</a>
        <a href="mailto:samuelthaka9@gmail.com">EMAIL <ArrowIcon diagonal /></a>
      </footer>
    </main>
  )
}

export default App
