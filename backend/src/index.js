import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Query from '../resolvers/Query'
import Mutation from '../resolvers/Mutation'

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation
  },
  context: {
    db,
    pubsub
  }
})

server.start({ port: process.env.PORT | 4000 }, () => {
  console.log(`The server is up on port ${process.env.PORT | 4000}!`)
})
