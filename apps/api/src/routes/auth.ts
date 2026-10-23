import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';
import { authenticateUser } from '../middleware/auth.js';
import { UserRole } from '@roboled/shared';

const router = Router();

/**
 * GET /api/auth/me - Current user session info
 */
router.get('/me', authenticateUser, (req, res) => {
  res.json({
    user: req.user,
    scope: config.companyScope,
    permissions: req.user ? req.user.role : null
  });
});

/**
 * POST /api/auth/token - Generate a JWT for development / testing with specific role
 */
router.post('/token', (req, res) => {
  const { role = UserRole.SUPER_ADMIN, name = 'Operador Robô LED', email = 'operador@roboledpartner.com.br' } = req.body;

  const payload = {
    id: `usr_${Date.now()}`,
    name,
    email,
    role,
    scope: config.companyScope
  };

  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '8h' });

  res.json({
    token,
    user: payload,
    expiresIn: '8h'
  });
});

export default router;
