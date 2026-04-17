function App() {
  return (
    <div className="wrapper">

      {/* NAV */}
      <nav>
        <div className="nav-name">Tanvi Agarwal</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero" id="about">
        <div className="hero-left">
          <div>
            <div className="hero-tag">MS Computer Science · UMass Amherst</div>
            <div className="hero-name">
              Software &amp; <br />
              <em>Systems</em> Engineer
            </div>
            <p className="hero-desc">
              I build distributed systems and ML infrastructure that scale. From
              authorization pipelines at Microsoft to payment systems at Tesla —
              I work at the intersection of backend engineering, data streaming,
              and deep learning.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Get in touch</a>
              <a href="/Tanvi_Agarwal_Resume.pdf" className="btn-outline" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="hero-cutout">
          <img src="/images/tanvi.png" alt="Tanvi Agarwal" className="hero-cutout-img" />
        </div>
      </div>

      {/* SKILLS */}
      <section id="skills">
        <div className="sec-header">
          <span className="sec-num">01</span>
          <span className="sec-title">Skills &amp; tech stack</span>
          <div className="sec-line" />
        </div>
        <div className="skills-grid">
          <div className="skill-group">
            <div className="skill-group-name">Languages &amp; Databases</div>
            <div className="skill-tags">
              {['Go', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-name">Frameworks &amp; Libraries</div>
            <div className="skill-tags">
              {['Spring Boot', '.NET', 'Django', 'ReactJS', 'Node', 'PyTorch', 'TensorFlow', 'Pandas'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-name">Infrastructure &amp; Tooling</div>
            <div className="skill-tags">
              {['Kafka', 'Redis', 'Spark', 'Elasticsearch', 'Kubernetes', 'Docker', 'Azure', 'AWS', 'Git', 'CI/CD'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="sec-header">
          <span className="sec-num">02</span>
          <span className="sec-title">Education</span>
          <div className="sec-line" />
        </div>
        <div className="sec-with-illo">
          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-degree">MS in Computer Science</div>
              <div className="edu-school">UMass Amherst · GPA 4.0</div>
              <div className="edu-detail">Jan 2025 – Dec 2026</div>
              <div className="edu-courses">
                {['Systems for Deep Learning', 'Machine Learning', 'Systems for Data Science', 'Database Design & Implementation', 'Neural Networks'].map(c => (
                  <span key={c} className="course-tag">{c}</span>
                ))}
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-degree">BTech in Electronics &amp; Communication</div>
              <div className="edu-school">IIIT Sri City · CGPA 8.87/10</div>
              <div className="edu-detail">Jul 2017 – Jun 2021 · Chittoor, India</div>
              <div className="edu-courses">
                {['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'Pattern Recognition'].map(c => (
                  <span key={c} className="course-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
          <svg className="sec-illo" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <style>{`
              .bk1 { fill: var(--accent-light); stroke: var(--accent); stroke-width: 0.8; }
              .bk2 { fill: #9FE1CB; stroke: #0F6E56; stroke-width: 0.8; }
              .bk3 { fill: var(--accent); stroke: var(--accent-dark); stroke-width: 0.8; }
              .bks { stroke: rgba(0,0,0,0.1); stroke-width: 0.5; fill: none; }
            `}</style>
            <polygon points="60,18 96,36 60,52 24,36" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="0.8"/>
            <rect x="55" y="36" width="10" height="14" fill="var(--accent)"/>
            <circle cx="60" cy="52" r="4" fill="var(--accent)"/>
            <line x1="96" y1="36" x2="96" y2="54" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4"/>
            <circle cx="96" cy="57" r="3" fill="var(--accent)" opacity="0.4"/>
            <rect className="bk3" x="14" y="118" width="92" height="18" rx="2"/>
            <line className="bks" x1="22" y1="118" x2="22" y2="136"/>
            <rect className="bk2" x="18" y="95" width="86" height="18" rx="2"/>
            <line className="bks" x1="26" y1="95" x2="26" y2="113"/>
            <rect className="bk1" x="22" y="72" width="78" height="18" rx="2"/>
            <line className="bks" x1="30" y1="72" x2="30" y2="90"/>
          </svg>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="sec-header">
          <span className="sec-num">03</span>
          <span className="sec-title">Experience</span>
          <div className="sec-line" />
        </div>
        <div className="exp-list">
          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-year">Aug 2025 – Present</div>
              <div className="exp-loc">California, USA</div>
            </div>
            <div>
              <div className="exp-role">Software Engineer Intern</div>
              <div className="exp-company">Tesla · Digital Experiences</div>
              <div className="exp-stack">GoLang · Kafka · Redis · MySQL · Elasticsearch · ReactJS</div>
              <ul className="exp-bullets">
                <li>Built a Kafka-based async dispute pipeline for Robotaxi payments using Go goroutines and channels, with idempotent processing, retries, and DLQ handling for reliable refund and fee adjustments at scale.</li>
                <li>Implemented Redis-based distributed locking to prevent duplicate refunds; indexed payment metadata into Elasticsearch for fast, sub-millisecond lookup across millions of transactions.</li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-year">Sep 2023 – Dec 2024</div>
              <div className="exp-loc">Hyderabad, India</div>
            </div>
            <div>
              <div className="exp-role">Software Engineer II</div>
              <div className="exp-company">Microsoft · OneDrive &amp; SharePoint</div>
              <div className="exp-stack">C# · C++ · .NET · Redis · Kubernetes · Azure · Spark (Scala)</div>
              <ul className="exp-bullets">
                <li>Co-designed Restricted Access Control — a hybrid RBAC + ABAC authorization system — preventing oversharing for 3.5M users and generating $4M in revenue at launch.</li>
                <li>Reduced policy evaluation time by 40% through optimized SQL stored procedures, distributed Redis caching, and query indexing; also implemented PowerShell cmdlets for admin enablement.</li>
                <li>Architected a sharing blocker that cut unauthorized access denials by 76% via batch-processed external API calls, in-memory caching, and adaptive throttling.</li>
                <li>Built an async Spark (Scala) pipeline on Azure Data Lake processing 10M+ events per run, delivering tenant-level compliance reports with partition pruning and predicate pushdown.</li>
                <li>Migrated Just-In-Time DLP to a containerized Azure Functions v4 service on AKS — reducing infra costs by 25% — with Kubernetes auto-scaling, health probes, and canary deployments.</li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-year">Jul 2021 – Aug 2023</div>
              <div className="exp-loc">Hyderabad, India</div>
            </div>
            <div>
              <div className="exp-role">Software Engineer</div>
              <div className="exp-company">Microsoft · Office Web Experiences</div>
              <div className="exp-stack">C# · .NET · Kusto · Azure Service Bus · Redis</div>
              <ul className="exp-bullets">
                <li>Reduced Reply @Mentions API latency by 40% by migrating to MSAL for S2S auth and introducing distributed Redis caching; built a Kusto dashboard for real-time reliability monitoring.</li>
                <li>Improved Planner-Excel task synchronization with a decoupled session-based Azure Service Bus workflow and ARM-template-automated resource provisioning.</li>
                <li>Cut manual on-call effort by 75% by automating periodic monitoring to ensure in-order task synchronization across services.</li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-year">Jan 2021 – Jun 2021</div>
              <div className="exp-loc">Hyderabad, India</div>
            </div>
            <div>
              <div className="exp-role">Software Development Engineer Intern</div>
              <div className="exp-company">Amazon · Fast Data Technologies</div>
              <div className="exp-stack">Java · Spring Boot · AWS · DynamoDB</div>
              <ul className="exp-bullets">
                <li>Reduced query execution time by 35% by implementing paginated RESTful APIs, refining query logic, and leveraging DynamoDB's GSI for efficient data access.</li>
                <li>Built a multi-threaded cron job monitoring service (Java ExecutorService) to detect stalled event-processing stages in 5-trillion-event pipelines and trigger automated alerts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="sec-header">
          <span className="sec-num">04</span>
          <span className="sec-title">Projects</span>
          <div className="sec-line" />
        </div>
        <div className="projects-grid">
          <a href="https://github.com/tanvi217/Lightweight-Java-Database-Engine" target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-title">
              Lightweight Java Database Engine
              <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </div>
            <div className="project-stack">Java · Apache Ant · JUnit · B⁺-Tree · Buffer Manager</div>
            <p className="project-desc">
              Built a disk-backed database engine from scratch featuring an LRU buffer pool, a B⁺-tree index supporting point and range queries, and a pipelined query executor with Scan, Selection, Projection, and Block Nested-Loop Join operators. Benchmarked against IMDb datasets with automated JUnit test coverage.
            </p>
          </a>
          <div className="project-card">
            <div className="project-title">KV Cache Optimization Survey</div>
            <div className="project-stack">LLM Inference · Transformers · Systems for Deep Learning</div>
            <p className="project-desc">
              Surveying and taxonomizing KV cache optimization techniques for large language models across two axes — compression-based (token eviction, token merging, quantization) and architecture-based (cache sharing, attention redesign, memory management, offloading). Analyzing 20+ papers on memory reduction, quality impact, and retraining requirements.
            </p>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section id="recognition">
        <div className="sec-header">
          <span className="sec-num">05</span>
          <span className="sec-title">Recognition &amp; leadership</span>
          <div className="sec-line" />
        </div>
        <div className="achievements-list">
          <div className="achievement-item">
            <div className="achievement-dot" />
            <p className="achievement-text">
              <strong>Microsoft Fix-Hack-Learn 2022</strong> — Ranked top 2 company-wide for the Data Boundary Compliant ML Models Training project.
            </p>
          </div>
          <div className="achievement-item">
            <div className="achievement-dot" />
            <p className="achievement-text">
              <strong>Women Techmakers Engineering Fellow 2019</strong> (Google-supported) — Selected among 100 women nationwide for a month-long boot camp with Google engineering leaders and awarded a scholarship.
            </p>
          </div>
          <div className="achievement-item">
            <div className="achievement-dot" />
            <p className="achievement-text">
              <strong>Adobe Codiva Hackathon 2020</strong> — Ranked among the top 100 coders nationally.
            </p>
          </div>
          <div className="achievement-item">
            <div className="achievement-dot" />
            <p className="achievement-text">
              <strong>Mentorship</strong> — Led workshops on Applied Software Engineering at IIIT Sri City's IOTA club; mentored a Microsoft summer intern on the Intelligent Replies @Mentions project for Office apps.
            </p>
          </div>
          <div className="achievement-item">
            <div className="achievement-dot" />
            <p className="achievement-text">
              <strong>Teaching Assistant</strong> — Facilitated the Signals &amp; Systems course, guiding freshers through MATLAB programming assignments.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="sec-header">
          <span className="sec-num">06</span>
          <span className="sec-title">Contact</span>
          <div className="sec-line" />
        </div>
        <div className="contact-grid">
          <a href="mailto:tanviagarwal@umass.edu" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
            </div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-val">tanviagarwal@umass.edu</div>
            </div>
          </a>
          <a href="https://github.com/tanvi217" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </div>
            <div>
              <div className="contact-label">GitHub</div>
              <div className="contact-val">github.com/tanvi217</div>
            </div>
          </a>
          <a href="https://linkedin.com/in/tanvi217" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-val">linkedin.com/in/tanvi217</div>
            </div>
          </a>
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-val">California, USA</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
