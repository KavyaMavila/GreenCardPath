import Link from "next/link";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/content/landing";

export function PricingSection() {
  return (
    <Section id="pricing" className="border-y border-border/60 bg-muted/20">
      <Container>
        <FadeIn>
          <SectionHeader
            align="center"
            eyebrow={pricing.title}
            title={pricing.subtitle}
            description={pricing.description}
            className="mx-auto"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {pricing.tiers.map((tier, idx) => {
              const isFirst = idx === 0;
              const isThird = idx === 2;

              return (
                <FadeIn key={tier.key} delay={idx * 0.05}>
                  <div
                    className={[
                      "flex h-full flex-col rounded-sm p-8 ",
                      isThird
                          ? "border border-[#83CD20] bg-[#EEF7DC]"
                          : "border  border-[#83CD20] bg-white shadow-sm",
                    ].join(" ")}
                  >
                    {/* Header */}
                    <div>
                      <p className="text-[24px] font-sora font-bold text-[var(--text-support-card-sub-header)]">
                        {tier.name}
                      </p>
                      <p className="mt-2 text-[32px] font-sora font-bold text-[var(--text-support-card-header)]">
                        {tier.price}
                      </p>
                      <p className="mt-0.5 text-[16px] font-titillium text-[var(--text-support-card)]">
                        {tier.priceNote}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-[#83CD20]" />

                    {/* Features */}
                    <div className="flex-1">
                      {tier.features.map((f, fIdx) => (
                        <div key={f}>
                          <div className="flex items-start gap-3 py-3">
                            <span className="mt-0.5 font-titillium text-[16px] text-[var(--text-support-card)]">✓</span>
                            <span className="text-[16px] font-titillium leading-relaxed text-[var(--text-support-card)]">
                              {f}
                            </span>
                          </div>
                          {fIdx < tier.features.length - 1 && (
                            <div className="border-t border-[#E0E0E0]" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="mt-8 flex justify-center">
                      <Button
                        asChild
                        className={[
                          "rounded-[8px] px-10 py-3 font-titillium text-[15px] font-semibold",
                          isThird
                            ? "bg-[var(--color-primary-green)] font-titillium text-white hover:bg-[#72b81b] border-0"
                            : "border-[2px] border-[#282828] font-titillium bg-transparent text-foreground hover:bg-muted",
                        ].join(" ")}
                        variant="outline"
                      >
                        <Link href={tier.href}>{tier.cta}</Link>
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}