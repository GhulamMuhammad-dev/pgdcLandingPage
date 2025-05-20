import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Venue', href: '#venue' },
    { name: 'Connect', href: '#Connect' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center"
            >
              {/* <img 
                src="images/pgdc-logo.jpeg" 
                alt="Event Logo" 
                className="h-10 md:h-12 w-auto"
              /> */}
              <span className="ml-3 text-xl font-bold text-deepnavy hidden sm:inline">
                PGDC
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Right Side */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-deepnavy hover:text-accent font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#tickets"
              onClick={(e) => handleLinkClick(e, '#tickets')}
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-full font-medium transition-colors duration-200 ml-4"
            >
              Buy Tickets
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deepnavy focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-lg mt-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2 rounded-md text-deepnavy hover:bg-gray-50 hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#tickets"
                onClick={(e) => handleLinkClick(e, '#tickets')}
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-full font-medium mt-2 text-center"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;