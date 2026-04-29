# 📋 Documentação – Clínica do Rim Landing Page

## Estrutura de Arquivos

```
site clinica do rim/
├── index.html       ← Página principal
├── style.css        ← Estilos (design system, responsivo, animações)
├── script.js        ← Interatividade (menu, scroll, animações)
├── robots.txt       ← SEO
├── sitemap.xml      ← SEO – mapa do site
└── images/
    ├── hero-bg.png  ← Imagem de fundo do Hero
    └── doctor.png   ← Foto do médico
```

---

## 🔧 Como Personalizar

### 1. Substituir o Número do WhatsApp

Abra `index.html` e use **busca e substituição** (Ctrl+H):

| Encontrar | Substituir |
|-----------|-----------|
| `5500000000000` | `55` + DDD + número (sem espaços/traços) |

**Exemplo:** `(11) 98765-4321` → `5511987654321`

> Há **4 ocorrências** desse número no arquivo.

---

### 2. Substituir a Foto do Médico

Substitua `images/doctor.png` pela foto real.

- Tamanho recomendado: **400×400 px**, quadrada
- Peso: < 150 KB
- Se renomear o arquivo, atualize `src="images/doctor.png"` em `index.html` (2 ocorrências)

---

### 3. Atualizar Dados do Médico e Clínica

| Campo | O que procurar em `index.html` |
|-------|-------------------------------|
| Nome do médico | `Dr. Carlos Eduardo Almeida` |
| CRM | `CRM 00000 / XX` e `RQE nº 00000` |
| Endereço | Dentro do `<footer>` |
| CNPJ | Dentro do `<footer>` |
| Horário | Dentro do `<footer>` |
| Minibiografia | Parágrafos com classe `medico__bio` |

---

### 4. Personalizar Mensagem do WhatsApp

1. Escreva a mensagem desejada
2. Codifique em [urlencoder.org](https://www.urlencoder.org/)
3. Substitua o trecho após `?text=` nos links `wa.me`

---

## 🚀 Como Publicar

| Plataforma | Instruções |
|-----------|-----------|
| **Netlify** | Arraste a pasta para o painel em [netlify.com](https://netlify.com) |
| **GitHub Pages** | Settings → Pages → branch `main` |
| **Vercel** | `npx vercel --prod` na pasta do projeto |
| **FTP/cPanel** | Upload para `public_html` ou `www` |

---

## ✅ Checklist pré-publicação

- [ ] Número do WhatsApp atualizado (4 ocorrências)
- [ ] Foto real do médico substituída
- [ ] Nome e CRM corretos
- [ ] Endereço e CNPJ corretos
- [ ] Domínio correto no `sitemap.xml` e `robots.txt`
- [ ] Imagens comprimidas ([squoosh.app](https://squoosh.app))
- [ ] Testado em celular e desktop
