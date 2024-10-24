import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from next/image

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Image
        src="/logoMain.png" // Replace with the actual path to your image
        alt="Description of the image"
        width={500} // Set the desired width
        height={300} // Set the desired height
      />
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        XUSD Documentation
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        Documentation for the XUSD protocol including the developer docs.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Docs
        </Link>
      </div>
    </div>
  );
}
