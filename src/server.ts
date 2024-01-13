import { fastify } from 'fastify'
import { knex } from './database'
import { randomUUID } from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  const dietProfile = await knex('Daily_diet_profile')
    .insert({
      id: randomUUID(),
      user_name: 'Rodrigo',
    })
    .returning('*')

  return dietProfile
})

app.listen({ port: 3333 }).then(() => {
  console.log('Listening on port 3333')
})
