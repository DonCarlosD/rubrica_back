import express from 'express';
const app = express();
import cors from 'cors'
// importar rutas
import usuariosRoutes from './routers/usuarios.routes.js';
import proyectosRoutes from './routers/proyectos.routes.js';
import personasRoutes from './routers/personas.routes.js';
import integrantesRoutes from './routers/integrantes.routes.js';
import evaluacionesRoutes from './routers/evaluaciones.routes.js';
import equiposRoutes from './routers/equipos.routes.js';
import criteriosRoutes from './routers/criterios.routes.js';

// configuracion de cors
app.use(cors(
    {
        origin:'https://localhost:3000',
        credentials:true
    }
))
// middlewares
app.use(express.json());

// rutas
app.use('/api', usuariosRoutes);
app.use('/api', proyectosRoutes);
app.use('/api', personasRoutes);
app.use('/api', integrantesRoutes);
app.use('/api', evaluacionesRoutes);
app.use('/api', equiposRoutes);
app.use('/api', criteriosRoutes);

export default app;