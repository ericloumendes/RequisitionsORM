import router from "./routes";
import sequelize from "./config/connection";

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false })  // Altere para `true` se quiser recriar as tabelas durante o desenvolvimento
  .then(async () => {
    console.log('Database synchronized');
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });