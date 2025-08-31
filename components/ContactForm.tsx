"use client";
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E‑mail inválido'),
  telefone: z.string().min(8, 'Telefone é obrigatório'),
  empresa: z.string().optional(),
  assunto: z.string().min(1, 'Assunto é obrigatório'),
  mensagem: z.string().min(1, 'Mensagem é obrigatória'),
  website: z.string().optional(),
});

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse(formData);
    if (!result.success) {
      const formatted: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        formatted[issue.path[0]] = issue.message;
      });
      setErrors(formatted);
      return;
    }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setStatus('success');
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="nome">Nome*</label>
        <input
          id="nome"
          name="nome"
          type="text"
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? 'error-nome' : undefined}
        />
        {errors.nome && (
          <p id="error-nome" className="mt-1 text-sm text-red-600" role="alert">
            {errors.nome}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email">E‑mail*</label>
        <input
          id="email"
          name="email"
          type="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'error-email' : undefined}
        />
        {errors.email && (
          <p id="error-email" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="telefone">Telefone*</label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          aria-invalid={!!errors.telefone}
          aria-describedby={errors.telefone ? 'error-telefone' : undefined}
        />
        {errors.telefone && (
          <p id="error-telefone" className="mt-1 text-sm text-red-600" role="alert">
            {errors.telefone}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="empresa">Empresa (opcional)</label>
        <input id="empresa" name="empresa" type="text" />
      </div>
      <div>
        <label htmlFor="assunto">Assunto*</label>
        <input
          id="assunto"
          name="assunto"
          type="text"
          aria-invalid={!!errors.assunto}
          aria-describedby={errors.assunto ? 'error-assunto' : undefined}
        />
        {errors.assunto && (
          <p id="error-assunto" className="mt-1 text-sm text-red-600" role="alert">
            {errors.assunto}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem*</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          aria-invalid={!!errors.mensagem}
          aria-describedby={errors.mensagem ? 'error-mensagem' : undefined}
        />
        {errors.mensagem && (
          <p id="error-mensagem" className="mt-1 text-sm text-red-600" role="alert">
            {errors.mensagem}
          </p>
        )}
      </div>
      {/* Honeypot field for spam bots */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div aria-live="polite">
        {status === 'success' && <p className="text-green-700">Mensagem enviada com sucesso.</p>}
        {status === 'error' && <p className="text-red-700">Erro ao enviar mensagem. Tente novamente.</p>}
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
      </button>
    </form>
  );
}