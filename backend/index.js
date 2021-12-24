// To access environment varibles
require('dotenv').config();

const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server');

const { typeDefs } = require('./typeDefs');
const { Query, Mutation } = require('./resolvers');

// MongoDB
const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI);
mongoose.connection.once('open', () => {
  console.log('🚀 Connected to MongoDB.');
});

const projects = [
  {
    id: '0',
    name: 'Vertex',
    description: '3D game engine built on HTML Canvas (no WebGL).',
    socials: [
      { site: 'github', url: 'https://github.com/danielfamiyeh/vertex' },
    ],
    features: [
      'OBJ mesh parser',
      '3D Projection - perspective and orthographic',
      'Lighting - ambient, diffuse, and specular',
      'FPS camera navigation',
      'Broad-phase collision detecion',
    ],
    skills: ['TypeScript', 'Mocha', 'Linear Algebra', 'Mechanics'],
  },

  {
    id: '1',
    name: 'Cortex',
    description: 'Deep learning framework.',
    socials: [
      { site: 'github', url: 'https://github.com/danielfamiyeh/cortex' },
    ],
    features: [
      'DNN Model Creation',
      'CSV parser with feature scaling - Z-score & min-max',
      'Range of optimizers - ADAM, RMS, Momentum and SGD',
    ],
    skills: ['Java 8', 'JUnit', 'AI / ML', 'Calculus'],
  },

  {
    id: '2',
    name: 'danielfamiyeh.com',
    description: 'Portfolio website.',
    socials: [],
    features: ['Experimental design', 'Responsive web layout'],
    skills: ['VueJS', 'Bootstrap 4', 'GraphQL (Apollo)', 'MongoDB'],
  },
];

const server = new ApolloServer({ typeDefs, resolvers: { Query, Mutation } });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
