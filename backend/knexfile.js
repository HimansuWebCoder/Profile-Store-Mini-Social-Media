require('dotenv').config();

console.log(process.env.DB_HOST);  // Check if the host is loaded correctly
console.log(process.env.DB_USER);  // Check if the username is loaded correctly
console.log(process.env.DB_PASSWORD);  

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
};
