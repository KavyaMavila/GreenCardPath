import Image from "next/image";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";

import { steps } from "@/lib/content/landing";

export function ProcessTimelineSection() {
  return (
    <section id="process" className="bg-[var(--bg-process)] py-20 text-white lg:py-28">
      <Container>
        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block">

          {/* ROW 1 — Header (left) + Image (right) + Step 01 (left, below header) */}
          <div className="grid grid-cols-2 gap-x-20">
            {/* LEFT: Header + Step 01 */}
            <div>
              <FadeIn>
                <p className="text-[16px] font-titillium font-medium uppercase tracking-[0.2em] text-white">
                  THE PROCESS
                </p>
                <h2 className="mt-5 text-[42px] font-sora font-bold leading-tight text-[var(--text-process-title)] lg:text-[48px]">
                  How We Get You There
                </h2>
                <p className="mt-6 font-titillium max-w-[420px] text-[26px] leading-[1.7] text-white">
                  From first call to green card approval<br></br> — here's exactly what
                  happens.
                </p>
              </FadeIn>

              {/* STEP 01 */}
              <div className="mt-16 border-b border-[#83CD20] pb-12">
                <div className="flex items-start gap-5">
                  <span className="text-[56px] font-bold font-titillium leading-none">01</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[24px] font-sora font-semibold">Free Discovery Call</h3>
                      <span className=" font-titillium rounded-sm bg-[var(--process-timeing-bg)]  px-4 py-1 text-[16px] font-bold text-white">
                        30 Mins
                      </span>
                    </div>
                    <p className="mt-5 max-w-[520px] font-titillium text-[18px] leading-[1.8] text-white">
                      We review your background, goals, and visa situation.
                      You'll know within 30 minutes whether you have a case —
                      and which path to pursue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Image only */}
            <FadeIn>
              <div className="relative aspect-[668/482] overflow-hidden rounded-sm">
                <Image
                  src="/images/process.webp"
                  alt="Consultation process"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* ROW 2 — Step 02 (left) + Step 03 (right) — always same top */}
          <div className="grid grid-cols-2 gap-x-20">
            {/* STEP 02 */}
            <div className="border-b border-[#83CD20] pt-12 pb-12">
              <div className="flex items-start gap-5">
                <span className="text-[56px] font-bold font-titillium leading-none">02</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[24px] font-semibold">Profile Audit & Strategy</h3>
                   <span className=" font-titillium rounded-sm bg-[var(--process-timeing-bg)]  px-4 py-1 text-[16px] font-bold text-white">
                      Week 01
                    </span>
                  </div>
                  <p className="mt-5 max-w-[520px] font-titillium text-[18px] leading-[1.8] text-white">
                    Deep-dive into your CV, publications, patents, and
                    achievements. We map every strength to USCIS criteria and
                    identify any gaps.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="border-b border-[#83CD20] pt-12 pb-12">
              <div className="flex items-start gap-5">
                <span className="text-[56px] font-bold font-titillium leading-none">03</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[24px] font-sora font-semibold">Evidence Building</h3>
                    <span className="font-titillium rounded-sm bg-[var(--process-timeing-bg)]  px-4 py-1 text-[16px] font-bold text-white">
                      Months 01 - 03
                    </span>
                  </div>
                  <p className="mt-5 max-w-[520px] text-[18px] leading-[1.8] text-white">
                    If you're close but not quite there, we help you
                    strategically fill gaps — new publications, press
                    coverage, recommendation letters, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3 — Step 04 (left) + Step 05 (right) — always same top */}
          <div className="grid grid-cols-2 gap-x-20">
            {/* STEP 04 */}
            <div className="py-12">
              <div className="flex items-start gap-5">
                <span className="text-[56px] font-bold font-titillium leading-none">04</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[24px] font-sora font-semibold">Petition Drafting</h3>
                    <span className=" font-titillium rounded-sm bg-[var(--process-timeing-bg)]  px-4 py-1 text-[16px] font-bold text-white">
                      Months 02 - 04
                    </span>
                  </div>
                  <p className="mt-5 max-w-[520px] font-titillium text-[18px] leading-[1.8] text-white">
                    We write the compelling narrative, organize every exhibit,
                    draft recommendation letters, and assemble the airtight
                    petition package.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 05 */}
            <div className="py-12">
              <div className="flex items-start gap-5">
                <span className="text-[56px] font-bold font-titillium leading-none">05</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[24px] font-sora font-semibold">Filing & Approval</h3>
                    <span className="font-titillium rounded-sm bg-[var(--process-timeing-bg)]  px-4 py-1 text-[16px] font-bold text-white">
                      Months 04 - 06+
                    </span>
                  </div>
                  <p className="mt-5 max-w-[520px] font-titillium text-[18px] leading-[1.8] text-white">
                    Submit to USCIS. We handle any RFE (Request for Evidence)
                    responses. Premium processing available for 15-day
                    adjudication.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE LAYOUT — single column, sequential order */}
        <div className="lg:hidden ">
          {/* HEADER */}
          <FadeIn>
            <p className="text-[16px] text-center font-medium font-titillium uppercase tracking-[0.2em] text-white">
              THE PROCESS
            </p>
            <h2 className="mt-5 text-[36px] text-center font-sora font-bold leading-tight text-[#83CD20]">
              How We Get You There
            </h2>
            <p className="mt-4 text-[18px] text-center font-titillium leading-[1.7] text-white/90">
              From first call to green card approval — here's exactly what
              happens.
            </p>
          </FadeIn>

          {/* IMAGE */}
          <FadeIn>
            <div className="relative mt-10 aspect-[668/482] overflow-hidden rounded-[24px]">
              <Image
                src="/images/process.webp"
                alt="Consultation process"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* STEPS — sequential 01 → 05 with dividers between all */}
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`py-10 ${index < steps.length - 1 ? "border-b border-[#83CD20]" : ""}`}
            >
              <div className="flex items-start gap-5">
                <span className="text-[48px] font-bold font-titillium leading-none">
                  {step.number}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[20px] font-sora font-semibold">{step.title}</h3>
                    <span className="rounded-lg bg-[#83CD20] font-titillium px-3 py-1 text-[14px] font-semibold text-[#034833]">
                      {step.badge}
                    </span>
                  </div>
                  <p className="mt-4 text-[16px] font-titillium leading-[1.8] text-white/90">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}