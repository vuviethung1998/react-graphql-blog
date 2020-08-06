// In this file, we’ll define an interface containing the same fields as the schema. 
// We’ll also want to extend this as part of two more interfaces:
import { Document, Model } from "mongoose";

export interface IUser {
    username: string;
    password: string;
    email: number;
    dateOfEntry?: Date;
    lastUpdated?: Date;
}
export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}