import React from 'react';

interface HighlightCardProps {
  title: string;
  children: React.ReactNode;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({ title, children }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-bold mb-3 text-gray-300">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};