import React from 'react';

// A simple, reusable skeleton component with a pulse animation
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-700 rounded-md ${className}`} />
);

// A specific skeleton layout for our table rows
export const TableRowSkeleton = () => (
  <div className="flex items-center space-x-4 p-4 border-b border-gray-700">
    <Skeleton className="h-6 w-6 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
    <Skeleton className="h-4 w-1/4 hidden md:block" />
    <Skeleton className="h-4 w-1/4 hidden lg:block" />
  </div>
);

// A container for showing multiple skeleton rows
export const TableSkeleton = ({ rows = 5 }: { rows?: number }) => {
  return (
    <div className="w-full">
      {Array.from({ length: rows }).map((_, index) => (
        <TableRowSkeleton key={index} />
      ))}
    </div>
  );
};