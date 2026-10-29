import { test, expect } from '@playwright/test';
import { CadastroPage } from '../pages/CadastroPage';

test('Deve aceder ao site do Mundo SENAI e abrir o modal de cadastro', async ({ page }) => {
  const cadastroPage = new CadastroPage(page);

  // 1. Acede ao site oficial
  await page.goto('https://clyo.online/');

  // 2. Clica no botão de cadastrar usando a função da página POM
  await cadastroPage.abrirCadastro();

  // 3. Valida especificamente se o formulário de cadastro (#form-register) apareceu na tela
  await expect(page.locator('#form-register')).toBeVisible();
});