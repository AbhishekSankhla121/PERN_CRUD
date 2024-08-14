import { App } from "./app.js";
import "./config/DatabaseConnect.js"

App.listen(process.env.PORT, () => {
    console.log(`Listen Port at http://localhost:${process.env.PORT}`)
});