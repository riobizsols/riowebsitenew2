import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FiPackage, FiTool, FiUsers, FiFileText,
  FiBarChart2, FiSmartphone,
  FiLayers, FiLock,
} from 'react-icons/fi';
import ProductHeroImage from './ProductHeroImage';
import LazyWhenVisible from '../LazyWhenVisible';
import { RIO_EAM_DASHBOARD } from '../../utils/productImages';
import './RioALMLanding.css';

const loadRioEamBelowFold = () => import('./RioALMLandingBelowFold');

const RioALMLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyFeatures = [
    {
      icon: <FiPackage />,
      title: 'Centralized Asset Repository',
      description:
        'All equipment and assets in one unified system with complete tracking from procurement to retirement.',
    },
    {
      icon: <FiTool />,
      title: 'Preventive Maintenance Scheduling',
      description: 'Time-based and usage-based maintenance planning with automated work order generation.',
    },
    {
      icon: <FiUsers />,
      title: 'Vendor & AMC Management',
      description: 'Track vendor SLAs, CMC/AMC contracts, and monitor performance metrics.',
    },
    {
      icon: <FiFileText />,
      title: 'Compliance Document Management',
      description: 'Store and organize manuals, calibration reports, service records, and audit evidence.',
    },
    {
      icon: <FiBarChart2 />,
      title: 'Depreciation & Finance Reporting',
      description: 'Generate depreciation reports and asset accounting insights for financial planning.',
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Scanning & Updates',
      description: 'QR/Barcode scanning and maintenance updates directly from mobile devices.',
    },
    {
      icon: <FiLayers />,
      title: 'Multi-location & Multi-branch Support',
      description: 'Manage assets across multiple facilities, departments, and geographic locations.',
    },
    {
      icon: <FiLock />,
      title: 'Role-Based Access Control',
      description: 'Granular permissions and workflows tailored to user roles and organizational structure.',
    },
  ];

  const outcomes = [
    {
      title: 'Reduce Equipment Downtime',
      description:
        'Proactive maintenance scheduling minimizes unexpected failures and operational disruptions.',
    },
    {
      title: 'Audit-Ready Compliance',
      description: 'Complete documentation and audit trails ensure regulatory readiness and traceability.',
    },
    {
      title: 'Faster Preventive Maintenance',
      description: 'Automated scheduling and mobile work orders accelerate maintenance execution.',
    },
    {
      title: 'Vendor Accountability',
      description: 'SLA tracking and performance metrics hold vendors accountable and ensure service quality.',
    },
    {
      title: 'Financial Clarity',
      description: 'Accurate depreciation reports and asset accounting for better financial planning.',
    },
    {
      title: 'Operational Control',
      description:
        'Complete visibility and control over assets, workflows, and approvals across the organization.',
    },
  ];

  const faqs = [
    {
      question: 'Is RIO EAM cloud-based or on-premises?',
      answer:
        "RIO EAM offers flexible deployment options. You can deploy it on-premises for complete data ownership, in a private cloud environment, or opt for a managed hosting solution. Choose the option that best fits your organization's security and infrastructure requirements.",
    },
    {
      question: 'How long does implementation typically take?',
      answer:
        'Implementation timelines vary based on organizational size and complexity. Typical deployments range from 6-16 weeks, including discovery, configuration, data migration, user training, and phased rollout. We offer flexible phased rollout options by branch or department.',
    },
    {
      question: 'Can you help migrate data from spreadsheets or legacy systems?',
      answer:
        'Yes, we provide comprehensive data migration support. Our team helps map existing data, clean and validate records, and import them into RIO EAM with minimal disruption to your operations.',
    },
    {
      question: 'Is mobile scanning included?',
      answer:
        'Yes, RIO EAM includes mobile scanning capabilities with QR code and barcode support. Field teams can update asset status, log maintenance activities, and capture evidence directly from their mobile devices.',
    },
    {
      question: 'Can I manage multiple branches in a single deployment?',
      answer:
        'Absolutely. RIO EAM is built for multi-location organizations. You can manage assets, workflows, and access controls across multiple branches, departments, and facilities from a single system.',
    },
    {
      question: 'How customizable are the workflows?',
      answer:
        'RIO EAM offers highly configurable workflows and approval processes. You can set up multi-level approvals, define different rules for asset types, departments, or maintenance categories, without requiring code changes.',
    },
    {
      question: 'What is the pricing model?',
      answer:
        'RIO EAM operates on a one-time implementation and licensing model, not strictly SaaS. Pricing depends on deployment scope, asset volume, and number of users. Optional annual support and maintenance packages are available from year 2 onwards.',
    },
    {
      question: 'Does RIO EAM integrate with other systems like ERP or HMS?',
      answer:
        'Yes, RIO EAM offers API-based integration capabilities with ERP systems, HMIS, and other enterprise applications. Integration scope and requirements are discussed during the implementation planning phase.',
    },
  ];

  return (
    <div className="rio-alm-overview-page">
      <Helmet>
        <title>RIO EAM - Enterprise Asset Managment Software Solution</title>
        <meta
          name="description"
          content="RIO EAM is an enterprise enterprise asset managment platform providing complete visibility from procurement to maintenance, compliance, and depreciation reporting. Deploy on-premises, cloud, or hybrid."
        />
        <meta
          name="keywords"
          content="asset management software, EAM, enterprise asset managment, maintenance management, preventive maintenance, compliance management, asset depreciation, work order management"
        />
        <meta name="author" content="RioBizSols" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="RIO EAM - Enterprise Asset Managment Software" />
        <meta
          property="og:description"
          content="Complete visibility and control over asset lifecycle from procurement to compliance to depreciation reporting. On-premises, cloud, or managed hosting."
        />
        <meta property="og:url" content="https://riobizsols.com/products/rio-eam" />
        <meta property="og:site_name" content="RioBizSols" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RIO EAM - Enterprise Asset Managment" />
        <meta
          name="twitter:description"
          content="End-to-end asset management with maintenance scheduling, compliance, and depreciation reporting."
        />
        <link rel="canonical" href="https://riobizsols.com/products/rio-eam" />
        <link rel="preload" as="image" href={RIO_EAM_DASHBOARD.preload} fetchPriority="high" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Product', 'SoftwareApplication'],
            name: 'RIO EAM',
            description: 'Enterprise Asset Managment Platform',
            manufacturer: {
              '@type': 'Organization',
              name: 'RioBizSols',
              url: 'https://riobizsols.com',
            },
            applicationCategory: 'BusinessApplication',
            operatingSystem: ['Web', 'Mobile'],
            offers: {
              '@type': 'Offer',
              price: 'Contact for pricing',
              priceCurrency: 'USD',
              availability: 'https://schema.org/OnlineOnly',
            },
            features: [
              'Asset Lifecycle Tracking',
              'Preventive Maintenance Scheduling',
              'Vendor & AMC Management',
              'Compliance Document Management',
              'Depreciation & Finance Reporting',
              'Mobile Scanning',
              'Multi-location Support',
              'Role-Based Access Control',
            ],
          })}
        </script>
      </Helmet>

      <section className="alm-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Complete Control Over Your Assets</h1>
            <p className="hero-subtitle">
              RIO EAM gives you end-to-end visibility and control over asset lifecycle—from procurement
              and maintenance to compliance and depreciation reporting.
            </p>
            <p className="hero-subtext">
              On-premises, private cloud, or managed hosting. Highly configurable workflows. Your data,
              your control.
            </p>
            <div className="hero-ctas">
              <Link to="/products/rio-eam/contact" className="btn btn-primary">
                Request a Demo
              </Link>
              <Link to="/products/rio-eam/features" className="btn btn-secondary">
                Explore Features
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-placeholder">
              <div className="placeholder-header">Dashboard Preview</div>
              <ProductHeroImage
                src={RIO_EAM_DASHBOARD.src}
                srcSet={RIO_EAM_DASHBOARD.srcSet}
                sizes={RIO_EAM_DASHBOARD.sizes}
                alt="RIO EAM dashboard preview"
                width={RIO_EAM_DASHBOARD.width}
                height={RIO_EAM_DASHBOARD.height}
              />
            </div>
          </div>
        </div>
      </section>

      <LazyWhenVisible
        loader={loadRioEamBelowFold}
        minHeight={600}
        rootMargin="120px 0px"
        componentProps={{ outcomes, keyFeatures, faqs }}
      />
    </div>
  );
};

export default RioALMLanding;
