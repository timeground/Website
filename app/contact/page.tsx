// app/contact/page.tsx
"use client";

import Section from "../../components/Section";


export default function ContactPage() {
  return (
    <Section
      id="contact-page"
      eyebrow="Contact"
      title="Reach out to Timeground."
      description="For partnerships, collaborations, or business inquiries related to Timeground or its ventures."
      paddedTop
    >
      <div className="max-w-md space-y-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 border border-neutral-200 rounded-3xl p-6"
        >
          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900 resize-none"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
          >
            Send (static for now)
          </button>
        </form>

        <p className="text-xs text-neutral-500">
          This form is currently static. Later, we can connect it to an email
          service or backend. You can also contact directly via{" "}
          <a
            href="mailto:hello@timeground.com"
            className="underline underline-offset-4"
          >
            hello@timeground.com
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
