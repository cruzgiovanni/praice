'use client'

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '@/data/content';

export function FeaturedCollections() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="collections" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-text-primary mb-4">
            {content.collections.title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {content.collections.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {content.collections.items.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(collection.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={hoveredCard === collection.id ? collection.roomContext : collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {collection.isNew && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cognac text-white text-sm font-medium rounded-full">
                    Novo
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{collection.itemCount}</p>
                      <p className="text-lg font-medium">{collection.priceRange}</p>
                    </div>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-serif text-2xl font-medium text-text-primary mb-3">
                  {collection.name}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {collection.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">{collection.itemCount}</p>
                    <p className="text-lg font-semibold text-accent">{collection.priceRange}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}