import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/common/ProductCard';
import { ProductSkeletonCard } from '../components/common/Skeletons';
import { CTASection } from '../components/common/CTASection';
import { PRODUCTS_DATA } from '../data/companyData';
import { NavigationRoute, ProductItem } from '../types';
import { Layers, Search, ShieldCheck, RefreshCw } from 'lucide-react';

interface ProductsPageProps {
  onRouteChange: (route: NavigationRoute) => void;
  onOpenProjectModal: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onRouteChange,
  onOpenProjectModal,
  onSelectProduct,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Simulate initial asynchronous data hydration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterStatus = (status: string) => {
    setSelectedStatus(status);
  };

  const statuses = ['All', 'Coming Soon', 'In Development', 'Private Beta', 'Research & Incubating'];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesStatus = selectedStatus === 'All' || p.status === selectedStatus;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-16 pt-28 pb-16">
      
      {/* Header Banner */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          divisionBadge="STACKVERSE"
          eyebrow="PRODUCT PORTFOLIO"
          title="Products & SaaS Platforms"
          subtitle="StackVerse builds and launches proprietary software platforms, developer tools, and AI engines designed for international scale."
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10">
          
          {/* Status Buttons */}
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-tech transition-colors border ${
                  selectedStatus === status
                    ? 'bg-blue-600 text-white border-blue-500 font-semibold'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <ProductSkeletonCard key={idx} />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-3xl glass-card border border-white/10 space-y-3">
            <Layers className="w-10 h-10 text-slate-500 mx-auto" />
            <h4 className="text-lg font-bold text-white font-display">No matching products found</h4>
            <p className="text-xs text-slate-400">Try adjusting your search terms or status filters.</p>
          </div>
        )}
      </section>

      {/* Note on Real Product Transparency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 flex items-center gap-3 text-xs text-slate-300">
          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> StackVerse strictly avoids fabricated customer statistics or fake product claims. All platforms listed are active internal ventures in development or private beta testing.
          </span>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Interested in building a custom product?"
        subtitle="Our engineering division, CollinsTech, helps businesses design, engineer, and deploy production-ready digital products."
        onOpenModal={onOpenProjectModal}
        onNavigateToContact={() => onRouteChange('/contact')}
      />

    </div>
  );
};
