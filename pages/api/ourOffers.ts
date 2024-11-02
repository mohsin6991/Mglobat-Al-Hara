import type { NextApiRequest, NextApiResponse } from 'next';

const allOffers = [
  { image: "Ahmed Hassan",name:'one'},
  { image: "Ahmed Hassan",name:'Tow'},
  { image: "Ahmed Hassan",name:'Three'},
  

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(allOffers);
}
