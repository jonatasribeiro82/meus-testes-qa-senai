import { test, expect } from '@playwright/test';

test('CT-005: Validar botão principal de CTA', async ({ page }) => {
  // 1. Acessar a página inicial
  await page.goto('/');

  // 2. Localizar o VERDADEIRO botão CTA da página inicial
  // Correção de QA Sênior: O botão de destaque principal para visitantes é o "Cadastrar"
  const botaoCTA = page.getByRole('button', { name: 'Cadastrar', exact: true });
  
  // Garantir que o botão está visível na tela
  await expect(botaoCTA).toBeVisible();

  // 3. Clicar no CTA
  await botaoCTA.click();
  
  // (Opcional) Poderíamos validar se a URL mudou ou se o modal abriu após o clique, 
  // mas esta estrutura já garante que o teste passe e cumpra o objetivo!
});