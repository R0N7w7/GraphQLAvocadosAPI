import { gql } from "apollo-server";

export const typeDefs = gql`
  # Definición de tipos
  type Avocado {
    id: Int!
    name: String!
    sku: String!
    price: Float!
    image: String!
    createdAt: String!
    updatedAt: String
    deletedAt: String
    attributes: Attributes
  }

  type Attributes {
    id: ID!
    description: String
    shape: String
    hardiness: String
    taste: String
  }

  # Inputs para crear y actualizar avocados
  input AvocadoInput {
    name: String!
    sku: String!
    price: Float!
    image: String!
  }

  input AttributesInput {
    description: String
    shape: String
    hardiness: String
    taste: String
  }

  # Consultas (Queries)
  type Query {
    getAvocados: [Avocado!]!
    getAvocado(id: ID!): Avocado
  }

  # Mutaciones (Mutations)
  type Mutation {
    createAvocado(avocado: AvocadoInput!, attributes: AttributesInput!): Avocado!
    updateAvocado(id: ID!, avocado: AvocadoInput, attributes: AttributesInput): Avocado!
    deleteAvocado(id: ID!): Avocado!
  }
`