import React from 'react';
import { Wrench, Battery, Shield, Users, CheckSquare, Plus, AlertCircle } from 'lucide-react';

export default function OperacoesPage() {
  const equipments = [
    { id: 'eq_01', name: 'Robô LED Titan (2m50)', code: 'TITAN-01', category: 'ROBO_LED', status: 'DISPONIVEL', batteryLevel: 98, lastMaintenance: '2026-10-15', notes: 'Bateria e fitas RGB verificadas' },
    { id: 'eq_02', name: 'Robô Nextrom Gold', code: 'NEXTROM-01', category: 'ROBO_LED', status: 'DISPONIVEL', batteryLevel: 100, lastMaintenance: '2026-10-18', notes: 'Pintura dourada e lasers calibrados' },
    { id: 'eq_03', name: 'Cilindro CO2 10kg #1', code: 'CO2-10K-01', category: 'CILINDRO_CO2', status: 'DISPONIVEL', co2PressurePsi: 850, lastMaintenance: '2026-10-20', notes: 'Recarga cheia - Pronta entrega' },
    { id: 'eq_04', name: 'Gerb Pirotécnico 3m (Kit 4x)', code: 'GERB-3M-SET1', category: 'EFEITO_PIROTECNICO', status: 'DISPONIVEL', notes: 'Disparadores sem fio testados' }
  ];

  const team = [
    { id: 'team_01', name: 'Lucas Silva', phone: '(11) 98877-4433', role: 'PERFORMER_ROBO', active: true, notes: 'Especialista em Robô Titan e pernas de pau' },
    { id: 'team_02', name: 'Gabriel Santos', phone: '(11) 97766-5544', role: 'TECNICO_EFEITOS', active: true, notes: 'Operador de Bazuca CO2 e Gerbs' },
    { id: 'team_03', name: 'Marcos Oliveira', phone: '(11) 99988-1122', role: 'MOTORISTA_LOGISTICA', active: true, notes: 'Van de transporte e montagem' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Módulo Operacional & Equipamentos</h1>
          <p className="text-sm text-slate-400">Controle de Robôs LED, Cilindros CO2, Gerbs, Equipe de Eventos e Checklists</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-sm">
          <Plus className="w-4 h-4" />
          <span>Cadastrar Equipamento</span>
        </button>
      </div>

      {/* Equipment List */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-cyan-400" />
          Inventário de Atrações e Equipamentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {equipments.map((eq) => (
            <div key={eq.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400">{eq.code}</span>
                  <h3 className="text-base font-bold text-white">{eq.name}</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {eq.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                {eq.batteryLevel !== undefined && (
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Battery className="w-4 h-4" />
                    <span>Carga da Bateria: <strong>{eq.batteryLevel}%</strong></span>
                  </div>
                )}
                {eq.co2PressurePsi !== undefined && (
                  <div className="flex items-center gap-1.5 text-purple-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>Pressão CO2: <strong>{eq.co2PressurePsi} PSI</strong></span>
                  </div>
                )}
                <span className="text-slate-500">Última revisão: {eq.lastMaintenance}</span>
              </div>

              <p className="text-xs text-slate-400 italic bg-slate-950/40 p-2 rounded-lg border border-slate-800">
                "{eq.notes}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Allocation */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-purple-400" />
          Equipe Operacional de Performers e Técnicos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((member) => (
            <div key={member.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">{member.name}</h3>
              <p className="text-xs text-cyan-400 font-medium">{member.role}</p>
              <p className="text-xs text-slate-400">{member.phone}</p>
              <p className="text-[11px] text-slate-500">{member.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
