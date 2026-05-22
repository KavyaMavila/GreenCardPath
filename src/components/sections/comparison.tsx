import Link from "next/link";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { comparison } from "@/lib/content/landing";
import Image from "next/image";


export function ComparisonSection() {
  return (
    <Section id="compare" className="bg-background">
      <Container>
        <FadeIn>
          <SectionHeader
            align="center"
            eyebrow={comparison.title}
            title={comparison.subtitle}
            description={comparison.description}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {comparison.cards.map((c, idx) => (
              <FadeIn key={c.key} delay={idx * 0.05}>
                <Card className="group h-full rounded-2xl border border-[#B6D88E] bg-[#EDFFD4] p-5 sm:p-7 lg:p-10 shadow-none">
                  <div className="relative aspect-[580/236] overflow-hidden rounded-xl">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <CardHeader className="px-0 pt-8 pb-0">
                    <div className="flex items-center gap-6">
                      <CardTitle className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold font-sora leading-none tracking-tight text-[var(--text-card-main-header)]">
                        {c.name}
                      </CardTitle>
                      <div className="h-px flex-1 bg-[var(--divider-primary)]" />
                    </div>
                    <CardDescription className="pt-0 text-[20px] sm:text-[24px] lg:text-[32px] font-sora font-semibold leading-tight text-[var(--text-card-sub-header)]">
                      {c.tagline}
                    </CardDescription>

                    <p className="pt-5 text-[16px] sm:text-[18px] lg:text-[22px] font-titillium leading-8 text-[var(--text-card-description)]">
                      {c.summary}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-10 px-0 pt-10">
                    {/* BEST FOR */}
                    <div>
                      <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-sora font-medium text-[var(--text-card-sub-header)]">
                        {c.bestForTitle}
                      </p>

                      {/* ICONS */}
                      <div className="mt-4 flex items-center gap-4">
                        {c.icons?.map((icon, idx) => (
                          <Image
                            key={idx}
                            src={icon}
                            alt=""
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        ))}
                      </div>

                      <p className="mt-5 font-titillium max-w-[360px] text-[16px] leading-[1.7] text-[var(--text-card-description)]">
                        {c.bestFor}
                      </p>
                    </div>

                    {/* QUALIFICATION SIGNALS */}
                    <div>
                      <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-sora font-medium text-[var(--text-card-sub-header)]">
                        {c.signalsTitle}
                      </p>

                      <ul className="mt-4 font-titillium  text-[16px] leading-[1.7] text-[var(--text-card-description)]">
                        {c.signals.map((s) => (
                          <li key={s} className="flex gap-2">
                            <span className="text-[var(--text-card-description)]">
                              -
                            </span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* TIMELINE */}
                    <div className="border-t  border-[#C7DDB2] pt-8">
                      <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-sora font-medium text-[var(--text-card-sub-header)]">
                        {c.timelineLabel}
                      </p>

                      <p className="mt-4 text-[20px] sm:text-[22px] lg:text-[24px] font-titillium font-bold leading-none text-[var(--text-card-months)]">
                        {c.timeline}
                      </p>

                      <p className="mt-2 text-[16px] sm:text-[18px] lg:text-[20px] font-titillium font-semibold text-[#3E3E3E]">
                        (<span className="text-[#034833]">15 days</span> with{" "}
                        <span className="text-[#034833]">Premium</span>{" "}
                        Processing)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="relative mt-[80px] overflow-hidden rounded-2xl bg-[#034833] px-6 py-10 sm:px-10 lg:px-12">
            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              {/* TEXT */}
              <p
                className="max-w-[520px] font-sora text-[28px] leading-tight font-semibold text-white sm:text-[28px] lg:text-[28px] ">
                Not sure which path fits you?
              </p>

              {/* BUTTON */}
              <button
                className="rounded-xl bg-[#83CD20] px-5 py-3 text-[14px] font-semibold text-white transition hover:opacity-90 sm:px-7 sm:py-4 sm:text-[16px] ">
                Take the Eligibility Check →
              </button>
            </div>

            {/* CENTER DECORATION */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
              <div
                className=" absolute bottom-0 left-[78%] h-[170px] w-[170px] -translate-x-1/2 lg:left-1/2 lg:h-full lg:w-[120px] " >
                {/* SIGN */}
                <Image
                  src="/images/sign.webp"
                  alt=""
                  width={160}
                  height={130}
                  className="  absolute bottom-[18px] left-1/2  -translate-x-1/2 object-contain lg:top-0 lg:bottom-auto " />

                {/* GRASS */}
                <Image
                  src="/images/grass.webp"
                  alt=""
                  width={80}
                  height={100}
                  className=" absolute bottom-0 left-1/2 -translate-x-1/2 object-contain "  />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
