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
