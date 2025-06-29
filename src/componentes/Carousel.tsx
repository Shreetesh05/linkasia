// components/ui/carousel.tsx
"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({
  items,
}: {
  items: {
    title: string;
    image: string;
    description: string;
  }[];
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({ left: dir === "left" ? -width : width, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Top Destinations</h2>
        <div className="space-x-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
      >
        {items.map((card, i) => (
          <div
            key={i}
            className="snap-center min-w-[280px] max-w-xs flex-shrink-0 group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
