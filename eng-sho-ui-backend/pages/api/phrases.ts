import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const config ={
  runtime: 'edge'
}

const prisma = new PrismaClient();
export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse
) {
  
  const phrases = await prisma.phrases.findMany();
  res.status(200).json(phrases);
}
