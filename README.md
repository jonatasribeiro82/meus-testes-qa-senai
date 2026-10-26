# 🛡️ Mundo SENAI - Automação de Testes com Playwright

![Playwright](https://img.shields.io/badge/-Playwright-45ba4b?style=flat-square&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![QA](https://img.shields.io/badge/QA-Engenharia_de_Qualidade-8A2BE2?style=flat-square)

**Projeto desenvolvido pelo Esquadrão:** *Sentinelas do Código*  
**Autor / QA:** Joanatas Ribeiro da Silva

---

## 📊 Resumo Executivo
Este projeto de automação garante a estabilidade, responsividade e o funcionamento correto da jornada do utilizador na plataforma **Mundo SENAI - Passaporte Digital**. A suíte de testes valida desde a renderização da página inicial até à criação completa de uma conta com injeção de dados dinâmicos, assegurando que o sistema responde perfeitamente tanto em computadores (Desktop Chromium) quanto em dispositivos móveis (Mobile Chrome e Safari).

## 🧪 Categorias de Teste Aplicadas
A arquitetura deste projeto cobre diferentes níveis de validação de qualidade de software:

*   **Smoke Testing:** A bateria completa funciona como um teste de fumo rápido e altamente fiável para garantir que as rotas vitais do sistema estão operacionais.
*   **End-to-End (E2E):** Simula a jornada completa de um utilizador real no sistema, gerando dados e validando o resultado final do fluxo.
*   **Testes Funcionais:** Valida funções isoladas e específicas do sistema (modais, validações, redirecionamentos).
*   **Testes de Interface (UI Testing):** Garante a renderização e visibilidade correta de textos e componentes estruturais.
*   **Cross-Browser / Mobile Testing:** Todos os scripts são executados e validados em dimensões e motores de renderização diferentes, incluindo o tratamento de elementos responsivos (como menus hambúrguer).

---

## 📋 Casos de Teste (CTs) Implementados

| ID | Nome do Caso de Teste | Descrição e Validação | Categoria |
| :--- | :--- | :--- | :--- |
| **CT-001** | Validar Visão Geral para visitante | Confirma se a página principal (Home) carrega corretamente para utilizadores não autenticados, validando a visibilidade estrutural. | UI Testing |
| **CT-002** | Validar abertura da janela de Login | Testa o fluxo de autenticação, garantindo que o modal de login é acionado corretamente ao clicar em "Entrar". | Funcional |
| **CT-003** | Validar abertura da janela de Cadastro | Valida a interface do formulário de registo, certificando-se de que os campos estáticos e visuais estão presentes e funcionais. | Funcional |
| **CT-004** | Validar itens do Menu Principal | Testa a navegação estrutural, acedendo aos links do menu e garantindo o redirecionamento correto nas páginas. | Funcional |
| **CT-005** | Validar botão principal de CTA | Garante que o botão de conversão "Ver meu passaporte" está visível e clicável no centro do ecrã, utilizando filtros inteligentes para ignorar menus ocultos. | Funcional |
| **CT-006** | Realizar cadastro completo (E2E) | Gera um e-mail dinâmico, preenche o formulário, adapta a navegação condicionalmente se for dispositivo mobile ou PC, acede à área restrita e valida o passaporte digital gerado. | E2E |

---

## 🚀 Como Executar os Testes

Certifique-se de que tem o Node.js e as dependências do Playwright instaladas. Utilize o terminal na raiz do projeto para rodar os seguintes comandos:

**Executar toda a suíte (Background):**
```bash
npx playwright test