import express from 'express';
import 'dotenv/config';

const app = express();
//middleware
app.use(express.json());

export default app;