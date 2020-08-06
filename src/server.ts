import { connect } from "./database/utils/utils.connectDb";
import * as express from "express";
import {ApolloServer, gql} from 'apollo-server-express';
import {BlogModel} from "./database/blogs/blogs.model"
import {UserModel} from "./database/users/users.model"
// import * as mongoose from "mongoose";

const app = express();
const PORT = 4444;

const typeDefs = gql`
    type Blog {
        title: String!
        author: String 
        body: String
        dateOfEntry: String
        lastUpdated: String
    }

    type User {
        username: String!
        password: String!
        email: String
        dateOfEntry: String
        lastUpdated: String
    }

    type Query {
        showAllUsers: [User]
        showAllBlogs: [Blog]
    }
`;

const resolvers = {
    Query: () => {}
}

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
