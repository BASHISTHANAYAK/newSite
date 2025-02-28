import postgres from 'postgres';
import * as dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
  }

  console.log('Database URL:', process.env.DATABASE_URL);

  const sql = postgres(process.env.DATABASE_URL, { 
    max: 1,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('Testing database connection...');
    const result = await sql`SELECT NOW()`;
    console.log('✅ Database connection successful!', result[0]);
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  } finally {
    await sql.end();
  }
}

testConnection().catch(console.error);