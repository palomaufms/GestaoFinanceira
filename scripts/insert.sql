INSERT INTO Usuario (nome, email, senha) VALUES ('Paloma', 'paloma@email.com', 'senha123');
INSERT INTO Conta (id_usuario, nome, saldo) VALUES (1, 'Conta Poupança', 1000.00);
INSERT INTO Categoria (nome, tipo) VALUES ('Salário', 'Receita');
INSERT INTO Transacao (id_conta, id_categoria, valor, data, descricao) VALUES (1, 1, 2500.00, '2025-09-01', 'Salário mensal');
