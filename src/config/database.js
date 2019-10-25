module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  define: {
    timestamps: true,
    underscored: true
  }
}
