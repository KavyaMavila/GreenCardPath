import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#content"
      className="absolute left-4 top-0 z-[100] -translate-y-[130%] rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:translate-y-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      Skip to content
    </Link>
  );
}
