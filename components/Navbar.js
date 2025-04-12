'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
// import { useUser } from '@clerk/nextjs';
export default function Navbar() {
  // const user = useUser();
  // console.log(user.user?.id)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Piechat</Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/forums" className="hover:text-gray-400">Forums</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
          <li>
        <UserButton/>
      </li>
        </ul>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 bg-gray-800 p-4 text-center">
          <li><Link href="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/forums" className="block py-2" onClick={() => setIsOpen(false)}>Forums</Link></li>
          <li><Link href="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li>
        <UserButton/>
      </li>
        </ul>
      )}
     
    </nav>
  );
}
