import { test, expect } from '@playwright/test';

test('CT-001: Validar Visão Geral para visitante', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Meu passaporte/i);
  await expect(page.getByText('BEM-VINDO AO MUNDO SENAI', { exact: false })).toBeVisible();

  // CORREÇÃO QA SÊNIOR: Adicionado o .first() para evitar conflito com botões escondidos no HTML
  await expect(page.getByRole('button', { name: 'Entrar', exact: true }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cadastrar', exact: true }).first()).toBeVisible();
  
  await expect(page.getByRole('heading', { name: 'Meu passaporte', exact: true })).toBeVisible();
});