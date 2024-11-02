"use client";

import Image from 'next/image';
import { FC, useState } from 'react';

type MenuItemProps = {
  name: string;
  Title: string;
  description: string;
  date: string;
  num: number;
};

const FeedBackSection: FC<{ items: MenuItemProps[] }> = ({ items }) => {
  const [showAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0,1 );

  return (
    <div className="mb-12">
      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-200">

              <h4 className="text-2xl font-semibold text-gray-900">{item.Title}</h4>
              <p className="mt-2 text-lg font-semibold text-gray-700">{item.description}</p>
              <p className="mt-2 text-gray-500">{item.name}</p>
              <p className="mt-2 text-gray-500">{item.date}</p> {/* Added timing display */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No items available in this category.</p>
      )}
    </div>
  );
};

export default FeedBackSection;
