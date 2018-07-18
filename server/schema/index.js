const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString } = graphql

const OrgType = new GraphQLObjectType({
  name: 'Org',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
})
