const { GraphQLScalarType } = require('graphql');

module.exports = {
  scalars: {
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'JavaScript date object',
      parseValue(value) {
        return new Date(value);
      }
    })
  }
};
