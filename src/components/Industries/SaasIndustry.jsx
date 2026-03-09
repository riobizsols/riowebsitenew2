import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../css/IndustryLanding.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const SaasIndustry = () => {
  const handleCTA = (action) => {
    trackServiceInterest(`saas_${action}`);
  };

  const challenges = [
    {
      icon: '📈',
      title: 'Our CAC is Terrible and We Can\'t Figure Out Why',
      description: 'You\'re spending money but not getting ROI. Your customer acquisition cost is unsustainably high. Investors are asking hard questions.',
      solution: 'Analytics overhaul, conversion optimization, marketing efficiency review'
    },
    {
      icon: '👥',
      title: 'We\'re Losing Features to Competitors',
      description: 'Your competitors ship faster. They\'re feature-rich. You\'re falling behind. Your development velocity sucks.',
      solution: 'Development team expansion, temporary contractors for sprint work, technical leadership hiring'
    },
    {
      icon: '⚙️',
      title: 'Our Infrastructure Isn\'t Scaling',
      description: 'You\'re hitting technical limits. Performance is degrading. Your backend team is overwhelmed.',
      solution: 'Senior infrastructure engineers, architecture consulting, scalability planning'
    },
    {
      icon: '📊',
      title: 'Churn is Higher Than It Should Be',
      description: 'Customers aren\'t seeing value. Retention is slipping. Your unit economics are breaking.',
      solution: 'Product improvements, customer retention strategy, onboarding optimization'
    },
    {
      icon: '🌍',
      title: 'We\'re Not Being Found',
      description: 'Your competitors rank for everything. You\'re not in search. Nobody knows you exist.',
      solution: 'SEO strategy, content marketing, growth marketing, brand building'
    },
    {
      icon: '💰',
      title: 'Fundraising is Hard Because Our Story Isn\'t Compelling',
      description: 'You have a good product but investors aren\'t biting. Your narrative isn\'t resonating. Your pitch deck needs work.',
      solution: 'Content strategy, positioning, case studies, brand storytelling'
    }
  ];

  const solutions = [
    {
      name: 'Development Team Expansion',
      what: 'Permanent engineers, temporary contractors for sprint work, technical leadership.',
      result: 'Ship faster. Better code quality. Meet roadmap.'
    },
    {
      name: 'Growth Marketing',
      what: 'Performance marketing, paid acquisition, email campaigns, retention marketing.',
      result: 'Lower CAC. Improve payback period. Increase LTV.'
    },
    {
      name: 'SEO & Content Strategy',
      what: 'Technical SEO, content marketing, thought leadership positioning.',
      result: 'Organic growth. Brand authority. Inbound leads.'
    },
    {
      name: 'Product & UX',
      what: 'UX audit, conversion optimization, product strategy consulting.',
      result: 'Better retention. Higher engagement. Improved NPS.'
    },
    {
      name: 'Infrastructure & DevOps',
      what: 'Scalable architecture, infrastructure consulting, performance optimization.',
      result: 'Handle 10x growth. Maintain performance. Reduce outages.'
    },
    {
      name: 'Operational Systems',
      what: 'Odoo for finance, HR, operations. Bring order to hypergrowth chaos.',
      result: 'Operational efficiency. Better financial visibility. Scalable processes.'
    }
  ];

  const fundingStages = [
    {
      stage: 'Pre-Seed / Seed',
      focus: 'Build product. Get first customers. Prove the model.',
      challenges: 'Limited budget. Tight team. Need to do more with less.',
      solution: 'Temp developers, growth hacking, content marketing, lean operations'
    },
    {
      stage: 'Series A',
      focus: 'Achieve product-market fit. Scale user base. Prepare for growth.',
      challenges: 'Need more developers but budget limited. CAC concerns. Competitive pressure.',
      solution: 'Team expansion (perm + temp), growth marketing, SEO strategy, ops systems'
    },
    {
      stage: 'Series B',
      focus: 'Dominate market. Build features. Crush competition.',
      challenges: 'Infrastructure scaling. Hiring challenges. Organizational setup.',
      solution: 'Senior hires, infrastructure consultants, operations management, scaling systems'
    },
    {
      stage: 'Series C+',
      focus: 'Market domination. IPO prep. International expansion.',
      challenges: 'Keeping pace with growth. Maintaining culture. Complex operations.',
      solution: 'Strategic hiring, organizational design, advanced marketing, global operations'
    }
  ];

  const saasStories = [
    {
      company: 'B2B Marketing SaaS (Post-Seed)',
      problem: 'Had product-market fit but CAC was $4K and LTV $15K—not sustainable. Paying $100K/month for SEM with minimal ROI. Investors wanted better unit economics.',
      solution: 'Cut expensive SEM. Built SEO strategy. Hired two full-time content marketers (1 perm, 1 contract). Launched customer advocacy program.',
      result: 'CAC dropped to $2,200 in 6 months. Organic now 30% of new customers. LTV improved to $20K through retention focus. Closed Series A.'
    },
    {
      company: 'Developer Tools SaaS (Series A)',
      problem: 'Development velocity too slow. Feature roadmap slipping. Competitors shipping faster. Needed 3-4 more engineers but hiring was failing.',
      solution: 'Brought in senior lateral hire as tech lead. Hired 2 permanent developers. Added 2 temporary contractors for sprint work. Restructured sprints.',
      result: 'Features shipped on schedule. Code quality improved. Retention up (product got better). Closed Series B.'
    },
    {
      company: 'HR Tech SaaS (Post-Series A)',
      problem: 'Growing chaos. Finance was a mess. HR processes broken. Infrastructure scaling issues. Needed both operational and technical help.',
      solution: 'Hired Chief Operating Officer. Implemented Odoo for finance/HR/operations. Senior infrastructure consultant. Staffing for backend team.',
      result: 'Operations 80% more efficient. Finance got predictable. Infrastructure handles 5x traffic. Raised $20M in Series B.'
    }
  ];

  const whyUs = [
    {
      title: 'We Know the SaaS Playbook',
      description: 'We\'ve worked with dozens of SaaS companies. We know the metrics that matter (CAC, LTV, payback period, churn). We speak your language.'
    },
    {
      title: 'We Scale With You',
      description: 'Different solutions for every stage. Seed-stage scrappy. Series A focused. Series B ambitious. We adapt.'
    },
    {
      title: 'We Focus on Unit Economics',
      description: 'Every hire, every marketing dollar, every feature—it\'s about improving your LTV:CAC ratio and unit economics.'
    },
    {
      title: 'We Bring Senior Talent',
      description: 'We place tech leads, senior engineers, product people. Not junior developers. The people who actually move the needle.'
    },
    {
      title: 'We Help You Fundraise',
      description: 'Better product. Better metrics. Better story. Better pitch deck. We help you get ready for the next round.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>SaaS Company Solutions | Development, Marketing, Operations | RioBizSols</title>
        <meta name="description" content="Complete SaaS support: product development, growth marketing, infrastructure scaling, and operational systems. From seed to Series B+." />
        <meta name="keywords" content="SaaS development, growth marketing SaaS, SaaS team building, SaaS infrastructure, SaaS operations" />
        <meta property="og:title" content="SaaS Company Solutions | RioBizSols" />
        <meta property="og:description" content="Better product. Better growth. Better operations. We help SaaS companies scale from seed through Series B+." />
        <meta property="og:url" content="https://riobizsols.com/industry/saas" />
        <link rel="canonical" href="https://riobizsols.com/industry/saas" />
      </Helmet>

      <div className="industry-landing">
        {/* Hero */}
        <section className="industry-hero saas">
          <div className="hero-content">
            <h1>Build Better SaaS. Faster.</h1>
            <p>Ship features faster. Find better customers. Improve your unit economics. Get ready for the next funding round.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="cta-primary" onClick={() => handleCTA('hero_contact')}>
                Let's Accelerate Your Growth
              </Link>
              <Link to="/compare/app-development" className="cta-secondary">
                See Our Development Approach
              </Link>
            </div>
          </div>
          <div className="hero-background">
            <div className="hero-shape"></div>
          </div>
        </section>

        {/* Challenges */}
        <section className="challenges-section">
          <div className="container">
            <h2>The SaaS Struggles</h2>
            <p className="section-intro">We\'ve heard these problems from dozens of SaaS founders. Here\'s how we solve them.</p>
            <div className="challenges-grid">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="challenge-card">
                  <div className="challenge-icon">{challenge.icon}</div>
                  <h3>{challenge.title}</h3>
                  <p className="challenge-text">{challenge.description}</p>
                  <p className="challenge-solution"><strong>Solution:</strong> {challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="services-mapping">
          <div className="container">
            <h2>Complete SaaS Services</h2>
            <div className="services-grid">
              {solutions.map((solution, idx) => (
                <div key={idx} className="service-mapping-card">
                  <h3>{solution.name}</h3>
                  <p className="service-why">{solution.what}</p>
                  <p className="service-impact">✓ {solution.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding Stages */}
        <section className="timeline-section">
          <div className="container">
            <h2>We Scale With Your Funding Stage</h2>
            <p className="section-intro">Seed stage needs are different than Series A. We know the playbook for each.</p>
            <div className="timeline-grid">
              {fundingStages.map((stage, idx) => (
                <div key={idx} className="timeline-card">
                  <h4 className="phase-name">{stage.stage}</h4>
                  <p className="phase-goal"><strong>Goal:</strong> {stage.focus}</p>
                  <p className="phase-what"><strong>Your Challenge:</strong> {stage.challenges}</p>
                  <p className="phase-goal"><strong>We Help With:</strong> {stage.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Stories */}
        <section className="scenarios-section">
          <div className="container">
            <h2>SaaS Success Stories</h2>
            <div className="scenarios-grid">
              {saasStories.map((story, idx) => (
                <div key={idx} className="scenario-card">
                  <h4>{story.company}</h4>
                  <div className="scenario-part">
                    <strong>The Problem:</strong>
                    <p>{story.problem}</p>
                  </div>
                  <div className="scenario-part">
                    <strong>What We Did:</strong>
                    <p>{story.solution}</p>
                  </div>
                  <div className="scenario-part result">
                    <strong>The Outcome:</strong>
                    <p>{story.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why SaaS Companies Choose RioBizSols</h2>
            <div className="why-grid">
              {whyUs.map((item, idx) => (
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
            <h2>Ready to Accelerate?</h2>
            <p>Whether you\'re pre-seed or Series B, we\'ve worked with companies at your stage. Let\'s talk about what you need.</p>
            <Link to="/contact" className="cta-primary large" onClick={() => handleCTA('final_cta')}>
              Schedule a SaaS Strategy Conversation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default SaasIndustry;
