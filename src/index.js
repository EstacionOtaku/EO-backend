import app from './app.js';

const port = process.env.NODE_PORT;

app.listen(8000, () => {
    console.log(`Express Running... http://localhost:${port}`);
});

