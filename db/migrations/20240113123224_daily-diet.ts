import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Diet_description', (table) => {
    table.uuid('id').primary()
    table.foreign('Diet_description').references('Daily_diet_profile.id')
    table.string('diet_name', 255).notNullable()
    table.string('diet_description', 500).notNullable()
    table.boolean('is_active')
    table.dateTime('created_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Diet_description')
}
