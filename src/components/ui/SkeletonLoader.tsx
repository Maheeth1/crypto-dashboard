
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-muted/50 dark:bg-dark-muted/50 rounded-md ${className}`} />
);

export const TableRowSkeleton = () => (
  <div className="flex items-center space-x-4 p-4 border-b border-muted/50 dark:border-dark-muted/50">
    <Skeleton className="h-6 w-6 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
    <Skeleton className="h-4 w-1/4 hidden md:block" />
    <Skeleton className="h-4 w-1/4 hidden lg:block" />
  </div>
);

export const TableSkeleton = ({ rows = 5 }: { rows?: number }) => {
  return (
    <div className="w-full">
      {Array.from({ length: rows }).map((_, index) => (
        <TableRowSkeleton key={index} />
      ))}
    </div>
  );
};