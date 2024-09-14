import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/resolvers";
import { typeDefs } from "./typeDefs/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server available on ${url}`);
});