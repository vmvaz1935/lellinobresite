import Image from 'next/image';
import Link from 'next/link';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export default function TeamMember({ name, role, bio, image, linkedin }: TeamMemberProps) {
  return (
    <article className="grid md:grid-cols-7 gap-6 items-start">
      <div className="md:col-span-3">
        <Image
          src={image}
          alt={`Foto de ${name}, sócio(a) do Lelli Nobre Advogados`}
          width={500}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="rounded-lg object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="md:col-span-4 space-y-2">
        <h3 className="text-2xl font-medium text-brand-primary-700">{name}</h3>
        <p className="text-brand-accent-600 font-semibold">{role}</p>
        <p>{bio}</p>
        {linkedin && (
          <p>
            <Link href={linkedin} className="inline-flex items-center gap-2 text-brand-accent-600 underline" target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${name}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" className="text-brand-secondary-500">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h4.99V24H0zM8.49 8.98H13v2.05h.06c.63-1.2 2.16-2.46 4.45-2.46C21.6 8.57 24 11 24 15.09V24h-4.99v-7.94c0-1.89-.03-4.32-2.64-4.32-2.65 0-3.06 2.07-3.06 4.2V24H8.49z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}