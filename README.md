# 🎬 Movies Platform

### Uma plataforma moderna para explorar, pesquisar e descobrir filmes 🍿

---

## 📖 Sobre o projeto

**Movies Platform** é uma aplicação web desenvolvida em **React** que permite aos usuários explorar filmes recentes, pesquisar títulos específicos e visualizar informações detalhadas sobre cada filme.

Os dados dos filmes são obtidos através de uma **API externa**, garantindo informações atualizadas como capa, ano de lançamento, idioma e avaliação.

Além da busca tradicional, a plataforma possui um sistema de histórico de pesquisas que identifica os filmes mais procurados pelos usuários e exibe um **Top 5 filmes mais pesquisados dentro da aplicação**.

---

## ✨ Funcionalidades

🎞️ **Filmes recentes**

- Exibição dos filmes mais recentes disponíveis na API.
- Cards com informações principais dos filmes.

🔎 **Pesquisa de filmes**

- Busca por nome do filme.
- Retorno dos filmes encontrados através da API.
- Visualização das informações principais.

⭐ **Informações dos filmes**
Cada filme apresenta:

- 🖼️ Capa
- 📅 Ano de lançamento
- 🌎 Idioma
- ⭐ Avaliação

📈 **Ranking de pesquisas**

- Armazena os filmes pesquisados pelos usuários.
- Calcula a quantidade de pesquisas realizadas.
- Exibe um ranking com os **5 filmes mais pesquisados na plataforma**.

---

## 🚀 Tecnologias utilizadas

### Front-end

- ⚛️ React
- 📜 JavaScript
- 🎨 CSS
- 🔗 Consumo de API REST
- ⚡ Vite

### Outros recursos

- Integração com API de filmes
- Gerenciamento de estados no React
- Componentização de interfaces
- Armazenamento e análise das pesquisas realizadas

---

## ⚙️ Como executar o projeto

### Clone o repositório

```bash
git clone https://github.com/SabrinaBruni28/Movies-Platform
```

### Instale as dependências

```bash
npm install
```

### Execute a aplicação

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173/Movies-Platform/
```

---

## 🔑 Configuração da API

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_TMDB_API_KEY=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
```

Depois configure a chave da API utilizada para buscar os filmes e as chaves do banco de dados no AppWrite.

---

## 📌 Melhorias futuras

- [ ] Adicionar página de detalhes do filme
- [ ] Criar sistema de favoritos
- [ ] Adicionar filtros por gênero e ano

---

## 👩‍💻 Desenvolvido por

[Sabrina Bruni](https://github.com/SabrinaBruni28)

---
