import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/IndustryCards.css';

const IndustrySection = () => {
  const industries = [
    {
      id: 'tech-startup',
      title: 'Tech Startups',
      subtitle: 'From Idea to Funded',
      description: 'Fast development, growth hacking, and flexible staffing for rapid scaling.',
      icon: '⚡',
      color: 'tech-startup',
      stats: 'MVP to Series A'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      subtitle: 'Sell More. Run Smoother.',
      description: 'Beautiful websites, smart marketing, and systems that don\'t slow you down.',
      icon: '🛍️',
      color: 'ecommerce',
      stats: '$100K - $5M+'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      subtitle: 'Digital Transformation',
      description: 'Real-time production tracking, inventory management, and compliance automation.',
      icon: '🏭',
      color: 'manufacturing',
      stats: 'Efficiency First'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      subtitle: 'Modern Systems',
      description: 'HIPAA-compliant practice management, staffing, and patient engagement.',
      icon: '🏥',
      color: 'healthcare',
      stats: 'Care-Focused Tech'
    },
    {
      id: 'saas',
      title: 'SaaS',
      subtitle: 'Build Better. Faster.',
      description: 'Product velocity, growth metrics, and operational systems that scale.',
      icon: '💻',
      color: 'saas',
      stats: 'Seed to Series B+'
    }
  ];

  return (
    <section className="industry-section">
      <div className="container">
        <div className="industry-header">
          <h2>Industry-Specific Solutions</h2>
          <p>We know your industry. We know your challenges. We know what works.</p>
        </div>

        <div className="industry-cards-grid">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to={`/industry/${industry.id}`}
              className={`industry-card industry-card-${industry.color}`}
            >
              <div className="card-icon">{industry.icon}</div>
              <h3 className="card-title">{industry.title}</h3>
              <p className="card-subtitle">{industry.subtitle}</p>
              <p className="card-description">{industry.description}</p>
              <div className="card-footer">
                <span className="card-stats">{industry.stats}</span>
                <span className="card-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="industry-cta">
          <p>Not sure which industry solution is right for you?</p>
          <Link to="/contact" className="industry-cta-btn">
            Let's Talk About Your Business
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
