// Update with your config settings.

module.exports = {
  client: 'postgresql',
  version: '9.6',
  connection: {
    host: '127.0.0.1',
    database: 'knowledge',
    user:     'postgres',
    password: '123456',
    connectTimeout: 190000
  },
  debug: true,
  pool: {
    min: 0,
    max: 1000
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
