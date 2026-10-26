import { test, expect } from "@playwright/test";

// VEJA AQUI: Adicionámos o "isMobile" dentro das chavetas na linha abaixo
test("CT-006: Realizar cadastro completo com e-mail dinâmico (E2E)", async ({ page, isMobile }) => {
  // 1. Aumentar o tempo limite deste teste E2E para 60 segundos
  test.setTimeout(60000);
  // 1. Criar e-mail dinâmico
  const timestamp = new Date().getTime();
  const emailDinamico = `joanatas_${timestamp}@teste.com`;

  // 2. Acessar o sistema
  await page.goto("http://158.101.19.205/");
  await page.locator('#topRight').getByRole('button', { name: 'Cadastrar' }).click();

  // 3. Preencher formulário
  await page.getByRole("textbox", { name: "Nome completo" }).fill("Joanatas Ribeiro da Silva");
  await page.getByRole("textbox", { name: "E-mail" }).fill(emailDinamico);
  await page.getByRole("textbox", { name: "Senha (8 a 72 caracteres, com" }).fill("Senha123@");
  await page.getByRole("textbox", { name: "(81) 99999-" }).fill("81998854878");
  await page.getByRole("textbox", { name: "Data de nascimento" }).fill("1977-11-12");
  await page.getByLabel("Gênero Selecione uma opção").selectOption("M");
  await page.getByLabel("Categoria de participante Selecione uma opção Aluno SENAI Ex-aluno Visitante").selectOption("Aluno SENAI");
  await page.getByRole("textbox", { name: "Curso" }).fill("Informatica");
  await page.getByRole("textbox", { name: "Unidade" }).fill("Paulista");
  await page.getByRole("textbox", { name: "Turma" }).fill("Tarde");
  await page.getByRole("button", { name: "Concluir cadastro" }).click();

  // 4. Validar Login
  await expect(page.getByText('BEM-VINDO(A) AO MUNDO SENAI')).toBeVisible();
   
 // 5. Navegar para a área de "Explorar circuito"
  if (isMobile) {
    await page.locator('#menuBtn').click({ force: true });
    await page.waitForTimeout(500); // Aguarda meio segundo para a animação do menu
  }
  await page.getByRole('link', { name: 'Explorar circuito' }).click({ force: true });
  await expect(page.getByRole('heading', { name: 'Explore o circuito' })).toBeVisible();

  // 6. Navegar para a área "Meu passaporte"
  if (isMobile) {
    await page.locator('#menuBtn').click({ force: true });
    await page.waitForTimeout(500); // Aguarda meio segundo para a animação do menu
  }
  await page.getByRole('link', { name: 'Meu passaporte' }).click({ force: true });
  await expect(page.getByRole('heading', { name: 'Meu passaporte' })).toBeVisible();
});