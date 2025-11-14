WEB: 
Aplicação Web – Estudo de Caso com Rotas

Esta é a parte web do estudo de caso, desenvolvida em React com Vite.
O objetivo é praticar a criação de rotas de navegação entre páginas usando o React Router DOM.

Tecnologias utilizadas

React

Vite

React Router DOM

Estrutura do projeto
web/
├── src/
│   ├── data/
│   │   └── products.js        # Lista de produtos simulada
│   ├── pages/
│   │   ├── Home.jsx           # Página inicial - lista de produtos
│   │   └── ProductDetails.jsx # Página de detalhes do produto
│   ├── App.jsx                # Layout principal e saída das rotas
│   └── main.jsx               # Configuração do React Router
├── index.html
└── package.json

Rotas implementadas
Caminho	Descrição
/	Página inicial com a lista de produtos
/product/:id	Página de detalhes do produto selecionado
Como executar o projeto

Entrar na pasta da aplicação web:

cd web


Instalar as dependências:

npm install


Executar o projeto:

npm run dev


Acessar no navegador:

http://localhost:5173/

Conceitos praticados

Estruturação de um projeto React com Vite

Criação de rotas e navegação entre páginas

Uso de parâmetros de rota (:id)

Organização de arquivos e componentes

--------------------------------
mobile:
Tecnologias utilizadas

React Native

Expo

React Navigation

Estrutura do projeto
mobile/
├── App.js                     # Ponto de entrada da aplicação
├── babel.config.js
├── package.json
├── app.json
└── src/
    ├── data/
    │   └── products.js        # Lista de produtos simulada
    ├── navigation/
    │   └── index.js           # Configuração da navegação (stack)
    └── screens/
        ├── Home.js            # Tela inicial - lista de produtos
        └── Details.js         # Tela de detalhes do produto

Telas implementadas
Tela	Descrição
Home	Exibe uma lista de produtos. Cada item leva à tela de detalhes.
Details	Mostra as informações completas do produto selecionado.
Como executar o projeto

Acesse a pasta do aplicativo:

cd mobile


Instale as dependências:

npm install


Inicie o projeto:

npx expo start


Abra o aplicativo:

No celular, usando o app Expo Go (escaneie o QR Code mostrado no terminal).

Ou no emulador Android/iOS com as teclas:

a para Android

i para iOS

Conceitos praticados

Estruturação de projeto mobile com Expo

Navegação de pilha (Stack Navigation)

Passagem de parâmetros entre telas (route.params)

Organização de arquivos e componentes


