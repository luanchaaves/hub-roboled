import { Router } from 'express';
import { authenticateUser, requirePermission } from '../middleware/auth.js';
import { IntegrationService } from '../services/integrations.js';

const router = Router();

/**
 * GET /api/financeiro - Corporate Financial indicators & DRE
 */
router.get('/', authenticateUser, requirePermission('financeiro:*'), async (req, res) => {
  try {
    const data = await IntegrationService.getFinanceiroData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar controle financeiro' });
  }
});

export default router;
