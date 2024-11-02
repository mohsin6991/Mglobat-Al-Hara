"use client";

import { FC, useEffect, useState } from 'react';
import BranchesSection from './OurBranchesSection';

type BranchItemProps = {
  name: string;
  location: string;
  phoneNumber: string;
  timing: string;
  image: string;
};

const OurBranches: FC = () => {
  const [branchItems, setBranchItems] = useState<BranchItemProps[]>([]);

  useEffect(() => {
    const fetchBranchItems = async () => {
      try {
        const response = await fetch('/api/ourBranches');  // Updated endpoint here
        if (!response.ok) throw new Error('Failed to fetch branch items');
        const data: BranchItemProps[] = await response.json();
        setBranchItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBranchItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <main className="py-20">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">Our Branches</h2>
        <BranchesSection items={branchItems} />
      </main>
    </div>
  );
};

export default OurBranches;
