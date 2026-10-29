import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  // Defina aqui os seletores reais da tela de login do seu projeto do SENAI
  readonly emailInput = '#email'; 
  readonly passwordInput = '#password';
  readonly submitButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Ação reutilizável de login
  async realizarLogin(email: string, senha: string) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, senha);
    await this.page.click(this.submitButton);
  }
}
