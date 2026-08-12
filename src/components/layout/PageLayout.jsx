import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
