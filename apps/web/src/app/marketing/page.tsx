import React from 'react';
import { Megaphone, Users, Target, BarChart3, ExternalLink } from 'lucide-react';

export default function MarketingPage() {
  const sources = [
    { source: 'Instagram @roboledpartner', count: 184, conversion: 28.0 },
    { source: 'Google Ads (Robô LED SBC)', count: 98, conversion: 22.4 },
    { source: 'Indicação / Eventos Realizados', count: 42, conversion: 35.7 },
    { source: 'Site Institucional (roboledpartner.com.br)', count: 18, conversion: 15.0 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Marketing Digital & CRM de Leads</h1>
          <p className="text-sm text-slate-400">Integração nativa com marketing.roboledpartner.com.br</p>
        </div>
        <a 
          href="https://marketing.roboledpartner.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all text-sm font-semibold"
        >
          <span>Acessar Painel Marketing CRM</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-5">
          <div className="flex items-center gap-3 text-cyan-400 mb-2">
            <Users className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase">Total de Leads Ativos</span>
          </div>
          <p className="text-3xl font-bold text-white">342</p>
          <p className="text-xs text-slate-400 mt-1">86 captados no mês atual</p>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center gap-3 text-purple-400 mb-2">
            <Target className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase">Taxa Global de Conversão</span>
          </div>
          <p className="text-3xl font-bold text-white">24.5%</p>
          <p className="text-xs text-slate-400 mt-1">Lead -&gt; Cotação Gerada</p>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center gap-3 text-emerald-400 mb-2">
            <BarChart3 className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase">Investimento em Ads</span>
          </div>
          <p className="text-3xl font-bold text-white">R$ 3.850,00</p>
          <p className="text-xs text-slate-400 mt-1">Meta Ads & Google Search</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4">Origem dos Leads & Conversão Comercial</h2>
        <div className="space-y-4">
          {sources.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{item.source}</p>
                <p className="text-xs text-slate-400">{item.count} leads qualificados</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-400">{item.conversion}% conversão</p>
                <p className="text-[11px] text-slate-500">Robô LED Partner Scope</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
