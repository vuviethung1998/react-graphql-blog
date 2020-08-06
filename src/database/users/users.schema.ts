import {Schema} from "mongoose";

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true},
    email: { type: String, required: true, unique:true },
    dateOfEntry: {type: Date, default: Date.now},
    lastUpdated: {type: Date, default:  new Date()}
});

export default UserSchema;