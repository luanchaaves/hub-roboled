const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Robô LED Partner Hub Database Seeding...');

  // 1. Seed Integration Connections
  const integrations = [
    {
      key: 'MARKETING_CRM',
      name: 'Marketing Digital & CRM',
      baseUrl: 'https://marketing.roboledpartner.com.br',
      status: 'ONLINE',
      syncIntervalMin: 15
    },
    {
      key: 'COTACAO_AUTOMATICA',
      name: 'Sistema de Cotação Automática',
      baseUrl: 'https://cotacao.roboledpartner.com.br',
      status: 'ONLINE',
      syncIntervalMin: 10
    },
    {
      key: 'SISTEMA_CONTRATOS',
      name: 'Gerador de Contratos PDF',
      baseUrl: 'https://contrato.roboledpartner.com.br',
      status: 'ONLINE',
      syncIntervalMin: 30
    },
    {
      key: 'CONTROLE_FINANCEIRO',
      name: 'Controle Financeiro & DRE',
      baseUrl: 'http://localhost:3004',
      status: 'ONLINE',
      syncIntervalMin: 60
    }
  ];

  for (const conn of integrations) {
    await prisma.integrationConnection.upsert({
      where: { key: conn.key },
      update: conn,
      create: conn
    });
  }

  // 2. Seed Equipment
  const equipments = [
    {
      code: 'TITAN-01',
      name: 'Robô LED Titan (2m50)',
      category: 'ROBO_LED',
      status: 'DISPONIVEL',
      batteryLevel: 98,
      notes: 'Bateria e fitas RGB de alta intensidade verificadas'
    },
    {
      code: 'NEXTROM-01',
      name: 'Robô Nextrom Gold',
      category: 'ROBO_LED',
      status: 'DISPONIVEL',
      batteryLevel: 100,
      notes: 'Pintura dourada e canhões de laser calibrados'
    },
    {
      code: 'CO2-10K-01',
      name: 'Cilindro CO2 10kg #1',
      category: 'CILINDRO_CO2',
      status: 'DISPONIVEL',
      co2PressurePsi: 850,
      notes: 'Cilindro recarregado com lacre de segurança'
    },
    {
      code: 'GERB-3M-SET1',
      name: 'Gerb Pirotécnico 3m (Kit 4x)',
      category: 'EFEITO_PIROTECNICO',
      status: 'DISPONIVEL',
      notes: 'Acionadores via rádio e estojos de transporte ok'
    }
  ];

  for (const eq of equipments) {
    await prisma.equipment.upsert({
      where: { code: eq.code },
      update: eq,
      create: eq
    });
  }

  // 3. Seed Team Members
  const team = [
    {
      name: 'Lucas Silva',
      phone: '(11) 98877-4433',
      role: 'PERFORMER_ROBO',
      notes: 'Performer titular do Robô Titan'
    },
    {
      name: 'Gabriel Santos',
      phone: '(11) 97766-5544',
      role: 'TECNICO_EFEITOS',
      notes: 'Operador de Bazuca CO2 e Gerbs pirotécnicos'
    },
    {
      name: 'Marcos Oliveira',
      phone: '(11) 99988-1122',
      role: 'MOTORISTA_LOGISTICA',
      notes: 'Responsável pelo transporte da equipe e robôs'
    }
  ];

  for (const member of team) {
    const existing = await prisma.teamMember.findFirst({
      where: { name: member.name }
    });
    if (!existing) {
      await prisma.teamMember.create({ data: member });
    }
  }

  // 4. Seed Audit Log Initial Record
  await prisma.auditLog.create({
    data: {
      userId: 'usr_admin_default',
      userName: 'Luan Chaves',
      userEmail: 'luan@roboledpartner.com.br',
      action: 'SISTEMA_INICIALIZADO',
      entityType: 'HUB_CORE',
      entityId: 'HUB-2026',
      details: 'Robô LED Partner Hub inicializado com sucesso. Escopo exclusivo configurado.'
    }
  });

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
