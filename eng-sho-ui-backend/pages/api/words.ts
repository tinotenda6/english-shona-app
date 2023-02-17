// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const config ={
  runtime: 'edge'
}

const prisma = new PrismaClient()
export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse
) {
 
  const words = await prisma.words.findMany();
  
    
  res.status(200).json(words);
}
