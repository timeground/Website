// app/page.tsx
import Hero from "../components/Hero";
import Section from "../components/Section";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="about"
        eyebrow="About Timeground"
        title="A modern holding company for bold ideas."
        description="Timeground is the strategic holding entity founded by Athul Yesudas, focused on building and backing products at the intersection of technology, emotions, and human experience."
      >
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Focus
            </p>
            <p className="text-sm text-neutral-700">
              Emotion technology, consumer apps, digital products, and
              experience-driven brands.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Philosophy
            </p>
            <p className="text-sm text-neutral-700">
              Build simple, useful, emotionally intelligent products that feel
              premium yet human.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Approach
            </p>
            <p className="text-sm text-neutral-700">
              Start lean, iterate fast, and let the brand speak through quality,
              clarity, and trust.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="ventures"
        eyebrow="Ventures"
        title="A growing ecosystem of products."
        description="Timeground operates as the umbrella for multiple independent ventures, each with its own identity but a shared standard of craft."
      >
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="border border-neutral-200 rounded-3xl p-6 hover:border-neutral-400 transition">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
              Flagship
            </p>
            <h3 className="text-lg font-semibold mb-2">Emotionverse</h3>
            <p className="text-sm text-neutral-700 mb-4">
              An emotion-training app where your feelings become AI avatars that
              you guide and grow.
            </p>
            <p className="text-xs text-neutral-500">
              Status: In active development
            </p>
          </div>

          <div className="border border-neutral-200 rounded-3xl p-6 hover:border-neutral-400 transition">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
              Future
            </p>
            <h3 className="text-lg font-semibold mb-2">AY Labs</h3>
            <p className="text-sm text-neutral-700 mb-4">
              A sandbox for creative experiments in AI, design, and digital
              tools — built under Timeground.
            </p>
            <p className="text-xs text-neutral-500">
              Status: Concept & exploration
            </p>
          </div>

          <div className="border border-neutral-200 rounded-3xl p-6 hover:border-neutral-400 transition">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
              Holding
            </p>
            <h3 className="text-lg font-semibold mb-2">Athul Yesudas Holdings</h3>
            <p className="text-sm text-neutral-700 mb-4">
              The parent structure behind Timeground, designed for long-term
              ownership, flexibility, and scale.
            </p>
            <p className="text-xs text-neutral-500">Status: Core entity</p>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s build what’s next."
        description="For collaborations, investments, or partnerships under Timeground, reach out directly."
      >
        <div className="mt-8 max-w-md space-y-4">
          <p className="text-sm text-neutral-700">
            Preferred channel: email. A more formal contact form can be added
            later.
          </p>
          <a
            href="mailto:hello@timeground.com"
            className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
          >
            Email Timeground
          </a>
          <p className="text-xs text-neutral-500">
            Example: hello@timeground.com — update this once your domain email is
            live.
          </p>
        </div>
      </Section>
    </>
  );
}
