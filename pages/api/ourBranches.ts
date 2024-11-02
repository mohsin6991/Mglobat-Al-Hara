import type { NextApiRequest, NextApiResponse } from 'next';

const allBranches = [
  { name: "Branch One", location: "http://google.maps", phoneNumber: "050733432", timing: "10 AM - 10 PM", image: "/images/f1.png" },
  { name: "Branch Two", location: "http://google.maps", phoneNumber: "050733433", timing: "9 AM - 11 PM", image: "/images/f2.png" },
  { name: "Branch Three", location: "http://google.maps", phoneNumber: "050733434", timing: "11 AM - 9 PM", image: "/images/f3.png" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(allBranches);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
