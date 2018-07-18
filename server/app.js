const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./server/schema/index')

const app = express()

app.use(
	'/graphql',
	graphqlHTTP({
		schema
	})
)
// graphiql: true

app.listen(4000, () => {
	console.log('listening at localhost:4000')
})

app.get('/', function(req, res) {
	res.send('hello world')
})
