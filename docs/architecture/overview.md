# 📐 Visão Geral da Arquitetura do Robô LED Partner Hub

> **Descrição Arquitetural do Monorepo, Camada BFF, Adaptadores de Integração e Modelo de Dados.**

---

## 1. Princípios Fundamentais

1. **Baixo Acoplamento:** A indisponibilidade de um sistema externo (ex: instabilidade temporária na Meta API de marketing) jamais paralisa o Hub ou os outros módulos.
2. **Resiliência & Fallbacks:** Dados de integração possuem cache e estado de *Health Check* transparente ("Dados Indisponíveis - Integração Pendente").
3. **Ponto Único de Administração:** A equipe interna gerencia toda a empresa através da URL `admin.roboledpartner.com.br`, enquanto os clientes utilizam as pontas públicas independentes (`roboledpartner.com.br` e `cotacao.roboledpartner.com.br`).
4. **Segurança Zero Trust:** Comunicação entre containers isolada em rede Docker privada, autenticação centralizada por Keycloak OIDC com MFA e controle de acesso RBAC estrito.

---

## 2. Diagrama de Fluxo e Componentes

```text
                                [ CLIENTE FINAL ]
                                        │
                         ┌──────────────┴──────────────┐
                         ▼                             ▼
              [ Site Institutional ]        [ Cotação Pública ]
             roboledpartner.com.br        cotacao.roboledpartner.com.br
                         │                             │
                         └──────────────┬──────────────┘
                                        │ (APIs / Webhooks)
                                        ▼
====================================================================================
                        [ ROBÔ LED PARTNER HUB ]
                      admin.roboledpartner.com.br
====================================================================================
                                        │
           ┌────────────────────────────┴────────────────────────────┐
           ▼                                                         ▼
   [ Next.js 14 Web UI ]                                 [ BFF API Service ]
   - Dashboard Executivo                                 - Auth OIDC Keycloak
   - Modulo Marketing / CRM                              - Adaptadores de Integração
   - Modulo Cotações & Contratos                         - Regras do Módulo Operações
   - Modulo Agenda & Financeiro                          - PostgreSQL Database
   - Modulo Equipamentos/Equipe                          - Redis Event Outbox
           │                                                         │
           └────────────────────────────┬────────────────────────────┘
                                        │
          ┌─────────────────────────────┼─────────────────────────────┐
          ▼                             ▼                             ▼
 [ Marketing & CRM ]          [ Sistema Contratos ]          [ Financeiro DRE ]
 marketing.roboledpartner     contrato.roboledpartner         controle-financeiro
```

---

## 3. Modelo de Dados Próprio do Hub (PostgreSQL)

O Hub mantém um banco PostgreSQL exclusivo para suportar o novo **Módulo de Operações**, preferências do usuário, logs de auditoria e links de entidades externas:

- `integration_connections`: Registro e status de comunicação com cada API externa.
- `integration_sync_runs`: Histórico de sincronizações de dados.
- `external_entity_links`: Mapeamento entre ID do Lead no CRM, ID da Cotação e ID do Contrato.
- `equipment`: Cadastro de Robôs de LED, Personagens Vivos, Cilindros de CO2, Gerbs e vestuários.
- `equipment_maintenance`: Histórico de baterias, reparos e revisões.
- `team_members`: Cadastro de dançarinos, operadores e produtores de evento.
- `event_assignments`: Escala de equipe por evento agendado.
- `event_checklists`: Checklists de verificação pré-evento (baterias carregadas, transporte, figurino).
- `audit_logs`: Registro imutável de todas as ações administrativas executadas no Hub.
