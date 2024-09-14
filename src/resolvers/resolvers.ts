import { deleteAvocado, getAvocado, getAvocados, updateAvocado } from "./avocado.resolvers";

export const resolvers = {
  Query: {
    hello: () => "this is an insane server with graphQL",
    avocados: getAvocados,
    avocado: getAvocado,
  },
  Mutation: {
    updateAvocado,
    deleteAvocado
  }
}