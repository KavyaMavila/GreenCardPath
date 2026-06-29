"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Script from "next/script";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { InlineWidget } from "react-calendly";

import {
  ACHIEVEMENTS,
  FIELDS,
  IMMIGRATION_OPTIONS,
  INTEREST_OPTIONS,
} from "@/lib/content/landing";

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

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

function formatTimeLabel(t: string) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

const inputClass =
  "h-12 rounded-sm border-[#83CD20] focus-visible:ring-[#83CD20]/30 text-[#1A1A1A] placeholder:text-gray-400";
const labelClass = "text-[16px] font-titillium font-medium text-[#1A1A1A]";
const SESSION_KEY = "contact_form_submitted";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
  } | null>(null);


  const [step, setStep] = useState(1);

  const [eligibilityData, setEligibilityData] = useState({
    interest: "",
    immigration: "",
    achievements: [] as string[],
    field: "",
  });

 useEffect(() => {
  const booked = localStorage.getItem("meetingScheduled");

  if (booked === "true") {
    setAlreadySubmitted(true);
  }
}, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sessionStorage.getItem(SESSION_KEY)) {
      setAlreadySubmitted(true);
      return;
    }

    if (!window.grecaptcha) {
      setError("reCAPTCHA not loaded. Please refresh and try again.");
      return;
    }

    // ── Read form values IMMEDIATELY before any await ─────────────────────
    // (React nullifies e.currentTarget after async calls)
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      linkedin: (form.elements.namedItem("linkedin") as HTMLInputElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
      preferredDate: preferredDate.trim(),
      preferredTime: preferredTime.trim(),
    };

    setIsSubmitting(true);
    setError("");

    try {
      // ── Get reCAPTCHA token AFTER reading form values ───────────────────
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
              action: "contact",
            })
            .then(resolve)
            .catch(reject);
        });
      });

      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, eligibilityData, recaptchaToken }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");

      // sessionStorage.setItem(
      //   SESSION_KEY,
      //   JSON.stringify({
      //     name: data.fullName,
      //     email: data.email,
      //     submittedAt: new Date().toISOString(),
      //   }),
      // );

      setFormData({
        fullName: data.fullName,
        email: data.email,
      });

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Already submitted ─────────────────────────────────────────────────────
  if (alreadySubmitted) {
    if (alreadySubmitted) {
  return (
    <section id="contact" className="relative bg-[#034833]">
      <Container className="pt-10 pb-20 lg:pt-12">
        <div className="flex items-center justify-center">
          <div className="rounded-sm bg-white px-10 py-16 shadow-xl text-center max-w-md w-full">
            <div className="text-5xl mb-4">🎉</div>

            <h3 className="font-sora text-xl font-bold text-[#1A1A1A] mb-2">
              Your meeting has been scheduled!
            </h3>

            <p className="text-gray-500">
              Thank you for booking a consultation with us.
              We'll see you at the scheduled time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
  }

  return (
    <>
      {/* reCAPTCHA v3 — invisible, loads in background */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        onLoad={() => setRecaptchaReady(true)}
      />

      <section id="contact" className="relative bg-[#034833]">
        <Container className="pt-6 sm:pt-10 pb-0 lg:pt-12">
          <FadeIn>
            <div className="grid lg:grid-cols-2 lg:gap-16 lg:items-stretch">
              {/* LEFT */}
              <div className="flex flex-col pb-8 sm:pb-12 lg:pb-28">
                <p className="text-center font-titillium text-[13px] font-semibold uppercase tracking-[0.2em] text-white lg:text-left">
                  GET STARTED
                </p>
                <h2
                  className="mt-3 text-center font-sora font-bold
text-[38px]
xs:text-[42px]
sm:text-[48px]
leading-tight
text-[#83CD20]"
                >
                  Check Your
                  <br />
                  Eligibility
                </h2>
                <div
                  className="relative mt-10 hidden overflow-hidden rounded-md lg:block"
                  style={{ height: 440 }}
                >
                  <Image
                    src="/images/form image.webp"
                    fill
                    alt="Person typing on laptop"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative mt-8 h-[220px] sm:h-[320px] lg:hidden">
                  <Image
                    src="/images/form image.webp"
                    fill
                    alt="Person typing on laptop"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col mb-20">
                <div className="flex-1 rounded-sm bg-white px-8 pt-10 pb-12 shadow-xl lg:px-10 lg:pt-12">
                  {/* Progress bar */}
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-[#83CD20] transition-all"
                        style={{ width: `${(step / 5) * 100}%` }}
                      />
                    </div>
                    <span className="shrink-0 font-titillium text-[13px] text-[#4A4A4A]">
                      Step {step} of 5
                    </span>
                  </div>

                  <h3 className="mb-10 font-sora text-[22px] font-bold text-[#1A1A1A]">
                    Let's get you on a call.
                  </h3>

                  {/* ── Success state ── */}
                  {submitted ? (
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-5xl mb-4">✓</div>

                        <h2 className="text-2xl font-bold">
                          Your details have been captured!
                        </h2>

                        <p className="text-gray-500 mt-2">
                          Please select a convenient time below.
                        </p>
                      </div>
                      <div className="h-[600px] sm:h-[700px]">
                        <InlineWidget
                          url="https://calendly.com/kavya3904/30min"
                          prefill={{
                            name: formData?.fullName,
                            email: formData?.email,
                          }}
                          styles={{ height: "100%" }}
                        />
                      </div>
                      {/* <InlineWidget
      url="https://calendly.com/kavya3904/30min"
      styles={{
        height: "700px",
      }}
    
    /> */}
                    </div>
                  ) : (
                    <>
                      {step === 1 && (
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-[#1A1A1A]">
                            What are you interested in?
                          </h3>

                          {INTEREST_OPTIONS.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() =>
                                setEligibilityData({
                                  ...eligibilityData,
                                  interest: item,
                                })
                              }
                              className={`w-full rounded-xl border p-5 text-left transition-all ${
                                eligibilityData.interest === item
                                  ? "border-[#83CD20] bg-[#f5fff0] text-[#1A1A1A]"
                                  : "border-gray-200 text-[#1A1A1A]"
                              }`}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span>{item}</span>

                                {eligibilityData.interest === item && (
                                  <span className="text-xl font-bold text-[#83CD20]">
                                    ✓
                                  </span>
                                )}
                              </div>
                            </button>
                          ))}

                          <button
                            disabled={!eligibilityData.interest}
                            onClick={() => setStep(2)}
                            className="bg-[#83CD20] text-white px-6 py-3 rounded"
                          >
                            Continue →
                          </button>
                        </div>
                      )}
                      {step === 2 && (
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-[#1A1A1A]">
                            What's your current immigration situation?
                          </h3>

                          {IMMIGRATION_OPTIONS.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() =>
                                setEligibilityData({
                                  ...eligibilityData,
                                  immigration: item,
                                })
                              }
                              className={`w-full rounded-xl border p-5 text-left transition-all ${
                                eligibilityData.immigration === item
                                  ? "border-[#83CD20] bg-[#f5fff0] text-[#1A1A1A]"
                                  : "border-gray-200 text-[#1A1A1A]"
                              }`}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span>{item}</span>

                                {eligibilityData.immigration === item && (
                                  <span className="text-xl font-bold text-[#83CD20]">
                                    ✓
                                  </span>
                                )}
                              </div>
                            </button>
                          ))}

                          <div className="flex justify-between ">
                            <button
                              className="bg-[#83CD20] text-white px-6 py-3 rounded"
                              onClick={() => setStep(1)}
                            >
                              ← Back
                            </button>

                            <button
                              disabled={!eligibilityData.immigration}
                              onClick={() => setStep(3)}
                              className="bg-[#83CD20] text-white px-6 py-3 rounded"
                            >
                              Continue →
                            </button>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-[#1A1A1A]">
                            Check everything that applies to you
                          </h3>

                          {ACHIEVEMENTS.map((item) => {
                            const selected =
                              eligibilityData.achievements.includes(item);

                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  setEligibilityData({
                                    ...eligibilityData,
                                    achievements: selected
                                      ? eligibilityData.achievements.filter(
                                          (x) => x !== item,
                                        )
                                      : [...eligibilityData.achievements, item],
                                  });
                                }}
                                className={`w-full rounded-xl border p-5 transition-all ${
                                  selected
                                    ? "border-[#83CD20] bg-[#f5fff0] text-[#1A1A1A]"
                                    : "border-gray-200 text-[#1A1A1A]"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                 
                                  <div className="flex items-center gap-4">
                                   
                                    <div
                                      className={`h-6 w-6 rounded border flex items-center justify-center ${
                                        selected
                                          ? "bg-[#83CD20] border-[#83CD20]"
                                          : "border-gray-300 bg-white"
                                      }`}
                                    >
                                      {selected && (
                                        <span className="text-white text-sm">
                                          ✓
                                        </span>
                                      )}
                                    </div>

                                    <span>{item}</span>
                                  </div>

                               
                                </div>
                              </button>
                            );
                          })}

                          <div className="flex justify-between">
                            <button
                              className="bg-[#83CD20] text-white px-6 py-3 rounded"
                              onClick={() => setStep(2)}
                            >
                              ← Back
                            </button>

                            <button
                              onClick={() => setStep(4)}
                              className="bg-[#83CD20] text-white px-6 py-3 rounded"
                            >
                              Continue →
                            </button>
                          </div>
                        </div>
                      )}

                      {step === 4 && (
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-[#1A1A1A]">
                            What field are you in?
                          </h3>

                          {FIELDS.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() =>
                                setEligibilityData({
                                  ...eligibilityData,
                                  field: item,
                                })
                              }
                              className={`w-full rounded-xl border p-5 text-left transition-all ${
                                eligibilityData.field === item
                                  ? "border-[#83CD20] bg-[#f5fff0] text-[#1A1A1A]"
                                  : "border-gray-200 text-[#1A1A1A]"
                              }`}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span>{item}</span>

                                {eligibilityData.field === item && (
                                  <span className="text-xl font-bold text-[#83CD20]">
                                    ✓
                                  </span>
                                )}
                              </div>
                            </button>
                          ))}

                          <div className="flex justify-between">
                            <button
                              className="bg-[#83CD20] text-white px-6 py-3 rounded"
                              onClick={() => setStep(3)}
                            >
                              ← Back
                            </button>

                            <button
                              disabled={!eligibilityData.field}
                              onClick={() => setStep(5)}
                              className="bg-[#83CD20] text-white px-6 py-3 rounded"
                            >
                              Continue →
                            </button>
                          </div>
                        </div>
                      )}

                      {step === 5 && (
                        <>
                      <form onSubmit={handleSubmit} noValidate>
                        <div className="space-y-7">
                          {fields.map(
                            ({
                              id,
                              label,
                              type,
                              autoComplete,
                              placeholder,
                              required,
                              inputMode,
                            }) => (
                              <div key={id} className="space-y-2">
                                <Label htmlFor={id} className={labelClass}>
                                  {label}
                                </Label>
                                <Input
                                  id={id}
                                  name={id}
                                  type={type}
                                  autoComplete={autoComplete}
                                  placeholder={placeholder}
                                  required={required}
                                  inputMode={inputMode}
                                  className={inputClass}
                                  disabled={isSubmitting}
                                />
                              </div>
                            ),
                          )}

                          <div className="space-y-2">
                            <Label htmlFor="notes" className={labelClass}>
                              Anything else we should know?
                            </Label>
                            <Textarea
                              id="notes"
                              name="notes"
                              placeholder="Your goals, timelines, questions..."
                              rows={4}
                              className="rounded-sm border-[#83CD20] focus-visible:ring-[#83CD20]/30 text-[#1A1A1A]"
                              disabled={isSubmitting}
                            />
                          </div>

                          {/* ── Optional Date & Time ── */}
                          {/* <div className="rounded-md border border-dashed border-[#83CD20]/50 bg-[#f9fef2] px-5 py-5 space-y-4">
                                <div>
                                  <p className="font-titillium text-[13px] font-semibold uppercase tracking-[0.15em] text-[#034833]">
                                    📅 Preferred Call Date & Time
                                  </p>
                                  <p className="text-xs text-gray-400 mt-1">
                                    Optional — leave blank and we'll reach out
                                    to schedule.
                                  </p>
                                </div>

                                <div className="space-y-2">
                                  <Label
                                    htmlFor="preferredDate"
                                    className={labelClass}
                                  >
                                    Date
                                  </Label>
                                  <Input
                                    id="preferredDate"
                                    type="date"
                                    value={preferredDate}
                                    onChange={(e) => {
                                      setPreferredDate(e.target.value);
                                      setPreferredTime("");
                                    }}
                                    min={getTodayString()}
                                    className={inputClass}
                                    disabled={isSubmitting}
                                  />
                                </div>

                                {preferredDate && (
                                  <div className="space-y-2">
                                    <Label className={labelClass}>
                                      Time Slot
                                    </Label>
                                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                                      {TIME_SLOTS.map((slot) => (
                                        <button
                                          key={slot}
                                          type="button"
                                          onClick={() =>
                                            setPreferredTime(
                                              slot === preferredTime
                                                ? ""
                                                : slot,
                                            )
                                          }
                                          disabled={isSubmitting}
                                          className={`rounded-sm border py-2 text-[13px] font-titillium font-medium transition-colors ${
                                            preferredTime === slot
                                              ? "border-[#83CD20] bg-[#83CD20] text-white"
                                              : "border-gray-200 text-[#1A1A1A] hover:border-[#83CD20] hover:bg-[#f0fce0]"
                                          }`}
                                        >
                                          {formatTimeLabel(slot)}
                                        </button>
                                      ))}
                                    </div>
                                    {preferredDate && !preferredTime && (
                                      <p className="text-xs text-amber-500 mt-1">
                                        Select a time slot or leave both blank
                                        to skip.
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div> */}
                        </div>

                        {error && (
                          <p className="mt-4 rounded-sm bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                            ⚠ {error}
                          </p>
                        )}

                        <div className="mt-10 border-t border-gray-200 pt-6 flex items-center justify-between">
                          <p className="text-xs text-gray-400">
                            Protected by reCAPTCHA.{" "}
                            <a
                              href="https://policies.google.com/privacy"
                              target="_blank"
                              rel="noreferrer"
                              className="underline"
                            >
                              Privacy
                            </a>{" "}
                            &{" "}
                            <a
                              href="https://policies.google.com/terms"
                              target="_blank"
                              rel="noreferrer"
                              className="underline"
                            >
                              Terms
                            </a>
                          </p>
                          <button
                            type="submit"
                            disabled={isSubmitting || !recaptchaReady}
                            className="flex font-titillium items-center gap-2 rounded-sm bg-[#83CD20] px-7 py-3 text-[14px] font-semibold text-white hover:bg-[#72b81b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? "Submitting..." : "Submit ✓"}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                  </>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
