import React, { useState } from 'react';
import MediaCard from '../cards/MediaCard';
import GalleryFilter from './GalleryFilter';
import Lightbox from './Lightbox';
import { galleryItems } from '../../data/gallery';

export default function GalleryGrid({ initialCategory = 'all', limit }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const currentItem = selectedItemIndex !== null ? displayedItems[selectedItemIndex] : null;

  return (
    <div>
      <GalleryFilter
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedItems.map((item, idx) => (
          <MediaCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItemIndex(idx)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <Lightbox
          item={currentItem}
          onClose={() => setSelectedItemIndex(null)}
          onPrev={() => setSelectedItemIndex(prev => Math.max(0, prev - 1))}
          onNext={() => setSelectedItemIndex(prev => Math.min(displayedItems.length - 1, prev + 1))}
          hasPrev={selectedItemIndex > 0}
          hasNext={selectedItemIndex < displayedItems.length - 1}
        />
      )}
    </div>
  );
}
