import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import OurWork from '../pages/OurWork/OurWork';
import Engagement from '../pages/Engagement/Engagement';
import Media from '../pages/Media/Media';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

export default function AppRoutes() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageLayout>
  );
}
