import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  FiPackage, FiTool, FiUsers, FiFileText,
  FiBarChart2, FiSmartphone, FiLayers, FiLock,
  FiGitBranch, FiCheckSquare, FiAlertCircle, FiRotateCw, FiCamera
} from 'react-icons/fi';
import FeatureCard from './FeatureCard';
import CTABanner from './CTABanner';
import './RioALMFeatures.css';

const RioALMFeatures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featureGroups = [
    {
      groupName: "Asset Management",
      groupIcon: "📦",
      features: [
        {
          icon: <FiPackage />,
          title: "Centralized Asset Repository",
          description: "All equipment and assets tracked in a single system with complete lifecycle visibility."
        },
        {
          icon: <FiGitBranch />,
          title: "Asset Grouping & Linkage",
          description: "Create parent-child relationships, asset kits, and component linkages for complex asset structures."
        },
        {
          icon: <FiTool />,
          title: "Asset Tagging & Classification",
          description: "Tag assets by location, category, department, and custom attributes for powerful filtering."
        },
        {
          icon: <FiBarChart2 />,
          title: "Asset Search & Reports",
          description: "Advanced search and custom reporting to find assets and generate insights instantly."
        },
      ]
    },
    {
      groupName: "Maintenance & Work Orders",
      groupIcon: "🔧",
      features: [
        {
          icon: <FiTool />,
          title: "Preventive Maintenance Scheduling",
          description: "Schedule maintenance based on time intervals or asset usage metrics. Automated reminders."
        },
        {
          icon: <FiAlertCircle />,
          title: "Breakdown Maintenance Management",
          description: "Log and manage unplanned maintenance requests with priority levels and SLA tracking."
        },
        {
          icon: <FiCheckSquare />,
          title: "Work Order Management",
          description: "Auto-generate work orders, assign to technicians, track progress, and manage completion."
        },
        {
          icon: <FiRotateCw />,
          title: "SLA Tracking",
          description: "Monitor and enforce service level agreements for maintenance task completion."
        }
      ]
    },
    {
      groupName: "Vendors & Contracts",
      groupIcon: "👥",
      features: [
        {
          icon: <FiUsers />,
          title: "Vendor Management",
          description: "Maintain vendor profiles, contact information, and service offerings in one place."
        },
        {
          icon: <FiFileText />,
          title: "AMC/CMC Contract Management",
          description: "Track Annual Maintenance Contracts and Comprehensive Maintenance Contracts with renewal alerts."
        },
        {
          icon: <FiBarChart2 />,
          title: "SLA Performance Tracking",
          description: "Monitor vendor SLA adherence and performance metrics for accountability."
        },
        {
          icon: <FiLayers />,
          title: "Contract Linking",
          description: "Link contracts to specific assets or groups to track coverage and obligations."
        }
      ]
    },
    {
      groupName: "Compliance & Document Management",
      groupIcon: "📄",
      features: [
        {
          icon: <FiFileText />,
          title: "Document Management",
          description: "Store and organize manuals, service records, calibration reports, and certificates."
        },
        {
          icon: <FiLock />,
          title: "Audit Trail & Evidence",
          description: "Complete audit logs showing all changes, approvals, and maintenance history for compliance."
        },
        {
          icon: <FiCheckSquare />,
          title: "Compliance Reporting",
          description: "Generate audit-ready compliance reports for regulatory bodies and internal audits."
        },
        {
          icon: <FiRotateCw />,
          title: "Certification Tracking",
          description: "Track calibration due dates, certifications, and compliance requirements per asset."
        }
      ]
    },
    {
      groupName: "Workflows & Approvals",
      groupIcon: "✓",
      features: [
        {
          icon: <FiCheckSquare />,
          title: "Multi-Level Approval Workflows",
          description: "Define approval chains for work orders, asset purchases, and maintenance requests."
        },
        {
          icon: <FiLayers />,
          title: "Configurable Workflows",
          description: "Customize workflows by asset type, department, or maintenance category without coding."
        },
        {
          icon: <FiAlertCircle />,
          title: "Automated Alerts & Notifications",
          description: "Smart alerts for overdue maintenance, expiring contracts, and approval pending items."
        },
        {
          icon: <FiGitBranch />,
          title: "Conditional Routing",
          description: "Route approvals based on asset value, maintenance type, or other business rules."
        }
      ]
    },
    {
      groupName: "Reporting & Depreciation",
      groupIcon: "📊",
      features: [
        {
          icon: <FiBarChart2 />,
          title: "Depreciation Reports",
          description: "Generate depreciation calculations and financial reports for accounting and asset planning."
        },
        {
          icon: <FiFileText />,
          title: "Custom Reporting",
          description: "Create ad-hoc reports on asset status, maintenance spend, downtime, and compliance metrics."
        },
        {
          icon: <FiRotateCw />,
          title: "KPI Dashboards",
          description: "Track key metrics like equipment uptime, maintenance costs, and vendor SLA compliance."
        },
        {
          icon: <FiBarChart2 />,
          title: "Export & Analytics",
          description: "Export data for further analysis in Excel, BI tools, or create custom integrations."
        },
      ]
    },
    {
      groupName: "Mobile & Scanning",
      groupIcon: "📱",
      features: [
        {
          icon: <FiSmartphone />,
          title: "Mobile App",
          description: "Full-featured mobile application for asset inspection, maintenance updates, and scanning."
        },
        {
          icon: <FiPackage />,
          title: "QR/Barcode Scanning",
          description: "Scan asset QR codes or barcodes to instantly access asset details and log maintenance."
        },
        {
          icon: <FiCheckSquare />,
          title: "Offline Capability",
          description: "Work offline and sync updates when connectivity is restored."
        },
        {
          icon: <FiCamera />,
          title: "Photo & Evidence Capture",
          description: "Capture photos and attach to work orders for documentation and evidence."
        }
      ]
    },
    {
      groupName: "Multi-Location & Access Control",
      groupIcon: "🏢",
      features: [
        {
          icon: <FiLayers />,
          title: "Multi-Location Support",
          description: "Manage assets across multiple branches, departments, facilities, and floors."
        },
        {
          icon: <FiLock />,
          title: "Role-Based Access Control",
          description: "Control user access by role, location, department, or custom permissions."
        },
        {
          icon: <FiUsers />,
          title: "Hierarchical Organization",
          description: "Model complex organizational structures with branches, departments, and teams."
        },
        {
          icon: <FiFileText />,
          title: "View & Report by Location",
          description: "Generate reports and dashboards specific to branches or organizational units."
        }
      ]
    },
    {
      groupName: "Additional Capabilities",
      groupIcon: "⭐",
      features: [
        {
          icon: <FiRotateCw />,
          title: "Multilingual Support",
          description: "UI available in multiple languages for diverse global teams."
        },
        {
          icon: <FiGitBranch />,
          title: "API Integrations",
          description: "Integrate with ERP, HMIS, accounting, and other business systems via APIs."
        },
        {
          icon: <FiBarChart2 />,
          title: "Mobile Scanning Updates",
          description: "Update asset status and maintenance logs directly from mobile with field scanning."
        },
        {
          icon: <FiCheckSquare />,
          title: "Batch Operations",
          description: "Perform bulk actions on multiple assets to save time and improve efficiency."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>RIO ALM Features | Comprehensive Asset Lifecycle Management</title>
        <meta name="description" content="Explore all features of RIO ALM: asset tracking, maintenance scheduling, vendor management, compliance, workflows, mobile scanning, and multi-location support." />
      </Helmet>

      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <h1 className="hero-title">Comprehensive Feature Set</h1>
          <p className="hero-subtitle">
            Everything you need to manage asset lifecycle with confidence
          </p>
        </div>
      </section>

      {/* Features by Category */}
      <section className="features-section">
        <div className="container">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="feature-group">
              <div className="group-header">
                <h2 className="group-title">{group.groupName}</h2>
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

      {/* Integration Section */}
      <section className="integration-section">
        <div className="container">
          <h2 className="section-title">Integration Capabilities</h2>
          <p className="section-subtitle">
            RIO ALM connects with your existing business systems
          </p>
          <div className="integration-grid">
            <div className="integration-card">
              <h3>Enterprise Resource Planning</h3>
              <p>Sync asset data, depreciation, and financial information with your ERP system.</p>
            </div>
            <div className="integration-card">
              <h3>Hospital Management Systems</h3>
              <p>Integrate biomedical equipment tracking with HMIS for healthcare organizations.</p>
            </div>
            <div className="integration-card">
              <h3>Accounting Systems</h3>
              <p>Export depreciation and asset accounting data to your finance management system.</p>
            </div>
            <div className="integration-card">
              <h3>Custom Applications</h3>
              <p>Leverage REST APIs to build custom integrations or real-time data synchronization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="feature-comparison">
        <div className="container">
          <h2 className="section-title">Why Choose RIO ALM</h2>
          <p className="section-subtitle">
            Advanced capabilities designed for enterprise asset management
          </p>
          <div className="comparison-cards">
            <div className="comparison-card">
              <h3>💼 Enterprise Scale</h3>
              <p>Designed to handle millions of assets across multiple locations and organizations.</p>
            </div>
            <div className="comparison-card">
              <h3>🔒 Security First</h3>
              <p>Role-based access, audit trails, and compliance-ready reporting built-in.</p>
            </div>
            <div className="comparison-card">
              <h3>⚙️ Highly Configurable</h3>
              <p>Customize workflows, approvals, and rules without requiring development.</p>
            </div>
            <div className="comparison-card">
              <h3>📱 Mobile First</h3>
              <p>Full mobile experience with offline capability and barcode scanning.</p>
            </div>
            <div className="comparison-card">
              <h3>🚀 Fast Deployment</h3>
              <p>Phased rollout approach gets you operational quickly by branch or department.</p>
            </div>
            <div className="comparison-card">
              <h3>💰 Flexible Pricing</h3>
              <p>One-time implementation fee plus optional annual support. Not a rigid SaaS model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Ready to Experience RIO ALM?"
        subtitle="Schedule a personalized demo and see how these features can transform your asset management."
        ctaText="Schedule a Demo"
      />
    </>
  );
};

export default RioALMFeatures;
