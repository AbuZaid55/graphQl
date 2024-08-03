export const schema = `#graphql
    type User {
        _id: ID!
        name: String!
        email: String!
        phoneNo: String
        avatar: String
    }
    type Query {
      getAllUser:[User]
    }   
    type Mutation {
        addUser(name: String!, email: String!, phoneNo: String, avatar: String): String
    }
`