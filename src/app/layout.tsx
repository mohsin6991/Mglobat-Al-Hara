"use client"; // This directive marks the component as a client component  

import './globals.css'; // Import global styles if you have any  
import Link from 'next/link';  
import { useState } from 'react';  

const metadata = {  
  title: 'Restaurant Name',  
  description: 'Welcome to our restaurant website.',  
};  

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  

  return (  
    <html lang="en">  
      <head>  
        <title>{metadata.title}</title>  
        <meta name="description" content={metadata.description} />  
      </head>  
      <body className="flex flex-col min-h-screen">  
        <header className="bg-white text-black  h-[70px] px-[30px] gap-[20px] opacity-100 flex justify-between items-center">  
          <nav className="flex justify-between items-center w-full">  
            <div className="flex items-center">  
              <button   
                className="md:hidden text-lg"   
                onClick={toggleMenu}  
              >  
                ☰  
              </button>  
              <ul className={`flex space-x-1 md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>  
                <li key="home"><Link href="/">Home</Link></li>  
                <li key="menu"><Link href="/ourMenu">Our Menu</Link></li>  
                <li key="branches"><Link href="/ourBranches">Our Branches</Link></li>  
                <li key="testimonials"><Link href="/testimonials">Testimonials</Link></li>  
              </ul>  
            </div>  

            {/* Centered Image Wrapper */}  
            <div className="flex-grow flex justify-center items-center">  
              <img   
                src="/images/main/logo.png" // Corrected path  
                alt="Restaurant Logo" // Added alt text for accessibility  
                className="w-auto h-[50px] opacity-100" // Image width auto, height fixed  
              />  
            </div>  

            {/* Wrapper for the phone number and dropdown */}  
            <div className="flex items-center space-x-2">  
              <h3 className="hidden md:block mx-2">0500042752</h3>  
              <select className="border border-gray-300 rounded p-1">  
                <option value="EN">EN</option>  
                <option value="AR">AR</option>  
              </select>  
            </div>  
          </nav>  
        </header>  

        <main className="flex-grow">{children}</main>  

        <footer className="bg-gray-800 text-white text-center p-4">  
          <p>&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>  
        </footer>  
      </body>  
    </html>  
  );  
}