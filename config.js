module.exports = {
  api: {
    port: process.env.API_PORT || 8080,
  },
  db: {
    dialect: process.env.DB_DIALECT || "mysql",
    host: process.env.DB_HOST || "localhost",
    name: process.env.DB_NAME || "database",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    port: process.env.DB_PORT || 5432,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secretJwt",
  },
};
