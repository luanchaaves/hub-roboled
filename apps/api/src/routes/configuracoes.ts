import { Router } from 'express';
import { authenticateUser, requirePermission } from '../middleware/auth.js';
import { IntegrationService } from '../services/integrations.js';
import { config } from '../config/index.js';

const router = Router();

router.get('/', authenticateUser, requirePermission('configuracoes:view'), async (req, res) => {
  const integrations = await IntegrationService.getIntegrationsHealth();
  res.json({
    companyScope: config.companyScope,
    nodeEnv: config.nodeEnv,
    keycloakUrl: config.keycloakUrl,
    integrations
  });
});

export default router;
