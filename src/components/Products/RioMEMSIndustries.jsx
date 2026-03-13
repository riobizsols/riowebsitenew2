import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import CTABanner from './CTABanner';
import './RioALMIndustries.css';

const RioMEMSIndustries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const segments = [
    {
      name: 'Multispecialty Hospitals',
      subtitle: 'ICU, OT, Cath Lab, NICU, Emergency',
      challenges: [
        'Hundreds of critical devices across high-risk areas',
        'PPM and calibration cycles that must never be missed',
        'Breakdowns directly impact patient safety and revenue',
        'NABH / JCI audit teams asking for complete histories'
      ],
      solutions: [
        'Centralized biomedical registry with risk and criticality tagging',
        'PPM and calibration schedules aligned to OEM and accreditation norms',
        'Breakdown logging with TAT and root-cause analysis',
        'Instant retrieval of service and calibration records during audits'
      ],
      kpis: [
        'Uptime for critical devices (>99%)',
        'PPM & calibration compliance rate',
        'Average response and resolution time',
        'Number of audit non-conformities'
      ]
    },
    {
      name: 'Single & Multi-Location Hospitals',
      subtitle: 'Hospital groups, chains, and networks',
      challenges: [
        'Each branch following different spreadsheets and processes',
        'No consolidated view of devices and maintenance across locations',
        'Difficult to compare vendor performance across the group',
        'Inconsistent documentation standards between branches'
      ],
      solutions: [
        'Standardized MEMS workflows rolled out across branches',
        'Branch-wise and group-level dashboards for equipment and compliance',
        'Common vendor scorecards based on SLA and TAT performance',
        'Central policies with branch-wise flexibility where needed'
      ],
      kpis: [
        'Group-wide uptime and overdue PPM trends',
        'Vendor SLA adherence across branches',
        'Adoption of standard biomedical processes',
        'Time to prepare group audit documentation'
      ]
    },
    {
      name: 'Diagnostics & Day-Care Centers',
      subtitle: 'Imaging centers, labs, dialysis, oncology day-care',
      challenges: [
        'High-value imaging and lab analyzers that must stay operational',
        'OEM and third-party contracts for different equipment lines',
        'Need to prove calibration and QA before releasing reports',
        'Limited in-house biomedical resources'
      ],
      solutions: [
        'Device-wise visibility of contracts, warranties, and service history',
        'PPM and calibration reminders to OEM and third-party vendors',
        'Centralized storage of QA and calibration certificates',
        'Simple workflows for smaller in-house teams'
      ],
      kpis: [
        'Unplanned downtime per month',
        'Turnaround time for critical breakdowns',
        'Percentage of equipment with valid QA/calibration',
        'Contract renewal decisions based on real performance'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>RIO MEMS by Healthcare Segment | Medical Equipment Maintenance</title>
        <meta
          name="description"
          content="See how RIO MEMS supports multispecialty hospitals, hospital chains, and diagnostic centers with biomedical maintenance, calibration tracking, and audit-ready documentation."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="industries-hero">
        <div className="container">
          <h1 className="hero-title">RIO MEMS for Healthcare</h1>
          <p className="hero-subtitle">
            Tailored medical equipment maintenance for hospitals, hospital chains,
            and diagnostics.
          </p>
        </div>
      </section>

      {/* Segments */}
      <section className="industries-content">
        <div className="container">
          {segments.map((segment, index) => (
            <div key={index} className="industry-detail">
              <div className="industry-header">
                <h2 className="industry-name">{segment.name}</h2>
                <p className="industry-subtitle">{segment.subtitle}</p>
              </div>

              <div className="industry-grid">
                <div className="industry-section">
                  <h3 className="section-title">Key Challenges</h3>
                  <ul className="challenges-list">
                    {segment.challenges.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="industry-section">
                  <h3 className="section-title">RIO MEMS Response</h3>
                  <ul className="solutions-list">
                    {segment.solutions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="industry-footer">
                <div className="kpis-section">
                  <h3 className="section-title">Signals of Success</h3>
                  <div className="kpis-list">
                    {segment.kpis.map((kpi, i) => (
                      <div key={i} className="kpi-item">
                        <FiTrendingUp className="kpi-icon" />
                        <span>{kpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < segments.length - 1 && (
                <div className="industry-divider"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose RIO MEMS */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Healthcare Teams Choose RIO MEMS</h2>
          <div className="why-choose-grid">
            <div className="why-card">
              <FiCheckCircle className="why-icon" />
              <h3>Healthcare-First Design</h3>
              <p>Built around biomedical and accreditation workflows, not generic IT assets.</p>
            </div>
            <div className="why-card">
              <FiCheckCircle className="why-icon" />
              <h3>Audit-Ready Always</h3>
              <p>Keep calibration, PPM, and breakdown history ready for any NABH or JCI visit.</p>
            </div>
            <div className="why-card">
              <FiCheckCircle className="why-icon" />
              <h3>Scales with Your Network</h3>
              <p>From a single hospital to a multi-city group, RIO MEMS grows with you.</p>
            </div>
            <div className="why-card">
              <FiCheckCircle className="why-icon" />
              <h3>Quick Adoption</h3>
              <p>Simple, role-specific screens for biomedical engineers, nurses, and admins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="See How RIO MEMS Fits Your Healthcare Setup"
        subtitle="Get a segment-specific walkthrough for your hospital, chain, or diagnostics network."
        ctaText="Schedule RIO MEMS Demo"
      />
    </>
  );
};

export default RioMEMSIndustries;

