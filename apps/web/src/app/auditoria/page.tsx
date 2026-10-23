import React from 'react';
import { ShieldCheck, UserCheck, Key, FileCode } from 'lucide-react';

export default function AuditoriaPage() {
  const logs = [
    {
      id: 'log_01',
      timestamp: '2026-10-23 11:00:00',
      userName: 'Luan Chaves',
      userRole: 'SUPER_ADMIN',
      action: 'CRIOU_COTACAO',
      entityType: 'COTACAO',
      entityId: 'COT-2026-091',
      details: 'Gerada cotação para Robô LED Megatron + Bazuca CO2',
      ip: '177.12.89.14'
    },
    {
      id: 'log_02',
      timestamp: '2026-10-23 10:15:00',
      userName: 'Administrador Robô LED',
      userRole: 'ADMIN',
      action: 'CONVERTEU_CONTRATO',
      entityType: 'CONTRATO',
      entityId: 'CTR-2026-044',
      details: 'Sinal de 40% confirmado (R$ 1.520,00)',
      ip: '177.12.89.14'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Auditoria, Segurança & Logs de Operação</h1>
        <p className="text-sm text-slate-400">Rastreabilidade completa de todas as alterações feitas no Hub</p>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          Registro de Atividades (Audit Trail)
        </h2>
        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">{log.action}</span>
                  <span className="text-xs text-slate-500">[{log.timestamp}]</span>
                </div>
                <span className="text-xs text-slate-400">IP: {log.ip}</span>
              </div>
              <p className="text-sm text-slate-200">{log.details}</p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <UserCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Executor: <strong className="text-white">{log.userName}</strong> ({log.userRole})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
