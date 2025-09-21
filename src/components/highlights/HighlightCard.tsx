import React from 'react';

interface HighlightCardProps {
  title: string;
  headers?: string[];
  moreLink?: string; // For future routing
  children: React.ReactNode;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({ title, headers, moreLink, children }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-gray-300">{title}</h3>
        {moreLink && (
          <a href={moreLink} className="text-sm text-blue-400 hover:underline">
            More
          </a>
        )}
      </div>
      
      {headers && headers.length > 0 && (
        <div className="grid grid-cols-3 text-xs text-gray-400 font-semibold border-b border-gray-700 pb-2 mb-2 gap-2">
          {headers.map((header, index) => (
            <div key={index} className={index > 0 ? 'text-right' : 'text-left'}>
              {header}
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2 flex-grow">
        {children}
      </div>
    </div>
  );
};