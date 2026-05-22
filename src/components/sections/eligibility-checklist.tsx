"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { eligibilityCriteria } from "@/lib/content/landing";

export function EligibilityChecklistSection() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  const selectedCount = useMemo(
    () => Object.values(checks).filter(Boolean).length,
    [checks],
  );

  return (
    <Section id="eligibility" className="bg-[var(--bg-qualify-session)]">
      <Container>
        <FadeIn>
          <SectionHeader
            align="center"
            eyebrow="Self-Assessment"
            title="Do You Qualify?"
            description="EB-1A requires meeting 3 of the 10 USCIS criteria."
            className="mx-auto"
          />
          <p className="text-center font-titillium italic text-[var(--text-session-description)]">
            Check everything that applies to you.
          </p>
          <div className="mx-auto mt-10 max-w-6xl rounded-[20px] bg-white p-8 md:p-10">
            <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2">
              {eligibilityCriteria.map((item) => {
                const id = item;
                return (
                  <div
                    key={id}
                    className="h-[80px] rounded-[10px] border border-[var(--qualify-checkbox-border)] bg-white px-5 flex items-center gap-4 transition-all"
                  >
                    <Checkbox
                      id={id}
                      checked={Boolean(checks[id])}
                      onCheckedChange={(checked) =>
                        setChecks((prev) => ({
                          ...prev,
                          [id]: checked === true,
                        }))
                      }
                      aria-describedby={`${id}-help`}
                      className="h-6 w-6 rounded-[8px] border-[var(--qualify-checkbox-border)] data-[state=checked]:bg-white "
                    />
                    <div className="space-y-1">
                      <Label htmlFor={id} className="text-md font-titillium font-medium text-[var(--qualify-checkbox-text)]">
                        {item}
                      </Label>
                     
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-center gap-6">


              <Button
                className="h-[56px] rounded-[10px] bg-[var(--color-primary-green)] px-6 text-white"
                asChild
              >
                <Link href="#contact">
                  Get a Free Case Evaluation →
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
