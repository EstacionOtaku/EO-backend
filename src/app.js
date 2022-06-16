import express from 'express';

const app = express();

//middleware
app.use(express.json());

export default app;