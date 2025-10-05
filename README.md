# 📚 ENEM API (Customizada)

Esta API é baseada na [API ENEM original](https://github.com/yunger7/enem-api), que disponibiliza dados públicos das provas do ENEM sob a licença **GNU GPL-2.0**.  
Aqui, os dados foram reaproveitados e novas funcionalidades foram adicionadas.
---
## 🚀 Novidades
- **Filtro por área de conhecimento** (Linguagens, Ciências Humanas, Ciências da Natureza, Matemática)  
- **Filtro por idioma** (Inglês ou Espanhol nas questões de Linguagens)  
- **Embaralhar questões** com `shuffle=true`  
- **Controle de acesso com CORS** para evitar requisições externas indesejadas  
---
## 🎯 Motivação do Projeto
O desenvolvimento desta API customizada surgiu a partir da necessidade do **aplicativo Sapiens**, uma plataforma voltada para proporcionar um aprendizado mais  **objetivo e direcionado em Ciências**.  
Durante a construção do Sapiens, identificou-se que a [API ENEM original](https://github.com/yunger7/enem-api) já oferecia uma base sólida de dados das provas, mas não atendia totalmente às demandas do aplicativo.  
As principais necessidades foram:
- **Filtrar questões por área de conhecimento**, permitindo que o estudante foque em disciplinas específicas.  
- **Selecionar idioma nas questões de Linguagens**, diferenciando entre Inglês e Espanhol.  
- **Embaralhar questões**, para simular melhor a experiência de prova e evitar memorização pela ordem.  
-  **Controle de acesso via CORS**, garantindo que apenas o ambiente local e o domínio oficial do Sapiens possam consumir a API, reduzindo custos com requisições externas.  

Assim, esta API foi adaptada para servir como **infraestrutura educacional** do Sapiens, oferecendo dados confiáveis e flexíveis para apoiar estudantes em sua preparação para o ENEM.

---

# Endpoints
## Healthcheck
- **Endpoint:** `GET /health`
- **Descrição:** Verifica se a API está rodando.
---
## Exams
- **Endpoint:** `GET /api/v1/exams`
- **Descrição:** Lista os anos disponíveis.
- **Endpoint:** `GET /api/v1/exams/:year`
- **Descrição:** Retorna detalhes da prova de um ano específico.
---

## Questions
- **Endpoint:** `GET /api/v1/exams/:year/questions`
- **Descrição:** Lista questões de um ano com filtros opcionais.
- **Query params:**
  - **discipline:** linguagens | ciencias-humanas | ciencias-natureza | matematica
  - **language:** ingles | espanhol (apenas se discipline=linguagens)
  - **limit:** número de questões (default: 45)
  - **shuffle:** true | false
- **Endpoint:** `GET /api/v1/exams/:year/questions/:index`
- **Descrição:** Retorna detalhes de uma questão específica (ex.: `1-ingles`, `1-espanhol` ou apenas `5`).
---
# 🛠️ Tecnologias

A API foi desenvolvida utilizando as seguintes tecnologias:

- **Node.js** → Ambiente de execução JavaScript no servidor.  
- **Express** → Framework web minimalista para criação de rotas e middlewares.  
- **TypeScript** → Superset do JavaScript com tipagem estática, trazendo mais segurança e produtividade.  
- **CORS** → Middleware para controle de acesso por origem, permitindo apenas URLs autorizadas consumirem a API.  

---
# 👤 Sobre o Autor

Este projeto foi desenvolvido por **Jordan Willian** ([@jordan-will](https://github.com/jordan-will)).  
Entusiasta de tecnologia e apaixonado por educação, Jordan criou esta versão customizada da ENEM API para atender às necessidades do aplicativo **Sapiens**, que busca tornar o aprendizado de Ciências mais objetivo e acessível.  


