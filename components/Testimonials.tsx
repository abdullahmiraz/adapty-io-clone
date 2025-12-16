"use client";

import { motion } from "framer-motion";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android.",
      author: "Magnús Ólafsson",
      role: "Chief Technology Officer",
      company: "Smitten",
    },
    {
      quote:
        "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
      author: "Ilgar Tali",
      role: "Founder & Chief Vision Officer",
      company: "Smartist",
    },
    {
      quote:
        "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
      author: "Berk Çağatay Albayrak",
      role: "Sr. Product Manager",
      company: "Fotorama",
    },
    {
      quote:
        "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy.",
      author: "Nikolay Chebotarev",
      role: "Head of UA",
      company: "Moonly.app",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
