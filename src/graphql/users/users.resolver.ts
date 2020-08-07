import {getUsers} from "../../database/users/users.statics";

export const resolvers = {
    Query: {
        users: async () => {
            const users = getUsers();
            return users;
        }
    }
}