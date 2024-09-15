import { createAvocado, deleteAvocado, getAvocado, getAvocados, updateAvocado } from "./avocado.resolvers";

export const resolvers = {
  Query: {
    getAvocados,
    getAvocado,
  },
  Mutation: {
    createAvocado,
    updateAvocado,
    deleteAvocado,
  },
};
