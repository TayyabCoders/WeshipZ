import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority }: LogoProps) {
  return (
    <Image
      src="/logo.jpg"
      alt="WeShipZ"
      width={160}
      height={64}
      className={cn("h-8 w-auto", className)}
      priority={priority}
    />
  );
}
