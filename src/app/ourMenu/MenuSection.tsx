"use client";

import Image from 'next/image';
import { FC, useState } from 'react';

type MenuItemProps = {
    name: string;
    price: string;
    description: string;
    image: string;
    category: string;
};

const MenuSection: FC<{ items: MenuItemProps[] }> = ({ items }) => {
    const [showAll, setShowAll] = useState(false);
    const displayedItems = showAll ? items : items.slice(0, 3);

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
                                unoptimized
                            />
                            <h4 className="text-2xl font-semibold text-gray-900">{item.name}</h4>
                            <p className="mt-2 text-lg font-semibold text-gray-700">{item.price}</p>
                            <p className="mt-2 text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-4">No items available in this category.</p>
            )}
            {items.length > 3 && (
                <div className="text-center mt-4">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default MenuSection;
