import React from 'react';

interface PaginationProps {
  currentPage: number;
  onNext: () => void;
  onPrev: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean; // You might disable this if you know you're on the last page
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onNext, onPrev, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={isPrevDisabled}
        className="px-4 py-2 bg-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
      >
        Previous
      </button>
      <span className="font-bold text-lg">{currentPage}</span>
      <button
        onClick={onNext}
        disabled={isNextDisabled} 
        className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
      >
        Next
      </button>
    </div>
  );
};