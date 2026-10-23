import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';
import { UserRole, ROLE_PERMISSIONS } from '@roboled/shared';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  scope: string; // ROBOLED_PARTNER
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  // Development / Demo auto-authentication fallback if no header is supplied
  if (!authHeader) {
    req.user = {
      id: 'usr_admin_default',
      name: 'Administrador Robô LED',
      email: 'admin@roboledpartner.com.br',
      role: UserRole.SUPER_ADMIN,
      scope: config.companyScope
    };
    return next();
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação ausente' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as AuthUser;
    
    // Strict Scope Security Check
    if (decoded.scope && decoded.scope !== config.companyScope) {
      return res.status(403).json({ error: 'Acesso negado: token de outro domínio corporativo' });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token de autenticação inválido ou expirado' });
  }
};

export const requirePermission = (requiredPermission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    const userRole = req.user.role;
    const permissions = ROLE_PERMISSIONS[userRole] || [];

    if (permissions.includes('*') || permissions.includes(requiredPermission)) {
      return next();
    }

    return res.status(403).json({ 
      error: `Permissão insuficiente. Requer: ${requiredPermission}`,
      userRole 
    });
  };
};
