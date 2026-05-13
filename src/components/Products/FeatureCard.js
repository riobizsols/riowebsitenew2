import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description, actionLinkHref, actionLinkLabel }) => {
  const isExternal = actionLinkHref && /^https?:\/\//i.test(actionLinkHref);

  return (
    <div className="feature-card">
      <div className="feature-icon">
        <span className="feature-icon-inner">{icon}</span>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      {actionLinkHref ? (
        isExternal ? (
          <a
            href={actionLinkHref}
            className="feature-card-action-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {actionLinkLabel || 'Learn more'}
          </a>
        ) : (
          <Link to={actionLinkHref} className="feature-card-action-link">
            {actionLinkLabel || 'Learn more'}
          </Link>
        )
      ) : null}
    </div>
  );
};

export default FeatureCard;
