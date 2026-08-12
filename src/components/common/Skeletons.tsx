import React from 'react';

/**
 * Basic Skeleton Box / Line with dark shimmer effect
 */
export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`bg-white/5 border border-white/5 rounded-xl animate-pulse relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
};

/**
 * Skeleton loader for Product Cards matching ProductCard.tsx layout
 */
export const ProductSkeletonCard: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between space-y-6">
      <div className="space-y-6">
        {/* Header: Category & Badge */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-28 rounded-md" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4">
          <Skeleton className="w-12 h-12 rounded-2xl shrink-0" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-6 w-3/4 rounded-lg" />
            <Skeleton className="h-3 w-1/2 rounded-md" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
          <Skeleton className="h-4 w-2/3 rounded-md" />
        </div>

        {/* Capabilities list */}
        <div className="space-y-2 border-t border-white/5 pt-4">
          <Skeleton className="h-3 w-28 rounded-md mb-3" />
          <div className="flex items-center gap-2">
            <Skeleton className="w-3.5 h-3.5 rounded-full shrink-0" />
            <Skeleton className="h-3 w-4/5 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="w-3.5 h-3.5 rounded-full shrink-0" />
            <Skeleton className="h-3 w-3/4 rounded-md" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="w-3.5 h-3.5 rounded-full shrink-0" />
            <Skeleton className="h-3 w-2/3 rounded-md" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <Skeleton className="h-3 w-24 rounded-md" />
        <Skeleton className="h-8 w-28 rounded-xl" />
      </div>
    </div>
  );
};

/**
 * Skeleton loader for Insight Article Cards matching InsightsPage.tsx layout
 */
export const InsightSkeletonCard: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        {/* Header: Badge + Read time */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-28 rounded-full" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-3 w-16 rounded-md" />
            <Skeleton className="h-3 w-20 rounded-md" />
          </div>
        </div>

        {/* Article Title */}
        <div className="space-y-2">
          <Skeleton className="h-7 w-full rounded-lg" />
          <Skeleton className="h-7 w-3/4 rounded-lg" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-4/5 rounded-md" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-5 w-16 rounded-md" />
          <Skeleton className="h-5 w-20 rounded-md" />
          <Skeleton className="h-5 w-14 rounded-md" />
        </div>
      </div>

      {/* Footer: Author & Button */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-28 rounded-md" />
          <Skeleton className="h-3 w-36 rounded-md" />
        </div>
        <Skeleton className="h-8 w-28 rounded-xl" />
      </div>
    </div>
  );
};
