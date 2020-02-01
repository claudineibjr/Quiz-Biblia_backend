///*
// ---------- API v1 -------------
import exampleServer from './Example/exampleServer';
import * as functions from 'firebase-functions';

exampleServer.createHttpServer({});
const express = exampleServer.express;

export const exampleApi = functions.https.onRequest(express);
//*/

/*
// ---------- API v2 -------------

import { GraphQLServer } from 'graphql-yoga';
import * as functions from 'firebase-functions';

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_context: any, { name }: any) => `Hello ${name || 'World'}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.createHttpServer({});
const express = server.express;

export const api = functions.https.onRequest(express);
*/