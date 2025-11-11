// app/ventures/page.tsx
import Section from "../../components/Section";

const ventures = [
  {
    name: "Emotionverse",
    role: "Flagship Product",
    status: "In active development",
    description:
      "An emotion-training universe where your feelings become AI avatars you guide and grow.",
  },
  {
    name: "AY Labs",
    role: "Exploration Studio",
    status: "Concept & early experiments",
    description:
      "A playground for testing AI tools, creative utilities, and early prototypes under AY-Global.",
  },
  {
    name: "Athul Yesudas Holdings",
    role: "Core Holding Entity",
    status: "Operational",
    description:
      "The legal & strategic structure that supports AY-Global and future ventures.",
  },
];

export default function VenturesPage() {
  return (
    <Section
      id="ventures-page"
      eyebrow="Ventures"
      title="The AY-Global ecosystem."
      description="Each venture is independent, but all share the same standard: calm, minimal, human-centered products."
      paddedTop
    >
      <div className="grid gap-6 md:grid-cols-2">
        {ventures.map((v) => (
          <div
            key={v.name}
            className="border border-neutral-200 rounded-3xl p-6 hover:border-neutral-400 transition"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
              {v.role}
            </p>
            <h3 className="text-lg font-semibold mb-1">{v.name}</h3>
            <p className="text-xs text-neutral-500 mb-3">{v.status}</p>
            <p className="text-sm text-neutral-700">{v.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
