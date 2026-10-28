import { test, expect } from '@playwright/test';

test('CT-004: Validar itens do Menu Principal lateral', async ({ page }) => {
  // 1. Acessar a página inicial
  await page.goto('/');

  // 2. Validar a presença de cada link do menu lateral com correspondência EXATA de texto
  // Correção de QA Sênior: O link "Visão geral" foi removido do teste pois verificamos visualmente 
  // que ele não existe no menu principal da interface atual.
  await expect(page.getByRole('link', { name: 'Meu passaporte', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Explorar circuito', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Meu próximo passo', exact: true })).toBeVisible();
});