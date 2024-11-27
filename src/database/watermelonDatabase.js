import { Database } from '@nozbe/watermelondb';
import { appSchema, tableSchema } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

// Definindo o schema da tabela 'esculturas'
const sculptureSchema = tableSchema({
  name: 'esculturas',
  columns: [
    { name: 'nome', type: 'string' },
    { name: 'tipo', type: 'string' },
    { name: 'descricao', type: 'string' },
    { name: 'imagem', type: 'string' },
  ],
});

// Criando o adaptador SQLite
const adapter = new SQLiteAdapter({
  dbName: 'app.db',  // Nome do banco de dados
  schema: appSchema({
    version: 1,
    tables: [sculptureSchema], // Definindo a coleção de esculturas
  }),
});

// Criando o banco de dados
const database = new Database({
  adapter,
  modelClasses: [],
  actionsEnabled: true,
});

// Garantindo que a coleção 'esculturas' esteja acessível
const getSculpturesCollection = () => {
  const collection = database.collections.get('esculturas');
  if (!collection) {
    console.error("Coleção 'esculturas' não encontrada!");
  }
  return collection;
};

export { database, getSculpturesCollection };
