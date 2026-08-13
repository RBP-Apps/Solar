import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';
import Container from '../common/Container';
import Button from '../common/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navLinks } from '../../data/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isScrolled = scrollPosition > 20;
  const isHeaderTransparent = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderTransparent
          ? 'bg-transparent text-white py-5'
          : 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50 border-b border-slate-200/80 text-slate py-3.5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Logo light={isHeaderTransparent} />

          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full ${
                    isHeaderTransparent
                      ? 'text-white/90 hover:text-accent'
                      : 'text-slate/80 hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button
              to="/#contact"
              variant={isHeaderTransparent ? 'accent' : 'primary'}
              size="sm"
              icon={ArrowRight}
            >
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              isHeaderTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-slate hover:bg-slate-100'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-white border-b border-slate-200 shadow-xl p-6 transition-all duration-300">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold py-3 border-b border-slate-100 flex items-center justify-between text-slate/80 hover:text-secondary"
              >
                {link.label}
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
            <div className="pt-5">
              <Button
                to="/#contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                icon={ArrowRight}
              >
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
