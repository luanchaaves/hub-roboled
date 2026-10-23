import { Router } from 'express';
import { authenticateUser, requirePermission } from '../middleware/auth.js';

const router = Router();

const auditLogs = [
  {
    id: 'log_01',
    timestamp: '2026-10-23T11:00:00Z',
    userName: 'Luan Chaves',
    userEmail: 'luan@roboledpartner.com.br',
    action: 'CRIOU_COTACAO',
    entityType: 'COTACAO',
    entityId: 'COT-2026-091',
    details: 'Gerada cotação para Robô LED Megatron + Bazuca CO2',
    ipAddress: '177.12.89.14'
  },
  {
    id: 'log_02',
    timestamp: '2026-10-23T10:15:00Z',
    userName: 'Administrador Robô LED',
    userEmail: 'admin@roboledpartner.com.br',
    action: 'CONVERTEU_CONTRATO',
    entityType: 'CONTRATO',
    entityId: 'CTR-2026-044',
    details: 'Sinal de 40% confirmado (R$ 1.520,00)',
    ipAddress: '177.12.89.14'
  }
];

router.get('/', authenticateUser, requirePermission('auditoria:view'), (req, res) => {
  res.json(auditLogs);
});

export default router;
