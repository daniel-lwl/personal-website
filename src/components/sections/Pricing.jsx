import React from "react";
import "../../styles/Pricing.css";

const packages = [
  {
    badge: "Basic",
    title: "Landing Page",
    price: "Starting at RM800",
    perfectFor: "Small businesses or individuals who need a simple online presence with a single, effective page.",
    features: [
      "Responsive single-page website",
      "Up to 5 content sections",
      "Mobile-friendly design",
      "Contact form",
      "Custom domain setup",
      "1 round of revisions"
    ],
    delivery: "1-2 weeks"
  },
  {
    badge: "Popular",
    title: "Multi-Page Website",
    price: "Starting at RM3,500",
    perfectFor: "Businesses that need a complete web presence with multiple pages to showcase their services.",
    features: [
      "Up to 5 custom pages",
      "Responsive design across all devices",
      "Enhanced contact form",
      "Image gallery/portfolio",
      "Social media integration",
      "Google Analytics setup",
      "2 rounds of revisions"
    ],
    delivery: "3-4 weeks"
  },
//   {
//     badge: "Premium",
//     title: "Custom Web App",
//     price: "Starting at RM6,000",
//     perfectFor: "Businesses needing custom functionality beyond a standard website, such as booking systems or member areas.",
//     features: [
//       "Custom web application",
//       "User authentication",
//       "Database integration",
//       "Custom functionality (booking, dashboard, etc.)",
//       "Admin panel for content management",
//       "Mobile-responsive interface",
//       "3 rounds of revisions",
//       "1 month of post-launch support"
//     ],
//     delivery: "6-8 weeks"
//   }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-header">
        <h2>Packages & Pricing</h2>
        <div className="divider"></div>
      </div>
      
      <div className="pricing-grid">
        {packages.map((pkg, index) => (
          <div key={index} className={`pricing-card ${pkg.badge === "Popular" ? "featured" : ""}`}>
            <div className="pricing-badge">{pkg.badge}</div>
            <h3 className="pricing-title">{pkg.title}</h3>
            <div className="pricing-price">{pkg.price}</div>
            <div className="pricing-features">
              <h4>Perfect for:</h4>
              <p>{pkg.perfectFor}</p>
              
              <h4>What you get:</h4>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <h4>Delivery:</h4>
              <p>{pkg.delivery}</p>
            </div>
            <a href="#contact" className="pricing-cta">Get Started</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;