const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Robô LED Partner Hub Database Seeding...');

  // 1. Seed Integration Connections
  const integrations = [
    {
      systemName: 'MARKETING_CRM',
      baseUrl: 'https://marketing.roboledpartner.com.br',
      authType: 'BEARER',
      status: 'ONLINE'
    },
    {
      systemName: 'COTACAO_AUTOMATICA',
      baseUrl: 'https://cotacao.roboledpartner.com.br',
      authType: 'API_KEY',
      status: 'ONLINE'
    },
    {
      systemName: 'SISTEMA_CONTRATOS',
      baseUrl: 'https://contrato.roboledpartner.com.br',
      authType: 'BEARER',
      status: 'ONLINE'
    },
    {
      systemName: 'CONTROLE_FINANCEIRO',
      baseUrl: 'http://localhost:3004',
      authType: 'API_KEY',
      status: 'ONLINE'
    }
  ];

  for (const conn of integrations) {
    await prisma.integrationConnection.upsert({
      where: { systemName: conn.systemName },
      update: conn,
      create: conn
    });
  }

  // 2. Seed Equipment
  const equipments = [
    {
      serialNumber: 'TITAN-01',
      name: 'Robô LED Titan (2m50)',
      category: 'ROBO_LED',
      status: 'DISPONIVEL',
      condition: 'OTIMO',
      notes: 'Bateria e fitas RGB de alta intensidade verificadas'
    },
    {
      serialNumber: 'NEXTROM-01',
      name: 'Robô Nextrom Gold',
      category: 'ROBO_LED',
      status: 'DISPONIVEL',
      condition: 'EXCELENTE',
      notes: 'Pintura dourada e canhões de laser calibrados'
    },
    {
      serialNumber: 'CO2-10K-01',
      name: 'Cilindro CO2 10kg #1',
      category: 'EFEITOS_PIROTECNICOS',
      status: 'DISPONIVEL',
      condition: 'OTIMO',
      notes: 'Cilindro recarregado com lacre de segurança'
    },
    {
      serialNumber: 'GERB-3M-SET1',
      name: 'Gerb Pirotécnico 3m (Kit 4x)',
      category: 'EFEITOS_PIROTECNICOS',
      status: 'DISPONIVEL',
      condition: 'BOM',
      notes: 'Acionadores via rádio e estojos de transporte ok'
    }
  ];

  for (const eq of equipments) {
    await prisma.equipment.upsert({
      where: { serialNumber: eq.serialNumber },
      update: eq,
      create: eq
    });
  }

  // 3. Seed Team Members
  const team = [
    {
      name: 'Lucas Silva',
      phone: '(11) 98877-4433',
      email: 'lucas.silva@roboledpartner.com.br',
      role: 'PERFORMANCER_ROBO',
      notes: 'Performer titular do Robô Titan'
    },
    {
      name: 'Gabriel Santos',
      phone: '(11) 97766-5544',
      email: 'gabriel.santos@roboledpartner.com.br',
      role: 'OPERADOR_CO2',
      notes: 'Operador de Bazuca CO2 e Gerbs pirotécnicos'
    },
    {
      name: 'Marcos Oliveira',
      phone: '(11) 99988-1122',
      email: 'marcos.oliveira@roboledpartner.com.br',
      role: 'PRODUTOR_DE_CAMPO',
      notes: 'Responsável pelo transporte da equipe e robôs'
    }
  ];

  for (const member of team) {
    await prisma.teamMember.upsert({
      where: { email: member.email },
      update: member,
      create: member
    });
  }

  // 4. Seed Audit Log Initial Record
  await prisma.auditLog.create({
    data: {
      userId: 'usr_admin_default',
      userEmail: 'luan@roboledpartner.com.br',
      userRole: 'SUPER_ADMIN',
      action: 'CREATE',
      resource: 'HUB_CORE',
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
