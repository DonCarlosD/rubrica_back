import Sequelize  from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const {USER, PASSWORD, HOST, DATABASE} = process.env;
export const sequelize= new Sequelize(
    DATABASE, 
    USER, 
    PASSWORD, {
        host: HOST,
        dialect:"postgres",
        pool:{
            max:20,
            min:0,
            acquire:30000,
            idle:10000
        }
    })