import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/index.js';

import authRoutes from './routes/auth.js';
import dashboardRoutes from './routes/dashboard.js';
import marketingRoutes from './routes/marketing.js';
import cotacoesRoutes from './routes/cotacoes.js';
import contratosRoutes from './routes/contratos.js';
import financeiroRoutes from './routes/financeiro.js';
import operacoesRoutes from './routes/operacoes.js';
import auditoriaRoutes from './routes/auditoria.js';
import configuracoesRoutes from './routes/configuracoes.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(morgan('dev'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'Robô LED Partner Hub API (BFF)',
    companyScope: config.companyScope,
    timestamp: new Date().toISOString()
  });
});

// API Routes mounting
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/cotacoes', cotacoesRoutes);
app.use('/api/contratos', contratosRoutes);
app.use('/api/financeiro', financeiroRoutes);
app.use('/api/operacoes', operacoesRoutes);
app.use('/api/auditoria', auditoriaRoutes);
app.use('/api/configuracoes', configuracoesRoutes);

app.listen(config.port, () => {
  console.log(`⚡ Robô LED Partner Hub API (BFF) running on port ${config.port}`);
  console.log(`🔒 Company Scope: ${config.companyScope}`);
});
