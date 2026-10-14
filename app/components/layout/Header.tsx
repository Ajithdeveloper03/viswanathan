'use client';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigation } from '@/app/lib/siteData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const cleanPath = pathname ? pathname.replace(/\/$/, '') : '';
  
  // Apply dark text & header styling to both Home ('') and About Us ('/about-us')
  const isLightHeader = cleanPath === '' || cleanPath === '/about-us';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-1'
          : 'bg-transparent py-3'
      }`}
    >
      {/* Subtle white top gradient on Home and About Us pages only */}
      {isLightHeader && !isScrolled && (
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)' }}
        />
      )}

      <div className="container-custom relative z-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`relative flex items-center justify-center transition-all duration-300 shrink-0 ${
              isLightHeader
                ? 'bg-transparent p-0 shadow-none'
                : 'bg-white p-2 rounded-full shadow-lg'
            } ${
              isScrolled
                ? isLightHeader
                  ? 'w-16 h-16 lg:w-22 lg:h-22'
                  : 'w-14 h-14 lg:w-20 lg:h-20'
                : isLightHeader
                  ? 'w-20 h-20 lg:w-28 lg:h-28'
                  : 'w-18 h-18 lg:w-24 lg:h-24'
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/vr-logo.png" 
                alt="VR Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0 xl:gap-1" ref={dropdownRef}>
            {navigation.main.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <div className="relative">
                    <Link
                      href={item.href && item.href !== '#' ? item.href : '/services'}
                      onClick={() => setOpenDropdown(null)}
                      className={`flex items-center gap-1 px-2 xl:px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                        isLightHeader
                          ? 'text-secondary-900 hover:text-accent-600 hover:bg-black/5'
                          : isScrolled
                            ? 'text-primary-900 hover:text-accent-600 hover:bg-gray-50'
                            : 'text-white hover:bg-white/20'
                      } ${
                        openDropdown === item.name
                          ? isLightHeader
                            ? 'text-accent-600 bg-black/5'
                            : isScrolled
                              ? 'text-accent-600 bg-gray-50'
                              : 'bg-white/20'
                          : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-soft-lg border border-secondary-100 overflow-hidden transition-all duration-200 ${
                        openDropdown === item.name
                          ? 'opacity-100 translate-y-0 visible'
                          : 'opacity-0 -translate-y-2 invisible'
                      }`}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-base text-secondary-700 hover:text-primary-700 hover:bg-primary-50 transition-colors duration-150"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-2 xl:px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                      isLightHeader
                        ? 'text-secondary-900 hover:text-accent-600 hover:bg-black/5'
                        : isScrolled
                          ? 'text-primary-900 hover:text-accent-600 hover:bg-gray-50'
                          : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href={navigation.cta.href}
            className={`hidden lg:inline-flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-xs xl:text-sm px-5 xl:px-7 py-2.5 rounded-full font-bold shadow-md ${
              isScrolled
                ? 'bg-accent-500 text-white hover:bg-accent-600'
                : 'bg-[#1F2C50] text-white hover:bg-[#151f3b]'
            }`}
          >
            {navigation.cta.name}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isLightHeader
                ? 'text-secondary-900 hover:bg-secondary-100'
                : isScrolled
                  ? 'text-primary-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen mt-4' : 'max-h-0'
          }`}
        >
          <div className="rounded-2xl p-4 bg-white/90 backdrop-blur-md shadow-lg">
            <div className="space-y-2">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 text-secondary-900 hover:bg-white/50">
                        <Link
                          href={item.href && item.href !== '#' ? item.href : '/services'}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="font-medium flex-1 text-secondary-900 hover:text-primary-700"
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.name)}
                          className="p-1 -mr-1 text-secondary-600 hover:text-primary-700 cursor-pointer"
                          aria-label="Toggle submenu"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          openDropdown === item.name ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-secondary-200">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 text-secondary-600 hover:text-primary-700 hover:bg-white/50"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg font-medium transition-all duration-200 text-secondary-900 hover:bg-white/50 hover:text-primary-700"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href={navigation.cta.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center btn-primary mt-4"
              >
                {navigation.cta.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;