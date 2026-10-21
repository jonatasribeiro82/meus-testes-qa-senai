import { test, expect } from '@playwright/test';

test('CT-005: Validar botão principal de CTA', async ({ page }) => {
  // 1. Acessar a página inicial
  await page.goto('/');

  // 2. Pegadinha do HTML: O botão central na verdade é um link (<a>)!
  // Como temos dois links com esse texto na tela (Menu e CTA), pegamos o último (.last())
  const botaoCTA = page.getByRole('link', { name: /Explorar o circuito/i }).last();
  await expect(botaoCTA).toBeVisible();

  // 3. Clicar no CTA
  await botaoCTA.click();
});
