import { SiteShell } from "@/components/layout/site-shell";
import { SkipLink } from "@/components/layout/skip-link";
import { ComparisonSection } from "@/components/sections/comparison";
import { ContactFormSection } from "@/components/sections/contact-form";
import { EligibilityChecklistSection } from "@/components/sections/eligibility-checklist";
import { FaqSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { PricingSection } from "@/components/sections/pricing";
import { ProcessTimelineSection } from "@/components/sections/process-timeline";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <SiteShell>
      <SkipLink />
      <Navbar />
      <main id="content" className="flex-1 ">
        <Hero />
        <StatsSection />
        <ComparisonSection />
        <EligibilityChecklistSection />
        <ProcessTimelineSection />
        {/* <PricingSection /> */}
        <TestimonialsSection />
        <FaqSection />
        <ContactFormSection />
      </main>
      <Footer />
    </SiteShell>
  );
}
