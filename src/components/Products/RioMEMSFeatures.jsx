import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  FiHeart,
  FiTool,
  FiCheckCircle,
  FiAlertTriangle,
  FiFileText,
  FiSmartphone,
  FiLock,
  FiBarChart2
} from 'react-icons/fi';
import FeatureCard from './FeatureCard';
import CTABanner from './CTABanner';
import './RioALMFeatures.css';

const RioMEMSFeatures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featureGroups = [
    {
      groupName: 'Biomedical Asset Management',
      groupIcon: '🩺',
      features: [
        {
          icon: <FiHeart />,
          title: 'Biomedical Equipment Registry',
          description:
            'Maintain a single, structured register of all medical devices – ventilators, monitors, infusion pumps, imaging systems, lab analyzers, and more.'
        },
        {
          icon: <FiCheckCircle />,
          title: 'Risk & Criticality Tagging',
          description:
            'Tag devices by risk class, criticality (ICU, OT, NICU, etc.), OEM, department, and location for meaningful reporting and prioritization.'
        },
        {
          icon: <FiFileText />,
          title: 'Commissioning & Warranty Tracking',
          description:
            'Capture commissioning details, DOP, warranty expiry, and AMC/CMC coverage for each device from day one.'
        }
      ]
    },
    {
      groupName: 'PPM, Calibration & Breakdowns',
      groupIcon: '🛠️',
      features: [
        {
          icon: <FiTool />,
          title: 'PPM Schedules by Device Type',
          description:
            'Configure PPM frequencies (monthly, quarterly, annual, usage-based) by category and push work orders to biomedical teams automatically.'
        },
        {
          icon: <FiCheckCircle />,
          title: 'Calibration & QA Management',
          description:
            'Track calibration vendors, due dates, completion, and attach certificates so you always know which devices are safe to use.'
        },
        {
          icon: <FiAlertTriangle />,
          title: 'Breakdown & Incident Logging',
          description:
            'Register breakdown calls from ICU/OT/wards, assign priorities, record TAT, capture root causes, and track repeat issues.'
        }
      ]
    },
    {
      groupName: 'Hospital Workflows & Access',
      groupIcon: '🏥',
      features: [
        {
          icon: <FiLock />,
          title: 'Role-Based Access for Hospital Teams',
          description:
            'Separate views for biomedical engineering, facilities, nursing supervisors, procurement, finance, and administrators.'
        },
        {
          icon: <FiSmartphone />,
          title: 'Mobile App for On-Ground Teams',
          description:
            'Technicians receive and close work orders from mobile, scan asset tags, add notes, and attach photos as evidence.'
        },
        {
          icon: <FiFileText />,
          title: 'NABH / JCI Documentation Support',
          description:
            'Store and retrieve service reports, calibration certificates, checklists, and audit logs aligned to accreditation requirements.'
        }
      ]
    },
    {
      groupName: 'Dashboards & Compliance',
      groupIcon: '📊',
      features: [
        {
          icon: <FiBarChart2 />,
          title: 'Uptime & Overdue PPM Dashboards',
          description:
            'Monitor equipment uptime, overdue PPM counts, and calibration status by department, device type, and vendor.'
        },
        {
          icon: <FiBarChart2 />,
          title: 'Vendor SLA & TAT Tracking',
          description:
            'Track how quickly vendors respond and resolve tickets, and use that data for reviews and renewals.'
        },
        {
          icon: <FiFileText />,
          title: 'Audit-Ready Reports',
          description:
            'Generate department-wise equipment lists, maintenance histories, and calibration logs in a few clicks for internal and external audits.'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>RIO MEMS Features | Medical Equipment Maintenance System</title>
        <meta
          name="description"
          content="Explore RIO MEMS features for hospitals: biomedical registry, PPM, calibration management, breakdown tracking, dashboards, and NABH/JCI-ready documentation."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <h1 className="hero-title">RIO MEMS Feature Overview</h1>
          <p className="hero-subtitle">
            Everything your biomedical and clinical engineering teams need to manage
            medical equipment safely and compliantly.
          </p>
        </div>
      </section>

      {/* Features by Category */}
      <section className="features-section">
        <div className="container">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="feature-group">
              <div className="group-header">
                <h2 className="group-title">
                  {group.groupIcon} {group.groupName}
                </h2>
              </div>
              <div className="features-grid">
                {group.features.map((feature, featureIndex) => (
                  <FeatureCard
                    key={featureIndex}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="See RIO MEMS in Action"
        subtitle="Schedule a focused demo on how RIO MEMS supports your biomedical and maintenance workflows."
        ctaText="Book RIO MEMS Demo"
      />
    </>
  );
};

export default RioMEMSFeatures;

