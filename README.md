# API REST com Node.js

Este é um projeto para a criação de uma API RESTful utilizando Node.js, Express e TypeScript. O objetivo é fornecer uma estrutura inicial robusta e moderna para o desenvolvimento de APIs, com foco em boas práticas e uma ótima experiência de desenvolvimento.

## ✨ Features

- **Estrutura com Express.js:** Framework web minimalista e flexível para Node.js, ideal para construir APIs.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, aumentando a robustez e a manutenibilidade do código.
- **Validação com Zod:** Validação de esquemas (schemas) com inferência de tipos estáticos, garantindo que os dados de entrada e saída estejam corretos e consistentes.
- **Desenvolvimento Rápido com `tsx`:** Execução de arquivos TypeScript diretamente com _hot-reloading_, otimizando o fluxo de desenvolvimento sem a necessidade de compilação manual.
- **ES Modules:** Utilização do sistema de módulos padrão do ECMAScript para uma sintaxe moderna e clara.

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- Zod
- tsx

## 🚀 Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
- Node.js (versão 18.x ou superior é recomendada)
- Um gerenciador de pacotes como npm, Yarn ou pnpm

### Instalação

1. Clone o repositório para sua máquina local:
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd api-rest
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

### Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

Este comando utilizará o `tsx` para iniciar o servidor com _hot-reloading_. Qualquer alteração nos arquivos `.ts` reiniciará o servidor automaticamente. Por padrão, a API estará disponível em `http://localhost:3333` (ou a porta que você configurar em `src/server.ts`).

## 📜 Licença

Este projeto está licenciado sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.
