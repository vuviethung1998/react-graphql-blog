import * as Mongoose from "mongoose";
import {MONGO_URI} from "../../config/config"

let database: Mongoose.Connection;

export const connect = () =>{
    if (database) {
        return ;
    }

    // Mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    Mongoose.connect(MONGO_URI, {useNewUrlParser: true})
            .then(() => console.log("db connected"))
            .catch(err => console.error(err));
    database = Mongoose.connection;

    database.once("open", async () => {
        console.log("Connected to database");
    });  
      
    database.on("error", () => {
        console.log("Error connecting to database");
    });
}

export const disconnect = () => {  
    if (!database) {return;}  
    Mongoose.disconnect();
};