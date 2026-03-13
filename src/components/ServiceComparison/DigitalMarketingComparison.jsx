import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../css/ServiceComparison.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const DigitalMarketingComparison = () => {
  const handleCTA = (service) => {
    trackServiceInterest(`marketing_${service}`);
  };

  const channels = [
    {
      name: 'SEO (Search Engine Optimization)',
      icon: '🔍',
      tagline: 'Earn traffic that actually trusts you',
      description: 'People find you by searching for solutions. You show up because you\'re actually helpful.',
      timeline: '3-12 months to see real results',
      cost: '$$$',
      costDetail: 'Monthly retainer or per-project',
      pros: [
        'Long-term traffic that keeps flowing',
        'Visitors who actively want what you offer',
        'Builds credibility and authority',
        'Lower cost per lead long-term',
        'Works while you sleep'
      ],
      cons: [
        'Slow to start (patience required)',
        'Algorithm changes beyond your control',
        'Requires consistent content',
        'Competitive industries take longer'
      ],
      bestFor: 'B2B services, local businesses, long-term plays',
      scenario: 'Your blog post ranks #2 for "how to choose staffing firms." Three years later, it\'s still bringing leads. That\'s SEO.'
    },
    {
      name: 'SEM (Search Engine Marketing / PPC)',
      icon: '💰',
      tagline: 'Pay for visibility, get instant results',
      description: 'Your ads show up when people search. You pay only when they click. Immediate traffic.',
      timeline: 'Days to see results',
      cost: '$$$',
      costDetail: 'Per click (typically $2-50 depending on competition)',
      pros: [
        'Instant visibility and traffic',
        'Highly targeted (people actively searching)',
        'Easy to measure ROI',
        'Control your budget precisely',
        'Works in competitive markets'
      ],
      cons: [
        'Costs money with every click',
        'Traffic stops when budget stops',
        'Can get expensive in competitive niches',
        'Requires constant optimization'
      ],
      bestFor: 'Immediate lead generation, seasonal campaigns, highly competitive keywords',
      scenario: 'You bid on "emergency staffing solutions" and show up in Google ads within hours. One click costs $8, but it lands a $50K contract.'
    },
    {
      name: 'Social Media Marketing',
      icon: '📱',
      tagline: 'Build relationships, not just leads',
      description: 'Meet your audience where they already hang out. Facebook, LinkedIn, Instagram. Real conversations.',
      timeline: '2-6 months to build momentum',
      cost: '$$',
      costDetail: 'Content creation + ad spend (variable)',
      pros: [
        'Lower ad costs than Google',
        'Build community and loyalty',
        'Direct conversation with audience',
        'Great for brand awareness',
        'Retargeting visitors cheaply'
      ],
      cons: [
        'Organic reach is declining (need to pay)',
        'Algorithm changes affect visibility',
        'Time-intensive if doing it right',
        'Less direct ROI tracking'
      ],
      bestFor: 'B2B (LinkedIn), consumer brands, relationship-based businesses',
      scenario: 'Your LinkedIn content gets 500 views. Five of those people request demos. Two become customers. Total spend: $40.'
    },
    {
      name: 'Content Marketing (Blog/Email)',
      icon: '📧',
      tagline: 'Give value first, sell later',
      description: 'Create helpful content (blogs, guides, emails). Build an audience. They trust you. Then they buy.',
      timeline: '4-12 months for traction',
      cost: '$$',
      costDetail: 'Content creation costs (writing, design, tools)',
      pros: [
        'Builds massive credibility',
        'Creates content assets that last',
        'Highest trust and engagement',
        'Feeds SEO and social efforts',
        'Lower cost per lead (long-term)'
      ],
      cons: [
        'Very slow to start',
        'Requires consistent publishing',
        'Heavy lift on creation',
        'Hard to measure early ROI'
      ],
      bestFor: 'Thought leadership, trust-building, complex sales',
      scenario: 'You send a weekly email to 5,000 subscribers. One helps 2 people switch from your competitor. Your email database is now worth more than ads.'
    },
    {
      name: 'Influencer / Affiliate Marketing',
      icon: '👥',
      tagline: 'Let others vouch for you',
      description: 'Pay people with existing audiences to recommend you. Leverages trust they\'ve already built.',
      timeline: '1-2 months to set up and test',
      cost: '$$ (performance-based)',
      costDetail: 'Typically commission-based or flat fee per post',
      pros: [
        'Instant credibility (others vouch for you)',
        'Taps into existing audiences',
        'Pay for results only',
        'Authentic recommendations matter more'
      ],
      cons: [
        'Quality varies wildly',
        'Less control over message',
        'Vetting influencers takes time',
        'Fake followers are a real problem'
      ],
      bestFor: 'E-commerce, consumer brands, niche communities',
      scenario: 'A known recruiter with 10K followers mentions your staffing firm. Their audience trusts them. Suddenly you\'re "the staffing people they recommend."'
    },
    {
      name: 'Paid Display / Retargeting',
      icon: '🎯',
      tagline: 'Stay top-of-mind with people who already know you',
      description: 'Show ads to people who visited your site. Remind them you exist while they\'re browsing other sites.',
      timeline: 'Days to see impressions',
      cost: '$$',
      costDetail: 'CPM (cost per thousand impressions) typically $2-15',
      pros: [
        'Very cost-effective',
        'Huge reach across the web',
        'Great for brand awareness',
        'Low cost per impression',
        'Easy to scale'
      ],
      cons: [
        'Lower conversion rates than direct response',
        'Needs critical mass of site visitors',
        'Brand-awareness metric (softer ROI)',
        'Ad fatigue is real'
      ],
      bestFor: 'Brand building, awareness campaigns, remarketing',
      scenario: 'Someone visits your site and bounces. Then you follow them around the web with ads. 60% eventually come back. Half of those convert.'
    }
  ];

  const comparisonMatrix = [
    { metric: 'Speed to Results', seo: '3-12 mo', sem: '1-7 days', social: '2-6 mo', content: '4-12 mo', influencer: '1-2 mo', display: 'Immediate' },
    { metric: 'Cost Per Lead', seo: '$50-200', sem: '$10-100', social: '$20-80', content: '$5-30 (longterm)', influencer: '$20-200', display: '$5-50' },
    { metric: 'Sustainability', seo: 'High (stays)', sem: 'Low (stops)', social: 'Medium', content: 'High (stays)', influencer: 'Medium', display: 'Medium' },
    { metric: 'Effort Required', seo: 'Moderate-High', sem: 'Moderate', social: 'High', content: 'Very High', influencer: 'Low-Moderate', display: 'Low' },
    { metric: 'Targeting Precision', seo: 'High', sem: 'Very High', social: 'High', content: 'Medium', influencer: 'Medium', display: 'Medium' },
    { metric: 'Brand Impact', seo: 'Very High', sem: 'Medium', social: 'Very High', content: 'Very High', influencer: 'Very High', display: 'Medium' },
  ];

  const realWorldScenarios = [
    {
      scenario: 'You\'re a staffing firm in a crowded market',
      problem: 'Everyone claims to find "top talent." Nobody stands out.',
      solution: 'Combine SEO (rank for "best recruiters in [city]") + LinkedIn ads (target HR managers). Content blogs about hiring strategies.',
      why: 'Mix positions you at multiple touchpoints. SEO builds long-term credibility. Ads handle immediate demand. Content proves expertise.'
    },
    {
      scenario: 'You need leads next month (not 6 months)',
      problem: 'SEO takes forever. Organic reach is dead. You can\'t wait.',
      solution: 'PPC + retargeting + email list. Get ads live in 48 hours. Retarget site visitors who didn\'t convert.',
      why: 'Fast, measurable, controllable. You pay but you know exactly what you\'re getting.'
    },
    {
      scenario: 'You have limited budget ($1,500/month)',
      problem: 'Can\'t do everything. Need to pick wisely.',
      solution: 'Start with content + organic social. $800 for freelancer blogs, $700 for paid promotion. Zero ad spend yet.',
      why: 'Build assets that compound. Once you have traffic and email list, switch to ads with better targeting.'
    },
    {
      scenario: 'You\'ve been doing ads but ROI declined',
      problem: 'Ad costs went up. Conversions went down. You\'re throwing money at platforms.',
      solution: 'Shift to content + SEO. Build organic traffic. Use retargeting instead of top-of-funnel ads.',
      why: 'Your ad costs are inflated because everyone\'s competing. Organic sources are cheaper long-term once established.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Channels Comparison | SEO vs SEM vs Social | RioBizSols</title>
        <meta name="description" content="Compare digital marketing channels: SEO, PPC, social media, content marketing, and more. Find what works for your business." />
        <meta name="keywords" content="digital marketing comparison, SEO vs PPC, social media marketing, content marketing, influencer marketing" />
        <meta property="og:title" content="Digital Marketing Channels Comparison | RioBizSols" />
        <meta property="og:description" content="SEO vs SEM vs Social vs Content: Which channel should you actually invest in?" />
        <meta property="og:url" content="https://riobizsols.com/compare/digital-marketing" />
        <link rel="canonical" href="https://riobizsols.com/compare/digital-marketing" />
      </Helmet>

      <div className="comparison-page">
        {/* Hero */}
        <div className="comparison-hero">
          <h1 className="comparison-hero-title">Digital Marketing Channels: Which One Gets Your Business Results?</h1>
          <p className="comparison-hero-subtitle">
            SEO, PPC, Social, Email, Influencers. They're not all the same. Let's find your edge.
          </p>
        </div>

        {/* Channels Overview */}
        <section className="comparison-overview">
          <div className="container">
            <h2>The Six Paths to Visibility</h2>
            <div className="service-grid">
              {channels.map((channel, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-icon">{channel.icon}</div>
                  <h3>{channel.name}</h3>
                  <p className="service-tagline">{channel.tagline}</p>
                  <div className="service-meta">
                    <span className="meta-item">⏱️ {channel.timeline}</span>
                    <span className="meta-item">💰 {channel.cost}</span>
                  </div>
                  <Link to="/our-service/digital-marketing" className="service-learn-more">Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="comparison-matrix-section">
          <div className="container">
            <h2>Side-by-Side Comparison</h2>
            <div className="matrix-wrapper">
              <table className="comparison-matrix">
                <thead>
                  <tr>
                    <th>Metric</th>
                    {channels.map((c, i) => <th key={i}>{c.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx}>
                      <td className="matrix-label">{row.metric}</td>
                      <td>{row.seo}</td>
                      <td>{row.sem}</td>
                      <td>{row.social}</td>
                      <td>{row.content}</td>
                      <td>{row.influencer}</td>
                      <td>{row.display}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Breakdowns */}
        <section className="service-deep-dive">
          <div className="container">
            <h2>The Full Picture</h2>
            <div className="deep-dive-grid">
              {channels.map((channel, idx) => (
                <div key={idx} className="dive-card">
                  <h3>{channel.name}</h3>
                  <p className="dive-intro">{channel.description}</p>
                  
                  <div className="dive-section">
                    <strong>✓ Why it works:</strong>
                    <ul className="feature-list">
                      {channel.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                    </ul>
                  </div>

                  <div className="dive-section">
                    <strong>✗ The catches:</strong>
                    <ul className="feature-list negative">
                      {channel.cons.map((con, i) => <li key={i}>{con}</li>)}
                    </ul>
                  </div>

                  <div className="dive-section">
                    <strong>🎯 Best for:</strong>
                    <p>{channel.bestFor}</p>
                  </div>

                  <div className="dive-section highlight">
                    <strong>Real Example:</strong>
                    <p><em>"{channel.scenario}"</em></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-World Scenarios */}
        <section className="scenarios-section">
          <div className="container">
            <h2>Your Situation. Your Solution.</h2>
            <div className="scenarios-grid">
              {realWorldScenarios.map((item, idx) => (
                <div key={idx} className="scenario-card">
                  <h3>{item.scenario}</h3>
                  <div className="scenario-part problem">
                    <strong>🚨 The Problem:</strong>
                    <p>{item.problem}</p>
                  </div>
                  <div className="scenario-part solution">
                    <strong>💡 The Solution:</strong>
                    <p>{item.solution}</p>
                  </div>
                  <div className="scenario-part why">
                    <strong>✓ Why it works:</strong>
                    <p>{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Framework */}
        <section className="strategy-framework">
          <div className="container">
            <h2>The Winning Strategy (Hint: It's a Mix)</h2>
            <div className="framework-content">
              <div className="framework-section">
                <h3>🚀 Quick Wins (Months 1-3)</h3>
                <p><strong>PPC + Retargeting</strong> - Get immediate traffic while you build long-term assets.</p>
              </div>
              <div className="framework-section">
                <h3>📈 Foundation Building (Months 2-6)</h3>
                <p><strong>Content + SEO</strong> - Create assets that keep working. Build organic traffic. Lower ad costs.</p>
              </div>
              <div className="framework-section">
                <h3>💪 Scaling (Months 6+)</h3>
                <p><strong>Social + Email</strong> - Leverage your audience. Direct relationships. Lower CAC, higher LTV.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="comparison-cta">
          <div className="container">
            <h2>Not Sure What Your Business Needs?</h2>
            <p>This isn't one-size-fits-all. We audit your situation and recommend the channels that'll actually move the needle for you—and skip the ones that won't.</p>
            <Link to="/contact" className="cta-button primary" onClick={() => handleCTA('comparison_page')}>
              Get a Custom Strategy
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalMarketingComparison;
