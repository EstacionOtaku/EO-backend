import app from "./app.js";
import "dotenv/config";
import { sequelize } from "./config/database.js";

const port = process.env.NODE_PORT;

const main = async () => {
    await sequelize.authenticate();
  app.listen(port, () => {
    console.log(`Express Running... http://localhost:${port}`);
  });
};

main();