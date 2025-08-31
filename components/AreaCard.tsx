interface AreaCardProps {
  title: string;
  bullets: string[];
}

function IconForArea({ title }: { title: string }) {
  const cls = 'text-brand-secondary-500';
  if (/contrato|contrat/i.test(title)) {
    return (
      <svg className={cls} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 9h8v1.5H8V9zm0 3h8v1.5H8V12zm0 3h5v1.5H8V15z"/>
      </svg>
    );
  }
  if (/empres|governan/i.test(title)) {
    return (
      <svg className={cls} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 21V3h7v18H3zm9 0V8h9v13h-9zM5 5v14h3V5H5zm9 5v9h5v-9h-5z"/>
      </svg>
    );
  }
  if (/imobili|imóv|incorpora/i.test(title)) {
    return (
      <svg className={cls} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3l9 7-1.2 1.6L12 6 4.2 11.6 3 10l9-7zm-7 9h2v7h10v-7h2v9H5v-9z"/>
      </svg>
    );
  }
  if (/m&a|aquisi|fusão|fusão|aquisi/i.test(title)) {
    return (
      <svg className={cls} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 7a4 4 0 1 1 4 4H9.41l1.3 1.29-1.42 1.42L5.59 11l3.7-3.71 1.42 1.42L9.41 9H11a2.5 2.5 0 1 0-2.5-2.5H7zM17 25a4 4 0 1 1 0-8h1.59l-1.3-1.29 1.42-1.42L22.41 17l-3.7 3.71-1.42-1.42 1.3-1.29H17A2.5 2.5 0 1 0 19.5 21H21a4 4 0 0 1-4 4z"/>
      </svg>
    );
  }
  if (/sucess|patrimon/i.test(title)) {
    return (
      <svg className={cls} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 6h16v2H4V6zm2 4h12v2H6v-2zm-2 4h16v2H4v-2zm2 4h12v2H6v-2z"/>
      </svg>
    );
  }
  return (
    <svg className={cls} width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export default function AreaCard({ title, bullets }: AreaCardProps) {
  return (
    <article className="rounded-xl border border-brand-primary-100 p-6 bg-bg-default text-text-primary shadow-card ring-0 focus-within:ring-2 ring-brand-accent-500 transition-transform duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.01]">
      <div className="flex items-center gap-3 mb-3">
        <IconForArea title={title} />
        <h3 className="text-xl font-medium text-brand-primary-700">{title}</h3>
      </div>
      <ul className="list-disc pl-5 space-y-1 marker:text-brand-accent-500">
        {bullets.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  );
}