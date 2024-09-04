import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://vitor_user:vcD5e61z49rWhq4sZ8daFymVwBdGUTHO@dpg-crbp06jv2p9s73djcc30-a.oregon-postgres.render.com/vitor';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;