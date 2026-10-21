import { test, expect } from '@playwright/test';

test('CT-003: Validar abertura da janela de Cadastro', async ({ page }) => {
  // 1. Acessar a página inicial
  await page.goto('/');

  // 2. Clicar no botão "Cadastrar" no topo da tela (#topRight)
  await page.locator('#topRight').getByRole('button', { name: 'Cadastrar' }).click();

  // 3. Validar se o formulário de cadastro (#form-register) ficou visível na tela
  await expect(page.locator('#form-register')).toBeVisible();
  
  // 4. Validar se o botão final de envio apareceu (buscando pela função 'submit' e não pelo texto)
  await expect(page.locator('#form-register button[type="submit"]')).toBeVisible();
});
