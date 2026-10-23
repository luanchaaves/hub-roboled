# 🔌 Matriz de Integrações & Health Checks

> **Documentação dos Adaptadores de Integração, Health Status e Protocolos de Fallback.**

---

## 1. Adaptadores de API Configurados

| Sistema Alvo | Endpoint Base | Protocolo | Autenticação | Função no Hub |
| :--- | :--- | :--- | :--- | :--- |
| **Marketing CRM** | `http://marketing-api:3001` | REST / JSON | Bearer Token / API Key | Consulta de Leads, Funil e Custos de Campanha Meta Ads |
| **Cotação Automática** | `http://cotacao-app:3002` | REST / JSON | API Key Protegida | Leitura de Orçamentos, Importação para Contratos |
| **Gerador Contratos** | `http://contratos-app:3003` | REST / JSON | Service Token Internal | Disparo de Emissão de Contrato PDF A4 |
| **Financeiro DRE** | `http://financeiro-app:3004` | REST / JSON | JWT Corporate | Consolidação de DRE e Pagamento de Sinal (40%) |
| **Google Calendar** | `https://www.googleapis.com` | OAuth2 / REST | Service Account | Sincronização de Datas e Verificação de Conflitos |

---

## 2. Política de Resiliência & Fallbacks

Cada chamada de integração no BFF (`apps/api/src/integrations`) executa sob o seguinte padrão de resiliência:

1. **Timeout Configurado:** Máximo de 3.500ms por requisição para evitar travamento da interface.
2. **Circuit Breaker:** Se uma API externa falhar 5 vezes consecutivas, o circuito abre temporariamente por 30 segundos, servindo a última resposta em cache com a flag `isStale: true`.
3. **Indicador de Status na UI:**
   - 🟢 `ONLINE`: Integração operando normalmente com latência < 200ms.
   - 🟡 `DEGRADED`: Resposta servida via cache devido a timeout no serviço externo.
   - 🔴 `OFFLINE`: Serviço inacessível. O Hub exibe a mensagem amigável *"Dados indisponíveis no momento — integração pendente"*.
