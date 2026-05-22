import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-[min(100svh,920px)] overflow-hidden  bg-black text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero-lifestyle-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"

          className="object-cover object-[68%_center] sm:object-[65%_center] lg:object-[60%_center]"
        />
      </div>

      <Container className="relative z-10 flex min-h-[700px] flex-col justify-end pb-40 max-[570px]:pt-[80%]  lg:pt-[25%] sm:min-h-[850px]  lg:justify-start   lg:pl-25">
        <div className=" items-center ">
          <FadeIn className="lg:col-span-8">
            <div className="mx-auto max-w-full  sm:max-w-[820px] sm:px-0 text-center sm:max-w-[820px] lg:mx-0 lg:text-left">
              <h1 className="mt-6 font-sora font-semibold  tracking-tight text-[32px] sm:text-[44px] lg:text-[52px]">
                Your Path to a US Green Card
                <br />
                — Starts Here
              </h1>

              <p className="mx-auto font-titillium  mt-6 max-w-[320px] text-base leading-relaxed text-[var(--color-text-primary)] sm:max-w-[600px] sm:text-lg lg:mx-0">
                We help extraordinary professionals file EB-1A and NIW self-petitions — without an employer,
                without a lottery, and with a track record of approvals.
              </p>

              <div className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 lg:justify-start">
                <Button asChild size="lg" className="sm:w-auto px-5">
                  <Link href="#eligibility">
                    Find My Eligibility
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className=" border-white/35 bg-white/0 text-white backdrop-blur-sm hover:bg-white/10 sm:w-auto px-5"
                >
                  <Link href="#process">See How It Works</Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <div className="hidden lg:col-span-5 lg:block" aria-hidden />
        </div>
      </Container>
    </div>
  );
}
