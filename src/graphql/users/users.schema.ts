import {gql} from "apollo-server-express"

export const typeDefs = gql`
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
        users: [User]
        blogs: [Blog]
    }
`;  
