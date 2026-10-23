'use client';

import React from 'react';
import { Bell, Shield, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-surface-border bg-surface/50 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          admin.roboledpartner.com.br
        </span>
        <span className="text-xs text-slate-400">
          Versão 1.0.0 (BFF Active)
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400"></span>
        </button>

        <div className="h-6 w-px bg-surface-border"></div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
            <User className="w-4 h-4" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-semibold text-white">Luan Chaves</p>
            <p className="text-[10px] text-cyan-400 font-medium">SUPER_ADMIN</p>
          </div>
        </div>
      </div>
    </header>
  );
}
