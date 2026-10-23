import React from 'react';
import { FileText, ExternalLink, Download, CheckCircle2 } from 'lucide-react';

export default function ContratosPage() {
  const contratos = [
    {
      id: 'CTR-2026-044',
      quotationId: 'COT-2026-089',
      clientName: 'Juliana Mendes',
      eventDate: '2026-11-14',
      totalAmount: 3800.00,
      signalPaid: 1520.00, // 40%
      remainingAmount: 2280.00, // 60%
      status: 'SINAL_PAGO'
    },
    {
      id: 'CTR-2026-045',
      quotationId: 'COT-2026-078',
      clientName: 'Carlos Eduardo Santos',
      eventDate: '2026-11-07',
      totalAmount: 4500.00,
      signalPaid: 1800.00,
      remainingAmount: 2700.00,
      status: 'QUITADO'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestão de Contratos Jurídicos</h1>
          <p className="text-sm text-slate-400">Integração nativa com contrato.roboledpartner.com.br</p>
        </div>
        <a 
          href="https://contrato.roboledpartner.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all text-sm font-semibold"
        >
          <span>Painel Sistema Contratos</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4">Contratos Confirmados & Regra Financeira 40/60</h2>
        <div className="space-y-4">
          {contratos.map((item) => (
            <div key={item.id} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">{item.id}</span>
                  <span className="text-xs text-slate-500">Ref: {item.quotationId}</span>
                </div>
                <h3 className="text-base font-bold text-white">{item.clientName}</h3>
                <p className="text-xs text-slate-400">Data do Evento: <span className="text-white font-medium">{item.eventDate}</span></p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-400">Sinal Recebido (40%)</p>
                  <p className="text-sm font-bold text-emerald-400">R$ {item.signalPaid.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-slate-400">A Receber (60%)</p>
                  <p className="text-sm font-bold text-amber-400">R$ {item.remainingAmount.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {item.status}
                </span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-all">
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Contrato</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
