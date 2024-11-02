"use client";

import { FC, useEffect, useState } from 'react';
import OurOffersSection from './ourOffersSection';

type OffersItemProps = {
  name: string;

  image: string;
};

const OurOffers: FC = () => {
  const [overtems, setofferItems] = useState<OffersItemProps[]>([]);

  useEffect(() => {
    const fetchoffersItems = async () => {
      try {
        const response = await fetch('/api/ourOffers');  // Updated endpoint here
        if (!response.ok) throw new Error('Failed to fetch branch items');
        const data: OffersItemProps[] = await response.json();
        setofferItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchoffersItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <main className="py-20">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">@mglobt</h2>
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">Join our community</h2>
        <OurOffersSection items={overtems} />
      </main>
    </div>
  );
};

export default OurOffers;
