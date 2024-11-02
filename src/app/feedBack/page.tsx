"use client";

import { FC, useEffect, useState } from 'react';
import FeedBackSection from './feedBackSection';

type FeedBackProps = {
  name: string;
  description: string;
  Title: string;
  date: string;
  num: number;
};

const Feekback: FC = () => {
  const [feedBackItems, setfeedBackItems] = useState<FeedBackProps[]>([]);

  useEffect(() => {
    const fetchFeedBackItems = async () => {
      try {
        const response = await fetch('/api/feedBack');  // Updated endpoint here
        if (!response.ok) throw new Error('Failed to fetch branch items');
        const data: FeedBackProps[] = await response.json();
        setfeedBackItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeedBackItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <main className="py-20">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">Why People Love Us</h2>
        <FeedBackSection items={feedBackItems} />
      </main>
    </div>
  );
};

export default Feekback;
