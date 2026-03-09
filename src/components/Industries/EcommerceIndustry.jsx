import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../css/IndustryLanding.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const EcommerceIndustry = () => {
  const handleCTA = (action) => {
    trackServiceInterest(`ecommerce_${action}`);
  };

  const painPoints = [
    {
      icon: '🛍️',
      title: 'Our Website is Losing to Competitors',
      description: 'Customers are buying from your competitors because their sites are faster, prettier, and actually convert. Your site feels clunky and dated.',
      solution: 'Modern web development, UX/UI redesign, conversion rate optimization'
    },
    {
      icon: '📱',
      title: 'Mobile Traffic is Booming But We\'re Not Ready',
      description: 'Half your traffic is mobile but it\'s a mess. Mobile-first design isn\'t optional anymore—it\'s where your money is.',
      solution: 'Responsive web development, mobile app for loyal customers, progressive web app'
    },
    {
      icon: '📊',
      title: 'We Can\'t Track What\'s Actually Working',
      description: 'You\'re spending money on ads but can\'t tell if they\'re working. You dump $10K into Google ads and maybe $2K comes back. Is that good?',
      solution: 'Advanced analytics setup, conversion tracking, performance marketing optimization'
    },
    {
      icon: '🌍',
      title: 'We\'re Invisible on Google',
      description: 'Your competitors rank for everything. You\'re on page 3. Page 3 is the graveyard for e-commerce sites.',
      solution: 'Technical SEO, content marketing, link building strategy'
    },
    {
      icon: '⚙️',
      title: 'Our Backend is Chaos. Everything Takes Forever.',
      description: 'Adding a product takes 30 minutes. Inventory doesn\'t sync. Reports are manual nightmares. Your team is drowning in busywork.',
      solution: 'Odoo e-commerce integration, automation, inventory management systems'
    },
    {
      icon: '👥',
      title: 'We\'re Drowning in Customer Support',
      description: 'Every sale brings 5 support emails. You\'re spending more time on support than selling. Where are the margins?',
      solution: 'CRM systems, marketing automation, customer retention strategies'
    }
  ];

  const services = [
    {
      service: 'Web Development & E-commerce Platforms',
      why: 'We build fast, beautiful, converting e-commerce sites. Shopify, WooCommerce, custom platforms—we handle it all.',
      impact: 'Average 25-35% increase in conversion rate with modern UX'
    },
    {
      service: 'Mobile Apps',
      why: 'Loyal customers want to shop on an app. It\'s faster, smoother, and gets them back more often.',
      impact: 'App users typically spend 2-3x more than web'
    },
    {
      service: 'Digital Marketing (SEO + Paid)',
      why: 'You need customers found you through search. We run SEO for organic traffic and PPC for immediate sales.',
      impact: 'Blended CAC (cost per acquisition) typically drops 40-50%'
    },
    {
      service: 'Odoo ERP for E-commerce',
      why: 'Connect your store, inventory, finances, and fulfillment into one system. Stop using spreadsheets.',
      impact: 'Manual work drops 60-70%. Inventory accuracy improves to 95%+'
    },
    {
      service: 'Staffing (Temporary + Lateral Hires)',
      why: 'Need a marketing specialist? Seasonal customer service reps? We bring them in fast.',
      impact: 'Scale your team for busy seasons without permanent overhead'
    }
  ];

  const ecommerceJourney = [
    {
      stage: 'Small (< $100K/year)',
      goal: 'Get people to the site. Get sales.',
      focus: 'Website quality, basic SEO, email marketing'
    },
    {
      stage: 'Growing ($100K - $500K/year)',
      goal: 'Get more sales. Lower customer acquisition cost.',
      focus: 'Conversion rate optimization, performance marketing, inventory systems'
    },
    {
      stage: 'Scaling ($500K - $2M/year)',
      goal: 'Expand operations. Reduce friction.',
      focus: 'Mobile app, advanced analytics, full ERP system, customer retention marketing'
    },
    {
      stage: 'Established ($2M+/year)',
      goal: 'Dominate market. Maximize margins.',
      focus: 'Advanced personalization, logistics optimization, international expansion, brand positioning'
    }
  ];

  const realStories = [
    {
      name: 'Fashion E-commerce (Started at $30K/year)',
      problem: 'Site looked like 2005. Competitors were beautiful. Conversion rate: 0.8%.',
      action: 'Complete website redesign, mobile app, Instagram shop, abandoned cart recovery emails.',
      outcome: 'Conversion rate 2.8%. Revenue 3x in 1 year.'
    },
    {
      name: 'Electronics Retailer (Growing Chaos)',
      problem: 'Inventory doesn\'t match reality. Fulfillment is manual. Customer service overwhelmed. Margins eroding.',
      action: 'Odoo ERP implementation, inventory automation, marketing focus shift to retention.',
      outcome: 'Fulfillment time 50% faster. Inventory accuracy 98%. Customer lifetime value up 35%.'
    },
    {
      name: 'Niche B2B E-commerce',
      problem: 'Getting found is impossible. On Google page 10 for everything. PPC budget wasted.',
      action: 'Technical SEO overhaul, content marketing strategy, PPC optimization.',
      outcome: 'Ranking on page 1 for 50+ keywords in 6 months. Organic revenue now 40% of total.'
    }
  ];

  const whyUs = [
    {
      title: 'We Live in E-commerce Data',
      description: 'We know what works in your space. Conversion benchmarks, customer journey, seasonal patterns—we see the patterns.'
    },
    {
      title: 'We Measure Everything',
      description: 'Every decision is ROI-based. Better site = more sales. Better marketing = lower CAC. Better ops = higher margins.'
    },
    {
      title: 'We\'re Tech AND Marketing',
      description: 'It\'s not just about a pretty website. It\'s about a site that sells. A backend that doesn\'t slow you down. Marketing that converts.'
    },
    {
      title: 'We Grow With You',
      description: 'From small store to enterprise. We\'ve got solutions for every stage—and we know which problems come next.'
    },
    {
      title: 'We\'re Obsessed With Your Margins',
      description: 'Every system we build, every hire we place, every marketing campaign we run—it\'s about your profit, not vanity metrics.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>E-commerce Solutions | Web Development, Digital Marketing & Systems | RioBizSols</title>
        <meta name="description" content="Grow your e-commerce business. Modern websites, mobile apps, digital marketing, and inventory systems designed for online retailers." />
        <meta name="keywords" content="e-commerce development, online store, conversion optimization, SEO for e-commerce, Odoo e-commerce, digital marketing" />
        <meta property="og:title" content="E-commerce Growth Solutions | RioBizSols" />
        <meta property="og:description" content="From improving conversion rates to automating operations—we help e-commerce businesses sell more and operate better." />
        <meta property="og:url" content="https://riobizsols.com/industry/ecommerce" />
        <link rel="canonical" href="https://riobizsols.com/industry/ecommerce" />
      </Helmet>

      <div className="industry-landing">
        {/* Hero */}
        <section className="industry-hero ecommerce">
          <div className="hero-content">
            <h1>Sell More. Run Smoother.</h1>
            <p>Your e-commerce business is only as good as your website, your marketing, and your operations. We make all three work together.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="cta-primary" onClick={() => handleCTA('hero_contact')}>
                Let's Grow Your Business
              </Link>
              <Link to="/compare/web-development" className="cta-secondary">
                See Our Web Solutions
              </Link>
            </div>
          </div>
          <div className="hero-background">
            <div className="hero-shape"></div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="challenges-section">
          <div className="container">
            <h2>What's Slowing You Down?</h2>
            <p className="section-intro">We fix these problems every week.</p>
            <div className="challenges-grid">
              {painPoints.map((point, idx) => (
                <div key={idx} className="challenge-card">
                  <div className="challenge-icon">{point.icon}</div>
                  <h3>{point.title}</h3>
                  <p className="challenge-text">{point.description}</p>
                  <p className="challenge-solution"><strong>Solution:</strong> {point.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services for E-commerce */}
        <section className="services-mapping">
          <div className="container">
            <h2>How We Help E-commerce Businesses</h2>
            <div className="services-grid">
              {services.map((item, idx) => (
                <div key={idx} className="service-mapping-card">
                  <h3>{item.service}</h3>
                  <p className="service-why">{item.why}</p>
                  <p className="service-impact">📈 {item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey by Business Size */}
        <section className="timeline-section">
          <div className="container">
            <h2>Your E-commerce Journey</h2>
            <p className="section-intro">Different scale. Different needs. Same strategic partner.</p>
            <div className="timeline-grid">
              {ecommerceJourney.map((stage, idx) => (
                <div key={idx} className="timeline-card">
                  <h4 className="phase-name">{stage.stage}</h4>
                  <p className="phase-goal"><strong>Goal:</strong> {stage.goal}</p>
                  <p className="phase-what"><strong>Focus:</strong> {stage.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Success Stories */}
        <section className="scenarios-section">
          <div className="container">
            <h2>Real E-commerce Success Stories</h2>
            <div className="scenarios-grid">
              {realStories.map((story, idx) => (
                <div key={idx} className="scenario-card">
                  <h4>{story.name}</h4>
                  <div className="scenario-part">
                    <strong>The Problem:</strong>
                    <p>{story.problem}</p>
                  </div>
                  <div className="scenario-part">
                    <strong>What We Did:</strong>
                    <p>{story.action}</p>
                  </div>
                  <div className="scenario-part result">
                    <strong>The Result:</strong>
                    <p>{story.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why E-commerce Businesses Choose Us</h2>
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
            <h2>Ready to Sell More?</h2>
            <p>Whether you want a better website, more customers, or a system that doesn't make you want to scream—let's talk.</p>
            <Link to="/contact" className="cta-primary large" onClick={() => handleCTA('final_cta')}>
              Get a Free Growth Audit
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default EcommerceIndustry;
