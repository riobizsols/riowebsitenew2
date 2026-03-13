import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../css/ServiceComparison.css';
import { trackServiceInterest } from '../../services/visitorTracking';

const AppDevComparison = () => {
  const handleCTA = (service) => {
    trackServiceInterest(`appdev_${service}`);
  };

  const approaches = [
    {
      name: 'Native Development (iOS + Android)',
      icon: '⚡',
      ideal: 'Maximum performance and features',
      description: 'Apps built specifically for iOS and Android. Separate codebases. Maximum control.',
      timeline: '6-12 months (both platforms)',
      cost: '$$$$$$',
      costDetail: '$150K - $500K+',
      whatYouGet: 'Two apps that perform beautifully. Access all device features (camera, GPS, sensors, notifications). Highest user ratings.',
      pros: [
        'Best performance possible',
        'Full access to device hardware',
        'Best user experience (native look & feel)',
        'App store features and optimization',
        'Can work offline seamlessly',
        'Push notifications that actually work'
      ],
      cons: [
        'Expensive (2 apps, 2 teams)',
        'Twice the development time',
        'Maintenance complexity',
        'Bug fixes on both platforms',
        'Requires two different skill sets'
      ],
      whenToUse: 'Heavy apps, games, camera-dependent apps, enterprise apps that need bulletproof performance',
      realWorld: 'Instagram, Uber, Spotify, TikTok. These apps demanded the best performance and native features available.'
    },
    {
      name: 'Cross-Platform (React Native / Flutter)',
      icon: '🎯',
      ideal: 'One codebase, both platforms',
      description: 'Write once, deploy to iOS and Android. Same code, mostly. 30-40% code reuse typical.',
      timeline: '4-8 months (both platforms)',
      cost: '$$$$',
      costDetail: '$80K - $250K',
      whatYouGet: 'Apps on both platforms faster. One team can maintain both. Almost native performance for most use cases.',
      pros: [
        'Faster time to market',
        'One team can work on both platforms',
        'Lower development cost (20-40% savings)',
        'Easier to maintain',
        'Faster updates and patches',
        'Good performance for most apps'
      ],
      cons: [
        'Not quite as fast as native',
        'Fewer device features accessible',
        'Platform-specific bugs',
        'Library ecosystem still growing',
        'May need native developers anyway'
      ],
      whenToUse: 'MVP launch, startup apps, CRUD apps, apps without heavy animations or complex features',
      realWorld: 'Slack, Discord, Shopify, Airbnb. These apps needed to be on both platforms quickly without massive budgets.'
    },
    {
      name: 'Web App (Progressive Web App / PWA)',
      icon: '🌐',
      ideal: 'Everyone accesses via browser',
      description: 'One codebase. Runs on browser. Can work offline. One-click install. No app store gatekeeping.',
      timeline: '3-6 months',
      cost: '$$',
      costDetail: '$30K - $100K',
      whatYouGet: 'An app that works on phones, tablets, and desktop. Zero friction distribution. Automatic updates.',
      pros: [
        'Lowest cost to develop',
        'Works everywhere (mobile + desktop + web)',
        'Instant updates (no app store delays)',
        'No app store restrictions',
        'Works offline (PWA)',
        'One codebase, one team'
      ],
      cons: [
        'Limited hardware access',
        'Performance not quite native',
        'No push notifications (yet)',
        'Depends on browser adoption',
        'Less discoverable than app stores',
        'Still relatively new technology'
      ],
      whenToUse: 'Internal tools, startups, apps that need frequent updates, device-agnostic solutions',
      realWorld: 'Twitter Lite, Gmail, Spotify Web, Figma. These started as web and perform nearly as well as native.'
    },
    {
      name: 'Hybrid / Web Wrapper',
      icon: '📦',
      ideal: 'Quick and dirty way to app stores',
      description: 'Take your website, wrap it in a mobile shell, publish to app stores. Mobile web in an app container.',
      timeline: '2-4 weeks',
      cost: '$',
      costDetail: '$10K - $30K',
      whatYouGet: 'Your website as an app. Gets you in the app stores. Maintenance nightmare.',
      pros: [
        'Fastest time to market',
        'Lowest cost',
        'One codebase (just your website)',
        'Simple to deploy'
      ],
      cons: [
        'Terrible user experience',
        'Slow and clunky',
        'App store rejection risk',
        'Maintenance hell',
        'Bad reviews incoming',
        'Users hate it'
      ],
      whenToUse: 'Never? This is usually a mistake.',
      realWorld: 'Many failed startups tried this. PhoneGap apps were infamously bad. Skip this.'
    },
    {
      name: 'No-Code / Low-Code',
      icon: '🔧',
      ideal: 'Maximum speed, minimal code',
      description: 'Use platforms like Flutter Flow, no-code builders. Point-and-click app development.',
      timeline: '2-8 weeks',
      cost: '$$',
      costDetail: '$15K - $50K + monthly platform fees',
      whatYouGet: 'An app deployed without writing code. Great for MVPs and internal tools.',
      pros: [
        'Extremely fast development',
        'Non-technical founders can build',
        'Low upfront cost',
        'Good for MVPs and testing',
        'Built-in backend',
        'No infrastructure management'
      ],
      cons: [
        'Limited customization',
        'Locked into platform',
        'Monthly platform fees',
        'Scalability concerns',
        'Vendor risk (platform changes)',
        'Not suitable for complex logic'
      ],
      whenToUse: 'MVPs, internal tools, simple CRUD apps, market validation before investment',
      realWorld: 'Many startups use FlutterFlow or Bubble to test ideas before committing to "real" development.'
    }
  ];

  const comparisonMatrix = [
    { aspect: 'Time to Market', native: '6-12 mo', crossPlatform: '4-8 mo', web: '3-6 mo', hybrid: '2-4 wk', noCode: '2-8 wk' },
    { aspect: 'Development Cost', native: 'Very High', crossPlatform: 'High', web: 'Medium', hybrid: 'Low', noCode: 'Low-Medium' },
    { aspect: 'Performance', native: 'Excellent', crossPlatform: 'Good', web: 'Good', hybrid: 'Poor', noCode: 'Fair' },
    { aspect: 'User Experience', native: 'Best', crossPlatform: 'Very Good', web: 'Good', hybrid: 'Poor', noCode: 'Fair' },
    { aspect: 'Customization', native: 'Unlimited', crossPlatform: 'Very High', web: 'Unlimited', hybrid: 'Limited', noCode: 'Limited' },
    { aspect: 'Scalability', native: 'Excellent', crossPlatform: 'Good', web: 'Excellent', hybrid: 'Fair', noCode: 'Fair' },
    { aspect: 'Maintenance', native: 'Complex', crossPlatform: 'Moderate', web: 'Easy', hybrid: 'Easy', noCode: 'Easy' },
    { aspect: 'Hardware Access', native: 'Full', crossPlatform: '80%', web: '30%', hybrid: '80%', noCode: 'Limited' },
  ];

  const decisionTree = [
    {
      question: 'Do you need to be in the App Store?',
      yes: 'Native, Cross-platform, or Hybrid',
      no: 'Web App or PWA'
    },
    {
      question: 'Is performance critical? (games, heavy animations)',
      yes: 'Native Development',
      no: 'Cross-platform or Web'
    },
    {
      question: 'Do you have $150K+ budget?',
      yes: 'Native (best experience)',
      no: 'Cross-platform or Web'
    },
    {
      question: 'Do you need it in 6 weeks or less?',
      yes: 'Web/PWA or No-Code',
      no: 'Choose based on features needed'
    },
  ];

  return (
    <>
      <Helmet>
        <title>App Development Approach Comparison | Native vs Cross-Platform vs Web | RioBizSols</title>
        <meta name="description" content="Compare app development approaches: Native iOS/Android vs Cross-platform vs Web apps vs PWA. Choose what's right for your project." />
        <meta name="keywords" content="native app development, cross-platform apps, react native, flutter, web app, PWA, app development cost" />
        <meta property="og:title" content="App Development Approach Comparison | RioBizSols" />
        <meta property="og:description" content="Native vs Cross-Platform vs Web: Which approach makes sense for your app project?" />
        <meta property="og:url" content="https://riobizsols.com/compare/app-development" />
        <link rel="canonical" href="https://riobizsols.com/compare/app-development" />
      </Helmet>

      <div className="comparison-page">
        {/* Hero */}
        <div className="comparison-hero">
          <h1 className="comparison-hero-title">App Development Approaches: Which One Gets You to Market Faster?</h1>
          <p className="comparison-hero-subtitle">
            Native. Cross-platform. Web. Each has tradeoffs. Let's find your best path.
          </p>
        </div>

        {/* Decision Tree */}
        <section className="decision-framework">
          <div className="container">
            <h2>Quick Decision Guide</h2>
            <div className="framework-grid">
              {decisionTree.map((item, idx) => (
                <div key={idx} className="framework-card">
                  <p className="fw-question">{item.question}</p>
                  <div className="fw-answer">
                    <span className="fw-yes">✓ {item.yes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approaches Overview */}
        <section className="comparison-overview">
          <div className="container">
            <h2>The Five Paths to an App</h2>
            <div className="service-grid">
              {approaches.map((app, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-icon">{app.icon}</div>
                  <h3>{app.name}</h3>
                  <p className="service-tagline">{app.ideal}</p>
                  <div className="service-meta">
                    <span className="meta-item">⏱️ {app.timeline}</span>
                    <span className="meta-item">💰 {app.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="comparison-matrix-section">
          <div className="container">
            <h2>Side-by-Side Breakdown</h2>
            <div className="matrix-wrapper">
              <table className="comparison-matrix">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    {approaches.map((a, i) => <th key={i}>{a.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx}>
                      <td className="matrix-label">{row.aspect}</td>
                      <td>{row.native}</td>
                      <td>{row.crossPlatform}</td>
                      <td>{row.web}</td>
                      <td>{row.hybrid}</td>
                      <td>{row.noCode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Deep Dives */}
        <section className="service-deep-dive">
          <div className="container">
            <h2>The Full Details</h2>
            <div className="deep-dive-grid">
              {approaches.map((app, idx) => (
                <div key={idx} className="dive-card">
                  <h3>{app.name}</h3>
                  <p className="dive-intro">{app.description}</p>

                  <div className="dive-section">
                    <strong>You'll get:</strong>
                    <p>{app.whatYouGet}</p>
                  </div>

                  <div className="dive-section">
                    <strong>✓ Pros:</strong>
                    <ul className="feature-list">
                      {app.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                    </ul>
                  </div>

                  <div className="dive-section">
                    <strong>✗ Cons:</strong>
                    <ul className="feature-list negative">
                      {app.cons.map((con, i) => <li key={i}>{con}</li>)}
                    </ul>
                  </div>

                  <div className="dive-section">
                    <strong>🎯 When to use it:</strong>
                    <p>{app.whenToUse}</p>
                  </div>

                  <div className="dive-section highlight">
                    <strong>Real Examples:</strong>
                    <p>{app.realWorld}</p>
                  </div>

                  <div className="dive-section">
                    <strong>Cost & Timeline:</strong>
                    <p>{app.timeline} • {app.costDetail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Scenarios */}
        <section className="scenarios-section">
          <div className="container">
            <h2>What's Your Situation?</h2>
            <div className="scenarios-grid">
              <div className="scenario-card">
                <h3>We're a startup. Speed matters.</h3>
                <p><strong>Recommendation:</strong> Cross-platform (React Native/Flutter) or Web/PWA</p>
                <p>Get to market in 4-6 months, not 12. Validate the idea. Raise funding. Scale properly later.</p>
              </div>
              <div className="scenario-card">
                <h3>We have the budget. Quality is #1.</h3>
                <p><strong>Recommendation:</strong> Native iOS + Android</p>
                <p>Best experience possible. Users rate it higher. Your brand looks premium. Worth the investment for the right app.</p>
              </div>
              <div className="scenario-card">
                <h3>We just want to test the idea.</h3>
                <p><strong>Recommendation:</strong> No-Code or Web App</p>
                <p>MVP in 4 weeks. Low risk. Validate market demand. Then decide on a bigger build.</p>
              </div>
              <div className="scenario-card">
                <h3>We need it both on mobile and desktop.</h3>
                <p><strong>Recommendation:</strong> Web App/PWA</p>
                <p>One codebase works everywhere. Mobile, tablet, desktop, all responsive. Biggest reach, lowest cost.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Guide */}
        <section className="strategy-framework">
          <div className="container">
            <h2>The Typical Smart Path</h2>
            <div className="framework-content">
              <div className="framework-section">
                <h3>Phase 1: Validation (Weeks 0-4)</h3>
                <p><strong>No-Code or Web MVP</strong> - Test the idea cheaply. Do people want it?</p>
              </div>
              <div className="framework-section">
                <h3>Phase 2: Early Traction (Weeks 4-16)</h3>
                <p><strong>Cross-Platform (React Native)</strong> - Get to market faster. Iterate based on users.</p>
              </div>
              <div className="framework-section">
                <h3>Phase 3: Scaling (Month 6+)</h3>
                <p><strong>Native (if revenue justifies)</strong> - Build iOS and Android separately for best experience. But only if it's working.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="comparison-cta">
          <div className="container">
            <h2>Let's Find Your Best Path Forward</h2>
            <p>App development is complex. Budget, timeline, quality, scalability—these all matter. We'll assess your specific situation and recommend the approach that actually fits your constraints.</p>
            <Link to="/contact" className="cta-button primary" onClick={() => handleCTA('comparison_page')}>
              Get a Free App Assessment
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AppDevComparison;
