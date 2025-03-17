import mysql from 'mysql2/promise';
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'race@123',
  database: 'race_innovations',
  waitForConnections: true,
  connectionLimit: 500,
  maxIdle: 10, 
  idleTimeout: 60000, 
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
export default db;
