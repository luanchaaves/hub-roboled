'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Megaphone, 
  Calculator, 
  FileText, 
  DollarSign, 
  Wrench, 
  Calendar, 
  ShieldCheck, 
  Settings,
  Bot
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Marketing & CRM', href: '/marketing', icon: Megaphone },
  { name: 'Cotações', href: '/cotacoes', icon: Calculator },
  { name: 'Contratos', href: '/contratos', icon: FileText },
  { name: 'Financeiro', href: '/financeiro', icon: DollarSign },
  { name: 'Operações & Robôs', href: '/operacoes', icon: Wrench },
  { name: 'Agenda de Eventos', href: '/agenda', icon: Calendar },
  { name: 'Auditoria & Logs', href: '/auditoria', icon: ShieldCheck },
  { name: 'Configurações', href: '/configuracoes', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-surface/80 border-r border-surface-border flex flex-col h-screen sticky top-0 backdrop-blur-xl">
      {/* Brand Header */}
      <div className="p-6 border-b border-surface-border flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 neon-glow-cyan">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-lg text-white tracking-wide">ROBÔ LED</h1>
          <p className="text-xs text-cyan-400 font-semibold tracking-wider">PARTNER HUB</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-950/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Scope Isolation Indicator */}
      <div className="p-4 border-t border-surface-border">
        <div className="glass-pill p-3 rounded-lg text-xs text-slate-400">
          <p className="font-semibold text-slate-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Escopo Exclusivo
          </p>
          <p className="text-[11px] text-slate-400 mt-1">Robô LED Partner SBC</p>
        </div>
      </div>
    </aside>
  );
}
