# Matheus Boanova Camacho — Portfólio

Portfólio pessoal em Next.js + TypeScript, com direção visual editorial/minimalista.

## Rodar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

Antes de publicar, valide:

```bash
npm run typecheck
npm run lint
npm run build
```

## O que já existe

- Homepage responsiva
- Projetos selecionados com screenshots reais
- Sobre / experiência / formação
- Mais projetos e contato
- Case studies de SaldoClaro, JobTrack e Bolão da Copa
- Links reais de GitHub, LinkedIn, e-mail e repositórios
- SEO base, URL canônica, Open Graph, Twitter Card, sitemap e robots
- Aviso opcional por e-mail quando uma nova visita acontece

## Case studies

- `/projetos/saldo-claro`
- `/projetos/jobtrack`
- `/projetos/bolao-da-copa`

## Publicar no GitHub

Crie no GitHub um repositório vazio chamado `matheus-boanova-portfolio` — sem README, `.gitignore` ou licença gerados pelo site — e depois execute na raiz deste projeto:

```bash
git init
git add .
git commit -m "feat: adiciona portfolio pessoal"
git branch -M main
git remote add origin https://github.com/MatheusCamacho/matheus-boanova-portfolio.git
git push -u origin main
```

Se a pasta já for um repositório Git, não rode `git init` novamente. Confira primeiro com `git status`.

## Publicar na Vercel

1. Entre na Vercel usando a conta do GitHub.
2. Vá em **Add New → Project**.
3. Importe `MatheusCamacho/matheus-boanova-portfolio`.
4. A Vercel deve detectar **Next.js** automaticamente.
5. Mantenha Root Directory em `./` e os comandos de build/install padrão.
6. Antes do deploy final, adicione as variáveis de ambiente descritas abaixo.
7. Clique em **Deploy**.

Depois do primeiro deploy, copie a URL de produção e defina:

```env
NEXT_PUBLIC_SITE_URL=https://SEU-PROJETO.vercel.app
```

Salve a variável e faça um novo deploy para que canonical, sitemap e previews usem a URL pública correta.

Quando tiver um domínio próprio, troque `NEXT_PUBLIC_SITE_URL` pelo domínio definitivo e redeploy.

## Variáveis de ambiente na Vercel

Em **Project → Settings → Environment Variables**, adicione:

```env
NEXT_PUBLIC_SITE_URL=https://SEU-DOMINIO-OU-VERCEL.app
VISIT_ALERT_ENABLED=true
RESEND_API_KEY=re_xxxxxxxxx
VISIT_ALERT_TO=matheuscamachombc@hotmail.com
VISIT_ALERT_FROM="Portfolio <visitas@seudominio.com>"
```

Nunca coloque `RESEND_API_KEY` em variável que comece com `NEXT_PUBLIC_`.

## Aviso de nova visita por e-mail

A implementação fica em:

- `src/components/VisitNotifier.tsx`
- `src/app/api/visit/route.ts`
- `.env.example`

O comportamento é propositalmente conservador:

- começa desligado;
- ignora bots/crawlers comuns;
- envia no máximo um alerta por navegador a cada 24 horas;
- não salva IP ou localização;
- o e-mail contém somente a página visitada e o horário;
- a chave do provedor de e-mail existe apenas no servidor.

### Ativar com Resend

1. Crie uma conta no Resend e gere uma API key.
2. Para produção, adicione/verifique um domínio remetente no Resend.
3. Configure as variáveis na Vercel.
4. Faça um novo deploy.
5. Abra o site em uma janela anônima e confirme o recebimento do primeiro alerta.

Durante o desenvolvimento local, mantenha `VISIT_ALERT_ENABLED=false`.

## Domínio próprio

Na Vercel, abra **Project → Settings → Domains** e adicione o domínio. A Vercel mostrará os registros DNS necessários. Depois que o domínio estiver ativo:

1. atualize `NEXT_PUBLIC_SITE_URL` para o domínio final;
2. ajuste `VISIT_ALERT_FROM` para um remetente do mesmo domínio verificado no Resend;
3. faça um novo deploy.

## SEO / compartilhamento

O projeto já inclui:

- metadata global em `src/app/layout.tsx`;
- metadata própria para cada case study;
- `src/app/opengraph-image.tsx` para o preview social da home;
- `src/app/sitemap.ts`;
- `src/app/robots.ts`.

Depois do deploy, teste o link em LinkedIn/WhatsApp/Discord para confirmar o preview.

## Personalização rápida

- Projetos e links: `src/data/projects.ts`
- Conteúdo dos case studies: `src/data/caseStudies.ts`
- LinkedIn, GitHub e e-mail: `src/data/links.ts`
- Configuração geral/URL: `src/lib/site.ts`
- Screenshots: `public/projects/`
