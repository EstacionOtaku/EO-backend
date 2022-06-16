import app from './app.js';
import 'dotenv/config';

const port = process.env.NODE_PORT;

app.listen(port, () => {
    console.log(`Express Running... http://localhost:${port}`);
});

