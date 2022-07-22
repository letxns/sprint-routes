// import { Database } from "../infra/Database.js"
import DatabaseMethods from "../utils/DatabaseMethods.js"
import TipsModel from "../models/TipsModel.js"

class Tips {
    static routes(app){
        app.get("/tips", (req, res) => {
            const response = DatabaseMethods.randomize()
            res.status(200).json(response)
        });

        app.post("/create", (req, res) => {
            try {
                const tip = new TipsModel(...Object.values(req.body))
                const response = DatabaseMethods.inputTip(tip)
                res.status(200).json(response)
            }catch(error){
                res.status(400).send("Erro!")
            }
        })
    }
}

export default Tips