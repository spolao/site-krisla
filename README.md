# Site — Krisla Oliveira Eler de Sant'Ana (Psicóloga)

Site institucional de uma página, estático (HTML + CSS + JS puro), sem
dependências externas além de fontes do Google Fonts.

## Estrutura

```
site-krisla/
├── index.html          → todo o conteúdo e estrutura das seções
├── css/
│   └── styles.css      → design system (cores, tipografia, layout, responsivo)
├── js/
│   └── main.js         → menu mobile, accordion do FAQ, animações de scroll
├── assets/
│   └── favicon.svg      → ícone da aba do navegador
├── robots.txt
├── sitemap.xml
└── README.md
```

## Como rodar localmente

Não precisa instalar nada. Duas opções:

**Opção 1 — abrir direto:**
Dê duplo clique no arquivo `index.html`.

**Opção 2 — servidor local (recomendado, evita problemas de caminho):**
```bash
cd site-krisla
python3 -m http.server 8000
```
Depois abra `http://localhost:8000` no navegador.

---

## ⚠️ Pendências antes de publicar

| Item | Status | O que fazer |
|---|---|---|
| Número de WhatsApp | 🟢 OK | Conectado: `+55 19 99880-1989`. |
| Foto profissional | 🟢 OK | Foto da seção "Sobre" (`Fotos/1-Krisla.jpg`) e foto da seção "Posicionamento" (`Fotos/2-Krisla.jpg`) em uso. `Fotos/3-Krisla.jpg` não foi usada (selfie casual, qualidade/enquadramento abaixo do padrão profissional do resto do site) — avise se quiser incluí-la em algum lugar. |
| Domínio | 🔴 PENDENTE | Trocar `SEUDOMINIO.com.br` em `index.html`, `robots.txt` e `sitemap.xml` pelo domínio real. |
| Bio detalhada | 🟡 SUGESTÃO | O texto da seção "Sobre" é intencionalmente enxuto — vale revisar com a Krisla e incluir formação, tempo de atuação, etc., se ela quiser. |
| Imagem para redes sociais (Open Graph) | 🟡 SUGESTÃO | O `<meta property="og:image">` aponta para `assets/og-image.jpg`, que ainda não existe — adicionar uma imagem 1200×630px quando tiver foto/arte definida. |

Tudo o mais (estrutura, textos das seções, FAQ, design, responsividade,
acessibilidade, SEO básico) está **implementado e funcional**.

---

## Publicar (deploy) — passo a passo

Recomendo **Netlify** (gratuito, simples, sem necessidade de linha de comando):

1. Crie uma conta em [netlify.com](https://netlify.com) (pode ser com GitHub, Google ou e-mail).
2. Na tela inicial, arraste a pasta `site-krisla` inteira para a área de deploy manual ("Deploy manually" / "Drag and drop").
3. O Netlify gera uma URL provisória tipo `nome-aleatorio.netlify.app` — o site já está no ar nesse momento.
4. Depois, em **Site settings → Domain management**, adicione o domínio real da Krisla.

Alternativas equivalentes: **Vercel** ou **Cloudflare Pages** (ambas gratuitas para esse tipo de site).

Se preferir manter tudo versionado (recomendado a médio prazo):
```bash
git init
git add .
git commit -m "Site inicial"
```
Depois suba para um repositório no GitHub e conecte esse repositório à Netlify/Vercel — assim, toda vez que você atualizar o código, o site publica sozinho.

---

## Domínio e DNS

- **Se a Krisla já tem domínio**: entre no painel do registrador (Registro.br, GoDaddy, Hostinger etc.) e configure os registros DNS indicados pela Netlify/Vercel (normalmente um registro `A` apontando para o IP deles, ou `CNAME` apontando para `seusite.netlify.app`). A própria Netlify/Vercel mostra o passo a passo exato depois que você adiciona o domínio.
- **Se ainda não tem**: para `.com.br`, registra-se em [registro.br](https://registro.br) (~R$40/ano, valor pode mudar — confirmar no site oficial). Para `.com`, qualquer registrador (Namecheap, GoDaddy, Registro.br também vende `.com`).
- **HTTPS/SSL**: Netlify, Vercel e Cloudflare Pages emitem certificado SSL gratuito automaticamente assim que o domínio é conectado — nenhuma configuração manual necessária.

---

## Custos estimados

**Obrigatório:**
- Hospedagem (Netlify/Vercel/Cloudflare Pages): **R$0** no plano gratuito, mais que suficiente para esse site.
- Domínio: cerca de R$40–60/ano para `.com.br` (verificar preço atual no registrador escolhido).

**Opcional:**
- E-mail profissional (ex: `contato@krislaoliveira.com.br` em vez de Gmail): serviços como Google Workspace (~R$/mês, verificar valor atual) ou Zoho Mail (tem plano gratuito limitado).

**Escalabilidade futura:** se um dia ela quiser editar textos sozinha sem depender de você, adiciona-se o Decap CMS (gratuito) por cima desse mesmo site — não precisa recomeçar do zero.

---

## Checklist final

- [x] Desktop / Tablet / Mobile responsivos
- [x] Navegação por teclado e foco visível
- [x] `prefers-reduced-motion` respeitado
- [x] Meta tags SEO (title, description, Open Graph)
- [x] `robots.txt` e `sitemap.xml`
- [x] HTML semântico e atributos de acessibilidade (aria-expanded, alt, labels)
- [x] WhatsApp real conectado
- [x] Foto real da psicóloga
- [ ] Domínio real configurado
- [ ] Publicado em produção com HTTPS
