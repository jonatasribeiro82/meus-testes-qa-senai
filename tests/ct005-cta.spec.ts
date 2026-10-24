import { test, expect } from '@playwright/test';

test('CT-005: Validar botão principal de CTA', async ({ page }) => {
  // 1. Acessar a página inicial
  await page.goto('/');

  // 2. Localizar o VERDADEIRO botão CTA da página inicial
  const botaoCTA = page.getByRole('link', { name: /Ver meu passaporte/i });
  await expect(botaoCTA).toBeVisible();

  // 3. Clicar no CTA
  await botaoCTA.click();
});