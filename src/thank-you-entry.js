import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export async function startThankYouLanding() {
  const { default: LandingThankYouPage } = await import(
    "./components/Products/landing-thank-you/LandingThankYouPage"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <Suspense fallback={null}>
            <LandingThankYouPage />
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
  );

  void import("bootstrap/dist/js/bootstrap.bundle.min.js");
}
