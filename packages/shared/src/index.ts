import { z } from 'zod';

/**
 * Scope Constant for Hub
 * Exclusively for Robô LED Partner. Ignores personal and third-party company domains.
 */
export const COMPANY_SCOPE = 'ROBOLED_PARTNER';

/**
 * Roles & Permissions Matrix for Robô LED Partner Hub
 */
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  MARKETING = 'MARKETING',
  COMERCIAL = 'COMERCIAL',
  FINANCEIRO = 'FINANCEIRO',
  OPERACIONAL = 'OPERACIONAL',
  AUDITOR = 'AUDITOR'
}

export const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  [UserRole.SUPER_ADMIN]: ['*'],
  [UserRole.ADMIN]: [
    'dashboard:view', 'marketing:*', 'cotacoes:*', 'contratos:*', 
    'financeiro:*', 'operacoes:*', 'auditoria:view', 'configuracoes:*'
  ],
  [UserRole.MARKETING]: [
    'dashboard:view', 'marketing:*', 'cotacoes:view'
  ],
  [UserRole.COMERCIAL]: [
    'dashboard:view', 'marketing:leads:view', 'cotacoes:*', 'contratos:*'
  ],
  [UserRole.FINANCEIRO]: [
    'dashboard:view', 'cotacoes:view', 'contratos:view', 'financeiro:*'
  ],
  [UserRole.OPERACIONAL]: [
    'dashboard:view', 'operacoes:*', 'agenda:view'
  ],
  [UserRole.AUDITOR]: [
    'dashboard:view', 'auditoria:view', 'configuracoes:view'
  ]
};

/**
 * System Integration Types
 */
export type SystemIntegrationKey =
  | 'MARKETING_CRM'
  | 'COTACAO_AUTOMATICA'
  | 'SISTEMA_CONTRATOS'
  | 'CONTROLE_FINANCEIRO'
  | 'GOOGLE_CALENDAR'
  | 'N8N_WHATSAPP';

export interface IntegrationStatus {
  key: SystemIntegrationKey;
  name: string;
  url: string;
  status: 'ONLINE' | 'DEGRADED' | 'OFFLINE';
  lastPing: string;
  latencyMs: number;
}

/**
 * Equipment Schemas (Robôs LED, CO2, Gerbs, Costumes)
 */
export const EquipmentCategorySchema = z.enum([
  'ROBO_LED',
  'PERSONAGEM_VIVO',
  'CILINDRO_CO2',
  'EFEITO_PIROTECNICO',
  'SOM_ILUMINACAO',
  'OUTROS'
]);

export const EquipmentStatusSchema = z.enum([
  'DISPONIVEL',
  'EM_USO',
  'MANUTENCAO',
  'INATIVO'
]);

export const EquipmentSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, 'Nome é obrigatório'),
  code: z.string().min(2, 'Código identificador é obrigatório'),
  category: EquipmentCategorySchema,
  status: EquipmentStatusSchema,
  batteryLevel: z.number().min(0).max(100).optional(),
  co2PressurePsi: z.number().min(0).optional(),
  lastMaintenance: z.string().optional(),
  nextMaintenance: z.string().optional(),
  notes: z.string().optional(),
});

export type EquipmentInput = z.infer<typeof EquipmentSchema>;

/**
 * Team Member Schemas
 */
export const TeamRoleSchema = z.enum([
  'PERFORMER_ROBO',
  'PERFORMER_PERSONAGEM',
  'TECNICO_EFEITOS',
  'MOTORISTA_LOGISTICA',
  'COORDENADOR_EVENTO',
  'VENDEDOR'
]);

export const TeamMemberSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, 'Nome do integrante é obrigatório'),
  phone: z.string().min(10, 'Telefone com DDD é obrigatório'),
  role: TeamRoleSchema,
  active: z.boolean().default(true),
  notes: z.string().optional(),
});

export type TeamMemberInput = z.infer<typeof TeamMemberSchema>;

/**
 * Event Checklist Item Schema
 */
export const ChecklistItemSchema = z.object({
  id: z.string().optional(),
  label: z.string(),
  completed: z.boolean().default(false),
  verifiedBy: z.string().optional(),
  verifiedAt: z.string().optional(),
});

export type ChecklistItemInput = z.infer<typeof ChecklistItemSchema>;
