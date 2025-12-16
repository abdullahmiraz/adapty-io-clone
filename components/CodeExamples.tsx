"use client";

import { useState } from "react";
import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const platforms = [
  { id: "swift", name: "Swift", icon: "⚡" },
  { id: "kotlin", name: "Kotlin", icon: "☕" },
  { id: "react", name: "React Native", icon: "⚛️" },
  { id: "flutter", name: "Flutter", icon: "📱" },
  { id: "unity", name: "Unity", icon: "🎮" },
];

const codeSnippets = {
  swift: `// Your app's code
import Adapty
 
do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
 
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
  kotlin: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())
 
// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
	when (result) {
		is AdaptyResult.Success -> {
			if (result.value is AdaptyPurchaseResult.Success)
				// successful purchase
		}
		is AdaptyResult.Error -> {
			// handle the error
		}
	}
}`,
  react: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');
 
// Make a purchase, Adapty handles the rest
try {
	const profile = await adapty.makePurchase(product);
	// successful purchase
} catch (error) {
	// handle the error
}`,
  flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';
 
try {
  await Adapty().activate();
 
  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
  unity: `// Your app's code
using AdaptySDK;
 
Adapty.makePurchase(product, (profile, error) => {
	if (error == null) {
		// successful purchase
	}
});`,
};

export default function CodeExamples() {
  const [activePlatform, setActivePlatform] = useState("swift");

  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
              Integrate in-app purchases with a few lines of code
            </h2>
            <p className="text-lg font-semibold text-gray-600">
              Integrate IAPs within a few hours without server coding. Adapty
              handles the correct subscription state, taking everything under the
              hood, from free trials to refunds, in a simple, developer-friendly
              SDK.
            </p>
          </motion.div>

          {/* Platform Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex flex-wrap items-center justify-center gap-2"
          >
            {platforms.map((platform, index) => (
              <motion.button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-black transition-colors",
                  activePlatform === platform.id
                    ? "bg-violet-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                <span>{platform.icon}</span>
                {platform.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-xl border border-gray-200 bg-gray-900 shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-700 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <a
                href="#github"
                className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>100% Open Source</span>
              </a>
            </div>
            <AnimatePresence mode="wait">
              <motion.pre
                key={activePlatform}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="overflow-x-auto p-6 text-sm text-gray-100"
              >
                <code>{codeSnippets[activePlatform as keyof typeof codeSnippets]}</code>
              </motion.pre>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center text-sm font-bold text-gray-500"
          >
            Make subscriptions easy
          </motion.p>
        </div>
      </div>
    </section>
  );
}
