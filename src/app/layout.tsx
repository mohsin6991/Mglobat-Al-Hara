import './globals.css'; // Import global styles if you have any
import Link from 'next/link';

export const metadata = {
  title: 'Restaurant Name',
  description: 'Welcome to our restaurant website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-between">
            <h1 className="text-xl">Restaurant Name</h1>
            <ul className="flex space-x-4">
              <li key="home"><Link href="/">Home</Link></li>
              <li key="menu"><Link href="/ourMenu">Our Menu</Link></li>
              <li key="branches"><Link href="/ourBranches">Our Branches</Link></li>
              <li key="testimonials"><Link href="/testimonials">Testimonials</Link></li>
            </ul>
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
