# 📋 Auditoria Técnica dos Sistemas Existentes (Fase 0)

> **Documento de Auditoria e Mapeamento de Código-Fonte, APIs e Bancos de Dados dos Sistemas Originais da Robô LED Partner.**

---

## 1. Mapeamento de Sistemas & Status de Verificação

Cada funcionalidade identificada nos repositórios locais foi classificada segundo os critérios do Master Prompt:
- `[CONFIRMADO NO CÓDIGO]`: Código-fonte inspecionado, rotas e modelos de dados presentes.
- `[CONFIRMADO EM EXECUÇÃO]`: Testado e validado em ambiente local / homologação.
- `[APENAS DOCUMENTADO]`: Especificado em README/dossiê, mas pendente de código funcional.
- `[NÃO VERIFICADO]`: Inacessível no momento da auditoria.

---

## 2. Detalhamento por Sistema

### Sistema 1: Site Institucional (`roboled-site` & `roboled-links`)
- **URL Pública:** `https://roboledpartner.com.br/`
- **Tecnologias:** HTML5, CSS3 Cyberpunk, JavaScript ES6+, CDN. `[CONFIRMADO NO CÓDIGO]`
- **Responsabilidade:** Captação de tráfego orgânico/pago e direcionamento de clientes para orçamento no WhatsApp/Cotação.
- **Estratégia de Integração com Hub:** Mantido 100% independente do Hub. O Hub consumirá webhooks de formulários de contato e pixel de conversão para métricas de origem de leads no CRM.

### Sistema 2: Marketing Digital & CRM (`marketing-robodeled`)
- **URL Pública:** `https://marketing.roboledpartner.com.br/`
- **Tecnologias:** React 18, TypeScript, Node.js 20, Vite, Meta Marketing API, Instagram Graph API, PostgreSQL, Redis. `[CONFIRMADO NO CÓDIGO]`
- **Status das Funcionalidades:**
  - Dashboard executivo e funil de vendas: `[CONFIRMADO NO CÓDIGO]`
  - Conexão Meta Ads API e métricas de campanha (CPL, CPA, ROI): `[CONFIRMADO NO CÓDIGO]`
  - Lead Scoring e histórico de interações: `[CONFIRMADO NO CÓDIGO]`
  - Calendário Editorial Instagram: `[CONFIRMADO NO CÓDIGO]`
- **Estratégia de Integração com Hub:**
  - Adaptador BFF no Hub chamando endpoints `/api/leads` e `/api/campaigns`.
  - Exibição de KPIs no Dashboard unificado e vinculação de leads a cotações aprovadas.

### Sistema 3: Cotação Automática (`sistema-cotacao`)
- **URL Pública:** `https://cotacao.roboledpartner.com.br/`
- **Painel Admin:** `https://cotacao.roboledpartner.com.br/admin`
- **Tecnologias:** Next.js 14, React 18, Prisma ORM, SQLite (`prisma/schema.prisma`). `[CONFIRMADO NO CÓDIGO]`
- **Entidades Prisma Inspecionadas:**
  - `Setting`, `Service`, `Character`, `Combo`, `Toll`, `BlockedSchedule`, `Quote`, `AdminUser`. `[CONFIRMADO NO CÓDIGO]`
- **Estratégia de Integração com Hub:**
  - A simulação pública de cotações para clientes finais permanece intocada e online 24/7.
  - O Hub consome a API `/api/public/quote` e `/api/admin` via chave de API protegida para importar cotações aprovadas e pré-preencher contratos automaticamente.

### Sistema 4: Geração de Contratos (`sistema-contrato` / `system-empresas`)
- **URL Pública:** `https://contrato.roboledpartner.com.br/`
- **Tecnologias:** Node.js, Express, Puppeteer A4 PDF Engine, Google Calendar API, SQLite local. `[CONFIRMADO NO CÓDIGO]`
- **Regras Comerciais Confirmadas:**
  - Entrada de 40% de sinal no aceite do contrato + 60% restantes conforme prazos do evento. `[CONFIRMADO NO CÓDIGO]`
  - Gerador de PDF em formato A4 padronizado para Robô LED, Personagens Vivos e atrações de apoio. `[CONFIRMADO NO CÓDIGO]`
- **Estratégia de Integração com Hub:**
  - O Hub aciona o endpoint do gerador de contratos passando o ID da cotação aprovada, eliminando re-digitação de dados de clientes e do evento.

### Sistema 5: Controle Financeiro (`controle-financeiro` / `sistema-financas-completo`)
- **Tecnologias:** Next.js 14, Prisma ORM, TypeScript, Tailwind CSS, Recharts. `[CONFIRMADO NO CÓDIGO]`
- **Entidades Prisma Inspecionadas:**
  - `Bank`, `Category`, `Subcategory`, `Income`, `Expense`, `FixedExpense`, `CreditCard`, `Debt`, `Asset`, `AuditLog`. `[CONFIRMADO NO CÓDIGO]`
- **Estratégia de Integração com Hub:**
  - O Hub consome os DTOs corporativos de receitas e custos por evento (`/api/summary`, `/api/incomes`, `/api/expenses`), isolando estritamente qualquer dado financeiro pessoal.

### Sistema 6: Agenda & Disponibilidade de Eventos
- **Tecnologias:** Integração iCal / Google Calendar API + tabela `BlockedSchedule` no SQLite da Cotação. `[CONFIRMADO NO CÓDIGO]`
- **Estratégia de Integração com Hub:**
  - Visualização unificada de eventos confirmados e alertas de conflitos de data/horário entre atrações.

### Sistema 7: Automações WhatsApp (`n8n` / `Boot-Roboled-partner.json`)
- **Tecnologias:** n8n Workflow Engine rodando em container Docker + Evolution API / WhatsApp Cloud API. `[CONFIRMADO NO CÓDIGO]`
- **Estratégia de Integração com Hub:**
  - O Hub recebe notificações de eventos e envia alertas de lembretes e confirmações pós-evento via webhooks no n8n.

---

## 3. Conclusão da Auditoria
A arquitetura escolhida de **BFF (Backend for Frontend) + Adaptadores Modulares** permite que o Hub conecte 100% desses sistemas sem exigir reescrita de código antigo, migração forçada de bancos de dados ou risco de indisponibilidade nos canais públicos de venda.
