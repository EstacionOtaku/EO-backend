import "dotenv/config";
import app from "./config/express";

const portDefault = 8000;
const port = process.env.PORT || portDefault;

const main = async () => {
  app.listen(port, () => {
    console.log(`Espress Running, in http://localhost:${port} ...`);
  });
};

main();
