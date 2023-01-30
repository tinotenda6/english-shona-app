// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '@planetscale/database';
// import prisma from '../../lib/prisma.js';
import { PrismaClient } from '@prisma/client'

const config ={
  runtime: 'edge'
}

const prisma = new PrismaClient()
export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse
) {
 
  const allUsers = await prisma.words.findMany();
  
    
  res.status(200).json(allUsers);
}

// handler( req,
//   res)
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })