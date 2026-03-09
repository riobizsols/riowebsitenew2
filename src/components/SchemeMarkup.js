import React from 'react';

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Riobizsols Pvt Ltd",
    "url": "https://riobizsols.com",
    "logo": "https://riobizsols.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 760 284 6711",
      "contactType": "End-to-End Business Services "
    },
    "sameAs": [
      "https://www.facebook.com/riobizsols",
      "https://www.linkedin.com/company/rio-business-solutions-usa/",
      "https://www.youtube.com/channel/UC37z3CVHMraqRnrGrlucZ0g",
      "https://www.instagram.com/rio_cbe/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;
