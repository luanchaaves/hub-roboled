import { Router } from 'express';
import { authenticateUser, requirePermission } from '../middleware/auth.js';
import { IntegrationService } from '../services/integrations.js';

const router = Router();

/**
 * GET /api/dashboard - Consolidated Executive KPI Summary
 */
router.get('/', authenticateUser, requirePermission('dashboard:view'), async (req, res) => {
  try {
    const health = await IntegrationService.getIntegrationsHealth();
    const marketing = await IntegrationService.getMarketingMetrics();
    const cotacoes = await IntegrationService.getCotacoesData();
    const contratos = await IntegrationService.getContratosData();
    const financeiro = await IntegrationService.getFinanceiroData();

    res.json({
      company: 'Robô LED Partner',
      timestamp: new Date().toISOString(),
      kpis: {
        activeLeadsThisMonth: marketing.leadsThisMonth,
        proposalsApprovedCount: cotacoes.stats.approved,
        contractsSigned: contratos.stats.totalContracts,
        grossRevenueMonth: financeiro.grossRevenueMonth,
        netProfitMargin: financeiro.profitMargin,
        pendingReceivables: contratos.stats.pendingBalanceTotal
      },
      health,
      marketing,
      cotacoes,
      contratos,
      financeiro
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar dados do dashboard consolidado' });
  }
});

export default router;
