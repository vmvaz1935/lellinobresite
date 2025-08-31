import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Simula processamento. Em produção, integrar com serviço de e‑mail ou CRM.
    if (data.website) {
      // Honeypot preenchido – considerado spam
      return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Mensagem recebida' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Erro ao processar' }, { status: 500 });
  }
}