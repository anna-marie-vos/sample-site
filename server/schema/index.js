const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql

const orgData = require('./server/db/orgs.json')
const riskData = require('./server/db/riskRegisters.json')

const OrgType = new GraphQLObjectType({
	name: 'Org',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		logo: { type: GraphQLString }
	})
})

const RiskType = new GraphQLObjectType({
	name: 'Org',
	fields: () => ({
		id: { type: GraphQLID },
		catagory: { type: GraphQLString },
		risk: { type: GraphQLString },
		mitigation: { type: GraphQLString }
	})
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		//org is the query you will be calling
		org: {
			type: OrgType,
			// args is the arguments you need to send with your query
			args: { id: { type: GraphQLID } },
			//resolve is a function
			resolve(main, args) {
				//this is where the db find the values
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})
