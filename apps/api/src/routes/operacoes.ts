import { Router } from 'express';
import { authenticateUser, requirePermission } from '../middleware/auth.js';

const router = Router();

// In-memory operational state with real defaults for Robô LED Partner
let equipments = [
  { id: 'eq_01', name: 'Robô LED Titan (2m50)', code: 'TITAN-01', category: 'ROBO_LED', status: 'DISPONIVEL', batteryLevel: 98, lastMaintenance: '2026-10-15', notes: 'Bateria e fitas RGB verificadas' },
  { id: 'eq_02', name: 'Robô Nextrom Gold', code: 'NEXTROM-01', category: 'ROBO_LED', status: 'DISPONIVEL', batteryLevel: 100, lastMaintenance: '2026-10-18', notes: 'Pintura dourada e lasers calibrados' },
  { id: 'eq_03', name: 'Cilindro CO2 10kg #1', code: 'CO2-10K-01', category: 'CILINDRO_CO2', status: 'DISPONIVEL', co2PressurePsi: 850, lastMaintenance: '2026-10-20', notes: 'Recarga cheia - Pronta entrega' },
  { id: 'eq_04', name: 'Gerb Pirotécnico 3m (Kit 4x)', code: 'GERB-3M-SET1', category: 'EFEITO_PIROTECNICO', status: 'DISPONIVEL', notes: 'Disparadores sem fio testados' }
];

let teamMembers = [
  { id: 'team_01', name: 'Lucas Silva', phone: '(11) 98877-4433', role: 'PERFORMER_ROBO', active: true, notes: 'Especialista em Robô Titan e pernas de pau' },
  { id: 'team_02', name: 'Gabriel Santos', phone: '(11) 97766-5544', role: 'TECNICO_EFEITOS', active: true, notes: 'Operador de Bazuca CO2 e Gerbs' },
  { id: 'team_03', name: 'Marcos Oliveira', phone: '(11) 99988-1122', role: 'MOTORISTA_LOGISTICA', active: true, notes: 'Van de transporte e montagem' }
];

let checklists = [
  {
    id: 'chk_01',
    eventId: 'EVT-2026-11-14-MENDES',
    clientName: 'Juliana Mendes',
    eventDate: '2026-11-14',
    location: 'Buffet Mansão SBC',
    items: [
      { id: 'item_1', label: 'Bateria do Robô Titan carregada 100%', completed: true },
      { id: 'item_2', label: 'Testar lasers e controlador RGB', completed: true },
      { id: 'item_3', label: 'Conferir pressão do Cilindro CO2 (Mínimo 800 PSI)', completed: false },
      { id: 'item_4', label: 'Carregar kit de proteção do Performer', completed: false }
    ]
  }
];

/**
 * GET /api/operacoes/equipamentos
 */
router.get('/equipamentos', authenticateUser, requirePermission('operacoes:*'), (req, res) => {
  res.json(equipments);
});

/**
 * POST /api/operacoes/equipamentos
 */
router.post('/equipamentos', authenticateUser, requirePermission('operacoes:*'), (req, res) => {
  const newEquipment = {
    id: `eq_${Date.now()}`,
    ...req.body
  };
  equipments.push(newEquipment);
  res.status(201).json(newEquipment);
});

/**
 * GET /api/operacoes/equipe
 */
router.get('/equipe', authenticateUser, requirePermission('operacoes:*'), (req, res) => {
  res.json(teamMembers);
});

/**
 * GET /api/operacoes/checklists
 */
router.get('/checklists', authenticateUser, requirePermission('operacoes:*'), (req, res) => {
  res.json(checklists);
});

export default router;
