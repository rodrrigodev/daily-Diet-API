import { knex as knexConfig, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './temp/app.db',
  },
  migrations: {
    extension: 'ts',
    directory: './temp/migrations',
  },
  useNullAsDefault: true,
}

export const knex = knexConfig(config)
