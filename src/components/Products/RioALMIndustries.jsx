import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiTrendingUp, FiClock, FiCheckCircle, FiBarChart2 } from 'react-icons/fi';
import { LazyProductCTA } from './LazyProductFooter';
import './RioALMIndustries.css';

const RioALMIndustries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      name: "Healthcare",
      subtitle: "Hospitals, Clinics, Diagnostics Centers",
      challenges: [
        "Biomedical equipment must be reliably available 24/7",
        "Compliance with strict regulations and audit requirements",
        "Tracking calibration and certification records for safety",
        "Managing multiple equipment types across departments"
      ],
      solutions: [
        "Centralized biomedical equipment tracking with preventive maintenance",
        "Compliance documentation and audit trail for regulatory bodies",
        "Automated calibration tracking and renewal reminders",
        "Role-based access by department (ICU, OT, Lab, etc.)"
      ],
      modules: ["Asset Registry", "Preventive Maintenance", "Compliance Docs", "Multi-location"],
      kpis: ["Equipment uptime >99%", "Compliance audit readiness", "Maintenance SLA adherence", "Reduced unplanned downtime"]
    },
    {
      name: "Automotive",
      subtitle: "Dealerships, Service Centers, Multi-branch Networks",
      challenges: [
        "Coordinating assets across multiple branch locations",
        "Tracking service equipment, tools, and diagnostic devices",
        "Managing vendor AMC contracts for critical equipment",
        "Reporting to corporate HQ across branch network"
      ],
      solutions: [
        "Multi-location asset tracking from a single dashboard",
        "Service equipment lifecycle management with preventive scheduling",
        "AMC vendor SLA tracking and performance reporting",
        "Branch-level and consolidated reporting for management"
      ],
      modules: ["Multi-location", "Preventive Maintenance", "Vendor Management", "Custom Reports"],
      kpis: ["Service equipment availability", "Vendor SLA adherence", "Maintenance cost per branch", "Equipment downtime reduction"]
    },
    {
      name: "Manufacturing",
      subtitle: "Plants, Factories, Production Facilities",
      challenges: [
        "Production machinery must be maintained to minimize downtime",
        "Complex preventive maintenance schedules based on usage",
        "Regulatory compliance for equipment and safety records",
        "Integration with production planning systems"
      ],
      solutions: [
        "Usage-based preventive maintenance scheduling",
        "Work order automation and SLA tracking for repairs",
        "Comprehensive maintenance and compliance documentation",
        "API integration with ERP and production systems"
      ],
      modules: ["Preventive Maintenance", "Work Orders", "Compliance Docs", "API Integrations"],
      kpis: ["Equipment uptime %" , "Maintenance cost reduction", "Unplanned downtime incidents", "Compliance violations"]
    },
    {
      name: "Hospitality",
      subtitle: "Hotels, Resorts, Property Management",
      challenges: [
        "Maintaining guest-facing facilities and systems",
        "Coordinating maintenance across multiple properties",
        "Preventive maintenance to avoid service disruptions",
        "Vendor coordination for contract maintenance"
      ],
      solutions: [
        "Multi-property asset tracking and coordination",
        "Preventive maintenance scheduling to prevent guest disruptions",
        "Mobile work order management for field teams",
        "Vendor performance tracking for service quality"
      ],
      modules: ["Multi-location", "Preventive Maintenance", "Work Orders", "Vendor Management"],
      kpis: ["Guest satisfaction (equipment related)", "Maintenance response time", "Equipment downtime incidents", "Vendor SLA compliance"]
    },
    {
      name: "Education",
      subtitle: "Universities, Colleges, Schools, Campuses",
      challenges: [
        "Managing equipment across multiple campus buildings",
        "Laboratory equipment requires specialized maintenance",
        "Budget constraints require efficient asset utilization",
        "Tracking depreciation for financial reporting"
      ],
      solutions: [
        "Campus-wide asset management with building/department tracking",
        "Lab equipment maintenance and compliance documentation",
        "Depreciation reporting for budget planning",
        "Role-based access for department heads and maintenance teams"
      ],
      modules: ["Multi-location", "Depreciation Reporting", "Compliance Docs", "Access Control"],
      kpis: ["Lab equipment availability", "Budget utilization efficiency", "Maintenance cost control", "Equipment lifecycle optimization"]
    },
    {
      name: "Infrastructure & Facilities",
      subtitle: "Facilities Management, Property Services, Building Management",
      challenges: [
        "Complex systems in large buildings require coordinated maintenance",
        "Multiple service-level agreements with tenants",
        "Regulatory compliance for safety and environmental systems",
        "Cost tracking and allocation across departments/tenants"
      ],
      solutions: [
        "Building system and equipment lifecycle management",
        "SLA tracking for tenant service commitments",
        "Compliance documentation for safety and regulatory audits",
        "Cost allocation and reporting by department/tenant"
      ],
      modules: ["Asset Registry", "Preventive Maintenance", "Compliance Docs", "Custom Reports"],
      kpis: ["Tenant satisfaction (SLA compliance)", "Facility uptime", "Maintenance cost per sq ft", "Compliance audit results"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>RIO EAM by Industry | Sector-Specific Asset Management Solutions</title>
        <meta name="description" content="Explore how RIO EAM serves healthcare, automotive, manufacturing, hospitality, education, and facilities management with tailored enterprise asset managment solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="industries-hero">
        <div className="container">
          <h1 className="hero-title">Industry-Specific Solutions</h1>
          <p className="hero-subtitle">
            RIO EAM is trusted by organizations across diverse sectors to manage critical assets
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-content">
        <div className="container">
          {industries.map((industry, index) => (
            <div key={index} className={`industry-detail industry-${index + 1}`}>
              <div className="industry-header">
                <h2 className="industry-name">{industry.name}</h2>
                <p className="industry-subtitle">{industry.subtitle}</p>
              </div>

              <div className="industry-grid">
                <div className="industry-section">
                  <h3 className="section-title section-title-challenges">Key Challenges</h3>
                  <ul className="challenges-list">
                    {industry.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div className="industry-section">
                  <h3 className="section-title section-title-solutions">RIO EAM Solutions</h3>
                  <ul className="solutions-list">
                    {industry.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="industry-footer">
                <div className="modules-section">
                  <h3 className="section-title">Key Modules</h3>
                  <div className="modules-tags">
                    {industry.modules.map((module, i) => (
                      <span key={i} className="module-tag">{module}</span>
                    ))}
                  </div>
                </div>

                <div className="kpis-section">
                  <h3 className="section-title">Success Metrics</h3>
                  <div className="kpis-list">
                    {industry.kpis.map((kpi, i) => (
                      <div key={i} className="kpi-item">
                        <FiTrendingUp className="kpi-icon" />
                        <span>{kpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < industries.length - 1 && <div className="industry-divider"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Industries Trust RIO EAM</h2>
          <div className="why-choose-grid">
            <div className="why-card">
              <FiCheckCircle className="why-icon" />
              <h3>Domain Expertise</h3>
              <p>Built with deep understanding of industry-specific asset management challenges.</p>
            </div>
            <div className="why-card">
              <FiClock className="why-icon" />
              <h3>Rapid Deployment</h3>
              <p>Phased rollout approach minimizes disruption and gets you operational quickly.</p>
            </div>
            <div className="why-card">
              <FiBarChart2 className="why-icon" />
              <h3>Measurable Results</h3>
              <p>Track KPIs and improvements that matter to your organization.</p>
            </div>
            <div className="why-card">
              <FiTrendingUp className="why-icon" />
              <h3>Continuous Support</h3>
              <p>Dedicated support team committed to your long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <LazyProductCTA
        title="See How RIO EAM Works for Your Industry"
        subtitle="Get a personalized demo tailored to your industry's specific challenges and requirements."
        ctaText="Schedule Industry-Specific Demo"
      />
    </>
  );
};

export default RioALMIndustries;
