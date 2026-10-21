import { test, expect } from '@playwright/test';

test('CT-002: Validar abertura da janela de Login', async ({ page }) => {
  // 1. Acessar a página inicial
  await page.goto('/');

  // 2. Clicar no botão "Entrar" no topo da tela (#topRight)
  await page.locator('#topRight').getByRole('button', { name: 'Entrar' }).click();

  // 3. Validar se o título do formulário de login (#t-login) ficou visível na tela
  await expect(page.locator('#t-login')).toBeVisible();
  
  // 4. Validar se o botão final de envio do login apareceu
  await expect(page.locator('#form-login button').filter({ hasText: 'Entrar' })).toBeVisible();
});
