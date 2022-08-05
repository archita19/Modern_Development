// Start your es6 scripts here

import express from "express"
import { graphqlHTTP } from "express-graphql"
import resolvers from "./resolvers"
import schema from "./schema"

const app = express()

app.get('/', (req, res) =>  {
    res.send("Running")
})

const root = resolvers

// middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log("Running at port 8080"))