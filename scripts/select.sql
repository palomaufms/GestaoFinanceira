-- Total de despesas por conta
SELECT c.nome, SUM(t.valor) AS total_despesas
FROM Transacao t
JOIN Conta c ON t.id_conta = c.id_conta
JOIN Categoria cat ON t.id_categoria = cat.id_categoria
WHERE cat.tipo = 'Despesa'
GROUP BY c.nome;

-- Saldo atualizado de cada conta
SELECT nome, saldo FROM Conta;
