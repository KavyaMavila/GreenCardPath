import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/layout/fade-in";
import { stats } from "@/lib/content/landing";
import Image from "next/image";
export function StatsSection() {
  return (
    <div className="relative z-20 -mt-16 flex w-full flex-col lg:-mt-5 lg:flex-row">

      {/* LEFT STATS */}
      <div className="flex-1 bg-[var(--stats-bg)]  ">
        <Container className="py-10 sm:py-12">
          <FadeIn>
          <dl className="mx-auto grid max-w-[680px] grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12 ">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex font-sora  flex-col items-center justify-center text-center text-[var(--color-text-primary)]"
                >
                  <dd className="text-5xl font-sora font-bold tracking-tight text-[var(--color-text-primary)] ">
                    {s.value}
                  </dd>

                  <dt className="mt-1 font-sora text-sm font-semibold text-[var(--color-text-primary)]">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </FadeIn>
        </Container>
      </div>

      {/* RIGHT PATTERN */}
      <div className="h-16 sm:h-20 md:h-24 lg:h-auto lg:w-[35%] bg-[#00543A] bg-[repeating-linear-gradient(45deg,rgba(131,205,32,0.35)_0px,rgba(131,205,32,0.35)_2px,transparent_2px,transparent_18px)]" />
    </div>
  );
}
