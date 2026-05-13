import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FiFileText,
  FiUsers,
  FiLock,
  FiClipboard,
  FiUpload,
  FiCloud,
  FiUserMinus,
} from 'react-icons/fi';
import FeatureCard from './FeatureCard';
import CTABanner from './CTABanner';
import FAQAccordion from './FAQAccordion';
import laLawHeroImage from '../../assets/images/login_background.png';
import EnterpriseSecurityImage from '../../assets/images/enterprise-security.png';
import './RioALMLanding.css';

const LaLawLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyFeatures = [
    {
      icon: <FiUsers />,
      title: 'Advocate account management',
      description:
        'Create and maintain advocate profiles so each user works within a clear, approved account context.',
    },
    {
      icon: <FiClipboard />,
      title: 'Case & petition creation',
      description:
        'Open and manage legal cases digitally, then build petitions and related filings in a guided flow.',
    },
    {
      icon: <FiFileText />,
      title: 'Legal document generation',
      description:
        'Generate legal petitions and supporting documents from structured case data—less retyping, fewer inconsistencies.',
    },
    {
      icon: <FiUpload />,
      title: 'Document & ID uploads',
      description:
        'Attach supporting files and identity documents to the right case so everything stays organized and retrievable.',
    },
    {
      icon: <FiCloud />,
      title: 'Secure cloud-based data handling',
      description:
        'Case-related information lives in a secure cloud workspace designed for legal productivity—not scattered drives.',
    },
    {
      icon: <FiUserMinus />,
      title: 'Account deletion requests',
      description:
        'Users can request deletion of their account and associated data through the account deletion portal when they no longer need access.',
      actionLinkHref: '/products/la-law/account-deletion/request',
      actionLinkLabel: 'Account deletion request →',
    },
    {
      icon: <FiLock />,
      title: 'Encrypted data transmission',
      description:
        'Sensitive case and petition data is transmitted using encryption appropriate for legal workflows.',
    },
  ];

  const outcomes = [
    {
      title: 'Cases in one place',
      description:
        'Create and manage legal cases digitally instead of juggling notebooks, loose files, and ad-hoc folders.',
    },
    {
      title: 'Parties captured clearly',
      description:
        'Record complainant, accused, and advocate details in a structured format that stays with the matter.',
    },
    {
      title: 'Petitions without the scramble',
      description:
        'Generate legal petitions and documents from your case record, then refine before filing or sharing.',
    },
    {
      title: 'Evidence & IDs where they belong',
      description:
        'Upload and manage supporting files and identity documents alongside the case—not lost in chat threads.',
    },
    {
      title: 'Share when you are ready',
      description:
        'Download and share generated petitions through external channels such as email or messaging apps.',
    },
    {
      title: 'Access you can trust',
      description:
        'Email verification plus admin approval means only verified, approved users reach the application.',
    },
  ];

  const faqs = [
    {
      question: 'How do I sign in to La Law?',
      answer:
        'La Law uses email and password authentication. After you register, you verify your email; an administrator then approves your account before you can use the app.',
    },
    {
      question: 'Why is admin approval required?',
      answer:
        'Admin approval keeps the workspace limited to legitimate advocates and legal staff. It reduces the risk of unauthorized access to sensitive case and petition data.',
    },
    {
      question: 'What can advocates do inside the app?',
      answer:
        'You can create and manage cases, add complainant, accused, and advocate details, generate petitions and documents, upload supporting files and IDs, keep case information organized, and download or share petitions through email or messaging apps.',
    },
    {
      question: 'What categories does La Law fall under?',
      answer:
        'La Law is a productivity and legal workflow management application focused on case and petition management for advocates and legal teams.',
    },
    {
      question: 'What data may the app collect?',
      answer:
        'The app may collect your name, email address, phone number, legal and case-related documents, and user-generated petition data needed to run your matters.',
    },
    {
      question: 'How is my data protected?',
      answer:
        'User data is transmitted securely using encryption. Case content is handled in a secure cloud-based environment with access limited to verified, approved users.',
    },
    {
      question: 'Can I delete my account and data?',
      answer:
        'Yes. Users can request deletion of their account and associated data through the account deletion portal provided in the product.',
    },
    {
      question: 'Who is La Law intended for?',
      answer:
        'La Law is built for advocates, legal professionals, law firms, and legal assistants or interns who need a structured, digital way to manage cases and petitions.',
    },
  ];

  return (
    <div className="rio-alm-overview-page">
      <Helmet>
        <title>La Law — Legal Productivity & Case Management | RIO BizSols</title>
        <meta
          name="description"
          content="La Law is a legal productivity and case management app for advocates: cases, parties, petitions, secure uploads, encrypted transmission, email verification, and admin-approved access."
        />
        <meta
          name="keywords"
          content="La Law, legal case management, advocate software, petition generation, legal productivity, legal workflow, law firm app, RIO BizSols"
        />
        <meta name="author" content="RioBizSols" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="La Law — Legal Productivity & Case Management" />
        <meta
          property="og:description"
          content="Manage cases, parties, and petitions digitally—with secure cloud handling, encryption, and verified, admin-approved access."
        />
        <meta property="og:url" content="https://riobizsols.com/products/la-law" />
        <meta property="og:site_name" content="RioBizSols" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Law — Legal Productivity & Case Management" />
        <meta
          name="twitter:description"
          content="Cases, petitions, documents, and secure sharing—built for advocates and legal teams."
        />
        <link rel="canonical" href="https://riobizsols.com/products/la-law" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Product', 'SoftwareApplication'],
            name: 'La Law',
            description:
              'Legal productivity and case management application for advocates and legal professionals.',
            manufacturer: {
              '@type': 'Organization',
              name: 'RioBizSols',
              url: 'https://riobizsols.com',
            },
            applicationCategory: 'BusinessApplication',
            operatingSystem: ['Web'],
            offers: {
              '@type': 'Offer',
              price: 'Contact for pricing',
              priceCurrency: 'USD',
              availability: 'https://schema.org/OnlineOnly',
            },
            featureList: keyFeatures.map((f) => f.title).join(', '),
          })}
        </script>
      </Helmet>

      <section className="alm-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Legal productivity &amp; case management</h1>
            <p className="hero-subtitle">
              La Law helps advocates and legal professionals manage cases, parties, petitions, and documents
              digitally—so day-to-day legal work stays structured and easy to share when you need it.
            </p>
            <p className="hero-subtext">
              Secure login with email verification and admin-approved access. Encrypted transmission and
              secure cloud-based handling for your case data.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Talk to Us
              </Link>
              <Link to="/blog" className="btn btn-secondary">
                Read Insights
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-placeholder la-law-hero-photo-wrap">
              <img
                src={laLawHeroImage}
                alt="La Law — legal productivity and case management"
                className="hero-dashboard-image la-law-hero-photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="alm-outcomes">
        <div className="container">
          <h2 className="section-title">What La Law helps you do</h2>
          <p className="section-subtitle">Core outcomes aligned to how advocates actually work</p>
          <div className="outcomes-grid">
            {outcomes.map((outcome, index) => (
              <div key={index} className="outcome-card">
                <div className="outcome-icon">✓</div>
                <h3 className="outcome-title">{outcome.title}</h3>
                <p className="outcome-description">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alm-overview la-law-overview-section">
        <div className="container">
          <h2 className="section-title">Overview of La Law</h2>
          <p className="section-subtitle la-law-overview-intro-sub">
            How the product fits together—capabilities, access, and your case flow
          </p>
          <div className="overview-content la-law-overview-stack">
            <div className="la-law-overview-block">
              <p className="la-law-overview-lead">
                La Law is a legal productivity and case management application designed to help advocates and
                legal professionals efficiently manage legal workflows digitally.
              </p>
            </div>

            <div className="la-law-overview-block">
              <h3 className="la-law-overview-block-title">What you can do in the app</h3>
              <p className="la-law-overview-kicker">The app allows advocates to:</p>
              <ul className="la-law-overview-list">
                <li>Create and manage legal cases</li>
                <li>Add complainant, accused, and advocate details</li>
                <li>Generate legal petitions and documents</li>
                <li>Upload and manage supporting files and identity documents</li>
                <li>Organize case-related information in a structured format</li>
                <li>
                  Download and share generated petitions through external platforms such as email or messaging
                  apps
                </li>
              </ul>
            </div>

            <div className="la-law-overview-block">
              <h3 className="la-law-overview-block-title">Secure login &amp; access</h3>
              <p className="la-law-overview-kicker">The platform uses a secure login system with:</p>
              <ul className="la-law-overview-list">
                <li>Email and password authentication</li>
                <li>Email verification</li>
                <li>Admin approval-based access control</li>
              </ul>
              <div className="la-law-overview-callout" role="note">
                To ensure data security and controlled access, only verified and approved users can access the
                application.
              </div>
            </div>

            <div className="la-law-overview-block">
              <h3 className="la-law-overview-block-title">From case setup to sharing</h3>
              <p className="la-law-overview-kicker la-law-overview-kicker--tight">
                A simple flow from opening a matter to distributing your petition.
              </p>
              <div className="lifecycle-diagram la-law-overview-lifecycle">
                <div className="lifecycle-step">
                  <div className="step-number">1</div>
                  <div className="step-label">Cases</div>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-step">
                  <div className="step-number">2</div>
                  <div className="step-label">Parties</div>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-step">
                  <div className="step-number">3</div>
                  <div className="step-label">Documents</div>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-step">
                  <div className="step-number">4</div>
                  <div className="step-label">Petition</div>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-step">
                  <div className="step-number">5</div>
                  <div className="step-label">Share</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-modules" id="la-law-capabilities">
        <div className="container">
          <h2 className="section-title">Key features</h2>
          <p className="section-subtitle">
            Productivity and legal workflow capabilities in one structured workspace
          </p>
          <div className="modules-grid">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                actionLinkHref={feature.actionLinkHref}
                actionLinkLabel={feature.actionLinkLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="alm-how-it-works">
        <div className="container">
          <h2 className="section-title">From signup to your first case</h2>
          <p className="section-subtitle">How advocates typically get started with La Law</p>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-circle">1</div>
              <h3>Register</h3>
              <p>Create your advocate account with email and password.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">2</div>
              <h3>Verify email</h3>
              <p>Confirm your email address to prove you control the inbox.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">3</div>
              <h3>Admin approval</h3>
              <p>An administrator reviews and approves access before you can use the app.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">4</div>
              <h3>Build the case file</h3>
              <p>Add complainant, accused, and advocate details; upload IDs and supporting documents.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">5</div>
              <h3>Generate &amp; share</h3>
              <p>Create petitions and legal documents, then download or share via email or messaging apps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-deployment">
        <div className="container">
          <h2 className="section-title">Secure cloud &amp; data handling</h2>
          <p className="section-subtitle">Built for sensitive legal content and controlled access</p>
          <div className="deployment-options">
            <div className="deployment-card">
              <h3 className="deployment-title">Secure cloud workspace</h3>
              <p className="deployment-description">
                Case-related information is stored and organized in a secure, cloud-based environment suited
                to legal productivity—not scattered across personal devices and inboxes.
              </p>
              <ul className="deployment-benefits">
                <li>Structured case records</li>
                <li>Centralized uploads</li>
                <li>Controlled user access</li>
                <li>Designed for advocate workflows</li>
              </ul>
            </div>
            <div className="deployment-card">
              <h3 className="deployment-title">Encrypted transmission</h3>
              <p className="deployment-description">
                User and case data is transmitted securely using encryption appropriate for legal workflows,
                reducing exposure in transit.
              </p>
              <ul className="deployment-benefits">
                <li>Encrypted data transmission</li>
                <li>Protection for petition and document payloads</li>
                <li>Aligned with secure login practices</li>
                <li>Supports confidential matter content</li>
              </ul>
            </div>
            <div className="deployment-card">
              <h3 className="deployment-title">Account lifecycle</h3>
              <p className="deployment-description">
                Access stays limited to verified, approved users. When someone no longer needs the app, they
                can request account deletion through the provided portal.
              </p>
              <ul className="deployment-benefits">
                <li>Email verification gate</li>
                <li>Admin approval before access</li>
                <li>Account deletion request support</li>
                <li>Data removal per your process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-security la-law-security-section" aria-labelledby="la-law-security-heading">
        <div className="container">
          <h2 id="la-law-security-heading" className="section-title">
            Security &amp; access control
          </h2>
          <p className="section-subtitle la-law-security-intro">
            Verification, approval, and encryption working together
          </p>
          <div className="la-law-security-body">
            <div className="la-law-security-pillars">
              <article className="la-law-security-pillar">
                <h3 className="la-law-security-pillar-title">Email / password authentication</h3>
                <p className="la-law-security-pillar-text">
                  Standard credentials paired with verification and approval steps.
                </p>
              </article>
              <article className="la-law-security-pillar">
                <h3 className="la-law-security-pillar-title">Email verification</h3>
                <p className="la-law-security-pillar-text">
                  Confirms ownership of the registered email before the account can progress.
                </p>
              </article>
              <article className="la-law-security-pillar">
                <h3 className="la-law-security-pillar-title">Admin approval</h3>
                <p className="la-law-security-pillar-text">
                  Only approved users receive access—reducing unauthorized entry to case and petition data.
                </p>
              </article>
              <article className="la-law-security-pillar la-law-security-pillar--encryption">
                <h3 className="la-law-security-pillar-title">Encrypted transmission</h3>
                <p className="la-law-security-pillar-text">
                  Helps protect sensitive legal content as it moves between client and cloud.
                </p>
              </article>
              <article className="la-law-security-pillar la-law-security-pillar--deletion">
                <h3 className="la-law-security-pillar-title">Account deletion</h3>
                <p className="la-law-security-pillar-text">
                  Users may request deletion of their account and associated data through the{' '}
                  <Link to="/products/la-law/account-deletion" className="la-law-security-inline-link">
                    account deletion portal
                  </Link>
                  .
                </p>
              </article>
            </div>
            <figure className="la-law-security-figure">
              <img
                src={EnterpriseSecurityImage}
                alt=""
                className="la-law-security-figure-img"
                width={280}
                height={373}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="la-law-security-figure-caption">Secure access and encryption</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="alm-industries la-law-intended-users">
        <div className="container">
          <h2 className="section-title">Intended users</h2>
          <p className="section-subtitle">La Law is intended for advocates and legal teams who need structure</p>
          <div className="industries-grid">
            <div className="industry-card">
              <h3>Advocates</h3>
              <p className="industry-label">Individual practitioners</p>
              <ul className="industry-benefits">
                <li>Digital case files</li>
                <li>Petition generation</li>
                <li>Organized party details</li>
                <li>Share-ready outputs</li>
              </ul>
            </div>
            <div className="industry-card">
              <h3>Legal professionals</h3>
              <p className="industry-label">Counsel and specialists</p>
              <ul className="industry-benefits">
                <li>Structured matter data</li>
                <li>Document and ID uploads</li>
                <li>Consistent workflows</li>
                <li>Less manual rework</li>
              </ul>
            </div>
            <div className="industry-card">
              <h3>Law firms</h3>
              <p className="industry-label">Teams that need a shared standard</p>
              <ul className="industry-benefits">
                <li>Repeatable case patterns</li>
                <li>Controlled access</li>
                <li>Cloud-based collaboration</li>
                <li>Scales with caseload</li>
              </ul>
            </div>
            <div className="industry-card">
              <h3>Legal assistants &amp; interns</h3>
              <p className="industry-label">Support roles under supervision</p>
              <ul className="industry-benefits">
                <li>Clear data entry paths</li>
                <li>Admin-governed access</li>
                <li>Structured filing</li>
                <li>Fewer handoff errors</li>
              </ul>
            </div>
          </div>
          <p className="section-subtitle" style={{ marginTop: '28px', textAlign: 'center', marginBottom: 0 }}>
            <strong>Category:</strong> productivity · legal workflow management
          </p>
        </div>
      </section>

      <section className="alm-overview la-law-data-handling-section" aria-labelledby="la-law-data-heading">
        <div className="container">
          <h2 id="la-law-data-heading" className="section-title">
            Data handling
          </h2>
          <p className="section-subtitle la-law-data-handling-intro">
            What may be collected, how it is protected, and how you can request removal
          </p>
          <div className="la-law-data-handling-body">
            <article className="la-law-data-card la-law-data-card--collect">
              <h3 className="la-law-data-card-title">Information the app may collect</h3>
              <ul className="la-law-data-chip-list" aria-label="Categories of information">
                <li>
                  <span className="la-law-data-chip">Name</span>
                </li>
                <li>
                  <span className="la-law-data-chip">Email address</span>
                </li>
                <li>
                  <span className="la-law-data-chip">Phone number</span>
                </li>
                <li>
                  <span className="la-law-data-chip">Legal and case-related documents</span>
                </li>
                <li>
                  <span className="la-law-data-chip">User-generated petition data</span>
                </li>
              </ul>
            </article>
            <div className="la-law-data-handling-split">
              <article className="la-law-data-card">
                <h3 className="la-law-data-card-title">How data is protected</h3>
                <p className="la-law-data-card-text">All user data is transmitted securely.</p>
              </article>
              <article className="la-law-data-card">
                <h3 className="la-law-data-card-title">Request removal</h3>
                <p className="la-law-data-card-text">
                  Users can request deletion of their account and associated data through the provided account
                  deletion portal.
                </p>
                <Link to="/products/la-law/account-deletion" className="la-law-data-card-link">
                  Open account deletion portal
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-comparison">
        <div className="container">
          <h2 className="section-title">Why not only email &amp; folders?</h2>
          <p className="section-subtitle">
            La Law keeps cases, parties, petitions, and evidence in one structured, advocate-friendly system.
          </p>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-col">Need</div>
              <div className="comparison-col">Email / ad-hoc files</div>
              <div className="comparison-col">La Law</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Case record</strong>
              </div>
              <div className="comparison-col">Threads and attachments fragment the story</div>
              <div className="comparison-col">✓ One structured case workspace</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Party details</strong>
              </div>
              <div className="comparison-col">Complainant/accused data scattered across messages</div>
              <div className="comparison-col">✓ Complainant, accused, advocate fields in context</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Petition generation</strong>
              </div>
              <div className="comparison-col">Manual copy-paste from old drafts</div>
              <div className="comparison-col">✓ Generate petitions and documents from case data</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>IDs &amp; supporting files</strong>
              </div>
              <div className="comparison-col">Risk of wrong version or missing file</div>
              <div className="comparison-col">✓ Uploads tied to the right case</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Sharing output</strong>
              </div>
              <div className="comparison-col">Resend chains; unclear which file is final</div>
              <div className="comparison-col">✓ Download/share petitions via email or messaging apps</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Who can log in</strong>
              </div>
              <div className="comparison-col">Hard to gate firm-wide tools</div>
              <div className="comparison-col">✓ Email verify + admin-approved access</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Data protection</strong>
              </div>
              <div className="comparison-col">Inconsistent handling across users</div>
              <div className="comparison-col">✓ Encrypted transmission &amp; secure cloud handling</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Leaving the platform</strong>
              </div>
              <div className="comparison-col">No standard way to remove accounts</div>
              <div className="comparison-col">✓ Account deletion request portal</div>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner
        title="Ready to try La Law for your practice?"
        subtitle="Ask how verification, admin approval, and secure cloud handling fit your firm—or schedule a walkthrough of cases, petitions, and sharing."
        ctaText="Contact RIO BizSols"
        contactPath="/contact"
      />

      <section className="alm-blog-section">
        <div className="container">
          <h2 className="section-title">Learn More: Insights &amp; Best Practices</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px', textAlign: 'center' }}>
            Explore articles on operations, compliance, and digital transformation
          </p>
          <div className="blog-cards">
            <Link to="/blog/3" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Transform Your Asset Lifecycle Management</h4>
                <p>Disciplined processes, fewer surprises, and clearer accountability across the enterprise</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
            <Link to="/blog/4" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Five Key Benefits of Enterprise Asset Management</h4>
                <p>How structured systems translate into measurable business value</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
            <Link to="/blog/5" className="blog-card-link">
              <div className="blog-card-small">
                <h4>Ensuring Compliance and Audit Readiness</h4>
                <p>Building evidence trails before regulators—or clients—ask the first question</p>
                <span className="read-more">Read Article →</span>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/blog" className="cta-button-secondary">
              View All Blog Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="alm-nav-section">
        <div className="container">
          <h3 className="section-subtitle" style={{ marginBottom: '40px', textAlign: 'center' }}>
            Explore more from RIO BizSols
          </h3>
          <div className="nav-links">
            <Link to="/contact" className="nav-link-card">
              <h4>Contact</h4>
              <p>Talk to our team about La Law</p>
              <span>→</span>
            </Link>
            <Link to="/blog" className="nav-link-card">
              <h4>Blog</h4>
              <p>Guides, trends, and implementation notes</p>
              <span>→</span>
            </Link>
            <Link to="/about" className="nav-link-card">
              <h4>About</h4>
              <p>Who we are and how we deliver</p>
              <span>→</span>
            </Link>
            <Link to="/our-service" className="nav-link-card">
              <h4>Services</h4>
              <p>Staffing, digital, ERP, web &amp; app development</p>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaLawLanding;
