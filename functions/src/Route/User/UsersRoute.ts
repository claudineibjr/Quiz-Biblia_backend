import { GraphQLServer } from 'graphql-yoga';
import path from 'path';
import {resolvers} from './resolvers';

const usersRoute = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers
});

//server.start();

export default usersRoute;