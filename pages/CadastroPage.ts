import { Page } from '@playwright/test';

export class CadastroPage {
  readonly page: Page;
  // O seletor exato descoberto no HTML do site do SENAI
  readonly registerButton = 'button[data-action="open-register"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Ação para clicar no botão de cadastro
  async abrirCadastro() {
    await this.page.click(this.registerButton);
  }
}