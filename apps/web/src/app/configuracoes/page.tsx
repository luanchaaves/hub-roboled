import React from 'react';
import { Settings, Server, Globe, Key, Shield } from 'lucide-react';

export default function ConfiguracoesPage() {
  const configs = [
    { label: 'Domínio Oficial Hub', value: 'admin.roboledpartner.com.br' },
    { label: 'Empresa Alvo', value: 'Robô LED Partner (SBC - SP)' },
    { label: 'Provedor de Identidade OIDC', value: 'Keycloak 25 (Realm: roboled-realm)' },
    { label: 'Túnel Seguro', value: 'Cloudflare Tunnel (Zero Trust)' },
    { label: 'Banco de Dados Hub', value: 'PostgreSQL 16 (Proxmox VM)' },
    { label: 'Cache / PubSub', value: 'Redis 7 Alpine' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Configurações & Parâmetros do Hub</h1>
        <p className="text-sm text-slate-400">Infraestrutura Proxmox, Docker e Endpoints de Integração</p>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Server className="w-5 h-5 text-cyan-400" />
          Parâmetros de Infraestrutura & Deploy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {configs.map((c, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
              <p className="text-xs text-slate-400 font-medium">{c.label}</p>
              <p className="text-sm font-bold text-white">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
