import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon, HexagonIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <HexagonIcon className="sm:block hidden w-5 h-5 text-muted-foreground fill-current" />
          <p className="text-center">
            
            XUSD {" "}
          
            
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      
    </>
  );
}
