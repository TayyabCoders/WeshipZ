import { cn } from "@/lib/utils";

export type DeviceKind = "laptop" | "tablet" | "phone";

type DeviceFrameProps = {
  kind: DeviceKind;
  src: string;
  alt: string;
  className?: string;
};

export function DeviceFrame({ kind, src, alt, className }: DeviceFrameProps) {
  return (
    <div className={cn("select-none", className)}>
      {kind === "laptop" ? <Laptop src={src} alt={alt} /> : null}
      {kind === "tablet" ? <Tablet src={src} alt={alt} /> : null}
      {kind === "phone" ? <Phone src={src} alt={alt} /> : null}
    </div>
  );
}

function Screen({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("overflow-hidden bg-midnight", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" draggable={false} />
    </div>
  );
}

function Laptop({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[300px] sm:w-[380px]">
      <div className="rounded-t-[18px] bg-[#1c1f27] p-2.5 pb-0 shadow-2xl shadow-black/50">
        <Screen src={src} alt={alt} className="aspect-[16/10] rounded-[10px]" />
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-white/15" />
      </div>
      <div className="h-3 rounded-b-[10px] bg-gradient-to-b from-[#3a3f4b] to-[#22252d]" />
      <div className="mx-auto h-2 w-[42%] rounded-b-md bg-[#12141a]" />
    </div>
  );
}

function Tablet({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[190px] rounded-[22px] bg-[#1c1f27] p-2.5 shadow-2xl shadow-black/50 sm:w-[220px]">
      <Screen src={src} alt={alt} className="aspect-[3/4] rounded-[14px]" />
    </div>
  );
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[132px] rounded-[26px] bg-[#1c1f27] p-2 shadow-2xl shadow-black/50 sm:w-[150px]">
      <div className="relative">
        <Screen src={src} alt={alt} className="aspect-[9/18] rounded-[18px]" />
        <div className="absolute left-1/2 top-2 h-3 w-12 -translate-x-1/2 rounded-full bg-black/80" />
      </div>
    </div>
  );
}
