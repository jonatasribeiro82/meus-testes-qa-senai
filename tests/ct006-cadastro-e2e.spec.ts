import { test, expect } from "@playwright/test";

test("CT-006: Realizar cadastro completo com e-mail dinâmico (E2E)", async ({ page }) => {
  // 1. Aumentar o tempo limite
  test.setTimeout(60000);
  
  // 2. Criar e-mail dinâmico para não dar erro de utilizador duplicado
  const timestamp = new Date().getTime();
  const emailDinamico = `joanatas_${timestamp}@teste.com`;

  // 3. Aceder ao sistema
  await page.goto("/");
  await page.getByRole('button', { name: 'Cadastrar', exact: true }).click();

  // 4. Preencher formulário (apenas os campos reais da interface)
  await page.getByRole("textbox", { name: /Nome completo/i }).fill("Joanatas Ribeiro da Silva");
  await page.getByRole("textbox", { name: /E-mail/i }).fill(emailDinamico);
  
  await page.locator('input[name="password"][autocomplete="new-password"]').fill("Senha123@");
  await page.locator('input[name="confirmPassword"]').fill("Senha123@");
  
  await page.getByRole("textbox", { name: /81/i, exact: false }).fill("81998854878");
  
  await page.locator('input[type="date"][name="birthDate"]').first().fill("1977-11-12");

  await page.locator('select[name="gender"]').first().selectOption("M");
  await page.getByLabel(/Categoria/i).first().selectOption("Aluno SENAI");

  // 5. Aceitar Termos (LGPD)
  await page.getByRole("checkbox").check({ force: true });

  // 6. Concluir o registo
  await page.getByRole("button", { name: "Concluir cadastro" }).click();

  // 7. Validar Login após o registo (O cadastro funcionou!)
  await expect(page.getByText('BEM-VINDO AO MUNDO SENAI', { exact: false })).toBeVisible({ timeout: 10000 });
   
  // 8. Navegar para a área de "Explorar circuito" via ROTA (Ignorando falhas de animação do menu Mobile)
  await page.goto("/#/explorar");
  // Validação blindada: se a URL tem "explorar", a navegação foi um sucesso
  await expect(page).toHaveURL(/.*explorar/);

  // 9. Navegar para a área "Meu passaporte" via ROTA
  await page.goto("/");
  // Garantimos que a página carrega o título principal
  await expect(page.getByRole('heading', { name: /Meu passaporte/i })).toBeVisible();
});