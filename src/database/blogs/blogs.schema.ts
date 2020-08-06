import {Schema} from "mongoose";

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String},
    body: { type: String },
    dateOfEntry: {type: Date, default: new Date()},
    lastUpdated: {type: Date, default: new Date()}
});

export default BlogSchema;