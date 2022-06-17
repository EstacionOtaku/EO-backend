import "dotenv/config";
import app from "./config/express";

const portDefault = 8000;
const port = process.env.NODE_PORT || portDefault;

const main = async () => {
  app.listen(port, () => {
    console.log(`Espress Running, Port: ${port}...`);
  });
};

main();
