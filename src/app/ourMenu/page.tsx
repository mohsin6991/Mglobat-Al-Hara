"use client";

import { FC, useEffect, useState } from 'react';
import MenuSection from './MenuSection';

type MenuItemProps = {
    name: string;
    price: string;
    description: string;
    image: string;
    category: string;
};

const OurMenu: FC = () => {
    const [visibleSection, setVisibleSection] = useState<string>('Main Course');
    const [menuItems, setMenuItems] = useState<MenuItemProps[]>([]);
    const categories = ['all', 'Main Course', 'Salads', 'Sauces', 'Side Orders', 'Desserts', 'Drinks'];

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch('api/menu');
                console.log(response);
                if (!response.ok) throw new Error('Failed to fetch menu items');
                const data: MenuItemProps[] = await response.json();
                setMenuItems(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMenuItems();
    }, []);

    const filteredItems = visibleSection === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === visibleSection);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <main className="py-20">
                <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">Our Menu</h2>

                <nav className="mb-8">
                    <ul className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8">
                        {categories.map(category => (
                            <li key={category}>
                                <button
                                    onClick={() => setVisibleSection(category)}
                                    className={`px-6 py-3 rounded-full text-md font-semibold transition-colors duration-300
                                      ${visibleSection === category ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-white'}`}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <MenuSection items={filteredItems} />
            </main>
        </div>
    );
};

export default OurMenu;
