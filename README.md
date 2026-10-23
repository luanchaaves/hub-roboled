# ⚡ Robô LED Partner Hub (`roboled-partner-hub`)

> **Plataforma Administrativa Unificada de Operações, Vendas, Marketing, Contratos e Finanças da Robô LED Partner.**

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Node.js 20](https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![TypeScript 5.5](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ed?style=for-the-badge&logo=docker)](https://www.docker.com/)

---

## 🌟 Visão Geral do Sistema

O **Robô LED Partner Hub** foi projetado para atuar como o **Command Center único da empresa**, centralizando em uma única interface moderna, rápida e altamente segura todas as rotinas administrativas e operacionais.

Em vez de reconstruir do zero ou destruir os sistemas existentes, o Hub utiliza uma arquitetura **BFF (Backend for Frontend)** e **Adaptadores de Integração**, mantendo a resiliência e a autonomia das aplicações originais:

- **Site Institucional & Bio Links:** Captação contínua de tráfego (`roboledpartner.com.br`).
- **Marketing Digital & CRM (`marketing-robodeled`):** Gestão de anúncios Meta/Instagram, leads e calendário editorial.
- **Cotação Automática (`sistema-cotacao`):** Motor de cálculo de frete, atrativos e combos em tempo real (`cotacao.roboledpartner.com.br`).
- **Geração Automática de Contratos (`sistema-contrato` / `system-empresas`):** Emissão de contratos jurídicos em PDF A4 local-first (`contrato.roboledpartner.com.br`).
- **Gestão Financeira & DRE Corporativo (`controle-financeiro` / `sistema-financas-completo`):** DRE, fluxo de caixa, pagamentos de sinal e relatórios gerenciais.
- **Novo Módulo de Gestão Operacional (`/operacoes`):** Cadastro e status de equipamentos (Robôs LED, CO2, Gerbs), disponibilidade de equipe e checklists pré/pós-evento.

---

## 📐 Arquitetura do Monorepo

```text
hub-roboled/
├── apps/
│   ├── web/               # Frontend Next.js 14 App Router (Tailwind CSS, shadcn/ui, Recharts)
│   └── api/               # Backend Node.js / Express / TypeScript BFF & Adaptadores de Integração
├── packages/
│   ├── shared/            # Tipos TypeScript, Schemas Zod e Contratos de Eventos
│   ├── contracts/         # DTOs e Schemas das APIs dos Sistemas Externos
│   └── ui/                # Tokens e Componentes de Interface Reutilizáveis
├── prisma/                # Schema PostgreSQL e Migrations do Hub
├── infra/                 # Configurações Docker, Keycloak, Cloudflare Tunnel e Monitoring
└── docs/                  # Documentação Completa de Arquitetura, Segurança e Operações
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js**: v20.x ou superior
- **Docker & Docker Compose**: v24+
- **pnpm / npm**: v9+

### Passos para Inicialização
1. Clone o repositório e instale as dependências:
   ```bash
   git clone https://github.com/luanchaaves/hub-roboled.git
   cd hub-roboled
   npm install
   ```

2. Configure o arquivo de ambiente:
   ```bash
   cp .env.example .env
   ```

3. Inicialize os bancos e serviços em container:
   ```bash
   npm run docker:up
   ```

4. Aplique as migrations do Prisma:
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. Inicie a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

Acesse o Hub em: `http://localhost:3000`  
API BFF rodando em: `http://localhost:4000`

---

## 🔐 Segurança & Níveis de Acesso (RBAC)

O acesso ao Hub é estritamente privado, gerenciado via **Keycloak / OpenID Connect (OIDC)** com suporte a MFA e perfis de permissão granulares:

- `SUPER_ADMIN`: Acesso administrativo total e logs de auditoria.
- `ADMIN`: Gestão operacional e comercial completa.
- `MARKETING`: Campanhas, tráfego, CRM de leads e relatórios de aquisição.
- `COMERCIAL`: Atendimento de leads, geração de cotações, preparação de contratos e agenda.
- `FINANCEIRO`: DRE, receitas, pagamentos de sinal, fluxo de caixa e custos operacionais.
- `OPERACIONAL`: Checklists de eventos, logística de equipamentos e alocação de equipes.

---

## 📚 Documentação Técnica

Consulte a pasta [`docs/`](file:///C:/Users/Luan%20Chaves/.gemini/antigravity/scratch/hub-roboled/docs/) para obter detalhes completos sobre:
- [Auditoria dos Sistemas Existentes](docs/architecture/current-systems-audit.md)
- [Visão Geral da Arquitetura](docs/architecture/overview.md)
- [Matriz de Integrações & Health Checks](docs/integrations/README.md)
- [Protocolos de Segurança & LGPD](docs/security/README.md)
- [Guia de Implantação em Proxmox & Cloudflare](docs/deployment/proxmox.md)
- [Runbook & Operações de Disaster Recovery](docs/operations/runbook.md)

---

## 🧑‍💻 Autor & Direitos Reservados

Desenvolvido para **Robô LED Partner** por **Luan Chaves** (DevOps Engineer & Cloud Architect).  
Copyright © 2026 Robô LED Partner. Todos os direitos reservados.
