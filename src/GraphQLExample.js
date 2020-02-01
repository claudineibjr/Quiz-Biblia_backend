const { ApolloServer, gql } = require('apollo-server');

const schema = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  input Book_ {
      name: String
      email: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(name: String!): Book,
    testing(xxx: Book_): String
  }

  # Exemplo de chamada
  # query{
  #   testing(xxx: {name: "Claudinei", email: "@hotmail.com"})
  # }
`;

const books = [
    {   title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',},
    {   title: 'Jurassic Park',
        author: 'Michael Crichton',},
];

const functionXXX = (ola) => {
    return ola.name;
}

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: (root, args, context, info) => books[0],
        testing: (root, args, context, info) => functionXXX(args.xxx),
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs: schema, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});