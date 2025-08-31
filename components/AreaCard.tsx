interface AreaCardProps {
  title: string;
  bullets: string[];
}

export default function AreaCard({ title, bullets }: AreaCardProps) {
  return (
    <article className="rounded-xl border border-brand-primary-100 p-6 bg-bg-default text-text-primary shadow-card focus-within:ring-2 ring-brand-accent-500">
      <h3 className="text-xl font-medium mb-3 text-brand-primary-700">{title}</h3>
      <ul className="list-disc pl-5 space-y-1 marker:text-brand-accent-500">
        {bullets.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  );
}