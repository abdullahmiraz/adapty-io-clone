"use client";

import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

export default function Integrations() {
  const integrations = [
    "Airbridge",
    "Adjust",
    "Amazon S3",
    "Amplitude",
    "Apple Ads",
    "AppFlyer",
    "AppMetrica",
    "Asapty",
    "Branch",
    "Braze",
    "Facebook Ads",
    "Google Analytics",
    "Firebase",
    "Google Cloud Storage",
    "mixpanel",
    "OneSignal",
    "PostHog",
    "PushWoosh",
    "SplitMetrics",
    "Singular",
    "Stripe",
    "Tenjin",
    "WebHooks",
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animations.scrollTransition()}
          className="mx-auto max-w-4xl text-center mb-12"
        >
          <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            Sync purchase data with other services
          </h2>
          <p className="text-lg font-semibold text-gray-600">
            Forward subscription events to analytics and attribution services
            without coding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={animations.scrollTransition(animations.stagger.small)}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={animations.scrollTransition(
                index * animations.stagger.tiny
              )}
              whileHover={{ scale: 1.1, y: -5 }}
              className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-black text-gray-700 shadow-sm transition-all hover:shadow-md hover:border-violet-300"
            >
              {integration}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animations.scrollTransition(animations.stagger.medium)}
          className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
        >
          <p className="mb-4 font-semibold text-gray-700">
            &quot;They have a great external API that makes it easy to pass
            related events to other analytics tools such as Amplitude and
            Mixpanel.&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500"></div>
            <div>
              <div className="font-black text-gray-900">Chris Bick</div>
              <div className="text-sm font-bold text-gray-600">
                Founder and CEO, Bickster
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
