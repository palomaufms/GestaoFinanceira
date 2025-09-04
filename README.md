# 📊 Gestão Financeira Domiciliar

Sistema de **gestão financeira** voltado para auxiliar no controle de contas pessoais e familiares.  
Permite registrar **receitas e despesas**, organizar por categorias, acompanhar o **saldo das contas** e gerar relatórios que ajudam na **tomada de decisão** sobre as finanças do dia a dia.

---

## 🚀 Funcionalidades

- Cadastro de usuários  
- Gerenciamento de contas (corrente, poupança, etc.)  
- Registro de transações (receitas e despesas)  
- Organização de transações por categorias  
- Consulta de saldo atualizado de cada conta  
- Relatórios de despesas por categoria  

---

## 🛠️ Tecnologias utilizadas

- **Banco de Dados:** MySQL (ou MariaDB)  
- **SQL:** criação de tabelas, inserção, atualização, exclusão e consultas  
- **Controle de versão:** Git + GitHub  
- **Frontend/Backend (se aplicável):** HTML, CSS, JavaScript, Node.js, React (dependendo da evolução do projeto)  

---

## 📂 Estrutura do banco de dados

Entidades principais:  

- **Usuário** → informações de login e identificação  
- **Conta** → contas bancárias ou carteiras associadas ao usuário  
- **Categoria** → classificação de transações (Receita ou Despesa)  
- **Transação** → registro de entradas e saídas financeiras  

Exemplo de tabelas (SQL):  

```sql
CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE Conta (
    id_conta INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    saldo DECIMAL(10,2) DEFAULT 0,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    tipo ENUM('Receita','Despesa') NOT NULL
);

CREATE TABLE Transacao (
    id_transacao INT PRIMARY KEY AUTO_INCREMENT,
    id_conta INT NOT NULL,
    id_categoria INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data DATE NOT NULL,
    descricao VARCHAR(255),
    FOREIGN KEY (id_conta) REFERENCES Conta(id_conta),
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria)
);
📌 Como rodar o projeto
Pré-requisitos

MySQL ou MariaDB instalado

Git instalado

Passos
# Clonar o repositório
git clone https://github.com/palomaufms/GestaoFinanceira.git

# Acessar a pasta do projeto
cd GestaoFinanceira

# Importar o script SQL no banco
mysql -u usuario -p nome_do_banco < db/schema.sql
📌 Exemplos de uso

Inserir um usuário

INSERT INTO Usuario (nome, email, senha) VALUES ('Paloma', 'paloma@email.com', 'senha123');


Cadastrar uma transação

INSERT INTO Transacao (id_conta, id_categoria, valor, data, descricao)
VALUES (1, 1, 2500.00, '2025-09-01', 'Salário mensal');

Consultar saldo das contas

SELECT nome, saldo FROM Conta;

📜 Licença

Este projeto é de uso educacional.


---


