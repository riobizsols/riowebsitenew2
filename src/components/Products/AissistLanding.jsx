import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './RioALMLanding.css';
import CTABanner from './CTABanner';
import FAQAccordion from './FAQAccordion';

const AissistLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const segments = [
    {
      title: 'Students & Learners',
      description:
        'Build a presence early by contributing thoughtful comments to industry discussions and learning in public.'
    },
    {
      title: 'Business & Founders',
      description:
        'Show expertise, nurture leads and stay visible in your market without having to write every comment from scratch.'
    },
    {
      title: 'Recruiters',
      description:
        'Engage talent pools consistently with value-first comments and DMs while saving hours every week.'
    },
    {
      title: 'Freelancers',
      description:
        'Demonstrate authority, attract clients and network efficiently in multiple languages with authentic engagement.'
    }
  ];

  const featureBlocks = [
    {
      eyebrow: 'INSTANT ONBOARDING',
      title: 'Sign Up in Seconds',
      points: [
        'Install the Chrome extension and open LinkedIn – AIssist is ready when you are.',
        'Contextual assistant appears when you view posts, comments or profiles.',
        'No complex setup or training needed to get value from day one.'
      ]
    },
    {
      eyebrow: 'YOUR AUTHENTIC VOICE',
      title: 'Find Your Perfect Tone',
      points: [
        'Choose from professional, friendly, witty, motivational and more.',
        'Adaptive phrasing keeps your replies on-brand instead of sounding generic.',
        'Multilingual output so you can show up in the languages your network uses.'
      ]
    },
    {
      eyebrow: 'SMART CONTEXT',
      title: 'Understands the Conversation',
      points: [
        'Reads the LinkedIn post or thread so suggestions are relevant, not random.',
        'Highlights angles you can respond to while avoiding repetition.',
        'Semantic understanding keeps comments anchored to the original message.'
      ]
    },
    {
      eyebrow: 'TIME AMPLIFIER',
      title: 'Workflows That Compound Reach',
      points: [
        'Turn a few focused minutes into steady visibility across feeds and DMs.',
        'Use reusable templates and personas for recurring outreach patterns.',
        'Draft quickly, then refine in your own words before posting.'
      ]
    },
    {
      eyebrow: 'SUSTAINABLE ENGAGEMENT',
      title: 'Stay Consistent Without Burnout',
      points: [
        'Show up daily with meaningful contributions without the blank-page feeling.',
        'Quality scales with volume – more touchpoints, same authentic tone.',
        'Build a repeatable “micro‑habit” around commenting and follow-ups.'
      ]
    }
  ];

  const metrics = [
    {
      label: 'Comments Generated',
      value: '120K+',
      description: 'High‑quality contextual LinkedIn comments created.'
    },
    {
      label: 'Languages Supported',
      value: '45+',
      description: 'Languages and dialects supported with natural tone.'
    },
    {
      label: 'Avg Time Saved',
      value: '6h/wk',
      description: 'Average weekly time saved by active users.'
    },
    {
      label: 'User Countries',
      value: '30+',
      description: 'Countries where professionals engage with AIssist.'
    }
  ];

  const faqs = [
    {
      question: 'What is AIssist?',
      answer:
        'AIssist is a LinkedIn engagement assistant that helps you craft authentic comments, replies and messages in multiple languages so you can show up consistently without spending hours every day.'
    },
    {
      question: 'Does AIssist automate posting for me?',
      answer:
        'No. AIssist assists with drafting. You always review and post manually to preserve authenticity and stay aligned with LinkedIn platform guidelines.'
    },
    {
      question: 'Which languages are supported?',
      answer:
        'AIssist currently supports 45+ languages including English, Spanish, German, French, Portuguese, Hindi and more. You can also set preferred languages per persona.'
    },
    {
      question: 'Will my tone stay consistent?',
      answer:
        'Yes. You can choose tone presets and refine a custom prompt so AIssist better reflects your style over time while still adapting to each conversation.'
    },
    {
      question: 'How is pricing determined?',
      answer:
        'Pricing is localized where available; otherwise global fallback pricing applies. All paid plans are billed securely via Stripe. You can always start with the free tier.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AIssist – Smarter LinkedIn Engagement Assistant | RioBizSols</title>
        <meta
          name="description"
          content="AIssist is a smarter LinkedIn engagement assistant that generates context‑aware, multilingual comments and replies that sound like you—saving hours every week."
        />
        <link rel="canonical" href="https://riobizsols.com/products/aissist" />
      </Helmet>

      {/* Hero Section */}
      <section className="alm-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Smarter LinkedIn Engagement Assistant</h1>
            <p className="hero-subtitle">
              Generate context‑aware, multilingual LinkedIn comments & replies that sound like you—
              save hours every week.
            </p>
            <p className="hero-subtext">
              AIssist is your companion for authentic engagement at scale across comments, replies
              and DMs.
            </p>
            <div className="hero-ctas">
              <a
                href="https://chromewebstore.google.com/detail/aissist-connect-comment-e/pncjbdpggmlfclmaifflmbidojgokban"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Add to Chrome
              </a>
              <a
                href="https://oneaissist.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Pricing
              </a>
            </div>
            <div className="hero-badges">
              <span>🌐 45+ Languages</span>
              <span>🧠 Custom Prompt</span>
              <span>🎯 Adaptive Tones</span>
              <span>💬 DM Assist</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-placeholder">
              <div className="placeholder-header">LinkedIn Comment Preview</div>
              <div className="placeholder-content">
                <div className="placeholder-bar"></div>
                <div className="placeholder-bar short"></div>
                <div className="placeholder-grid">
                  <div className="placeholder-cell">Post Context</div>
                  <div className="placeholder-cell">Tone</div>
                  <div className="placeholder-cell">Draft Comment</div>
                  <div className="placeholder-cell">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="alm-outcomes">
        <div className="container">
          <h2 className="section-title">Your All‑in‑One LinkedIn Companion</h2>
          <p className="section-subtitle">
            AIssist is perfect for professionals, founders, recruiters and learners who want
            authentic engagement at scale.
          </p>
          <div className="outcomes-grid">
            {segments.map((seg) => (
              <div key={seg.title} className="outcome-card">
                <div className="outcome-icon">✓</div>
                <h3 className="outcome-title">{seg.title}</h3>
                <p className="outcome-description">{seg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="alm-overview">
        <div className="container">
          {featureBlocks.map((block) => (
            <div key={block.title} className="overview-content" style={{ marginBottom: '40px' }}>
              <p className="section-subtitle" style={{ textTransform: 'uppercase', marginBottom: 8 }}>
                {block.eyebrow}
              </p>
              <h2 className="section-title" style={{ marginBottom: 12 }}>
                {block.title}
              </h2>
              <ul className="security-features">
                {block.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="alm-industries">
        <div className="container">
          <h2 className="section-title">Platform Impact</h2>
          <div className="industries-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="industry-card">
                <h3>{metric.value}</h3>
                <p className="industry-label">{metric.label}</p>
                <p className="industry-benefits-single">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Pricing Teaser */}
      <section className="alm-comparison">
        <div className="container">
          <h2 className="section-title">Upgrade Your AIssist Experience</h2>
          <p className="section-subtitle">
            Start free to validate your workflow and upgrade when you are ready to scale authentic
            reach.
          </p>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-col">Plan</div>
              <div className="comparison-col">Best For</div>
              <div className="comparison-col">Highlights</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Free</strong>
              </div>
              <div className="comparison-col">Getting started</div>
              <div className="comparison-col">
                20 AI generations/day, 5 personas, core tones, GPT‑3.5 responses.
              </div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Pro</strong>
              </div>
              <div className="comparison-col">Scaling engagement</div>
              <div className="comparison-col">
                Advanced analytics, 45+ languages, 25+ tones, DM assist, higher daily limits.
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a
              href="https://oneaissist.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-secondary"
            >
              View Full AIssist Pricing
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="alm-faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Ready to Upgrade Your LinkedIn Engagement?"
        subtitle="Install AIssist, start with the free plan, and see how much time you save while staying authentic."
        ctaText="Add AIssist to Chrome"
      />
    </>
  );
};

export default AissistLanding;

