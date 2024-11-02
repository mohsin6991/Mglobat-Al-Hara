"use client";

import Image from 'next/image';
import { FC, useState } from 'react';

type MenuItemProps = {
  name: string;
  location: string;
  image: string;
  phoneNumber: string;
  timing: string;
};

const BranchesSection: FC<{ items: MenuItemProps[] }> = ({ items }) => {
  const [showAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0,3 );

  return (
    <div className="mb-12">
      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-200">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={150}
                className="mx-auto mb-4 rounded-md"
                loading="lazy"
              />
              <h4 className="text-2xl font-semibold text-gray-900">{item.name}</h4>
              <p className="mt-2 text-lg font-semibold text-gray-700">{item.location}</p>
              <p className="mt-2 text-gray-500">{item.phoneNumber}</p>
              <p className="mt-2 text-gray-500">{item.timing}</p> {/* Added timing display */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No items available in this category.</p>
      )}
    </div>
  );
};

export default BranchesSection;
