import Sequelize from "sequelize"
import { config } from "dotenv"

config({
    path: "./config/config.env"
})
export const sequelize = new Sequelize(process.env.DATABASENAME, process.env.DATABASEUSERNAME, process.env.DATABASEPASSWORD, {
    host: process.env.DATABASEHOST,
    dialect: process.env.DATABASEDIALECT,

});




export const connectToDB = async () => {
    try {
        await sequelize.sync();
        console.log("Connection has been established successfully with database")
    } catch (error) {
        console.error("Unable to connect the Database")
    }
}