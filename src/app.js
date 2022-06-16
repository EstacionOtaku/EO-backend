//instancia de express
import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';

const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas principales
app.use('/users', userRoutes)

export default app;