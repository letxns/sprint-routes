import { Database } from "../infra/Database.js"

class DatabaseMethods{
    static randomize(){
        let x = Math.floor(Math.random() * Database.Tips.length);
        return x 
    }

    static inputTip(tip){
        return Database.Tips = [...Database.Tips, tip]
    }
}

export default DatabaseMethods