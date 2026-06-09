import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FiHeart,
  FiTool,
  FiCheckCircle,
  FiAlertTriangle,
  FiBarChart2,
  FiFileText,
  FiSmartphone,
  FiLock
} from 'react-icons/fi';
import LazyImage from '../LazyImage';
import { MEMS_COMPLIANCE } from '../../utils/productImages';
import FeatureCard from './FeatureCard';
import { LazyProductCTA, LazyProductFAQ } from './LazyProductFooter';
import './RioALMLanding.css';

const MedicalEquipmentMaintenance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyFeatures = [
    {
      icon: <FiHeart />,
      title: 'Biomedical Equipment Registry (RIO MEMS)',
      description:
        'Centralized register of all medical devices – from ventilators and monitors to imaging systems – with tags by department, risk class, and criticality.'
    },
    {
      icon: <FiTool />,
      title: 'Planned Preventive Maintenance (PPM)',
      description:
        'Time-based and usage-based PPM calendars that auto-generate work orders for biomedical teams and external vendors.'
    },
    {
      icon: <FiCheckCircle />,
      title: 'Calibration & QA Tracking',
      description:
        'Track calibration due dates, safety checks, and quality assurance tests with full history for every device.'
    },
    {
      icon: <FiAlertTriangle />,
      title: 'Breakdown & Incident Management',
      description:
        'Log breakdowns, risk-classify incidents, track response and resolution times, and capture root-cause notes.'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Uptime & Compliance Dashboards',
      description:
        'Dashboards for equipment uptime, overdue PPM, calibration status, and compliance indicators for NABH/JCI audits.'
    },
    {
      icon: <FiFileText />,
      title: 'Audit-Ready Documentation',
      description:
        'Service reports, calibration certificates, contracts, and user manuals organized by asset for quick audit retrieval.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile App for Biomedical Teams',
      description:
        'Technicians receive work orders on mobile, scan device tags, update jobs at bedside, and attach photos as evidence.'
    },
    {
      icon: <FiLock />,
      title: 'Role-Based Access for Hospitals',
      description:
        'Separate views and permissions for biomedical engineering, nursing, procurement, finance, and management.'
    }
  ];

  const outcomes = [
    {
      title: 'Higher Equipment Uptime',
      description:
        'Reduce unplanned downtime for critical care equipment through structured PPM and faster breakdown response.'
    },
    {
      title: 'Stress-Free NABH / JCI Audits',
      description:
        'Have calibration records, service reports, and equipment history ready in a few clicks for any external or internal audit.'
    },
    {
      title: 'Better Visibility for Management',
      description:
        'See which departments face repeated breakdowns, which vendors miss SLAs, and where to invest in replacements.'
    },
    {
      title: 'Biomedical Team Productivity',
      description:
        'Move away from scattered spreadsheets and WhatsApp messages to a single system of record for all maintenance activities.'
    },
    {
      title: 'Safer Patient Care',
      description:
        'Ensure that devices used in OT, ICU, NICU, and diagnostic areas are maintained and calibrated on time, every time.'
    }
  ];

  const faqs = [
    {
      question: 'Is RIO MEMS different from RIO EAM?',
      answer:
        'Yes. RIO EAM is a generic asset lifecycle platform across industries. RIO MEMS (Medical Equipment Maintenance System) is a focused configuration and content pack of RIO EAM tailored specifically for hospitals and healthcare providers.'
    },
    {
      question: 'Which hospital teams use RIO MEMS?',
      answer:
        'Typical users include Biomedical / Clinical Engineering, Maintenance, Nursing supervisors, Facility Management, Procurement, Finance, and Hospital Administration.'
    },
    {
      question: 'Can RIO MEMS integrate with our Hospital Information System (HIS / HMIS)?',
      answer:
        'Yes. We support API-based integration to exchange equipment IDs, locations, and status with your existing HIS / HMIS, CMMS, or ERP systems as required.'
    },
    {
      question: 'Can you help us migrate existing equipment data into RIO MEMS?',
      answer:
        'Our team helps you migrate current equipment registers and maintenance logs from spreadsheets or legacy tools into a clean, structured biomedical asset registry.'
    },
    {
      question: 'Is RIO MEMS available on-premises for healthcare data policies?',
      answer:
        'Yes. You can deploy on-premises within your hospital network, in your private cloud, or use managed hosting – with full data ownership in all options.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>RIO MEMS - Medical Equipment Maintenance System for Hospitals | RIO</title>
        <meta
          name="description"
          content="RIO MEMS is a Medical Equipment Maintenance System built on RIO EAM for hospitals and healthcare providers. Track biomedical assets, PPM, calibration, incidents, and compliance for NABH/JCI."
        />
        <meta
          name="keywords"
          content="RIO MEMS, medical equipment maintenance system, biomedical equipment management, hospital asset management, NABH compliance, JCI compliance, biomedical CMMS"
        />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content="RIO MEMS - Medical Equipment Maintenance System for Hospitals"
        />
        <meta
          property="og:description"
          content="Purpose-built maintenance and compliance system for biomedical equipment in hospitals and healthcare networks."
        />
        <meta
          property="og:url"
          content="https://riobizsols.com/products/medical-equipment-maintenance"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://riobizsols.com/products/medical-equipment-maintenance"
        />
      </Helmet>

      <div className="mems-overview-page">
      {/* Hero Section */}
      <section className="alm-hero mems-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              RIO MEMS – Medical Equipment Maintenance System for Hospitals
            </h1>
            <p className="hero-subtitle">
              Keep your biomedical equipment safe, compliant, and always ready for
              patient care – from ICU and OT to diagnostics and wards.
            </p>
            <p className="hero-subtext">
              Built on the RIO EAM platform and tailored for healthcare workflows,
              this solution gives biomedical and clinical engineering teams
              complete control over devices, maintenance, and audits.
            </p>
            <div className="hero-ctas">
              <Link
                to="/products/medical-equipment-maintenance/contact"
                className="btn btn-primary"
              >
                Book MEMS Demo
              </Link>
              <Link
                to="/products/medical-equipment-maintenance/features"
                className="btn btn-secondary"
              >
                View Healthcare Modules
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-placeholder">
              <div className="placeholder-header">Hospital Control Panel</div>
              <div className="placeholder-content">
                <div className="placeholder-bar"></div>
                <div className="placeholder-bar short"></div>
                <div className="placeholder-grid">
                  <div className="placeholder-cell">PPM Due</div>
                  <div className="placeholder-cell">Calibration</div>
                  <div className="placeholder-cell">Incidents</div>
                  <div className="placeholder-cell">Uptime%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="alm-outcomes">
        <div className="container">
          <h2 className="section-title">
            Built for Hospital & Healthcare Operations
          </h2>
          <p className="section-subtitle">
            Outcomes that matter to biomedical engineering, nursing, and
            hospital administration
          </p>
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

      {/* What is Section */}
      <section className="alm-overview">
        <div className="container">
          <div className="overview-content">
            <h2 className="section-title">
              What is RIO MEMS?
            </h2>
            <ul className="section-text">
              <li>
                RIO MEMS is a specialized configuration of RIO EAM dedicated to hospital
                and healthcare environments.
              </li>
              <li>
                It focuses on biomedical equipment lifecycle – from installation and commissioning
                to maintenance, calibration, and replacement.
              </li>
              <li>
                It speaks the language of hospitals: departments like ICU, OT, Cath Lab, Dialysis, CSSD.
              </li>
              <li>
                It includes risk classes, calibration cycles, NABH / JCI documentation, and biomedical engineering workflows.
              </li>
            </ul>

            <h3 className="subsection-title">
              Typical Lifecycle of a Medical Device in the System
            </h3>
            <div className="lifecycle-diagram">
              <div className="lifecycle-step">
                <div className="step-number">1</div>
                <div className="step-label">Commission</div>
              </div>
              <div className="lifecycle-arrow">→</div>
              <div className="lifecycle-step">
                <div className="step-number">2</div>
                <div className="step-label">Maintain & Calibrate</div>
              </div>
              <div className="lifecycle-arrow">→</div>
              <div className="lifecycle-step">
                <div className="step-number">3</div>
                <div className="step-label">Monitor Uptime</div>
              </div>
              <div className="lifecycle-arrow">→</div>
              <div className="lifecycle-step">
                <div className="step-number">4</div>
                <div className="step-label">Audit & Review</div>
              </div>
              <div className="lifecycle-arrow">→</div>
              <div className="lifecycle-step">
                <div className="step-number">5</div>
                <div className="step-label">Replace / Decommission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules Section */}
      <section className="alm-modules">
        <div className="container">
          <h2 className="section-title">Healthcare-Focused Modules</h2>
          <p className="section-subtitle">
            Everything your biomedical and maintenance teams need in one place
          </p>
          <div className="modules-grid">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How Implementation Works */}
      <section className="alm-how-it-works">
        <div className="container">
          <h2 className="section-title">How We Implement in Hospitals</h2>
          <p className="section-subtitle">
            A structured rollout designed to minimize disruption to patient care
          </p>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-circle">1</div>
              <h3>Equipment Discovery</h3>
              <p>
                Consolidate your existing equipment lists, service contracts, and
                calibration data into a clean biomedical register.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <div className="step-circle">2</div>
              <h3>PPM & Calibration Setup</h3>
              <p>
                Configure PPM templates and calibration schedules by equipment
                category, criticality, and manufacturer guidelines.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <div className="step-circle">3</div>
              <h3>Role-Based Staff Training</h3>
              <p>
                Train biomedical engineers, maintenance, nursing supervisors, and
                admins on role-specific screens and workflows.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <div className="step-circle">4</div>
              <h3>Pilot in Select Departments</h3>
              <p>
                Start with critical departments (ICU, OT, Diagnostics) and
                expand to the rest of the hospital after fine-tuning.
              </p>
            </div>
            <div className="step-divider"></div>
            <div className="step-item">
              <div className="step-circle">5</div>
              <h3>Continuous Optimization</h3>
              <p>
                Review KPIs, fine-tune workflows, and prepare dashboards for
                management and accreditation bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="alm-security">
        <div className="container">
          <div className="security-content">
            <div className="security-text">
              <h2 className="section-title">Designed for Healthcare Compliance</h2>
              <p className="section-subtitle">
                Support for hospital accreditation and regulatory requirements
              </p>
              <ul className="security-features">
                <li>
                  <strong>Traceability:</strong> Full history of every device –
                  service, calibration, breakdown, and movement.
                </li>
                <li>
                  <strong>Access Control:</strong> Role-based access so only
                  authorized staff can modify biomedical records.
                </li>
                <li>
                  <strong>Audit Trails:</strong> Downloadable logs and reports
                  to support NABH, JCI, and internal quality audits.
                </li>
                <li>
                  <strong>Data Protection:</strong> Options for on-premises or
                  private cloud hosting to align with hospital IT policies.
                </li>
              </ul>
            </div>
            <div className="security-visual">
              <LazyImage
                src={MEMS_COMPLIANCE.src}
                alt="Medical equipment security and compliance illustration"
                className="security-image"
                width={MEMS_COMPLIANCE.width}
                height={MEMS_COMPLIANCE.height}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="alm-faq">
        <div className="container">
          <h2 className="section-title">
            Frequently Asked Questions from Hospitals
          </h2>
          <LazyProductFAQ faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <LazyProductCTA
        title="See MEMS in Action"
        subtitle="Schedule a walkthrough tailored to your hospital or healthcare network and explore how we can support your biomedical and maintenance teams."
        ctaText="Book MEMS Demo"
        ctaLink="/products/rio-eam/contact"
      />
      </div>
    </>
  );
};

export default MedicalEquipmentMaintenance;

