// In this file, we’ll define an interface containing the same fields as the schema. 
// We’ll also want to extend this as part of two more interfaces:
import { Document, Model } from "mongoose";

export interface IBlog {
    title: string;
    author: string;
    body: number;
    dateOfEntry?: Date;
    lastUpdated?: Date;
}
export interface IBlogDocument extends IBlog, Document {}
export interface IBlogModel extends Model<IBlogDocument> {}