import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 py-16 sm:py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";

  className?: string;

  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,

  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-lg font-semibold uppercase   font-titillium text-[var(--text-session-sub-header)]",
            align === "center" && "mx-auto",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "mt-3 text-pretty text-5xl font-bold font-sora tracking-tight sm:text-4xl text-[var(--text-session-main-header)]",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
       <p
       className={cn(
         "mt-4 max-w-[700px] mx-auto text-base font-titillium lg:text-[16px]  text-[var(--text-session-description)]",
         descriptionClassName,
       )}
     >
       {description}
     </p>
      ) : null}
    </div>
  );
}