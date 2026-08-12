import React, { useState } from 'react';
import MediaCard from '../cards/MediaCard';
import Lightbox from './Lightbox';
import Button from '../common/Button';
import { galleryItems } from '../../data/gallery';

const INITIAL_VISIBLE_COUNT = 8;

export default function GalleryGrid({ limit }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedItems = limit ? galleryItems.slice(0, limit) : galleryItems;
  const visibleItems = showAll ? displayedItems : displayedItems.slice(0, INITIAL_VISIBLE_COUNT);

  const currentItem = selectedItemIndex !== null ? visibleItems[selectedItemIndex] : null;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleItems.map((item, idx) => (
          <MediaCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItemIndex(idx)}
          />
        ))}
      </div>

      {!showAll && displayedItems.length > INITIAL_VISIBLE_COUNT && (
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="md" onClick={() => setShowAll(true)}>
            View More
          </Button>
        </div>
      )}

      {/* Lightbox Modal */}
      {currentItem && (
        <Lightbox
          item={currentItem}
          onClose={() => setSelectedItemIndex(null)}
          onPrev={() => setSelectedItemIndex(prev => Math.max(0, prev - 1))}
          onNext={() => setSelectedItemIndex(prev => Math.min(visibleItems.length - 1, prev + 1))}
          hasPrev={selectedItemIndex > 0}
          hasNext={selectedItemIndex < visibleItems.length - 1}
        />
      )}
    </div>
  );
}
