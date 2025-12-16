import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CodeExamples from "@/components/CodeExamples";
import FeatureSection from "@/components/FeatureSection";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import CustomerStories from "@/components/CustomerStories";
import EnterpriseFeatures from "@/components/EnterpriseFeatures";
import Awards from "@/components/Awards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Stats />
        <CodeExamples />
        <FeatureSection
          title="Increase subscription revenue without app releases"
          description="Manage, target, localize and personalize paywalls without leaving your browser."
          ctaText="Increase app revenue"
          ctaLink="#paywalls"
          testimonial={{
            quote:
              "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
            author: "Ilgar Tali",
            role: "Founder & Chief Vision Officer",
            company: "Smartist",
          }}
          imagePlaceholder="Paywall A/B testing"
          imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        />
        <FeatureSection
          title="Cut refund rate by 40%"
          description="Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it."
          ctaText="Set up Refund Saver"
          ctaLink="#refund-saver"
          testimonial={{
            quote:
              "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
            author: "Berk Çağatay Albayrak",
            role: "Sr. Product Manager",
            company: "Fotorama",
          }}
          reverse
          imagePlaceholder="Refund Rate"
          imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        />
        <FeatureSection
          title="Know your subscription numbers at any moment"
          description="Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI."
          ctaText="See subscription BI"
          ctaLink="#analytics"
          testimonial={{
            quote:
              "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy.",
            author: "Nikolay Chebotarev",
            role: "Head of UA",
            company: "Moonly.app",
          }}
          imagePlaceholder="Subscription Analytics"
          imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
        />
        <FeatureSection
          title="No-code paywall builder"
          description="Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team."
          ctaText="Create paywalls within minutes"
          ctaLink="#paywall-builder"
          testimonial={{
            quote:
              "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
            author: "Mike McSweeney",
            role: "Chief Product Officer",
            company: "Moodworks Inc",
          }}
          reverse
          imagePlaceholder="No Code Paywall Builder"
          imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
        />
        <FeatureSection
          title="Boost app revenue fast with web funnels"
          description="Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed."
          ctaText="Explore FunnelFox"
          ctaLink="#funnelfox"
          imagePlaceholder="FunnelFox"
          imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
        />
        <Integrations />
        <Testimonials />
        <CustomerStories />
        <EnterpriseFeatures />
        <Awards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
