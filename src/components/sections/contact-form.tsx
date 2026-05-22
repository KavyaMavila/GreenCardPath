"use client";

import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormField {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  placeholder: string;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}

const fields: FormField[] = [
  {
    id: "fullName",
    label: "Full Name *",
    autoComplete: "name",
    placeholder: "Jane Doe",
    required: true,
  },
  {
    id: "email",
    label: "Email *",
    type: "email",
    autoComplete: "email",
    placeholder: "Jane@example.com",
    required: true,
  },
  {
    id: "phone",
    label: "Phone (optional)",
    type: "tel",
    autoComplete: "tel",
    placeholder: "+1 (555) 000-0000",
  },
  {
    id: "linkedin",
    label: "LinkedIn URL (optional — helps us prep)",
    inputMode: "url",
    autoComplete: "url",
    placeholder: "linkedin.com/in/janedoe",
  },
];

const inputClass = "h-12 rounded-sm border-[#83CD20] focus-visible:ring-[#83CD20]/30 text-[#1A1A1A] placeholder:text-gray-400";
const labelClass = "text-[16px] font-titillium font-medium text-[#1A1A1A]";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-[#034833]">
      <Container className="pt-10 pb-0 lg:pt-12">
        <FadeIn>
          <div className="grid lg:grid-cols-2 lg:gap-16 lg:items-stretch">

            {/* LEFT */}
            <div className="flex flex-col pb-20 lg:pb-28">
              <p className="text-center font-titillium text-[13px] font-semibold uppercase tracking-[0.2em] text-white lg:text-left">
                GET STARTED
              </p>
              <h2 className="mt-3 text-center font-sora font-bold text-[48px] leading-tight text-[#83CD20] lg:text-left">
                Check Your<br />Eligibility
              </h2>

              {/* Desktop image */}
              <div className="relative mt-10 hidden overflow-hidden rounded-md lg:block" style={{ height: 440 }}>
                <Image src="/images/formPic.webp" alt="Person typing on laptop" fill className="object-cover object-center" />
              </div>

              {/* Mobile image */}
              <div className="relative mt-8 overflow-hidden rounded-2xl lg:hidden" style={{ aspectRatio: "16/9" }}>
                <Image src="/images/formPic.webp" alt="Person typing on laptop" fill className="object-cover" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col mb-20">
              <div className="flex-1 rounded-sm bg-white px-8 pt-10 pb-12 shadow-xl lg:px-10 lg:pt-12">

                {/* Progress bar */}
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-full rounded-full bg-[#83CD20]" />
                  </div>
                  <span className="shrink-0 font-titillium text-[13px] text-[#4A4A4A]">Step 5 of 5</span>
                </div>

                <h3 className="mb-10 font-sora text-[22px] font-bold text-[#1A1A1A]">
                  Let's get you on a call.
                </h3>

                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} noValidate>
                  <div className="space-y-7">

                    {/* Dynamic text inputs */}
                    {fields.map(({ id, label, type, autoComplete, placeholder, required, inputMode }) => (
                      <div key={id} className="space-y-2">
                        <Label htmlFor={id} className={labelClass}>{label}</Label>
                        <Input
                          id={id}
                          name={id}
                          type={type}
                          autoComplete={autoComplete}
                          placeholder={placeholder}
                          required={required}
                          inputMode={inputMode}
                          className={inputClass}
                        />
                      </div>
                    ))}

                    {/* Textarea */}
                    <div className="space-y-2">
                      <Label htmlFor="notes" className={labelClass}>
                        Anything else we should know?
                      </Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Your goals, timelines, questions..."
                        rows={7}
                        className="rounded-sm border-[#83CD20]  focus-visible:ring-[#83CD20]/30 text-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-14 border-t border-gray-200 pt-6 flex items-center justify-end">
                    {submitted ? (
                      <p className="text-sm text-gray-500" role="status" aria-live="polite">
                        ✓ We'll be in touch soon!
                      </p>
                    ) : (
                      <button
                        type="submit"
                        className="flex font-titillium items-center gap-2 rounded-sm bg-[#83CD20] px-7 py-3 text-[14px] font-semibold text-white hover:bg-[#72b81b] transition-colors"
                      >
                        Submit ✓
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}