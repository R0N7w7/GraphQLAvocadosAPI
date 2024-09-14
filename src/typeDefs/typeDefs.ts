import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query{
    hello: String!,
    avocados: [Avocado!],
    avocado(id: String!): Avocado
  }

  type Mutation{
    updateAvocado(id: String!, ptoAvocado: AvocadoInput!): Avocado,
    deleteAvocado(id: String!): String
  }

  type Avocado {
  ID: ID!
  name: String!
  imageURL: String!
  price: Float!
  }

  input AvocadoInput {
    ID: ID!
    name: String!
    imageURL: String!
    price: Float!
  }
`