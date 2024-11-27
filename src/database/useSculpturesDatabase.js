import * as SQLite from 'expo-sqlite';

// Abrindo ou criando o banco de dados
const db = SQLite.openDatabase('app.db');

// Função para inicializar a tabela de esculturas
const initializeSculpturesTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS esculturas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        tipo TEXT NOT NULL,
        descricao TEXT,
        imagem TEXT
      );`,
      [],
      () => console.log('Tabela "esculturas" criada com sucesso.'),
      (tx, error) => console.log('Erro ao criar tabela "esculturas":', error)
    );
  });
};

// Função para adicionar uma nova escultura
export const addSculpture = (nome, tipo, descricao, imagem) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO esculturas (nome, tipo, descricao, imagem) VALUES (?, ?, ?, ?);`,
        [nome, tipo, descricao, imagem],
        (_, result) => {
          console.log('Escultura inserida com sucesso:', result);
          resolve(result); // Retorna o resultado da inserção
        },
        (_, error) => {
          console.error('Erro ao adicionar escultura:', error);
          reject(error); // Retorna o erro se houver falha
        }
      );
    });
  });
};

// Função para obter todas as esculturas
export const getSculptures = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM esculturas;`,
        [],
        (_, { rows }) => resolve(rows._array), // Retorna todas as esculturas
        (_, error) => reject(error)
      );
    });
  });
};

// Função para deletar uma escultura
export const deleteSculpture = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM esculturas WHERE id = ?;`,
        [id],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Inicializa a tabela quando o arquivo for carregado
initializeSculpturesTable();

