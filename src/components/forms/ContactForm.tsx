"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service."),
  package: z.string().optional(),
  budget: z.string().optional(),
  description: z.string().min(20, "Tell us a bit more about the project."),
  reference: z.string().url("Enter a valid URL.").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = ["Motion Graphics", "Video Editing", "Both", "Not sure yet"];

const packageOptions = [...packages.map((pack) => pack.name), "Custom"];

export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("package");
  const initialPackage =
    requested === "custom" ? "Custom" : (packages.find((pack) => pack.id === requested)?.name ?? "");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      service: initialPackage ? "Not sure yet" : "",
      package: initialPackage,
      budget: "",
      description: searchParams.get("brief") ?? "",
      reference: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            className={inputClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className={inputClass}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </Field>
      </div>

      <Field label="Company / Brand" error={errors.company?.message}>
        <input
          {...register("company")}
          className={inputClass}
          placeholder="Optional"
        />
      </Field>

      <PillGroup legend="What do you need?" error={errors.service?.message}>
        {serviceOptions.map((option) => (
          <Pill key={option} value={option} {...register("service")} />
        ))}
      </PillGroup>

      <PillGroup legend="Package (optional)">
        {packageOptions.map((option) => (
          <Pill key={option} value={option} {...register("package")} />
        ))}
      </PillGroup>

      <PillGroup legend="Budget (optional)">
        {budgetOptions.map((option) => (
          <Pill key={option} value={option} {...register("budget")} />
        ))}
      </PillGroup>

      <Field label="Project Description" error={errors.description?.message}>
        <textarea
          {...register("description")}
          className={cn(inputClass, "min-h-32 resize-y")}
          placeholder="What are you trying to create?"
        />
      </Field>

      <Field
        label="Reference link (optional)"
        error={errors.reference?.message}
      >
        <input
          {...register("reference")}
          className={inputClass}
          placeholder="https://"
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex h-14 items-center gap-3 rounded-full bg-foreground pl-7 pr-2 text-base font-medium text-background transition-colors hover:bg-primary disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send the brief"}
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
          <ArrowUpRight className="size-5" />
        </span>
      </button>

      {status === "success" ? (
        <p className="text-sm text-primary" role="status">
          Inquiry received. We&apos;ll get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}
    </form>
  );
}

const budgetOptions = ["Under $2k", "$2k – $5k", "$5k – $15k", "$15k+", "Not sure yet"];

const inputClass =
  "w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary";

function PillGroup({
  legend,
  error,
  children,
}: {
  legend: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <fieldset>
      <legend className="mb-3 block text-sm font-medium text-foreground">{legend}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </fieldset>
  );
}

function Pill({ value, ...input }: { value: string } & UseFormRegisterReturn) {
  return (
    <label className="cursor-pointer">
      <input type="radio" value={value} className="peer sr-only" {...input} />
      <span className="inline-flex rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm text-secondary transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary hover:border-foreground/40">
        {value}
      </span>
    </label>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
