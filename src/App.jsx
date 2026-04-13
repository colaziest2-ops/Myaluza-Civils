import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/LOGO 3.png';
import backImg from './assets/Back.jpg';
import visionImg from './assets/vision 1.png';
import targetingImg from './assets/targeting.png';
import bbbeeImg from './assets/BBBEE-White-Background.png';
import civilEngImg from './assets/Civil Engineering.jpg';
import generalBuildImg from './assets/General Building.jpg';
import waterReticulationImg from './assets/Water Reticulation Network.jpg';
import roadSurfacingImg from './assets/Road Surfacing & Kerbing.jpg';
import commercialBuildingImg from './assets/Commercial Building Construction.jpg';
import concreteImg from './assets/concrete retaining walls and culverts.jpg';
import renovationsImg from './assets/Structural Renovations & Extensions.jpg';
import pavingImg from './assets/Paving & Sidewalk Projects.jpg';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    reason: '',
    context: ''
  });

  useEffect(() => {
    // Nav scroll effect
    const handleScroll = () => {
      const nav = document.getElementById('mainNav');
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.dataset.target;
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current);
        }, 16);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => countObserver.observe(c));

    // Scroll-trigger animations
    const animObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = +(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('visible');
          // Don't unobserve FAQ items so they stay visible
          if (!entry.target.classList.contains('faq-item')) {
            animObserver.unobserve(entry.target);
          }
        }, delay);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.bento-card, .service-card, .faq-item').forEach((el, i) => {
      el.dataset.delay = (i % 4) * 100;
      animObserver.observe(el);
    });

    // FAQ visibility safety net - ensure they're always visible
    const ensureFaqVisible = () => {
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.add('visible');
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    };
    setTimeout(ensureFaqVisible, 100);
    setTimeout(ensureFaqVisible, 1500);
    setTimeout(ensureFaqVisible, 3000);

    // Portfolio drag scroll
    const portfolioScroll = document.getElementById('portfolioScroll');
    if (portfolioScroll) {
      let isDown = false;
      let startX;
      let scrollLeft;

      portfolioScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - portfolioScroll.offsetLeft;
        scrollLeft = portfolioScroll.scrollLeft;
      });

      portfolioScroll.addEventListener('mouseleave', () => { isDown = false; });
      portfolioScroll.addEventListener('mouseup', () => { isDown = false; });
      
      portfolioScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - portfolioScroll.offsetLeft;
        const walk = (x - startX) * 2;
        portfolioScroll.scrollLeft = scrollLeft - walk;
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    document.body.style.overflow = '';
  };

  const openMobileNavHandler = () => {
    setMobileNavOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
    // Ensure all FAQ items remain visible
    setTimeout(() => {
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.add('visible');
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 50);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 5000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id.replace('f-', '')]: e.target.value });
  };

  const faqs = [
    {
      question: 'What types of construction projects does <span class="brand-name">Myaluza Civils</span> handle?',
      answer: '<strong class="brand-name">Myaluza Civils</strong> specializes in two core areas: Civil Engineering — including water reticulation, concrete structures (chambers, retaining walls, culverts), and roads (surfacing, sidewalks, paving, kerbing and channelling) — and General Building, encompassing new builds, renovations, and structural extensions.'
    },
    {
      question: 'Is <span class="brand-name">Myaluza Civils</span> BBBEE compliant for government tenders?',
      answer: 'Yes, <strong class="brand-name">Myaluza Civils</strong> is Level 1 BBBEE certified and 100% Black-Owned, making us an ideal transformation partner for government and private sector projects requiring BBBEE compliance.'
    },
    {
      question: 'What is <span class="brand-name">Myaluza Civils\'</span> CIDB grading?',
      answer: 'We are registered with CIDB as 5 GB PE (General Building) and 6 CE PE (Civil Engineering), enabling us to tender for a wide range of construction and civil engineering projects.'
    },
    {
      question: 'Where does <span class="brand-name">Myaluza Civils</span> operate?',
      answer: 'Our head office is in Pietermaritzburg (102 Trelawney Road, Fairmade), with branch offices in Greytown (P17 Inadi Road, Emabovini) and Durban (4 Clarancier House, 184 Clark Road, Glenwood). We serve clients across KwaZulu-Natal.'
    },
    {
      question: 'How can I request a joint venture or partnership?',
      answer: 'Fill out the form in the "Request Our Intelligence" section above, selecting "Joint Venture / Partnership" as your reason. Our team will send our comprehensive Company Profile and arrange a consultation within one business day.'
    },
    {
      question: 'What makes <span class="brand-name">Myaluza Civils</span> different from other construction contractors?',
      answer: 'We combine deep technical expertise with genuine partnership values. As a 100% Black-Owned, BBBEE Level 1 company with CIDB grading in both civil and building sectors, we bring compliance, capability, and commitment to every project — backed by owned plant equipment and a proven track record since 2012.'
    }
  ];

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor" id="cursor"></div>
      <div className="cursor-trail" id="cursorTrail"></div>

      {/* Mobile Nav */}
      <nav className={`nav-mobile ${mobileNavOpen ? 'open' : ''}`} id="mobileNav" role="navigation" aria-label="Mobile menu">
        <button className="nav-mobile-close" id="mobileClose" aria-label="Close menu" onClick={closeMobileNav}>✕</button>
        <a href="#about" onClick={closeMobileNav}>About</a>
        <a href="#services" onClick={closeMobileNav}>Services</a>
        <a href="#portfolio" onClick={closeMobileNav}>Projects</a>
        <a href="#partner" onClick={closeMobileNav}>Partner</a>
        <a href="#intelligence" onClick={closeMobileNav}>Intelligence</a>
        <a href="#contact" onClick={closeMobileNav}>Contact</a>
      </nav>

      {/* Main Nav */}
      <nav id="mainNav" role="navigation" aria-label="Main navigation">
        <div className="nav-logo">
          <img src={logo} alt="Myaluza Civils (PTY) LTD Logo — Where Tradition Meets Innovation" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#partner">Partner</a></li>
          <li><a href="#intelligence">Intelligence</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#intelligence" className="nav-cta">Get Profile</a></li>
        </ul>
        <div className="hamburger" id="hamburger" onClick={openMobileNavHandler} role="button" aria-label="Open menu" tabIndex="0">
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" aria-label="Hero section">
        <img src={backImg} className="hero-bg-img" alt="Myaluza Civils structural construction project" />
        <div className="hero-left hero-text-shadow">
          <div className="hero-left-overlay" aria-hidden="true"></div>
          <div className="hero-badge" role="note">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            100% Black-Owned &bull; BBBEE Level 1
          </div>
          <h1 className="hero-headline">
            WHERE<br/>
            <span className="accent">TRADITION</span><br/>
            MEETS<br/>
            INNOVATION
          </h1>
          <p className="hero-sub">
            <strong className="brand-name">Myaluza Civils (PTY) LTD</strong> — building South Africa's infrastructure since 2012. Civil engineering and general construction delivered with precision, integrity, and purpose.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#intelligence" className="btn-outline" style={{background: 'var(--navy)', color: 'white', borderColor: 'var(--navy)'}}>Request Profile</a>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About / Bento */}
      <section id="about" aria-labelledby="about-title">
        <div className="section-label">Who We Are</div>
        <h2 className="section-title" id="about-title">BUILDING MORE<br/><span style={{color:'var(--orange)'}}>THAN STRUCTURES</span></h2>
        <div className="bento-grid">
          <div className="bento-card col-7 dark-accent">
            <div className="card-title" style={{marginBottom:'0.6rem'}}>Our Background</div>
            <p className="card-text">Established in 2012 by a group of highly skilled professionals with hands-on construction experience, <strong className="brand-name">Myaluza Civils</strong> was formed to deliver small yet highly specialized civil engineering and building construction services across South Africa. We combine deep technical expertise with a commitment to community development.</p>
          </div>
          <div className="bento-card col-5 orange-accent">
            <div className="big-number counter" data-target="13">0</div>
            <div className="big-number-label">Years of Experience</div>
            <p className="card-text" style={{marginTop:'1rem',fontSize:'0.82rem',color:'var(--text-muted)'}}>Building infrastructure since 2012 — Reg No: 2012/210804/07</p>
          </div>
          <div className="bento-card col-3 vision-card">
            <img src={visionImg} alt="Vision — Myaluza Civils" className="bento-icon-img icon-invert" />
            <div className="card-title">Our Vision</div>
            <p className="card-text">To provide professional, effective and cost-effective services that assist in the building of South Africa's infrastructure.</p>
          </div>
          <div className="bento-card col-5 mission-card">
            <img src={targetingImg} alt="Mission — Myaluza Civils" className="bento-icon-img icon-invert" />
            <div className="card-title">Our Mission</div>
            <p className="card-text">To build a network of clients through the provision of professional, consistent and superior services — whilst establishing everlasting relations creating a sustainable environment for our employees and ensuring client confidence.</p>
          </div>
          <div className="bento-card col-4 orange-accent bee-card">
            <img src={bbbeeImg} alt="BBBEE Level 1 Certification" className="bento-icon-img" style={{marginBottom:'0.8rem'}} />
            <div className="card-title">BBBEE Level 1</div>
            <p className="card-text">100% Black-Owned enterprise with the highest BBBEE compliance rating — a trusted transformation partner for government and private sector projects.</p>
          </div>
        </div>
      </section>

      {/* Impact / Stats */}
      <section id="impact" aria-labelledby="impact-title">
        <div style={{textAlign:'center',position:'relative',zIndex:1}}>
          <div className="section-label" style={{justifyContent:'center'}}>By The Numbers</div>
          <h2 className="section-title" id="impact-title">OUR <span style={{color:'var(--orange)'}}>IMPACT</span></h2>
        </div>
        <div className="stats-grid" role="list" style={{position:'relative',zIndex:1}}>
          <div className="stat-item" role="listitem">
            <span className="stat-number"><span className="counter" data-target="13">0</span><span className="stat-suffix">+</span></span>
            <span className="stat-label">Years in Operation</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number"><span className="counter" data-target="3">0</span></span>
            <span className="stat-label">Office Locations</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number"><span className="counter" data-target="20">0</span><span className="stat-suffix">+</span></span>
            <span className="stat-label">Completed Projects</span>
          </div>
          <div className="stat-item" role="listitem">
            <span className="stat-number"><span className="counter" data-target="100">0</span><span className="stat-suffix">%</span></span>
            <span className="stat-label">Black-Owned</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" aria-labelledby="services-title">
        <div className="section-label">What We Do</div>
        <h2 className="section-title" id="services-title">CORE <span style={{color:'var(--orange)'}}>CAPABILITIES</span></h2>
        <div className="services-layout">
          <div className="service-card">
            <div className="service-number" aria-hidden="true">01</div>
            <div className="service-card-img-wrap"><img src={civilEngImg} alt="Civil engineering culverts and infrastructure" loading="lazy" /></div>
            <h3 className="service-title">Civil Engineering</h3>
            <ul className="service-list">
              <li>Water reticulation — design and installation of piped water supply networks</li>
              <li>Concrete Structures — chambers, retaining walls and culverts</li>
              <li>Roads — surfacing, sidewalks, paving, kerbing and channel construction</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-number" aria-hidden="true">02</div>
            <div className="service-card-img-wrap"><img src={generalBuildImg} alt="General building and commercial construction" loading="lazy" /></div>
            <h3 className="service-title">General Building</h3>
            <ul className="service-list">
              <li>Construction of new residential and commercial buildings</li>
              <li>Renovations to existing structures — upgrade and refurbishment</li>
              <li>Extensions to existing structures — expanding your footprint</li>
            </ul>
          </div>
          <div className="service-card registrations-card bento-card" style={{opacity:1,transform:'none',boxShadow:'none'}}>
            <div style={{flex:2,minWidth:'220px'}}>
              <div className="card-title" style={{color:'#fff',fontFamily:"'Syne',sans-serif",fontSize:'1.05rem',fontWeight:700}}>Industry Registrations &amp; Compliance</div>
              <p className="card-text" style={{marginTop:'0.6rem',color:'rgba(255,255,255,0.6)'}}>Fully accredited and compliant across all required industry bodies — giving our clients peace of mind on every project.</p>
            </div>
            <div className="reg-badge"><div className="reg-badge-title">CIDB</div><div className="reg-badge-value">5 GB PE</div></div>
            <div className="reg-badge"><div className="reg-badge-title">CIDB</div><div className="reg-badge-value">6 CE PE</div></div>
            <div className="reg-badge"><div className="reg-badge-title">BBBEE</div><div className="reg-badge-value">Level 1</div></div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-header">
          <div className="section-label">Our Work</div>
          <h2 className="section-title" id="portfolio-title">PROJECT <span style={{color:'var(--orange)'}}>SHOWCASE</span></h2>
          <p style={{color:'var(--text-light)',fontSize:'0.88rem',marginTop:'1rem'}}>← Drag or swipe to explore our portfolio across KwaZulu-Natal</p>
        </div>
        <div className="portfolio-scroll" id="portfolioScroll" role="list">
          <div className="portfolio-card" role="listitem">
            <img src={concreteImg} alt="Concrete structures by Myaluza Civils" className="portfolio-card-photo" />
            <div className="portfolio-card-content">
              <div className="portfolio-card-tag">Concrete Structures</div>
              <div className="portfolio-card-title">Retaining Walls &amp; Culverts</div>
              <div className="portfolio-card-sub">Greytown Area</div>
            </div>
          </div>
          <div className="portfolio-card" role="listitem">
            <img src={pavingImg} alt="Paving and sidewalk infrastructure projects" className="portfolio-card-photo" />
            <div className="portfolio-card-content">
              <div className="portfolio-card-tag">Infrastructure</div>
              <div className="portfolio-card-title">Paving &amp; Sidewalk Projects</div>
              <div className="portfolio-card-sub">Municipal Contracts</div>
            </div>
          </div>
          <div className="portfolio-card" role="listitem">
            <img src={waterReticulationImg} alt="Water reticulation network" className="portfolio-card-photo" />
            <div className="portfolio-card-content">
              <div className="portfolio-card-tag">Civil Engineering</div>
              <div className="portfolio-card-title">Water Reticulation Network</div>
              <div className="portfolio-card-sub">KwaZulu-Natal</div>
            </div>
          </div>
          <div className="portfolio-card" role="listitem">
            <img src={commercialBuildingImg} alt="Commercial building construction" className="portfolio-card-photo" />
            <div className="portfolio-card-content">
              <div className="portfolio-card-tag">General Building</div>
              <div className="portfolio-card-title">Commercial Building Construction</div>
              <div className="portfolio-card-sub">Durban, KZN</div>
            </div>
          </div>
          <div className="portfolio-card" role="listitem">
            <img src={renovationsImg} alt="Structural renovations and extensions" className="portfolio-card-photo" />
            <div className="portfolio-card-content">
              <div className="portfolio-card-tag">Renovations</div>
              <div className="portfolio-card-title">Structural Renovations &amp; Extensions</div>
              <div className="portfolio-card-sub">KwaZulu-Natal Wide</div>
            </div>
          </div>
          <div className="portfolio-card" role="listitem">
            <img src={roadSurfacingImg} alt="Road surfacing and kerbing projects" className="portfolio-card-photo" />
            <div className="portfolio-card-content">
              <div className="portfolio-card-tag">Roads &amp; Infrastructure</div>
              <div className="portfolio-card-title">Road Surfacing &amp; Kerbing</div>
              <div className="portfolio-card-sub">Pietermaritzburg Region</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" aria-labelledby="partner-title">
        <div className="section-label" style={{justifyContent:'center'}}>Collaboration</div>
        <h2 className="section-title" id="partner-title" style={{textAlign:'center'}}>PARTNER WITH<br/><span style={{color:'var(--orange)'}}>INNOVATION</span></h2>
        <p style={{color:'var(--text-muted)',fontSize:'1rem',maxWidth:'560px',margin:'1.5rem auto 0',lineHeight:1.8,textAlign:'center'}}>
          Whether you're a government body, private developer, or fellow contractor, <strong className="brand-name">Myaluza Civils</strong> brings BBBEE Level 1 compliance, CIDB-graded expertise, and genuine partnership values to every engagement.
        </p>
        <div className="partner-grid">
          <div className="partner-pill">Government &amp; Municipal</div>
          <div className="partner-pill">Private Developers</div>
          <div className="partner-pill">Joint Ventures</div>
          <div className="partner-pill">Subcontracting</div>
          <div className="partner-pill">BBBEE Compliance Partner</div>
          <div className="partner-pill">Infrastructure Projects</div>
        </div>
        <div style={{marginTop:'3rem',textAlign:'center'}}>
          <a href="#intelligence" className="btn-primary">Request Our Company Profile ›</a>
        </div>
      </section>

      {/* Intelligence / Lead Gen */}
      <section id="intelligence" aria-labelledby="intel-title">
        <div className="intelligence-wrap">
          <div className="intel-left">
            <div className="section-label">Company Intelligence</div>
            <h2 className="section-title" id="intel-title">REQUEST OUR<br/><span style={{color:'var(--orange)'}}>INTELLIGENCE</span></h2>
            <p>Our Company Profile is a curated intelligence document — containing our full capabilities, compliance certificates, CIDB grading, project history, and team credentials. Request it below to begin a formal engagement.</p>
            <div className="intel-features">
              <div className="intel-feature">
                <div className="intel-feature-dot"></div>
                <span>Full CIDB registration details &amp; compliance certificates</span>
              </div>
              <div className="intel-feature">
                <div className="intel-feature-dot"></div>
                <span>BBBEE Level 1 certificate &amp; ownership structure</span>
              </div>
              <div className="intel-feature">
                <div className="intel-feature-dot"></div>
                <span>Detailed project portfolio with references</span>
              </div>
              <div className="intel-feature">
                <div className="intel-feature-dot"></div>
                <span>Owned plant &amp; equipment inventory</span>
              </div>
              <div className="intel-feature">
                <div className="intel-feature-dot"></div>
                <span>Team credentials &amp; professional qualifications</span>
              </div>
            </div>
          </div>
          <div className="form-card">
            <div id="formContainer" style={{display: formSuccess ? 'none' : 'block'}}>
              <div className="form-title">Fill in your details below</div>
              <form id="profileForm" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="f-name">Full Name *</label>
                  <input id="f-name" type="text" className="form-input" placeholder="Your full name" required autoComplete="name" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="f-company">Company / Organisation *</label>
                  <input id="f-company" type="text" className="form-input" placeholder="Your company name" required autoComplete="organization" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="f-email">Email Address *</label>
                  <input id="f-email" type="email" className="form-input" placeholder="your@company.co.za" required autoComplete="email" onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="f-reason">Reason for Request *</label>
                  <select id="f-reason" className="form-input form-select" required onChange={handleInputChange} defaultValue="">
                    <option value="" disabled>Select a reason...</option>
                    <option>Tender / Bid Preparation</option>
                    <option>Joint Venture / Partnership</option>
                    <option>Subcontracting Opportunity</option>
                    <option>Project Evaluation</option>
                    <option>General Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="f-context">Additional Context</label>
                  <textarea id="f-context" className="form-input form-textarea" placeholder="Tell us more about your project or requirements..." onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit">Request Intelligence Document →</button>
              </form>
            </div>
            <div className="form-success" id="formSuccess" role="alert" style={{display: formSuccess ? 'flex' : 'none'}}>
              <div className="form-success-icon">✅</div>
              <h3>Request Received!</h3>
              <p>Thank you. Our team will send our Company Profile to your email within one business day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-title">
        <div>
          <div className="section-label" style={{justifyContent:'center'}}>Common Questions</div>
          <h2 className="section-title" id="faq-title" style={{textAlign:'center'}}>CONSTRUCTION<br/><span style={{color:'var(--orange)'}}>QUERIES</span></h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)} role="button" tabIndex="0" aria-expanded={openFaq === index}>
                <span dangerouslySetInnerHTML={{__html: faq.question}}></span>
                <div className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
              <div className="faq-answer" style={{maxHeight: openFaq === index ? '500px' : '0'}}>
                <div className="faq-answer-inner" dangerouslySetInnerHTML={{__html: faq.answer}}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-title">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title" id="contact-title">REACH<br/><span style={{color:'var(--orange)'}}>OUR TEAM</span></h2>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-label">Head Office</div>
            <div className="contact-card-text">
              <div className="contact-info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>102 Trelawney Road, Fairmade<br/>Pietermaritzburg, 3201</span>
              </div>
              <div className="contact-info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.9-.9a2 2 0 0 1 2.1-.45c.9.33 1.85.56 2.81.69a2 2 0 0 1 1.72 2.03z"/></svg>
                <span><a href="tel:0783492494">078 349 2494</a><br/><a href="tel:0797870766">079 787 0766</a></span>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-label">Branch Offices</div>
            <div className="contact-card-text">
              <div className="contact-info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>P17 Inadi Road, Emabovini<br/>Greytown, 3250</span>
              </div>
              <div className="contact-info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>4 Clarancier House, 184 Clark Road<br/>Glenwood, Durban, 4001</span>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-label">Digital Contact</div>
            <div className="contact-card-text">
              <div className="contact-info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span><a href="mailto:admin@myaluzacivils.co.za">admin@myaluzacivils.co.za</a></span>
              </div>
              <div className="contact-info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="16" x2="12" y2="16"/></svg>
                <span>Fax: 086 764 1531</span>
              </div>
              <div className="contact-info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>Reg No: 2012/210804/07<br/>CIDB: 5 GB PE | 6 CE PE<br/>BBBEE: Level 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="Myaluza Civils PTY LTD — Where Tradition Meets Innovation" />
        </div>
        <div className="footer-text">© 2025 <strong className="brand-name">Myaluza Civils (PTY) LTD</strong>. All rights reserved.</div>
      </footer>
    </>
  );
}

export default App;
