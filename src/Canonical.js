import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const CanonicalLink = ({ baseUrl }) => {
  const location = useLocation();
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalLink;
