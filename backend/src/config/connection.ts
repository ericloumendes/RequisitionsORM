import { Sequelize } from 'sequelize-typescript';
import { Fornecedor } from '../models/fornecedor';
import { Produto } from '../models/produto';
import { Historico_Compras } from '../models/historico_compras';

const sequelize = new Sequelize({
    database: "dwAtv4",
    username: "root",
    password: "root", // mudar senha
    host: "localhost", // colocar domínio
    port: 3306, // colocar porta
    dialect: 'mysql',
    models: [Fornecedor, Produto, Historico_Compras], // Adiciona os modelos aqui
  });
  
  export default sequelize;