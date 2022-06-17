import "dotenv/config";
import app from "./config/express";

const port = process.env.NODE_PORT || 8000;

const main = async () => {
  app.listen(port, () => {
    console.log(`Espress Running, Port: ${port}...`);
  });
};

main();
