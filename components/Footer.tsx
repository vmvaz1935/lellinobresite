import Link from 'next/link';
import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-bg-inverse text-text-on-primary mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-3">Endereço</h2>
          <p>Av. Angélica, 672 - 14º andar, Cj. 141<br />Higienópolis, São Paulo - SP<br />01228-000</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Contato</h2>
          <p>
            WhatsApp:&nbsp;
            <a href="https://wa.me/5511910555566" className="underline hover:text-brand-accent-300" target="_blank" rel="noopener noreferrer">
              +55&nbsp;11&nbsp;91055‑5566
            </a>
          </p>
          <p>E-mail: <a href="mailto:contato@[PENDENTE-DOMINIO]" className="underline">contato@[PENDENTE-DOMINIO]</a></p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Links rápidos</h2>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/escritorio" className="hover:underline">Escritório</Link></li>
            <li><Link href="/atuacao" className="hover:underline">Atuação</Link></li>
            <li><Link href="/quem-somos" className="hover:underline">Quem somos</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-brand-primary-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-sm text-text-on-primary text-center md:text-left">
            © {new Date().getFullYear()} Lelli Nobre Advogados. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-5">
            <span className="text-text-on-primary/80 text-sm hidden md:inline">Nossas redes</span>
            <a
              href="https://www.instagram.com/lelli.advogados?igsh=ZHcxdGZ5dDdreWJt&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Lelli Nobre Advogados"
              className="text-brand-secondary-500 hover:text-brand-secondary-400 transition-colors"
            >
              <FaInstagram aria-hidden size={22} />
            </a>
            <a
              href="https://m.facebook.com/61564523104951/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Lelli Nobre Advogados"
              className="text-brand-secondary-500 hover:text-brand-secondary-400 transition-colors"
            >
              <FaFacebookSquare aria-hidden size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/lelli-advogados/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Lelli Nobre Advogados"
              className="text-brand-secondary-500 hover:text-brand-secondary-400 transition-colors"
            >
              <FaLinkedin aria-hidden size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}