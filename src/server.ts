import { fastify } from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return {
    Message: 'Hello World!',
  }
})

app.listen({ port: 3333 }).then(() => {
  console.log('Listening on port 3333')
})
