import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FiCheckSquare,
  FiUsers,
  FiEdit3,
  FiFileText,
  FiCalendar,
  FiBarChart2,
  FiBell,
  FiTrendingUp,
  FiShield,
  FiUpload,
  FiClock,
  FiBookOpen,
} from 'react-icons/fi';
import FeatureCard from './FeatureCard';
import { LazyProductCTA, LazyProductFAQ } from './LazyProductFooter';
import './RioALMLanding.css';
import './RioEduConnectLanding.css';

const CONTACT_PATH = '/contact';

const RioEduConnectLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyFeatures = [
    {
      icon: <FiCheckSquare />,
      title: 'Daily attendance by class',
      description:
        'Teachers mark present, absent, or on-leave for their class in seconds, on desktop or mobile, with grid and list views.',
    },
    {
      icon: <FiUsers />,
      title: 'Role-based access',
      description:
        'Admins, class in-charges, and teachers each see only the classes and actions they are responsible for.',
    },
    {
      icon: <FiEdit3 />,
      title: 'Edit requests & approvals',
      description:
        'Changes to submitted attendance go through an edit request that an in-charge or admin approves, keeping records trustworthy.',
    },
    {
      icon: <FiFileText />,
      title: 'Leave letters',
      description:
        'Collect and review leave letters digitally and link approved leave directly to the attendance register.',
    },
    {
      icon: <FiCalendar />,
      title: 'Academic calendar & holidays',
      description:
        'Configure working days, holidays, and the academic calendar so attendance percentages are always calculated correctly.',
    },
    {
      icon: <FiBarChart2 />,
      title: 'Attendance reports',
      description:
        'Day-wise, class-wise, and student-level history and percentages, ready to review or export for the management.',
    },
    {
      icon: <FiBell />,
      title: 'Parent notifications',
      description:
        'Notify parents about absences through SMS, WhatsApp, and app notifications, with a parent login secured by OTP.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Attendance intelligence',
      description:
        'Spot chronic absenteeism and attendance trends early so teachers and counsellors can follow up in time.',
    },
    {
      icon: <FiShield />,
      title: 'Audit logs',
      description:
        'Every attendance change and admin action is logged, so the school always knows who changed what and when.',
    },
    {
      icon: <FiUpload />,
      title: 'Student import',
      description:
        'Bring existing student lists in from Excel to set up classes and sections quickly, without retyping records.',
    },
    {
      icon: <FiClock />,
      title: 'Timetables',
      description:
        'Manage class timetables and teacher schedules alongside attendance in the same system.',
    },
    {
      icon: <FiBookOpen />,
      title: 'Homework, notices & documents',
      description:
        'Share homework, school notices, and documents, and handle transfer certificate requests in one place.',
    },
  ];

  const outcomes = [
    {
      title: 'Registers done in minutes',
      description: 'Replace paper registers with fast, class-wise marking that teachers can finish at the start of the period.',
    },
    {
      title: 'Parents informed the same day',
      description: 'Absence alerts reach parents quickly, so the school and family can act on missed days immediately.',
    },
    {
      title: 'Records you can trust',
      description: 'Edit approvals and audit logs keep attendance accurate and every change accountable.',
    },
    {
      title: 'Leave handled digitally',
      description: 'Leave letters are submitted, reviewed, and reflected in attendance without paper slips going missing.',
    },
    {
      title: 'Reports without spreadsheets',
      description: 'Class, day, and student attendance reports are always up to date for principals and management.',
    },
    {
      title: 'Early warning on absenteeism',
      description: 'Attendance trends highlight students who need attention before it affects their learning.',
    },
  ];

  const faqs = [
    {
      question: 'What is RIO EduConnect?',
      answer:
        'RIO EduConnect is a school attendance management app. Teachers mark daily attendance by class, in-charges approve edits and leave, parents get absence alerts, and management gets accurate attendance reports.',
    },
    {
      question: 'Who uses RIO EduConnect?',
      answer:
        'School admins and principals, class in-charges, subject teachers, and parents. Each role gets its own access level and screens.',
    },
    {
      question: 'Can teachers change attendance after submitting it?',
      answer:
        'Yes, through an edit request. The request is reviewed and approved by an in-charge or admin, and the change is recorded in the audit log.',
    },
    {
      question: 'How are parents notified?',
      answer:
        'Parents can be notified of absences through SMS, WhatsApp, and app notifications. Parents sign in with a one-time password (OTP) sent to their registered phone.',
    },
    {
      question: 'Does it work on mobile?',
      answer:
        'Yes. RIO EduConnect has a mobile-friendly attendance view so teachers can mark attendance from a phone or tablet in the classroom.',
    },
    {
      question: 'Can it support multiple schools or branches?',
      answer:
        'Yes. RIO EduConnect supports multiple schools, each with its own data, users, and branding.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Contact us for a demo. We help set up classes, import students from Excel, configure the academic calendar, and onboard your staff.',
    },
  ];

  const sampleRows = [
    { name: 'Aarav Kumar', status: 'present', label: 'Present' },
    { name: 'Diya Sharma', status: 'present', label: 'Present' },
    { name: 'Kabir Nair', status: 'absent', label: 'Absent' },
    { name: 'Meera Iyer', status: 'leave', label: 'On leave' },
  ];

  return (
    <div className="rio-alm-overview-page">
      <Helmet>
        <title>RIO EduConnect — School Attendance Management App | RIO BizSols</title>
        <meta
          name="description"
          content="RIO EduConnect is a school attendance management app: daily class attendance, edit approvals, leave letters, academic calendar, parent alerts, and attendance reports."
        />
        <meta
          name="keywords"
          content="RIO EduConnect, school attendance app, student attendance management, attendance tracking, school management software, parent notification, leave letters, RIO BizSols"
        />
        <meta name="author" content="RioBizSols" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="RIO EduConnect — School Attendance Management" />
        <meta
          property="og:description"
          content="Mark attendance by class, approve edits and leave, alert parents, and report on attendance in one school app."
        />
        <meta property="og:url" content="https://riobizsols.com/products/rio-educonnect" />
        <meta property="og:site_name" content="RioBizSols" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RIO EduConnect — School Attendance Management" />
        <meta
          name="twitter:description"
          content="Daily attendance, approvals, leave letters, parent alerts, and reports for schools."
        />
        <link rel="canonical" href="https://riobizsols.com/products/rio-educonnect" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Product', 'SoftwareApplication'],
            name: 'RIO EduConnect',
            description: 'School attendance management application for schools, teachers, and parents.',
            manufacturer: {
              '@type': 'Organization',
              name: 'RioBizSols',
              url: 'https://riobizsols.com',
            },
            applicationCategory: 'EducationalApplication',
            operatingSystem: ['Web', 'Android', 'iOS'],
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
            <h1 className="hero-title">School attendance, made simple</h1>
            <p className="hero-subtitle">
              RIO EduConnect helps schools mark daily attendance by class, manage leave and edit approvals, keep
              parents informed, and report on attendance, all from one app.
            </p>
            <p className="hero-subtext">
              Built for principals, class in-charges, teachers, and parents, with role-based access and a full
              audit trail.
            </p>
            <div className="hero-ctas">
              <Link to={CONTACT_PATH} className="btn btn-primary">
                Request a Demo
              </Link>
              <a href="#educonnect-features" className="btn btn-secondary">
                Explore Features
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="educonnect-hero-card" aria-label="Sample class attendance in RIO EduConnect">
              <div className="educonnect-hero-card-header">
                <p className="educonnect-hero-card-title">Grade 6 – Section A</p>
                <p className="educonnect-hero-card-date">Today&apos;s attendance</p>
              </div>
              <div className="educonnect-hero-stats">
                <div className="educonnect-hero-stat educonnect-hero-stat--present">
                  <strong>36</strong>
                  <span>Present</span>
                </div>
                <div className="educonnect-hero-stat educonnect-hero-stat--absent">
                  <strong>2</strong>
                  <span>Absent</span>
                </div>
                <div className="educonnect-hero-stat educonnect-hero-stat--leave">
                  <strong>1</strong>
                  <span>On leave</span>
                </div>
              </div>
              <ul className="educonnect-hero-list">
                {sampleRows.map((row) => (
                  <li key={row.name} className="educonnect-hero-row">
                    <span>{row.name}</span>
                    <span className={`educonnect-hero-pill educonnect-hero-pill--${row.status}`}>{row.label}</span>
                  </li>
                ))}
              </ul>
              <div className="educonnect-hero-footer">Parents of absent students notified automatically</div>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-outcomes">
        <div className="container">
          <h2 className="section-title">What RIO EduConnect helps your school do</h2>
          <p className="section-subtitle">Less paperwork for teachers, better visibility for management and parents</p>
          <div className="outcomes-grid">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="outcome-card">
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
          <h2 className="section-title">Overview of RIO EduConnect</h2>
          <p className="section-subtitle la-law-overview-intro-sub">
            How attendance flows from the classroom to parents and management
          </p>
          <div className="overview-content la-law-overview-stack">
            <div className="la-law-overview-block">
              <p className="la-law-overview-lead">
                RIO EduConnect replaces paper registers and scattered spreadsheets with one attendance system for
                the whole school. Teachers mark attendance for their classes, in-charges review changes and leave,
                parents are alerted about absences, and principals see accurate, up-to-date reports.
              </p>
            </div>
            <div className="la-law-overview-block">
              <h3 className="la-law-overview-block-title">Who it is for</h3>
              <ul className="la-law-overview-list">
                <li>
                  <strong>Admins &amp; principals:</strong> set up classes, users, calendars, and review reports and
                  audit logs.
                </li>
                <li>
                  <strong>Class in-charges:</strong> approve attendance edits and leave letters for their classes.
                </li>
                <li>
                  <strong>Teachers:</strong> mark daily attendance quickly on desktop or mobile.
                </li>
                <li>
                  <strong>Parents:</strong> receive absence alerts and stay connected with the school.
                </li>
              </ul>
            </div>
            <div className="la-law-overview-block">
              <h3 className="la-law-overview-block-title">From marking to reporting</h3>
              <p className="la-law-overview-kicker la-law-overview-kicker--tight">
                A simple daily flow for every class.
              </p>
              <div className="lifecycle-diagram la-law-overview-lifecycle">
                <div className="lifecycle-step">
                  <div className="step-number">1</div>
                  <div className="step-label">Mark</div>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-step">
                  <div className="step-number">2</div>
                  <div className="step-label">Submit</div>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-step">
                  <div className="step-number">3</div>
                  <div className="step-label">Notify parents</div>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-step">
                  <div className="step-number">4</div>
                  <div className="step-label">Approve edits</div>
                </div>
                <div className="lifecycle-arrow">→</div>
                <div className="lifecycle-step">
                  <div className="step-number">5</div>
                  <div className="step-label">Report</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-modules" id="educonnect-features">
        <div className="container">
          <h2 className="section-title">Key features</h2>
          <p className="section-subtitle">Everything a school needs to run attendance end to end</p>
          <div className="modules-grid">
            {keyFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="alm-how-it-works">
        <div className="container">
          <h2 className="section-title">Getting your school started</h2>
          <p className="section-subtitle">How schools typically roll out RIO EduConnect</p>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-circle">1</div>
              <h3>Set up the school</h3>
              <p>Configure classes, sections, the academic calendar, and holidays.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">2</div>
              <h3>Import students</h3>
              <p>Bring in student lists from Excel and assign them to classes.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">3</div>
              <h3>Add staff</h3>
              <p>Create admin, in-charge, and teacher accounts with the right access.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">4</div>
              <h3>Mark attendance</h3>
              <p>Teachers start marking daily attendance on desktop or mobile.</p>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-circle">5</div>
              <h3>Connect parents</h3>
              <p>Turn on absence alerts and track attendance with live reports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-comparison">
        <div className="container">
          <h2 className="section-title">Why move beyond paper registers?</h2>
          <p className="section-subtitle">
            RIO EduConnect keeps attendance, approvals, and parent communication in one place.
          </p>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-col">Need</div>
              <div className="comparison-col">Paper registers / spreadsheets</div>
              <div className="comparison-col">RIO EduConnect</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Daily marking</strong>
              </div>
              <div className="comparison-col">Manual registers, slow to consolidate</div>
              <div className="comparison-col">✓ Class-wise marking on any device</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Parent updates</strong>
              </div>
              <div className="comparison-col">Calls made only when someone remembers</div>
              <div className="comparison-col">✓ Automatic SMS, WhatsApp, and app alerts</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Corrections</strong>
              </div>
              <div className="comparison-col">Overwritten entries with no trail</div>
              <div className="comparison-col">✓ Edit requests, approvals, and audit logs</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Leave</strong>
              </div>
              <div className="comparison-col">Paper slips that go missing</div>
              <div className="comparison-col">✓ Digital leave letters linked to attendance</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-col">
                <strong>Reports</strong>
              </div>
              <div className="comparison-col">Hours of manual percentage calculation</div>
              <div className="comparison-col">✓ Instant day, class, and student reports</div>
            </div>
          </div>
        </div>
      </section>

      <section className="alm-faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <LazyProductFAQ faqs={faqs} />
        </div>
      </section>

      <LazyProductCTA
        title="Ready to simplify attendance at your school?"
        subtitle="See how RIO EduConnect handles daily attendance, approvals, leave, and parent alerts for your classes."
        ctaText="Request a Demo"
        contactPath={CONTACT_PATH}
      />

      <section className="alm-nav-section">
        <div className="container">
          <h3 className="section-subtitle" style={{ marginBottom: '40px', textAlign: 'center' }}>
            Explore more from RIO BizSols
          </h3>
          <div className="nav-links">
            <Link to={CONTACT_PATH} className="nav-link-card">
              <h4>Contact</h4>
              <p>Talk to our team about RIO EduConnect</p>
              <span>→</span>
            </Link>
            <Link to="/products/rio-eam" className="nav-link-card">
              <h4>RIO EAM</h4>
              <p>Enterprise asset management</p>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default RioEduConnectLanding;
