import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer id="footer" className="">
      <div className=" bg-[#003827] text-white">
        <Container className="py-10 lg:py-12">

          {/* Logo — centered mobile, left on desktop */}
          <div className="flex justify-center lg:justify-start">
            <Logo variant="wordmark" />
          </div>

          <Separator className="my-8 bg-[#83CD20]" />

          {/* Bottom row: copyright left + nav right on desktop | stacked centered on mobile */}
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-center text-sm font-titillium leading-relaxed text-[#CBCBCB] lg:text-left">
              © {new Date().getFullYear()} GreenCard Path. This is not legal advice. We are not a law firm.
            </p>

            <nav
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8"
              aria-label="Footer"
            >
              <Link className="text-sm font-titillium font-medium text-[#CBCBCB] hover:text-white transition-colors" href="#">
                Privacy
              </Link>
              <Link className="text-sm font-titillium font-medium text-[#CBCBCB] hover:text-white transition-colors" href="#">
                Terms
              </Link>
              <Link className="text-sm font-titillium font-medium text-[#CBCBCB] hover:text-white transition-colors" href="#contact">
                Contact
              </Link>
            </nav>
          </div>

        </Container>
      </div>
    </footer>
  );
}