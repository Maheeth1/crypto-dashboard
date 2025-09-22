import React from 'react';

interface PaginationProps {
  currentPage: number;
  onNext: () => void;
  onPrev: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onNext, onPrev, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={isPrevDisabled}
        className="px-4 py-2 bg-card dark:bg-dark-card border border-muted/50 dark:border-dark-muted/50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/50 dark:hover:bg-dark-muted/50 transition-colors text-foreground dark:text-dark-foreground"
      >
        Previous
      </button>
      <span className="font-bold text-lg text-foreground dark:text-dark-foreground">{currentPage}</span>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className="px-4 py-2 bg-card dark:bg-dark-card border border-muted/50 dark:border-dark-muted/50 rounded-md hover:bg-muted/50 dark:hover:bg-dark-muted/50 transition-colors text-foreground dark:text-dark-foreground"
      >
        Next
      </button>
    </div>
  );
};
