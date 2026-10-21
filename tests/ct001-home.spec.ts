import { test, expect } from '@playwright/test';

test('CT-001: Validar Visão Geral para visitante', async ({ page }) => {
  // 1. Acessar a página inicial
  await page.goto('/');

  // 2. Verificar se o título da aba do navegador está correto
  await expect(page).toHaveTitle(/Visão geral/);

  // 3. Verificar se a mensagem de boas-vindas aparece na tela
  await expect(page.getByText('Olá, visitante')).toBeVisible();

  // 4. Verificar os botões no topo da tela (usando a dica HTML do erro)
  await expect(page.locator('#topRight').getByRole('button', { name: 'Entrar' })).toBeVisible();
  await expect(page.locator('#topRight').getByRole('button', { name: 'Cadastrar' })).toBeVisible();
  
  // 5. Verificar a presença da seção Meu passaporte
  await expect(page.getByRole('complementary', { name: 'Meu passaporte' })).toBeVisible();
});
