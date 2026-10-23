import { Router } from 'express';
import { authenticateUser, requirePermission } from '../middleware/auth.js';
import { IntegrationService } from '../services/integrations.js';

const router = Router();

/**
 * GET /api/marketing - Marketing & CRM Overview
 */
router.get('/', authenticateUser, requirePermission('marketing:*'), async (req, res) => {
  try {
    const data = await IntegrationService.getMarketingMetrics();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar dados de marketing digital' });
  }
});

export default router;
