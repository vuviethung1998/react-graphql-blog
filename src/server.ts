import { connect } from "./database/utils/utils.connectDb";
import * as express from "express";
import {ApolloServer, gql} from 'apollo-server-express';
import {BlogModel} from "./database/blogs/blogs.model"
import {UserModel} from "./database/users/users.model"
import {typeDefs} from "./graphql/users/users.schema";
import {resolvers} from "./graphql/users/users.resolver";

const app = express();
const PORT = 4444;

connect();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        BlogModel,
        UserModel
    }
});

server.applyMiddleware({app});

app.listen({port: PORT}, () => {
    console.log("Server ready at http://localhost:4444${server.graphqlPath}");
} )
