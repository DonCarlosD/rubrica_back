import "dotenv/config";
import app from "./app.js";
import { sequelize } from "./database/database.js";

// import modelos
import "./models/personas.js";
import "./models/users.js";
import "./models/proyectos.js";
import "./models/equipos.js";
import "./models/integrantes.js";
import "./models/criterios.js";
import "./models/ponderaciones.js";
import "./models/evaluaciones.js";
import "./models/criterios_evaluacion.js";
// puerto
const PORT = process.env.PORT || 3000; 
// inicializar servidor
async function main(){
    try{
        await sequelize.sync({alter:true});
        app.listen(PORT, ()=> console.log(`Servidor corriendo en puerto ${PORT}`));
    }catch(e){
        console.log(e);
    }
}

main();
