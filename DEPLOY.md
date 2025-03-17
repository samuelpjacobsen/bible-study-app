# Instruções para Deploy Manual

Devido a problemas técnicos com o processo de build automático, aqui estão as etapas para fazer o deploy manual do projeto:

## Opção 1: Deploy no Netlify (Recomendado)

1. Acesse [Netlify Drop](https://app.netlify.com/drop)
2. Arraste e solte a pasta do projeto inteiro
3. Netlify tentará automaticamente detectar que é um projeto React e fará o build e deploy

Benefícios:
- Sem necessidade de fazer build localmente
- Suporte para SPA (Single Page Application) com redirecionamento adequado
- Configuração automática para lidar com rotas do React Router

## Opção 2: Deploy no Vercel

1. Crie uma conta no [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Selecione o repositório bible-study-app
4. Vercel detectará automaticamente que é um projeto React e fará o deploy

Benefícios:
- Integração contínua: atualizações automáticas quando você faz push para o GitHub
- Bom suporte para aplicações React
- Previews de cada commit/PR

## Opção 3: GitHub Pages com site estático

Se as opções acima não funcionarem, você pode criar uma versão estática simplificada:

1. Crie uma pasta `docs` na raiz do projeto
2. Copie arquivos HTML, CSS e JS estáticos para essa pasta
3. Configure GitHub Pages para usar a pasta `docs` na branch `main`

## Solução de Problemas

Se você continuar enfrentando problemas, tente:

1. Verificar as versões do Node.js e npm (Node v16+ recomendado)
2. Limpar o cache do npm: `npm cache clean --force`
3. Remover node_modules e reinstalar: `rm -rf node_modules && npm install`
4. Verificar erros específicos nos logs de build

## Contato

Se precisar de assistência adicional, abra uma issue no repositório do GitHub.
