import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
};

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 md:px-8 xl:px-12",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
