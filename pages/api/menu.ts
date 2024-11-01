import type { NextApiRequest, NextApiResponse } from 'next';

const allItems = [
  { name: "Biryani", price: "23.00", description: "Kabsa cooked in Najdi way with half chicken cooked with delicious spices with adding black lemon, served with spicy tomato sauce", category: "Main Course", image: "/images/f1.png" },
  { name: "Bukhari", price: "23.00", description: "Bryani with Special Indian spices served with yogurt and mint sauce", category: "Main Course", image: "/images/f1.png" },
  { name: "Mgloba", price: "23.00", description: "Mgloba with half chicken cooked with eggplant, bell pepper, potato & pumpkin served with Tahena sauce", category: "Main Course", image: "/images/f1.png" },
  { name: "Najdiyah", price: "23.00", description: "Kabsa cooked in Najdi way with 1/4 chicken cooked with delicious spices with adding black lemon, served with spicy tomato sauce", category: "Salads", image: "/images/menu/f1.png" },
  { name: "Biryani", price: "23.00", description: "Kabsa cooked in Najdi way with half chicken cooked with delicious spices with adding black lemon, served with spicy tomato sauce", category: "Sauces", image: "/images/menu/f1.png" },
  { name: "Biryani", price: "23.00", description: "Kabsa cooked in Najdi way with half chicken cooked with delicious spices with adding black lemon, served with spicy tomato sauce", category: "Side Orders", image: "/images/menu/f1.png" },
  { name: "Biryani", price: "23.00", description: "Kabsa cooked in Najdi way with half chicken cooked with delicious spices with adding black lemon, served with spicy tomato sauce", category: "Desserts", image: "/images/menu/f1.png" },
  { name: "Biryani", price: "23.00", description: "Kabsa cooked in Najdi way with half chicken cooked with delicious spices with adding black lemon, served with spicy tomato sauce", category: "Drinks", image: "/images/menu/f1.png" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(allItems);
}
