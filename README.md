# 🚀 Mundo SENAI — Automação de Testes (E2E & API)

[![Playwright Tests](https://github.com/jonatasribeiro82/meus-testes-qa-senai/actions/workflows/playwright.yml/badge.svg)](https://github.com/jonatasribeiro82/meus-testes-qa-senai/actions)
[![QA Engineering](https://img.shields.io/badge/QA-Automation%20%2F%20QAOps-blue?style=flat-square)](https://github.com/jonatasribeiro82/meus-testes-qa-senai)
[![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=flat-square)](https://github.com/jonatasribeiro82/meus-testes-qa-senai)

Repositório oficial de automação de testes do projeto **Passaporte Digital — Mundo SENAI**. O projeto cobre a validação de ponta a ponta (E2E) da interface web e testes de integração/contrato no backend em Java/Spring Boot.

---

## 🛠️ Tecnologias Utilizadas
* **TypeScript / JavaScript** (Linguagem base dos scripts)
* **Playwright Test** (Framework moderno de automação E2E e API)
* **Node.js** (Ambiente de execução)
* **Git & GitHub** (Versionamento e CI/CD)

---

## 🧪 Pirâmide de Testes Implementada

### 1. Topo da Pirâmide: Testes E2E (Interface / UI)
* **Cobertura:** 18 testes automatizados validando a experiência do utilizador.
* **Escopos:** Fluxos de login, cadastro com validações de regras de negócio, navegação pelo circuito de oficinas e interações visuais.
* **Multiplataforma:** Executado e validado em **Desktop (Chromium)**, **Mobile Chrome (Android)** e **Mobile Safari (iOS)**.

### 2. Meio da Pirâmide: Testes de API & Integração (`CheckIn-API`)
* **Cobertura:** 6 testes de contrato e integração batendo diretamente no backend Java (`http://158.101.19.205:8080`)[cite: 1].
* **Endpoints Validados:**
  * `POST /users` (Cadastro de participantes com validação de status `201` e tratamento de duplicidade)[cite: 1].
  * `POST /auth/login` (Autenticação e emissão de Token JWT)[cite: 1].
  * `GET /activities` (Listagem dinâmica do circuito de oficinas do SENAI)[cite: 1].
  * `POST /checkins` (Simulação de check-in autenticado via QR Code)[cite: 1].
  * `GET /users` (Testes de segurança e bloqueio de rotas sem autorização `401/403`)[cite: 1].

---

## 📂 Estrutura do Projeto
```text
SENAI-TESTES/
│
├── tests/
│   ├── e2e-fluxos.spec.ts     # Testes de Interface e E2E (Desktop & Mobile)
│   └── api-checkin.spec.ts    # Testes de Integração e API (Backend Java)
│
├── playwright.config.ts       # Configurações globais de projetos e navegadores
├── package.json               # Dependências do projeto
└── README.md                  # Documentação oficial


---
## 📊 Evidências Visuais

*Execução bem-sucedida da suíte completa de testes de API no terminal:*

<img width="1917" height="1007" alt="relatorio-playwright" src="https://github.com/user-attachments/assets/f1dc4bb1-c065-45ac-8c6e-88e72fe91a27" />




*teste-e2e-execucao:*
<img width="1920" height="1080" alt="teste-e2e-execucao" src="https://github.com/user-attachments/assets/d94009d8-7fe9-4bb5-8564-a65f4a266ccd" />



*Relatório visual detalhado gerado pelo Playwright:*
<img width="1920" height="2507" alt="FireShot Capture 027 - meus-testes-qa-senai_README md at main · jonatasribeiro82_meus-test_ -  github com" src="https://github.com/user-attachments/assets/6ff5626a-4701-4ccc-8cf0-ac2d43ceefa3" />



---

<img width="1917" height="1007" alt="relatorio-playwright" src="https://gi
