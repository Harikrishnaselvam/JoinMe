const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const RemoveUserType = new GraphQLObjectType({
    name: "RemoveUser",
    fields: () => ({
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    }),
  });

  module.exports = RemoveUserType;