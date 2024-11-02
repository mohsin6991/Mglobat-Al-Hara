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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

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
        <footer className="w-full h-[234px] bg-[#2C2C28] text-white p-4 opacity-90 flex flex-col items-center">
    <div className="w-full flex items-center justify-between">
        {/* Logo on the left */}
        <img src="/images/footer/f1.png" alt="Footer Logo" className="h-16 mr-4" />

        {/* Contact information in the center */}
        <div className="text-center">
            <p>Call Us:<br /> <span className="font-semibold">0500042752</span></p>
            <p>Email Us:<br /> <span className="font-semibold">info@mglobtalharah.com</span></p>
        </div>

        {/* Social media icons on the right */}
        <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-xl"></i>
            </a>
        </div>
    </div>

    {/* Horizontal line and copyright text at the bottom */}
    <hr className="border-t border-white w-full my-4" />
    <p className="text-center">&copy; Mglobt Al Hara {new Date().getFullYear()}. All rights reserved.</p>
</footer>









       
      </body>  
    </html>  
  );  
}