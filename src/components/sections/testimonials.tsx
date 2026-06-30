"use client";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { testimonials } from "@/lib/content/landing";
import { useState } from "react";
import Image from "next/image";
export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="stories" className="bg-[var(--testimonial-bg)]">
      <Container>
        <FadeIn>
          <SectionHeader
            align="center"
            eyebrow="Success Stories"
            title="They Got Their Green Cards."
            description="Trusted by professionals who successfully secured their green cards."
            className="mx-auto"
          />

          <FadeIn>
            <div
              className="relative mt-10 w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: "16/5" }}
            >
              <Image
                src="/images/HS.webp"
                alt="Professionals shaking hands"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* DESKTOP — 3-column grid */}
          <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
            {testimonials.map((t, idx) => (
              <FadeIn key={t.name} delay={idx * 0.05}>
                <div className="flex h-full flex-col  rounded-sm border border-[var(--testimonial-card-border)] bg-white p-6 shadow-sm">
                  {/* Badge + Quote mark row */}
                  <div className="flex items-start justify-between">
                    <span className="rounded-md font-titillium text-[13px] font-bold text-[var(--testimonial-card-header)] ">
                      {t.badge}
                    </span>
                    <svg
                      width="37"
                      height="30"
                      viewBox="0 0 74 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M71.4298 10.128C69.7693 6.53823 67.5751 3.96585 64.8455 2.4109C62.1143 0.857552 59.0906 0.0800781 55.7745 0.0800781C50.6317 0.0800781 46.7498 1.58223 44.1273 4.58175C41.5047 7.58286 40.1943 11.1727 40.1943 15.3512C40.1943 19.8545 41.5575 23.3387 44.2903 25.8023C47.0183 28.2675 50.4175 29.4993 54.488 29.4993C55.5539 29.4993 56.564 29.4161 57.5212 29.2513C57.4365 32.4556 57.0402 34.9768 56.3338 36.8133C55.5284 38.9026 54.2978 40.3247 52.6405 41.075C50.9801 41.8253 48.7571 42.1996 45.9747 42.1996H39.873V58.9201H44.2104C50.7404 58.9201 56.2012 57.7955 60.5913 55.5431C64.9813 53.2938 68.2991 49.8096 70.546 45.0952C72.7946 40.3807 73.9197 34.2713 73.9197 26.7669V24.6777C73.9197 18.5683 73.0887 13.7195 71.4298 10.128Z"
                        fill="#43B748"
                      />
                      <path
                        d="M34.1265 24.6777V26.7669C34.1265 34.2713 33.0014 40.3807 30.7528 45.0952C28.5058 49.8096 25.1881 53.2938 20.798 55.5431C16.408 57.7955 10.9471 58.9201 4.41717 58.9201H0.079834V42.1996H6.18151C8.96386 42.1996 11.1869 41.8253 12.8473 41.075C14.5046 40.3247 15.7352 38.9026 16.5406 36.8133C17.247 34.9768 17.6433 32.4556 17.728 29.2513C16.7707 29.4161 15.7607 29.4993 14.6948 29.4993C10.6243 29.4993 7.22509 28.2675 4.49708 25.8023C1.76427 23.3387 0.401059 19.8545 0.401059 15.3512C0.401059 11.1727 1.71153 7.58286 4.33407 4.58175C6.9566 1.58223 10.8385 0.0800781 15.9813 0.0800781C19.2974 0.0800781 22.3211 0.857552 25.0523 2.4109C27.7819 3.96585 29.9761 6.53823 31.6366 10.128C33.2955 13.7195 34.1265 18.5683 34.1265 24.6777Z"
                        fill="#43B748"
                      />
                    </svg>
                  </div>

                  {/* Quote text */}
                  <p className="mt-4 flex-1 text-[14px] font-titillium leading-relaxed text-[var(--testimonial-card-text)]">
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11  font-sora shrink-0 items-center justify-center rounded-full bg-[#F1F5EB] text-[13px] font-bold text-[var(--testimonial-card-header)]">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-[16px] font-sora font-semibold leading-none text-[var(--testimonial-card-profile-name)]">
                        {t.name}
                      </p>
                      <p className="mt-1 text-[14px] font-titillium text-[var(--testimonial-card-profile-subtitle)]">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* MOBILE — carousel with dot indicators */}
          <div className="mt-10 lg:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="w-full shrink-0 px-1">
                    <div className="flex flex-col rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
                      {/* Badge + Quote mark row */}
                      <div className="flex items-start justify-between">
                        <span className="rounded-md font-titillium text-[16px] font-semibold text-[var(--testimonial-card-header)]">
                          {t.badge}
                        </span>
                        <svg
                          width="37"
                          height="30"
                          viewBox="0 0 74 59"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            d="M71.4298 10.128C69.7693 6.53823 67.5751 3.96585 64.8455 2.4109C62.1143 0.857552 59.0906 0.0800781 55.7745 0.0800781C50.6317 0.0800781 46.7498 1.58223 44.1273 4.58175C41.5047 7.58286 40.1943 11.1727 40.1943 15.3512C40.1943 19.8545 41.5575 23.3387 44.2903 25.8023C47.0183 28.2675 50.4175 29.4993 54.488 29.4993C55.5539 29.4993 56.564 29.4161 57.5212 29.2513C57.4365 32.4556 57.0402 34.9768 56.3338 36.8133C55.5284 38.9026 54.2978 40.3247 52.6405 41.075C50.9801 41.8253 48.7571 42.1996 45.9747 42.1996H39.873V58.9201H44.2104C50.7404 58.9201 56.2012 57.7955 60.5913 55.5431C64.9813 53.2938 68.2991 49.8096 70.546 45.0952C72.7946 40.3807 73.9197 34.2713 73.9197 26.7669V24.6777C73.9197 18.5683 73.0887 13.7195 71.4298 10.128Z"
                            fill="#43B748"
                          />
                          <path
                            d="M34.1265 24.6777V26.7669C34.1265 34.2713 33.0014 40.3807 30.7528 45.0952C28.5058 49.8096 25.1881 53.2938 20.798 55.5431C16.408 57.7955 10.9471 58.9201 4.41717 58.9201H0.079834V42.1996H6.18151C8.96386 42.1996 11.1869 41.8253 12.8473 41.075C14.5046 40.3247 15.7352 38.9026 16.5406 36.8133C17.247 34.9768 17.6433 32.4556 17.728 29.2513C16.7707 29.4161 15.7607 29.4993 14.6948 29.4993C10.6243 29.4993 7.22509 28.2675 4.49708 25.8023C1.76427 23.3387 0.401059 19.8545 0.401059 15.3512C0.401059 11.1727 1.71153 7.58286 4.33407 4.58175C6.9566 1.58223 10.8385 0.0800781 15.9813 0.0800781C19.2974 0.0800781 22.3211 0.857552 25.0523 2.4109C27.7819 3.96585 29.9761 6.53823 31.6366 10.128C33.2955 13.7195 34.1265 18.5683 34.1265 24.6777Z"
                            fill="#43B748"
                          />
                        </svg>
                      </div>

                      {/* Quote text */}
                      <p className="mt-4 text-[14px] font-titillium leading-relaxed text-muted-foreground">
                        {t.quote}
                      </p>

                      {/* Author */}
                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 font-sora items-center justify-center rounded-full bg-[#F1F5EB] text-[13px] font-bold text-[#4a7c1f]">
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-[16px] font-sora font-semibold leading-none text-foreground">
                            {t.name}
                          </p>
                          <p className="mt-1 text-[14px] font-titillium text-muted-foreground">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="mt-5 flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "h-2 rounded-full transition-all duration-200",
                    idx === activeIndex
                      ? "w-5 bg-[#83CD20]"
                      : "w-2 bg-[#c5e89a]",
                  ].join(" ")}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
