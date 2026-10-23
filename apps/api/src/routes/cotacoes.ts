import { Router } from 'express';
import { authenticateUser, requirePermission } from '../middleware/auth.js';
import { IntegrationService } from '../services/integrations.js';

const router = Router();

/**
 * GET /api/cotacoes - Quotations list & stats
 */
router.get('/', authenticateUser, requirePermission('cotacoes:view'), async (req, res) => {
  try {
    const data = await IntegrationService.getCotacoesData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar sistema de cotação' });
  }
});

export default router;
