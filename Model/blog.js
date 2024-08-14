import seq from "sequelize"
import { sequelize } from "../config/DatabaseConnect.js"

const { DataTypes } = seq;


const Blog = sequelize.define("Blog", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "Blog",

})

console.log("Blog check:", Blog === sequelize.models.Blog)
export default Blog

