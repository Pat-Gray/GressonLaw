 'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-garamond text-lg md:text-xl text-navy">
            <span className="font-semibold">Dr. Elizabeth Grierson </span><span>| Barrister at Law</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link href="/about" className="text-navy hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/practiceareas" className="text-navy hover:text-gold transition-colors">
              Practice Areas
            </Link>
            <Link href="/publications" className="text-navy hover:text-gold transition-colors">
              Publications
            </Link>
            <Link 
              href="/contact" 
              className="text-navy font-semibold bg-gold-light rounded-md px-4 py-2 hover:bg-gold transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-navy" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col space-y-4 p-4">
              <Link 
                href="/about" 
                className="text-navy hover:text-gold transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/practiceareas" 
                className="text-navy hover:text-gold transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <Link 
                href="/publications" 
                className="text-navy hover:text-gold transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Publications
              </Link>
              <Link 
                href="/contact" 
                className="text-navy font-semibold bg-gold-light rounded-md px-4 py-2 hover:bg-gold transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}