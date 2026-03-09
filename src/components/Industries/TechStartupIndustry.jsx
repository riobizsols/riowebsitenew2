import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../css/IndustryLanding.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const TechStartupIndustry = () => {
  const handleCTA = (action) => {
    trackServiceInterest(`tech_startup_${action}`);
  };

  const challenges = [
    {
      icon: '⚡',
      title: 'We Need to Move Fast (Like, Yesterday)',
      description: 'You have an idea. Investors want traction. You have 6 months, not 2 years. Building a team while also building product is chaos.',
      solution: 'Fast staffing (1-2 weeks), cross-platform development, temporary contractors for sprint work'
    },
    {
      icon: '💰',
      title: 'Budget is Tight. Every Dollar Counts.',
      description: 'You\'re burning cash. Full-time hires are expensive. You need flexibility—scale up when you raise, scale down if things pivot.',
      solution: 'Flexible staffing, contract developers, performance-based marketing (only pay for results)'
    },
    {
      icon: '🔧',
      title: 'We Need Both Technical AND Business Skills',
      description: 'You don\'t just need coders. You need people who get startups, understand pivots, and wear multiple hats.',
      solution: 'Lateral hiring for experienced leads, fresh hires with startup energy, advisory on tech choices'
    },
    {
      icon: '📈',
      title: 'Scaling is Messy. We\'re Growing Too Fast.',
      description: 'Last month you were 5 people. Now you\'re 15. HR systems are broken. Code is held together with duct tape.',
      solution: 'Team expansion planning, Odoo ERP to organize chaos, scalable tech infrastructure'
    },
    {
      icon: '🎯',
      title: 'We Need Customers. NOW.',
      description: 'You built something cool. But nobody knows about it. You need organic growth, targeted ads, and content that actually converts.',
      solution: 'Growth marketing, SEO, content strategy, performance analytics'
    },
    {
      icon: '🛡️',
      title: 'Legal and IP Concerns Are Keeping Us Up',
      description: 'Is our IP protected? Can we hire contractors without legal chaos? What about compliance?',
      solution: 'IPR protection, legal vetting, compliance guidance'
    }
  ];

  const services = [
    {
      service: 'App Development',
      why: 'Your product is your business. We build it fast. React Native to MVPs in months, not quarters.',
      match: 'Perfect for rapid iteration and pivots'
    },
    {
      service: 'Web Development',
      why: 'Need a product landing page or customer dashboard? We build responsive, scalable web apps.',
      match: 'Essential for B2B SaaS and web platforms'
    },
    {
      service: 'Staffing (Temporary + Lateral)',
      why: 'Bring in senior people for your leadership team. Temp contractors for sprint work. No long-term commitment.',
      match: 'Scale your team without HR headaches'
    },
    {
      service: 'Digital Marketing',
      why: 'You built it. Now we help people find it. Growth hacking, SEO, performance marketing.',
      match: 'Get traction. Get funded.'
    },
    {
      service: 'Odoo ERP',
      why: 'You\'re growing. Things are breaking. Automate sales, finances, and operations before it all falls apart.',
      match: 'Brings order to startup chaos'
    }
  ];

  const timeline = [
    {
      phase: 'Pre-Seed / Idea Stage',
      goal: 'Build MVP. Validate idea.',
      what: 'App dev, landing page, basic marketing',
      budget: 'Low-medium'
    },
    {
      phase: 'Seed Round / MVP Traction',
      goal: 'Get users. Prove the model.',
      what: 'Scale development, growth marketing, temp staffing for sprint work',
      budget: 'Medium'
    },
    {
      phase: 'Series A / Scale Up',
      goal: 'Build team. Establish systems.',
      what: 'Permanent hiring, Odoo ERP, leadership lateral hires, web app refinement',
      budget: 'Medium-high'
    },
    {
      phase: 'Series B+ / Growth',
      goal: 'Dominate market. Optimize ops.',
      what: 'Team expansion, system optimization, performance marketing, advanced analytics',
      budget: 'High'
    }
  ];

  const realScenarios = [
    {
      company: 'AI Startup (Pre-Seed)',
      challenge: 'Built prototype. Need 2 senior engineers and a full-stack dev to build v1. Have $50K for team. Timeline: 8 weeks.',
      solution: 'Lateral hire for tech lead ($40K), temporary senior devs for sprint work ($10K). Fast onboarding because they understand startups.',
      result: 'MVP shipped. Product works. Now ready to fundraise.'
    },
    {
      company: 'EdTech Platform (Series A)',
      challenge: 'Growing from 8 to 20 people. Marketing budget $30K/month but not converting. Tech is breaking under load.',
      solution: 'Hire permanent backend engineer + QA contractor. Growth marketing overhaul. Odoo to manage ops. Web app performance boost.',
      result: 'CAC dropped 40%. Retention improved. Infrastructure handles 10x traffic.'
    },
    {
      company: 'B2B SaaS (Seed)',
      challenge: 'Just raised seed funding. Investors want 2 major features shipped in 3 months. Need 3 more devs but want flexibility.',
      solution: 'Mix of permanent hires (2) and temp contractors (1-2 for crunch). Agile sprints. Performance marketing to get early customers.',
      result: 'Features shipped on time. Early customers landed. Team cultural fit maintained.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'We Get Startup Life',
      description: 'We\'ve worked with dozens of startups. We know what pivoting means, budget constraints are real, and chaos is normal.'
    },
    {
      title: 'Speed is Our Superpower',
      description: 'Cross-platform development, fast hiring (1-2 weeks), and agile processes. We move at startup velocity.'
    },
    {
      title: 'Flexibility, Not Rigid Contracts',
      description: 'Need temp developers? Permanent hires? Contract to hire? We work with your stage and budget, not against it.'
    },
    {
      title: 'We\'re Your Extensions, Not Overhead',
      description: 'You don\'t manage us. We work with your team. Senior people who mentor your juniors. That\'s partnership.'
    },
    {
      title: 'Data-Driven Growth',
      description: 'Our marketing focuses on ROI, not vanity metrics. Our dev focuses on scalability, not impressive code. Results matter.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tech Startup Solutions | App Development & Rapid Team Building | RioBizSols</title>
        <meta name="description" content="Fast app development, growth marketing, and flexible staffing for tech startups. MVP to scaling—we help startups move at startup speed." />
        <meta name="keywords" content="tech startup development, app development startups, startup staffing, MVP development, growth marketing startup" />
        <meta property="og:title" content="Tech Startup Solutions | RioBizSols" />
        <meta property="og:description" content="From MVP to Series A. We help tech startups build products, find talent, and get traction fast." />
        <meta property="og:url" content="https://riobizsols.com/industry/tech-startup" />
        <link rel="canonical" href="https://riobizsols.com/industry/tech-startup" />
      </Helmet>

      <div className="industry-landing">
        {/* Hero */}
        <section className="industry-hero">
          <div className="hero-content">
            <h1>From Idea to Funded.</h1>
            <p>You have a great idea and 6 months to prove it. We help tech startups build products, find talented people, and get traction—fast.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="cta-primary" onClick={() => handleCTA('hero_contact')}>
                Let's Build Together
              </Link>
              <Link to="/compare/app-development" className="cta-secondary">
                See Our App Approach
              </Link>
            </div>
          </div>
          <div className="hero-background">
            <div className="hero-shape"></div>
          </div>
        </section>

        {/* The Real Challenges */}
        <section className="challenges-section">
          <div className="container">
            <h2>The Startup Reality Check</h2>
            <p className="section-intro">These aren't theoretical. We hear them every week.</p>
            <div className="challenges-grid">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="challenge-card">
                  <div className="challenge-icon">{challenge.icon}</div>
                  <h3>{challenge.title}</h3>
                  <p className="challenge-text">{challenge.description}</p>
                  <p className="challenge-solution"><strong>We help with:</strong> {challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Mapped to Startup Needs */}
        <section className="services-mapping">
          <div className="container">
            <h2>How We Fit Into Your Startup</h2>
            <div className="services-grid">
              {services.map((item, idx) => (
                <div key={idx} className="service-mapping-card">
                  <h3>{item.service}</h3>
                  <p className="service-why">{item.why}</p>
                  <p className="service-match">✓ {item.match}</p>
                  <Link to="/our-service/app-development" className="learn-more">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Timeline */}
        <section className="timeline-section">
          <div className="container">
            <h2>We Grow With You</h2>
            <p className="section-intro">Different stages. Different needs. Same partner.</p>
            <div className="timeline-grid">
              {timeline.map((phase, idx) => (
                <div key={idx} className="timeline-card">
                  <h4 className="phase-name">{phase.phase}</h4>
                  <p className="phase-goal"><strong>Goal:</strong> {phase.goal}</p>
                  <p className="phase-what"><strong>We provide:</strong> {phase.what}</p>
                  <p className="phase-budget"><strong>Budget range:</strong> {phase.budget}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Startup Stories */}
        <section className="scenarios-section">
          <div className="container">
            <h2>Startups Like You</h2>
            <div className="scenarios-grid">
              {realScenarios.map((scenario, idx) => (
                <div key={idx} className="scenario-card">
                  <h4>{scenario.company}</h4>
                  <div className="scenario-part">
                    <strong>Challenge:</strong>
                    <p>{scenario.challenge}</p>
                  </div>
                  <div className="scenario-part">
                    <strong>Our Solution:</strong>
                    <p>{scenario.solution}</p>
                  </div>
                  <div className="scenario-part result">
                    <strong>Result:</strong>
                    <p>{scenario.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Startups Choose RioBizSols</h2>
            <div className="why-grid">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="why-card">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Move Fast?</h2>
            <p>Whether you're pre-seed or Series A, we're here to help you build, hire, and scale without the BS.</p>
            <Link to="/contact" className="cta-primary large" onClick={() => handleCTA('final_cta')}>
              Schedule a Startup Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TechStartupIndustry;
