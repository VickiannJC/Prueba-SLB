import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pozos',
  password: '12345',
  port: 5432,
});