import React from 'react';
import { DollarSign, ShieldAlert, ArrowUpRight, TrendingUp, PieChart } from 'lucide-react';

export default function FinanceiroPage() {
  const breakdown = [
    { label: 'Cachê de Performers (Robôs / Personagens)', amount: 6800.00, percent: 53.5 },
    { label: 'Frete e Combustível (Logística SBC e SP)', amount: 2100.00, percent: 16.5 },
    { label: 'Manutenção de Trajes & Fitagem LED', amount: 2000.00, percent: 15.7 },
    { label: 'Recarga de Cilindros CO2 & Gerbs', amount: 1800.00, percent: 14.3 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Controle Financeiro Corporativo (DRE)</h1>
          <p className="text-sm text-slate-400">Exclusivo Robô LED Partner — Isolado de finanças pessoais e outros negócios</p>
        </div>
        <div className="flex items-center gap-2 glass-pill px-3 py-1.5 rounded-lg text-xs text-cyan-400 border border-cyan-500/30">
          <ShieldAlert className="w-4 h-4 text-cyan-400" />
          <span>Filtro de Escopo Ativo (Robô LED Partner)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase">Faturamento Bruto Mensal</p>
          <p className="text-3xl font-bold text-white mt-1">R$ 42.500,00</p>
          <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            +12.4% vs mês anterior
          </p>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase">Custos Operacionais Diretos</p>
          <p className="text-3xl font-bold text-rose-400 mt-1">R$ 12.700,00</p>
          <p className="text-xs text-slate-400 mt-2">Logística, cachês, insumos</p>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase">Lucro Líquido Operacional</p>
          <p className="text-3xl font-bold text-emerald-400 mt-1">R$ 29.800,00</p>
          <p className="text-xs text-emerald-300 mt-2">Margem de Lucro: 70.1%</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-cyan-400" />
          Detalhamento dos Custos Operacionais
        </h2>
        <div className="space-y-4">
          {breakdown.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <div className="w-48 bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-base font-bold text-white">R$ {item.amount.toFixed(2)}</p>
                <p className="text-xs text-slate-400">{item.percent}% dos custos</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
