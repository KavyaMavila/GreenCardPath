import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /**
   * `wordmark` — full white logo image (dark backgrounds).
   * `text` — typographic mark for light backgrounds.
   */
  variant?: "wordmark" | "text";
  priority?: boolean;
};

export function Logo({ className, variant = "text", priority = false }: LogoProps) {
  if (variant === "wordmark") {
    return (
      <Link href="/" className={cn("inline-flex items-center", className)}>
        <Image
          src="/images/gcp-white 1.png"
          alt="GreenCardPath"
          width={327}
          height={62}
          priority={priority}
          className="
    h-[40px]
    w-[210px]
    lg:h-[62px]
    lg:w-[327px]
  "
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-baseline gap-0 font-sans tracking-tight text-foreground",
        className,
      )}
    >
      <span className="text-base font-bold sm:text-lg">GreenCard</span>
      <span className="text-base font-normal sm:text-lg">Path</span>
    </Link>
  );
}
