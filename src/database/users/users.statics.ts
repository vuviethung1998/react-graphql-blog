import { IUserDocument, IUserModel } from "./users.types";
import { UserModel } from "./users.model";

export async function getUsers() {
    return UserModel.find().limit(5);
}