import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Daily_diet_profile', (table) => {
    table.uuid('id').primary()
    table.uuid('session_id')
    table.dateTime('created_at').defaultTo(knex.fn.now())
    table.string('user_name', 255).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Daily_diet_profile')
}
