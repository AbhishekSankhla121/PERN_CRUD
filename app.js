import express from "express"
import cors from "cors"
import { config } from "dotenv"
import blogRoute from "./routes/blogRoutes.js"
import { errorMiddelware } from "./middleware/Error.js"
import { connectToDB } from "./config/DatabaseConnect.js"


config({
    path: "./config/config.env"
})

export const App = express();
await connectToDB()
App.use(cors());
App.use(express.json());
App.use("/api/v1", blogRoute);



App.use(errorMiddelware)