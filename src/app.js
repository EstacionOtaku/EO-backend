//instancia de express
import express from 'express';
import morgan from 'morgan';

const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.json());


export default app;