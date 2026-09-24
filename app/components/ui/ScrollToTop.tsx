'use client';
import { ArrowUpToLine, FileSearch } from 'lucide-react';

import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 px-4 py-3 bg-primary-900 text-white rounded-full shadow-[0_10px_20px_rgba(31,44,80,0.3)] hover:bg-accent-500 hover:shadow-[0_15px_30px_rgba(245,177,51,0.4)] transition-all duration-300 group hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          {/* Auditing related icon combined with arrow */}
          <FileSearch className="w-5 h-5 text-accent-400 group-hover:text-white transition-colors" />
          <span className="font-bold text-sm hidden md:block mr-1">Top</span>
          <ArrowUpToLine className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
