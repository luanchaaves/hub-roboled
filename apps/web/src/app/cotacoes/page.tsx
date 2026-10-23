import React from 'react';
import { Calculator, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CotacoesPage() {
  const cotacoes = [
    {
      id: 'COT-2026-089',
      clientName: 'Juliana Mendes',
      eventType: 'Casamento VIP',
      location: 'São Bernardo do Campo - SP',
      distanceKm: 12,
      freightCost: 150.00,
      attractions: ['Robô LED Titan (2m50)', 'Efeito Gerb Pirotécnico (4x)'],
      totalValue: 3800.00,
      status: 'APROVADO'
    },
    {
      id: 'COT-2026-090',
      clientName: 'Empresa Tech Eventos',
      eventType: 'Convenção Anual',
      location: 'Santo André - SP',
      distanceKm: 18,
      freightCost: 220.00,
      attractions: ['Robô Nextrom Gold', 'Combo 2 Robôs', 'Cilindro CO2 10kg'],
      totalValue: 7500.00,
      status: 'ENVIADO'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Sistema de Cotação Automática</h1>
          <p className="text-sm text-slate-400">Integração nativa com cotacao.roboledpartner.com.br</p>
        </div>
        <a 
          href="https://cotacao.roboledpartner.com.br/admin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all text-sm font-semibold"
        >
          <span>Painel Admin Cotações</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4">Orçamentos Recentes & Cálculo de Deslocamento</h2>
        <div className="space-y-4">
          {cotacoes.map((item) => (
            <div key={item.id} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">{item.id}</span>
                  <h3 className="text-base font-bold text-white">{item.clientName} — <span className="text-slate-300 font-normal">{item.eventType}</span></h3>
                  <p className="text-xs text-slate-400">{item.location} ({item.distanceKm} km | Frete R$ {item.freightCost.toFixed(2)})</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-white">R$ {item.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="flex flex-wrap gap-2">
                  {item.attractions.map((att, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">
                      {att}
                    </span>
                  ))}
                </div>

                {item.status === 'APROVADO' && (
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all text-xs font-bold">
                    <span>Gerar Contrato (Sinal 40%)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
