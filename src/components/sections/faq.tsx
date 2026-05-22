"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";
import { faq } from "@/lib/content/landing";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Split into two columns for desktop
  const leftItems = faq.filter((_, i) => i % 3 === 0);
  const rightItems = faq.filter((_, i) => i % 3 !== 0);

  return (
    <>
      <Section id="faq" className="border-y border-border/60 bg-white">
        <Container>
          <FadeIn>
            <SectionHeader
              align="center"
              eyebrow="Need to Know"
              title="Frequently Asked Questions"
              description="Everything you need to know before starting your EB-1A or NIW journey."
              className="mx-auto"
            />

            {/* DESKTOP — 2 column layout */}
            <div className="mt-12 hidden lg:grid lg:grid-cols-2 lg:gap-x-20">
              {/* Left column */}
              <div>
                {leftItems.map((item) => {
                  const globalIdx = faq.indexOf(item);
                  const isOpen = openIndex === globalIdx;
                  return (
                    <FaqItem
                      key={item.q}
                      item={item}
                      isOpen={isOpen}
                      onToggle={() => toggle(globalIdx)}
                    />
                  );
                })}
              </div>

              {/* Right column */}
              <div>
                {rightItems.map((item) => {
                  const globalIdx = faq.indexOf(item);
                  const isOpen = openIndex === globalIdx;
                  return (
                    <FaqItem
                      key={item.q}
                      item={item}
                      isOpen={isOpen}
                      onToggle={() => toggle(globalIdx)}
                    />
                  );
                })}
              </div>
            </div>

            {/* MOBILE — single column */}
            <div className="mt-10 lg:hidden">
              {faq.map((item, idx) => (
                <FaqItem
                  key={item.q}
                  item={item}
                  isOpen={openIndex === idx}
                  onToggle={() => toggle(idx)}
                />
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>
      <div className="h-12 sm:h16 md:h-12 bg-white bg-[repeating-linear-gradient(45deg,rgba(131,205,32,0.35)_0px,rgba(131,205,32,0.35)_2px,transparent_2px,transparent_18px)]" />
    </>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#83CD20]">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[18px] font-sora font-Regular leading-snug text-[var(--text-faq-question)]">
          {item.q}
        </span>
        <span className="mt-0.5 shrink-0  text-[24px] font-bold leading-none text-[#83CD20]">
          {isOpen ? "×" : "+"}
        </span>
      </button>

      {isOpen && (
        <p className="pb-5 text-[16px] font-titillium leading-relaxed text-[var(--text-faq-answer)]">
          {item.a}
        </p>
      )}
    </div>
  );
}
