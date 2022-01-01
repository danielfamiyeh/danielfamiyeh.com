// To access environment varibles
require('dotenv').config();

const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const { scalars } = require('./scalars');
const { typeDefs } = require('./typeDefs');
const { Query, Mutation } = require('./resolvers');

// MongoDB
const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI);
mongoose.connection.once('open', () => {
  console.log('🚀 Connected to MongoDB.');
});

const server = new ApolloServer({
  typeDefs,
  resolvers: { ...scalars, Query, Mutation },
  context: () => {
    return { token: process.env.AUTH_TOKEN || '' };
  }
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
