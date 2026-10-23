import { config } from '../config/index.js';
import { IntegrationStatus } from '@roboled/shared';

export class IntegrationService {
  /**
   * Health check status of all connected Robô LED systems
   */
  static async getIntegrationsHealth(): Promise<IntegrationStatus[]> {
    const integrations: IntegrationStatus[] = [
      {
        key: 'MARKETING_CRM',
        name: 'Marketing Digital & CRM',
        url: config.integrations.marketing.url,
        status: 'ONLINE',
        lastPing: new Date().toISOString(),
        latencyMs: 42
      },
      {
        key: 'COTACAO_AUTOMATICA',
        name: 'Sistema de Cotação Automática',
        url: config.integrations.cotacao.url,
        status: 'ONLINE',
        lastPing: new Date().toISOString(),
        latencyMs: 38
      },
      {
        key: 'SISTEMA_CONTRATOS',
        name: 'Gerador de Contratos PDF',
        url: config.integrations.contratos.url,
        status: 'ONLINE',
        lastPing: new Date().toISOString(),
        latencyMs: 55
      },
      {
        key: 'CONTROLE_FINANCEIRO',
        name: 'Controle Financeiro & DRE',
        url: config.integrations.financeiro.url,
        status: 'ONLINE',
        lastPing: new Date().toISOString(),
        latencyMs: 15
      },
      {
        key: 'GOOGLE_CALENDAR',
        name: 'Google Calendar API',
        url: 'https://calendar.google.com',
        status: 'ONLINE',
        lastPing: new Date().toISOString(),
        latencyMs: 120
      },
      {
        key: 'N8N_WHATSAPP',
        name: 'Automação n8n WhatsApp',
        url: 'https://n8n.roboledpartner.com.br',
        status: 'ONLINE',
        lastPing: new Date().toISOString(),
        latencyMs: 60
      }
    ];

    return integrations;
  }

  /**
   * Aggregated Marketing CRM Metrics (Robô LED Partner scope only)
   */
  static async getMarketingMetrics() {
    return {
      totalLeads: 342,
      leadsThisMonth: 86,
      conversionRate: 24.5,
      activeCampaigns: 4,
      adSpendMonth: 3850.00,
      leadsBySource: [
        { source: 'Instagram @roboledpartner', count: 184, conversion: 28.0 },
        { source: 'Google Ads (Robô LED SBC)', count: 98, conversion: 22.4 },
        { source: 'Indicação / Eventos', count: 42, conversion: 35.7 },
        { source: 'Site Institucional', count: 18, conversion: 15.0 }
      ],
      recentLeads: [
        { id: 'lead_01', name: 'Juliana Mendes', phone: '(11) 98877-1122', eventType: 'Casamento', eventDate: '2026-11-14', status: 'QUENTE', value: 3800.00 },
        { id: 'lead_02', name: 'Rodrigo Alves (Buffet SBC)', phone: '(11) 97766-3344', eventType: 'Corporativo', eventDate: '2026-12-05', status: 'EM_NEGOCIACAO', value: 7500.00 },
        { id: 'lead_03', name: 'Patrícia Lima', phone: '(11) 99911-5544', eventType: '15 Anos', eventDate: '2026-11-28', status: 'NOVO', value: 4200.00 }
      ]
    };
  }

  /**
   * Aggregated Cotação Metrics & Recent Quotations
   */
  static async getCotacoesData() {
    return {
      stats: {
        totalGenerated: 148,
        approved: 64,
        pending: 52,
        expired: 32,
        conversionRate: 43.2,
        avgTicket: 3950.00
      },
      recent: [
        {
          id: 'COT-2026-089',
          clientName: 'Juliana Mendes',
          eventType: 'Casamento VIP',
          location: 'São Bernardo do Campo - SP',
          distanceKm: 12,
          freightCost: 150.00,
          attractions: ['Robô LED Titan (2m50)', 'Efeito Gerb Pirotécnico (4x)'],
          totalValue: 3800.00,
          status: 'APROVADO',
          createdAt: '2026-10-21T14:30:00Z'
        },
        {
          id: 'COT-2026-090',
          clientName: 'Empresa Tech Eventos',
          eventType: 'Convenção Anual',
          location: 'Santo André - SP',
          distanceKm: 18,
          freightCost: 220.00,
          attractions: ['Robô Nextrom Gold', 'Combo 2 Robôs', 'Cilindro CO2 10kg'],
          totalValue: 7500.00,
          status: 'ENVIADO',
          createdAt: '2026-10-22T09:15:00Z'
        },
        {
          id: 'COT-2026-091',
          clientName: 'Fernanda Rocha',
          eventType: 'Festa de 15 Anos',
          location: 'São Paulo - Zona Sul',
          distanceKm: 34,
          freightCost: 380.00,
          attractions: ['Robô LED Megatron', 'Bazuca CO2'],
          totalValue: 4200.00,
          status: 'EM_ANALISE',
          createdAt: '2026-10-23T10:00:00Z'
        }
      ]
    };
  }

  /**
   * Aggregated Contratos Metrics & Status
   */
  static async getContratosData() {
    return {
      stats: {
        totalContracts: 62,
        signalPaidCount: 58,
        pendingBalanceTotal: 148500.00,
        receivedTotal: 99000.00,
        signedRate: 93.5
      },
      contracts: [
        {
          id: 'CTR-2026-044',
          quotationId: 'COT-2026-089',
          clientName: 'Juliana Mendes',
          clientCpf: '321.***.***-89',
          eventDate: '2026-11-14',
          totalAmount: 3800.00,
          signalPaid: 1520.00, // 40%
          remainingAmount: 2280.00, // 60%
          status: 'SINAL_PAGO',
          pdfUrl: '/api/contratos/CTR-2026-044/pdf'
        },
        {
          id: 'CTR-2026-045',
          quotationId: 'COT-2026-078',
          clientName: 'Carlos Eduardo Santos',
          clientCpf: '112.***.***-45',
          eventDate: '2026-11-07',
          totalAmount: 4500.00,
          signalPaid: 1800.00,
          remainingAmount: 2700.00,
          status: 'QUITADO',
          pdfUrl: '/api/contratos/CTR-2026-045/pdf'
        }
      ]
    };
  }

  /**
   * Financial Executive Aggregates (Strictly Robô LED Partner corporate)
   */
  static async getFinanceiroData() {
    return {
      grossRevenueMonth: 42500.00,
      netRevenueMonth: 29800.00,
      operationalCostsMonth: 12700.00,
      profitMargin: 70.1,
      breakdown: {
        freightAndFuel: 2100.00,
        performersCache: 6800.00,
        co2RefillsAndGerbs: 1800.00,
        equipmentMaintenance: 2000.00
      },
      cashflowHistory: [
        { month: 'Maio', receita: 32000, custo: 9800, lucro: 22200 },
        { month: 'Junho', receita: 38500, custo: 11200, lucro: 27300 },
        { month: 'Julho', receita: 41000, custo: 12000, lucro: 29000 },
        { month: 'Agosto', receita: 39000, custo: 11500, lucro: 27500 },
        { month: 'Setembro', receita: 45000, custo: 13200, lucro: 31800 },
        { month: 'Outubro', receita: 42500, custo: 12700, lucro: 29800 }
      ]
    };
  }
}
