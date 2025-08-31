# Lelli Nobre Advogados – site institucional

Este repositório contém o código‑fonte do site da banca **Lelli Nobre Advogados** desenvolvido com Next.js 14 (App Router), TypeScript e Tailwind.  O objetivo é oferecer uma presença digital acessível, rápida e otimizada para SEO, refletindo os valores de proximidade, clareza e ética.

## Pré‑requisitos

* Node.js ≥ 18.
* npm ou yarn.

## Instalação

```bash
git clone <repo>
cd lelli-nobre-adv
npm install
```

Crie um arquivo `.env.local` na raiz com as variáveis necessárias:

```
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

## Executando em desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Construindo para produção

```bash
npm run build
npm start
```

O comando `build` também gera o arquivo `sitemap.xml` e `robots.txt` via `next-sitemap`.

## Atualizando tokens de design

Os tokens de cores e tipografia estão em `styles/lelli_nobre_tokens.css`.  Para alterar a paleta, atualize esse arquivo e reinicie o servidor de desenvolvimento.  O arquivo `styles/tokens.css` importa os tokens e define aliases adicionais.

## Atualizando imagens

Imagens otimizadas ficam em `public/images`.  Para trocar uma foto de sócio ou do escritório, substitua os arquivos correspondentes (ex.: `public/images/team/christine-nobre.webp` e `christine-nobre@2x.webp`).  Use sempre formatos WebP ou AVIF para melhor performance e mantenha o atributo `alt` descritivo.

## Testes de acessibilidade

Recomenda‑se rodar as ferramentas [Lighthouse](https://developers.google.com/web/tools/lighthouse) e [Axe](https://www.deque.com/axe/) no browser para validar a acessibilidade, performance e SEO.  Ajuste contrastes, rótulos e ordem de navegação conforme necessário para atingir as metas de **Perf ≥ 90**, **A11y ≥ 95**, **SEO ≥ 95**.

## Deploy na Vercel

1. Crie um novo projeto na Vercel e conecte ao repositório.
2. Defina `NODE_ENV=production` e `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente.
3. Configure o build command para `npm run build` e o diretório de saída como `/.next` (padrão).
4. Após o deploy, verifique o domínio e actualize o DNS conforme necessário.
