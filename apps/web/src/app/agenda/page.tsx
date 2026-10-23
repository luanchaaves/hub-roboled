import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function AgendaPage() {
  const events = [
    {
      id: 'EVT-01',
      title: 'Casamento Juliana Mendes',
      attractions: ['Robô LED Titan (2m50)', 'Efeito Gerb (4x)'],
      date: '14 de Novembro de 2026',
      time: '23:30 (Apresentação 45 min)',
      location: 'Buffet Mansão SBC — São Bernardo do Campo',
      status: 'CONFIRMADO'
    },
    {
      id: 'EVT-02',
      title: 'Convenção Tech Eventos',
      attractions: ['Robô Nextrom Gold', 'Combo CO2'],
      date: '05 de Dezembro de 2026',
      time: '21:00 (Apresentação 60 min)',
      location: 'Espaço Figueiras — Santo André',
      status: 'CONFIRMADO'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Agenda Central de Eventos</h1>
          <p className="text-sm text-slate-400">Sincronização bidirecional com Google Calendar API</p>
        </div>
        <span className="glass-pill px-3 py-1.5 rounded-lg text-xs text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4" />
          <span>Google Calendar Synced</span>
        </span>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-cyan-400" />
          Próximas Apresentações Agendadas
        </h2>
        <div className="space-y-4">
          {events.map((evt) => (
            <div key={evt.id} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">{evt.title}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {evt.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1 text-cyan-400">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  {evt.date}
                </span>
                <span className="flex items-center gap-1 text-purple-400">
                  <Clock className="w-3.5 h-3.5" />
                  {evt.time}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {evt.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
