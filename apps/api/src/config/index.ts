import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  companyScope: 'ROBOLED_PARTNER',
  jwtSecret: process.env.JWT_SECRET || 'roboled-hub-super-secret-jwt-key-2026',
  keycloakUrl: process.env.KEYCLOAK_URL || 'http://localhost:8080/realms/roboled-realm',
  integrations: {
    marketing: {
      url: process.env.INTEGRATION_MARKETING_URL || 'https://marketing.roboledpartner.com.br',
      apiKey: process.env.INTEGRATION_MARKETING_KEY || '',
    },
    cotacao: {
      url: process.env.INTEGRATION_COTACAO_URL || 'https://cotacao.roboledpartner.com.br',
      apiKey: process.env.INTEGRATION_COTACAO_KEY || '',
    },
    contratos: {
      url: process.env.INTEGRATION_CONTRATOS_URL || 'https://contrato.roboledpartner.com.br',
      apiKey: process.env.INTEGRATION_CONTRATOS_KEY || '',
    },
    financeiro: {
      url: process.env.INTEGRATION_FINANCEIRO_URL || 'http://localhost:3004',
      apiKey: process.env.INTEGRATION_FINANCEIRO_KEY || '',
    },
    calendar: {
      googleCalendarId: process.env.GOOGLE_CALENDAR_ID || 'c_roboledpartner@group.calendar.google.com',
    }
  }
};
