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
            <Link href={linkedin} className="text-brand-accent-600 underline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}