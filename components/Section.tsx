// components/Section.tsx
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  paddedTop?: boolean;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  paddedTop = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-b border-neutral-200 ${paddedTop ? "pt-16 md:pt-20" : "pt-12 md:pt-16"
        } pb-16 md:pb-24`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl space-y-3">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-neutral-700 md:text-[15px]">
              {description}
            </p>
          )}
        </div>
        {children && <div className="mt-6 md:mt-8">{children}</div>}
      </div>
    </section>
  );
}
