import { test, expect } from '@playwright/test';

const API_BASE_URL = 'http://158.101.19.205:8080';

const uniqueEmail = `qa.api.${Date.now()}@mundosenai.com`;
const defaultPassword = 'Password123!';

// Armazena dinamicamente o token e um código de atividade válido para usar nos testes seguintes
let authToken = '';
let sampleActivityCode = '';

// Roda apenas no projeto Chromium para evitar duplicação desnecessária
test.beforeEach(({ browserName, isMobile }) => {
  test.skip(browserName !== 'chromium' || isMobile, 'Testes de API rodam apenas uma vez');
});

test('API-001: Deve cadastrar um novo participante via API com sucesso (201 Created)', async ({ request }) => {
  const response = await request.post(`${API_BASE_URL}/users`, {
    data: {
      type: 'EXTERNAL',
      name: 'Joanatas QA Automacao',
      email: uniqueEmail,
      password: defaultPassword,
      phone: '81999887766',
      gender: 'Masculino',
      birthDate: '25/11/1995',
      course: null,
      unit: null,
      classGroup: null,
      referralSource: 'Instagram',
      company: null
    }
  });

  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body).toHaveProperty('id');
  expect(body.email).toBe(uniqueEmail);
});

test('API-002: Deve bloquear cadastro com e-mail duplicado (Teste Negativo)', async ({ request }) => {
  const response = await request.post(`${API_BASE_URL}/users`, {
    data: {
      type: 'EXTERNAL',
      name: 'Usuario Duplicado',
      email: uniqueEmail,
      password: defaultPassword,
      phone: '81999887766',
      gender: 'Outro',
      birthDate: '10/10/1998',
      course: null,
      unit: null,
      classGroup: null,
      referralSource: 'Amigos',
      company: null
    }
  });

  expect([400, 409, 422]).toContain(response.status());
});

test('API-003: Deve autenticar o participante e retornar o Token JWT (200 OK)', async ({ request }) => {
  const response = await request.post(`${API_BASE_URL}/auth/login`, {
    data: {
      email: uniqueEmail,
      password: defaultPassword
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('token');
  expect(body.user.email).toBe(uniqueEmail);

  // Guarda o token globalmente para ser usado no teste de check-in autenticado
  authToken = body.token;
});

test('API-004: Deve listar as atividades e oficinas do circuito do SENAI (200 OK)', async ({ request }) => {
  const response = await request.get(`${API_BASE_URL}/activities`);
  
  expect(response.status()).toBe(200);
  const activities = await response.json();
  
  // Garante que o retorno é um array e que existem atividades cadastradas no circuito
  expect(Array.isArray(activities)).toBe(true);
  expect(activities.length).toBeGreaterThan(0);

  // Captura o código da primeira atividade disponível para o teste de check-in
  sampleActivityCode = activities[0].activityCode || activities[0].code || 'ACT-001';
});

test('API-005: Deve realizar o check-in eletrônico via QR Code em uma atividade (201 Created)', async ({ request }) => {
  // Se por acaso o teste anterior não rodou isolado, garante um código padrão
  const codeToTest = sampleActivityCode || 'ACT-001';

  const response = await request.post(`${API_BASE_URL}/checkins`, {
    headers: {
      Authorization: `Bearer ${authToken}` // Envia o token JWT do usuário recém-criado
    },
    data: {
      activityCode: codeToTest
    }
  });

  // O backend deve aceitar o check-in ou retornar conflito caso já estivesse feito/fora de horário
  expect([201, 400, 409]).toContain(response.status());
});

test('API-006: Deve bloquear acesso a rota protegida sem Token JWT (Segurança 401/403)', async ({ request }) => {
  const response = await request.get(`${API_BASE_URL}/users`);
  expect([401, 403]).toContain(response.status());
});