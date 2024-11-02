import type { NextApiRequest, NextApiResponse } from 'next';

const allItems = [
  { name: "Ahmed Hassan", Title: "Simple and delicious!", description: "I love that the meals are straightforward and pre-portioned. My whole family can easily follow the recipe to make a delicious meal. We have enjoyed every single meal!! ", num: "1", date: "August 05, 2024" },
  { name: "Ahmed Hassan", Title: "Simple and delicious!", description: "I love that the meals are straightforward and pre-portioned. My whole family can easily follow the recipe to make a delicious meal. We have enjoyed every single meal!! ", num: "2", date: "August 03, 2024" },
  { name: "Ahmed Hassan", Title: "Simple and delicious!", description: "I love that the meals are straightforward and pre-portioned. My whole family can easily follow the recipe to make a delicious meal. We have enjoyed every single meal!! ", num: "3", date: "August 02, 2024" },
  { name: "Ahmed Hassan", Title: "Simple and delicious!", description: "I love that the meals are straightforward and pre-portioned. My whole family can easily follow the recipe to make a delicious meal. We have enjoyed every single meal!! ", num: "4", date: "August 01, 2024" },

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(allItems);
}
