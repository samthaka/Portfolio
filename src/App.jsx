import './App.css'

const projects = [
  {
    number: '01',
    name: 'CRPAS',
    type: 'Climate-aware agriculture',
    description:
      'A climate-aware farming platform combining GPS-based farm mapping and live weather data with AI-generated crop advice, delivered by dashboard, SMS, and email.',
    tags: ['Python', 'Django', 'PostgreSQL', 'GIS'],
    visual: 'agriculture',
    artwork: {
      label: 'CLIMATE / FIELD INSIGHTS',
      index: '01-03',
      overline: 'CLIMATE-READY FARMING',
      title: 'Turn local data into farm advice.',
      steps: ['Map farm', 'Assess conditions', 'Get crop advice'],
    },
  },
  {
    number: '02',
    name: 'SMS Gateway',
    type: 'Desktop · Android messaging',
    description:
      'A desktop app that connects to an Android phone to send SMS locally, with a built-in message queue, secure device pairing, and delivery tracking.',
    tags: ['TypeScript', 'Electron', 'React Native', 'Kotlin'],
    visual: 'sms',
    artwork: {
      label: 'LOCAL / MOBILE MESSAGING',
      index: '02-03',
      overline: 'ANDROID SMS GATEWAY',
      title: 'Send messages from your desktop.',
      steps: ['Pair device', 'Queue messages', 'Track delivery'],
    },
  },
  {
    number: '03',
    name: 'E-commerce System',
    type: 'Online store · Payments & shipping',
    description:
      'A Django storefront with customer accounts, Google sign-in, Stripe payments, and Shippo shipping rates, labels, and tracking.',
    tags: ['Python', 'Django', 'Stripe', 'Shippo'],
    visual: 'commerce',
    artwork: {
      label: 'SHOP / PAYMENTS / DELIVERY',
      index: '03-03',
      overline: 'E-COMMERCE',
      title: 'From product to delivery.',
      steps: ['Browse products', 'Pay securely', 'Track shipment'],
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
        <span className="preview-number">{project.number} / 03</span>
        <p className="preview-description">{project.description}</p>
        <ProjectArtwork project={project} />
      </div>
      <div className="project-info">
        <div className="project-heading">
          <div>
            <span className="project-type">{project.type}</span>
            <h3>{project.name}</h3>
          </div>
        </div>
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
          <a
            href="https://drive.google.com/file/d/1BVKFB8vKuCqqI4WU3_UpJxi32_P5mXwi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          <ArrowIcon diagonal /></a>
          <a href="#work">Work <span>03</span></a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:samuelthaka9@gmail.com">Get in touch <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <section className="hero page-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow">FULL-STACK DEVELOPMENT <span className="eyebrow-divider">/</span> IT SUPPORT</div>
          <h2>Building useful<br />digital <span className="hero-highlight">tools<span className="hero-period">.</span></span></h2>
          <div className="hero-bottom">
            <p>I&apos;m Samuel Thaka, a versatile fullstack software developer and DevOps engineer focused on practical software solutions and reliable technology.</p>
            <a href="#work" className="text-link">Explore my work <ArrowIcon /></a>
          </div>
        </div>
        <img className="hero-portrait" src={`${import.meta.env.BASE_URL}image-3.jpg`} alt="Samuel Thaka" />
        <div className="hero-side-note" aria-hidden="true">
          <span>SOFTWARE</span><i /><span>DATA</span><i /><span>DEVOPS</span>
        </div>
        <div className="hero-index" aria-hidden="true">SAMUEL THAKA - PORTFOLIO</div>
      </section>

      <section className="work-section page-wrap" id="work">
        <div className="section-heading">
          <div>
            <span className="section-kicker">PROJECTS & APPLICATIONS <span>↘</span></span>
            <h3>My work<span className="heading-period">.</span></h3>
          </div>
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
                <span className="project-type">MAY 2025 - AUGUST 2025</span>
                <h3>Software Developer &amp; IT Support</h3>
              </div>
              <span className="career-location">THIKA, KENYA</span>
            </div>
            <p className="career-organization">Trail My Car (TMC)</p>
            <ul className="experience-list">
              <li>Built a local Flask dashboard with Python and Playwright to automate vehicle, tracker, and payment record checks across two web portals.</li>
              <li>Added SQLite record storage, Excel imports, and resume/retry support to streamline daily lookups.</li>
              <li>Deployed and maintained Windows software, and troubleshot staff workstations, applications, printers, and network issues.</li>
            </ul>
          </article>
          <article className="career-card education-card">
            <span className="project-type">EDUCATION</span>
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="career-organization">Graduating December 2026</p>
          </article>
        </div>
      </section>

      <section className="skills-section page-wrap" id="skills" aria-labelledby="skills-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TECHNICAL TOOLKIT</span>
            <h2 id="skills-title">Skills<span className="heading-period">.</span></h2>
          </div>
          <p>Tools and technologies<br />from my recent work.</p>
        </div>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Frontend</h3>
            <p>React, Bootstrap, JavaScript, TypeScript, HTML, CSS</p>
          </div>
          <div className="skill-group">
            <h3>Backend & mobile</h3>
            <p>Python, Django, Flask, Node.js, React Native, Electron, Kotlin</p>
          </div>
          <div className="skill-group">
            <h3>Databases & tools</h3>
            <p>PostgreSQL, MySQL, Git, GitHub, Docker, Postman, API integration</p>
          </div>
        </div>
      </section>

      <section className="about-section page-wrap" id="about">
        <div className="about-label"><span className="section-kicker">ABOUT SAMUEL</span><span className="about-scribble">✳</span></div>
        <div className="about-copy">
          <h2>Full-stack software developer and DevOps engineer with a customer-focused approach to solving technical problems.</h2>
          <div className="about-bottom">
            <p>Experienced in building responsive frontends, backend services, REST APIs, and database-backed applications while supporting reliable office operations.</p>
            <a href="mailto:samuelthaka9@gmail.com" className="contact-button">Get in touch <span>Email Samuel <ArrowIcon diagonal /></span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer page-wrap">
        <span>© 2026 Samuel Thaka</span>
      </footer>
    </main>
  )
}

export default App
