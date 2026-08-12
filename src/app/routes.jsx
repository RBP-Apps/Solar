import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Home from '../pages/Home/Home';

export default function AppRoutes() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Legacy page URLs now live as sections on the home page */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/our-work" element={<Navigate to="/#our-work" replace />} />
        <Route path="/engagement" element={<Navigate to="/#engagement" replace />} />
        <Route path="/media" element={<Navigate to="/#media" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageLayout>
  );
}
