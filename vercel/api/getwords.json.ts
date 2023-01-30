import { connect } from '@planetscale/database';

// export const config = {
//   runtime: 'experimental-edge'
// }

const config ={
  host: process.env['host'],
  username: process.env['user'],
  password: process.env['password']
}

export default async function handler(req: Request) {
  const conn = connect(config);
  const results = await conn.execute("SELECT * FROM words ORDER BY RAND()");
  const json = JSON.stringify(results.rows);

  return json;
}
