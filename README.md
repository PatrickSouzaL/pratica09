
## Estrutura do Repositório

O repositório é dividido em duas aplicações:

```
pratica09/
├── web/        Aplicação Web (React + Vite)
└── mobile/     Aplicação Mobile (React Native + Expo)


# Parte 1 – Aplicação Web (React + Vite)

### Objetivo

Criar uma aplicação Web utilizando React e Vite, com rotas implementadas através do React Router DOM.

### Funcionalidades

* Página inicial exibindo uma lista de produtos.
* Página de detalhes acessada por rota dinâmica.
* Navegação estruturada e organização de componentes.

### Tecnologias utilizadas

* React
* Vite
* React Router DOM

### Rotas implementadas

| Caminho        | Descrição                                   |
| -------------- | ------------------------------------------- |
| `/`            | Página inicial exibindo a lista de produtos |
| `/product/:id` | Exibe os detalhes do produto selecionado    |

### Estrutura do projeto Web

```
web/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProductDetails.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

### Como executar

```
cd web
npm install
npm run dev
```

Acesse:

```
http://localhost:5173/
```

### Deploy na Vercel

A aplicação Web foi preparada para ser hospedada na Vercel.
Os passos realizados foram:

1. Código versionado no GitHub.
2. Criação de um novo projeto na Vercel.
3. Seleção da pasta raiz `web/` como **Root Directory**.
4. Build automático com:

   * Build Command: `npm run build`
   * Output Directory: `dist`

Após o deploy, a Vercel disponibiliza a URL pública da aplicação.

---

# Parte 2 – Aplicação Mobile (React Native + Expo)

### Objetivo

Criar uma aplicação mobile utilizando React Native com Expo, implementando navegação entre telas por meio do React Navigation (Stack).

### Funcionalidades

* Tela inicial com lista de produtos ou botões para cada item.
* Tela de detalhes exibindo informações do produto selecionado.
* Navegação com passagem de parâmetros (`route.params`).

### Tecnologias utilizadas

* React Native
* Expo
* React Navigation

### Telas implementadas

| Tela    | Descrição                                          |
| ------- | -------------------------------------------------- |
| Home    | Lista de produtos disponível para seleção          |
| Details | Exibe os detalhes completos do produto selecionado |

### Estrutura do projeto Mobile

```
mobile/
├── App.js
├── babel.config.js
├── app.json
├── package.json
└── src/
    ├── navigation/
    │   └── index.js
    └── screens/
        ├── Home.js
        └── Details.js
```

### Como executar

```
cd mobile
npm install
npx expo start
```

Abrir em:

* Emulador (Android/iOS)
* Ou aplicativo Expo Go (QR Code)

---

# Conceitos trabalhados na prática

* Estruturação de projetos modernos (Web e Mobile)
* Navegação com React Router DOM (Web)
* Navegação com React Navigation (Mobile)
* Rotas dinâmicas e passagem de parâmetros
* Organização de pastas e componentes
* Execução de projetos independentes na mesma estrutura
* Publicação simples da aplicação Web (deploy na Vercel)
* Uso de dados simulados (mock) sem backend

