// app/about/page.tsx
import Section from "../../components/Section";

export default function AboutPage() {
  return (
    <Section
      id="about-page"
      eyebrow="About"
      title="Built on clarity, patience, and long-term thinking."
      description="AY-Global exists as a clean, simple structure to launch and manage multiple ventures under one philosophy."
      paddedTop
    >
      <div className="space-y-8 max-w-3xl">
        <p className="text-sm text-neutral-700 leading-relaxed">
          Rather than scattering ideas across random brands, AY-Global serves as
          the home for everything built by Athul Yesudas. It’s a holding layer
          that keeps operations clean while allowing each product to have its
          own story and identity.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed">
          The focus is on craftsmanship, emotional intelligence, and building
          products that feel calm, premium, and intentional — not noisy or
          rushed.
        </p>

        <div className="border border-neutral-200 rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
            Founder
          </p>
          <h3 className="text-lg font-semibold mb-2">Athul Yesudas</h3>
          <p className="text-sm text-neutral-700">
            Founder of AY-Global and Emotionverse, with a vision to blend
            emotional wellness, technology, and design into experiences that
            actually feel good to use.
          </p>
        </div>
      </div>
    </Section>
  );
}
