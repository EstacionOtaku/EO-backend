import "dotenv/config";
import app from "./app.js";
import { sequelize } from "./config/database.js";

const port = process.env.NODE_PORT;

const main = async () => {
    // await sequelize.authenticate(); //validamos la conexion a la base de datos
    await sequelize.sync({ force: false}); //sincronizamos los modelos con la base de datos
  app.listen(port, () => {
    console.log(`Express Running... http://localhost:${port}`);
  });
};

main();