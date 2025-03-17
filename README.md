# Sistema de Estudo Bíblico

Um aplicativo web para organizar e consultar estudos bíblicos, permitindo navegar entre temas e acompanhar seu progresso de estudo.

## 📚 Funcionalidades

- Tela inicial com categorias de estudo e versículo diário
- Navegação por categorias: Livros da Bíblia, Personagens, Doutrinas e Profecias
- Páginas detalhadas de estudo com conteúdo, versículos-chave e recursos
- Sistema de acompanhamento de progresso
- Tema claro/escuro

## 🛠️ Tecnologias

- React.js
- React Router
- Styled Components
- LocalStorage para persistência de dados

## 🚀 Como fazer deploy (contornando problemas de build)

Para realizar o deploy do projeto, devido a alguns problemas com o build automático, recomendamos usar o Netlify Drop:

1. Faça o build manualmente (se possível):
   ```bash
   npm run build
   ```

2. Se o build falhar, você pode usar um dos seguintes métodos:

   ### Opção 1: Netlify Drop
   - Visite [Netlify Drop](https://app.netlify.com/drop)
   - Arraste e solte a pasta `build` (se disponível) ou a pasta do projeto inteiro
   - Netlify tentará construir o projeto automaticamente

   ### Opção 2: Deploy direto no GitHub Pages
   - Nas configurações do repositório no GitHub, vá para "Pages"
   - Configure para usar a branch `main` como fonte
   - Aguarde alguns minutos para o site ficar disponível

   ### Opção 3: Vercel
   - Conecte o repositório GitHub ao Vercel
   - O Vercel tentará construir e implantar automaticamente

## 🧩 Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── context/        # Contextos do React (tema, progresso)
  ├── data/           # Dados de estudo
  ├── pages/          # Páginas principais
  ├── styles/         # Estilos globais
  └── utils/          # Funções utilitárias
```

## 🔄 Problemas Conhecidos

Estamos cientes de problemas durante o build que podem dificultar o deploy automático. Estamos trabalhando para resolvê-los. Enquanto isso, recomendamos usar as opções de deploy manual mencionadas acima.

## 🌟 Melhorias Futuras

Veja nossas [Issues](https://github.com/samuelpjacobsen/bible-study-app/issues) para conhecer as melhorias planejadas para o projeto.
