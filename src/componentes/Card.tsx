// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 w-full h-48 flex items-center justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-cyan-500 font-medium flex items-center group">
          Explore
          <svg 
            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;