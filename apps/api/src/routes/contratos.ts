import { Router } from 'express';
import { authenticateUser, requirePermission } from '../middleware/auth.js';
import { IntegrationService } from '../services/integrations.js';

const router = Router();

/**
 * GET /api/contratos - Contracts list & stats
 */
router.get('/', authenticateUser, requirePermission('contratos:*'), async (req, res) => {
  try {
    const data = await IntegrationService.getContratosData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar sistema de contratos' });
  }
});

export default router;
