"use client";

import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerSections = [
    {
      title: "Adapty",
      links: [
        "Paywall management",
        "Paywall builder",
        "Onboarding builder",
        "AI generator",
        "A/B testing",
        "Autopilot",
        "Targeting",
        "Localization",
        "Remote config",
      ],
    },
    {
      title: "Infrastructure",
      links: [
        "Subscription SDK",
        "Subscriber sync",
        "Fallback paywalls",
        "Refund saver",
        "Integrations",
      ],
    },
    {
      title: "Roles",
      links: ["For developers", "For marketers", "For app owners"],
    },
    {
      title: "Stages",
      links: ["Indie", "Startups", "Publishers", "Enterprise"],
    },
    {
      title: "Cases",
      links: [
        "Integrate subscriptions",
        "Grow app revenue",
        "Analyze performance",
        "Read our cases",
      ],
    },
    {
      title: "Migrate from",
      links: ["RevenueCat", "Purchasely", "Qonversion", "Superwall"],
    },
  ];

  const sdkLinks = [
    "iOS",
    "Android",
    "React Native",
    "Flutter",
    "FlutterFlow",
    "Kotlin Multiplatform",
    "Capacitor",
    "Unity",
    "Stripe",
  ];

  const resourceLinks = [
    "Blog",
    "Ebooks",
    "Podcast",
    "Webinars",
    "Events",
    "Glossary",
    "Documentation",
    "Paywall library",
    "LTV prediction model",
    "Apple fiscal calendar",
    "Apple receipt checker",
    "Subscription calculator",
    "Refund saver calculator",
    "In-app subscription reports",
    "Community",
  ];

  const analyticsLinks = [
    "Revenue analytics",
    "LTV analytics",
    "AI predictive analytics",
    "Apple ads manager",
  ];

  const companyLinks = [
    "About us",
    "Contact us",
    "Careers",
    "Terms",
    "Privacy policy",
    "Data protection",
    "System status",
    "SOC2 compliance",
    "Become a partner",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {/* SDK Links */}
          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
              SDK
            </h3>
            <ul className="space-y-2">
              {sdkLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.slice(0, 8).map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Analytics */}
          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
              Analytics
            </h3>
            <ul className="space-y-2">
              {analyticsLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm font-bold text-gray-400">
              © 2025 Adapty Tech Inc.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#github"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#linkedin"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

