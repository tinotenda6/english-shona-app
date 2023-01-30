// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '@planetscale/database';

type Data = {
  name: string
}
const config ={
  host: process.env['host'],
  username: process.env['user'],
  password: process.env['password'],
  runtime: 'edge'
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const conn = connect(config);
  const data = await conn.execute("SELECT * FROM words ORDER BY RAND()");
  res.status(200).json({ name: 'John Doe' })
}
