module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test2.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
};
