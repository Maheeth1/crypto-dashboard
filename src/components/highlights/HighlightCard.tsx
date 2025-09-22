import React from 'react';
import { Link } from 'react-router-dom';

interface HighlightCardProps {
  title: string;
  headers?: string[];
  moreLink?: string; // For future routing
  children: React.ReactNode;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({ title, headers, moreLink, children }) => {
  return (
    <div className="bg-card dark:bg-dark-card p-4 rounded-lg h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-foreground dark:text-dark-primary">{title}</h3>
        {moreLink && (
          <Link to={moreLink} className="text-sm text-primary dark:text-dark-primary hover:underline">
            More
          </Link>
        )}
      </div>
      
      {headers && headers.length > 0 && (
        <div className="grid grid-cols-3 text-xs text-muted dark:text-dark-muted font-semibold border-b border-muted dark:border-dark-muted pb-2 mb-2 gap-2">
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