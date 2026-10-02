import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Product, FilterState } from '../types';
import { CATEGORIES, BRANDS } from '../data/products';
import { ProductCard } from './ProductCard';
import { formatPrice, toPersianDigits } from '../utils/formatters';
import { 
  Filter, X, SlidersHorizontal, ArrowUpDown, Grid, 
  List, Check, RotateCcw, Sparkles, ArrowLeft, ArrowRight, Search 
} from 'lucide-react';

interface StoreViewProps {
  products: Product[];
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  onSelectProduct: (product: Product) => void;
  onQuickView?: (product: Product, e: React.MouseEvent) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  wishlistIds: string[];
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export const StoreView: React.FC<StoreViewProps> = ({
  products,
  filterState,
  setFilterState,
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  initialPage,
  onPageChange
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  // Filter products according to active filters
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (
        filterState.selectedCategory &&
        filterState.selectedCategory !== 'incredible' &&
        p.categorySlug !== filterState.selectedCategory &&
        !CATEGORIES.find((c) => c.slug === filterState.selectedCategory)?.subcategories.some(
          (s) => s.slug === p.categorySlug
        )
      ) {
        return false;
      }

      // Incredible filter
      if (filterState.selectedCategory === 'incredible' && !p.isIncredibleOffer) {
        return false;
      }

      // Search Query
      if (filterState.searchQuery.trim()) {
        const q = filterState.searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchEng = p.englishTitle.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        if (!matchTitle && !matchEng && !matchBrand) return false;
      }

      // Selected Brands
      if (
        filterState.selectedBrands.length > 0 &&
        !filterState.selectedBrands.includes(p.brand)
      ) {
        return false;
      }

      // Price Range
      if (
        p.price < filterState.priceRange[0] ||
        p.price > filterState.priceRange[1]
      ) {
        return false;
      }

      // Only in stock
      if (filterState.onlyInStock && p.stock <= 0) {
        return false;
      }

      // Only discounted
      if (filterState.onlyDiscounted && p.discountPercent <= 0) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'price-asc') return a.price - b.price;
      if (filterState.sortBy === 'price-desc') return b.price - a.price;
      if (filterState.sortBy === 'discount') return b.discountPercent - a.discountPercent;
      if (filterState.sortBy === 'rating') return b.rating - a.rating;
      if (filterState.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return b.reviewCount - a.reviewCount; // popular
    });
  }, [products, filterState]);

  // Reset to first page whenever filters change (and keep URL in sync)
  const isFirstFilterRun = useRef(true);
  useEffect(() => {
    setCurrentPage(1);
    // Skip the very first render so we don't trigger an unnecessary navigation
    if (isFirstFilterRun.current) {
      isFirstFilterRun.current = false;
      return;
    }
    onPageChange?.(1);
  }, [filterState]);

  // Sync page from URL when provided
  useEffect(() => {
    if (initialPage && initialPage > 0) setCurrentPage(initialPage);
  }, [initialPage]);

  // Reset all filters when leaving the store page so it opens fresh next time
  useEffect(() => {
    return () => {
      setFilterState({
        searchQuery: '',
        selectedCategory: '',
        selectedSubcategory: '',
        selectedBrands: [],
        priceRange: [0, 3000000],
        onlyInStock: false,
        onlyDiscounted: false,
        onlyIncredible: false,
        sortBy: 'popular'
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    const clamped = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(clamped);
    onPageChange?.(clamped);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBrandToggle = (brandName: string) => {
    setFilterState((prev) => {
      const exists = prev.selectedBrands.includes(brandName);
      return {
        ...prev,
        selectedBrands: exists
          ? prev.selectedBrands.filter((b) => b !== brandName)
          : [...prev.selectedBrands, brandName]
      };
    });
  };

  const resetFilters = () => {
    setFilterState({
      searchQuery: '',
      selectedCategory: '',
      selectedSubcategory: '',
      selectedBrands: [],
      priceRange: [0, 3000000],
      onlyInStock: false,
      onlyDiscounted: false,
      onlyIncredible: false,
      sortBy: 'popular'
    });
  };

  // Count active filters (used by the mobile drawer footer)
  const activeFilterCount = [
    filterState.searchQuery.trim(),
    filterState.selectedCategory,
    filterState.selectedBrands.length > 0 ? 'brands' : '',
    filterState.priceRange[0] > 0 || filterState.priceRange[1] < 3000000 ? 'price' : '',
    filterState.onlyInStock ? 'stock' : '',
    filterState.onlyDiscounted ? 'discount' : ''
  ].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 font-vazir">
      
      {/* Title & Stats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800">
            {filterState.selectedCategory === 'incredible'
              ? '⚡ پیشنهادات شگفت‌انگیز خوش لبخند'
              : filterState.selectedCategory
              ? `محصولات دسته‌بندی ${
                  CATEGORIES.find((c) => c.slug === filterState.selectedCategory)?.name ||
                  filterState.selectedCategory
                }`
              : 'فروشگاه کامل محصولات آرایشی و زیبایی'}
          </h1>
          <span className="text-xs text-slate-400 font-medium">
            نمایش {toPersianDigits(filteredProducts.length)} محصول از مجموع {toPersianDigits(products.length)} کالا
          </span>
        </div>

        {/* Mobile Filter Button & Sort bar */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-rose-50 text-rose-600 border border-rose-200 px-4 py-2 rounded-2xl text-xs font-bold"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>فیلتر پیشرفته</span>
          </button>

          {/* View mode toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-xs text-rose-600' : 'text-slate-400'
              }`}
              title="نمایش شبکه‌ای"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-xs text-rose-600' : 'text-slate-400'
              }`}
              title="نمایش لیستی"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Sidebar Filters (Desktop) */}
        <div className="hidden lg:block space-y-6 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm h-fit sticky top-24">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <Filter className="w-4 h-4 text-rose-600" />
              <span>فیلترهای جستجو</span>
            </div>
            <button
              onClick={resetFilters}
              className="text-xs text-rose-600 hover:underline font-bold flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>حذف فیلترها</span>
            </button>
          </div>

          {/* Categories Radio Filter */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-700">دسته‌بندی‌ها:</div>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
              <button
                onClick={() => setFilterState((prev) => ({ ...prev, selectedCategory: '' }))}
                className={`w-full text-right text-xs p-2 rounded-xl font-bold transition-colors ${
                  !filterState.selectedCategory ? 'bg-rose-50 text-rose-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                همه دسته‌ها
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilterState((prev) => ({ ...prev, selectedCategory: c.slug }))}
                  className={`w-full text-right text-xs p-2 rounded-xl font-medium transition-colors flex items-center justify-between ${
                    filterState.selectedCategory === c.slug ? 'bg-rose-50 text-rose-600 font-bold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Brand Checklist */}
          <div className="space-y-2 border-t border-slate-100 pt-4">
            <div className="text-xs font-bold text-slate-700">برندهای آرایشی:</div>
            <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
              {BRANDS.map((b) => {
                const isSelected = filterState.selectedBrands.includes(b.persianName);
                return (
                  <label
                    key={b.id}
                    onClick={() => handleBrandToggle(b.persianName)}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer p-1 hover:bg-slate-50 rounded-lg"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                    <span>{b.persianName}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3 border-t border-slate-100 pt-4 text-xs font-bold text-slate-700">
            <label className="flex items-center justify-between cursor-pointer">
              <span>فقط کالاهای موجود</span>
              <input
                type="checkbox"
                checked={filterState.onlyInStock}
                onChange={(e) =>
                  setFilterState((prev) => ({ ...prev, onlyInStock: e.target.checked }))
                }
                className="accent-rose-600 w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span>فقط کالاهای تخفیف‌دار</span>
              <input
                type="checkbox"
                checked={filterState.onlyDiscounted}
                onChange={(e) =>
                  setFilterState((prev) => ({ ...prev, onlyDiscounted: e.target.checked }))
                }
                className="accent-rose-600 w-4 h-4"
              />
            </label>
          </div>

        </div>

        {/* Main Products Grid */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Sorting Bar */}
          <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
            <span className="flex items-center gap-1 text-slate-400 pl-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-rose-600" />
              مرتب‌سازی:
            </span>
            {[
              { id: 'popular', label: 'محبوب‌ترین' },
              { id: 'newest', label: 'جدیدترین' },
              { id: 'price-asc', label: 'ارزان‌ترین' },
              { id: 'price-desc', label: 'گران‌ترین' },
              { id: 'discount', label: 'بیشترین تخفیف' }
            ].map((sortItem) => (
              <button
                key={sortItem.id}
                onClick={() =>
                  setFilterState((prev) => ({ ...prev, sortBy: sortItem.id as any }))
                }
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  filterState.sortBy === sortItem.id
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {sortItem.label}
              </button>
            ))}
          </div>

          {/* Products Render */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center text-slate-400 space-y-3 border border-slate-100">
              <Sparkles className="w-12 h-12 text-rose-300 mx-auto" />
              <h3 className="font-bold text-slate-700 text-base">محصولی با این فیلترها یافت نشد</h3>
              <p className="text-xs text-slate-400">
                لطفا فیلترهای اعمال‌شده را تغییر دهید یا دکمه حذف فیلترها را بزنید.
              </p>
              <button
                onClick={resetFilters}
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors"
              >
                حذف همه فیلترها
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                  onQuickView={onQuickView}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistIds.includes(product.id)}
                />
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col sm:flex-row items-center gap-4 group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-28 h-28 object-contain bg-slate-50 p-2 rounded-2xl shrink-0"
                  />
                  <div className="flex-1 space-y-1 min-w-0">
                    <span className="text-[11px] font-bold text-slate-400">{product.brand}</span>
                    <h3 className="font-bold text-slate-800 text-sm group-hover:text-rose-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{product.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0 border-t sm:border-t-0 sm:border-r border-slate-100 pt-2 sm:pt-0 sm:pr-4">
                    <div className="text-base font-black text-rose-600">
                      {formatPrice(product.price)}
                    </div>
                    <button
                      onClick={(e) => onAddToCart(product, e)}
                      className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md"
                    >
                      افزودن به سبد
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Numeric Pagination (responsive - visible on all screen sizes) */}
      {totalPages > 1 && (
          <React.Fragment>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-3 sm:px-4 py-3 mt-8">
              <nav
                aria-label="صفحه‌بندی محصولات"
                className="flex items-center justify-center gap-1.5 sm:gap-2 select-none flex-wrap"
              >
            <button
              onClick={() => goToPage(safeCurrentPage - 1)}
              disabled={safeCurrentPage === 1}
              aria-label="صفحه قبل"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:border-rose-500 enabled:hover:text-rose-600 transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isNearStart = page <= 2;
              const isNearEnd = page >= totalPages - 1;
              const isAroundCurrent =
                page >= safeCurrentPage - 1 && page <= safeCurrentPage + 1;

              if (!isNearStart && !isNearEnd && !isAroundCurrent) {
                // Render ellipsis only once per gap
                if (page === safeCurrentPage - 2 && safeCurrentPage - 2 > 2) {
                  return (
                    <span key={`gap-${page}`} className="text-slate-400 text-sm w-8 sm:w-9 text-center shrink-0">
                      …
                    </span>
                  );
                }
                if (page === safeCurrentPage + 2 && safeCurrentPage + 2 < totalPages - 1) {
                  return (
                    <span key={`gap2-${page}`} className="text-slate-400 text-sm w-8 sm:w-9 text-center shrink-0">
                      …
                    </span>
                  );
                }
                return null;
              }

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  aria-current={page === safeCurrentPage ? 'page' : undefined}
                  className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-colors shrink-0 ${
                    page === safeCurrentPage
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-rose-500 hover:text-rose-600'
                  }`}
                >
                  {toPersianDigits(page)}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(safeCurrentPage + 1)}
              disabled={safeCurrentPage === totalPages}
              aria-label="صفحه بعد"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:border-rose-500 enabled:hover:text-rose-600 transition-colors shrink-0"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
              </nav>

              {/* Page indicator */}
              <p className="text-center text-xs text-slate-400 font-medium mt-2 select-none">
                صفحه {toPersianDigits(safeCurrentPage)} از {toPersianDigits(totalPages)}
              </p>
            </div>
          </React.Fragment>
        )}

      {/* Mobile Filter Drawer (professional - opens from the left, tap backdrop to close) */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-overlay-in">
          {/* Backdrop - clicking the empty/dimmed area closes the drawer */}
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="relative w-full max-w-xs bg-white h-full flex flex-col animate-slide-in-left shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5 shrink-0">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-rose-600" />
                <h3 className="font-bold text-slate-800 text-sm">فیلترهای پیشرفته</h3>
                {activeFilterCount > 0 && (
                  <span className="bg-rose-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {toPersianDigits(activeFilterCount)}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                aria-label="بستن فیلترها"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable filter sections */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs">

              {/* 1. Product Search Filter */}
              <div className="space-y-2">
                <div className="font-bold text-slate-700">جستجوی محصول:</div>
                <div className="relative">
                  <input
                    type="text"
                    value={filterState.searchQuery}
                    onChange={(e) =>
                      setFilterState((prev) => ({ ...prev, searchQuery: e.target.value }))
                    }
                    placeholder="نام محصول، برند یا دسته..."
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2.5 pr-9 pl-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 2. Category Filter */}
              <div className="space-y-2 border-t border-slate-100 pt-4">
                <div className="font-bold text-slate-700">دسته‌بندی محصول:</div>
                <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                  <button
                    onClick={() =>
                      setFilterState((prev) => ({ ...prev, selectedCategory: '' }))
                    }
                    className={`w-full text-right p-2 rounded-xl font-bold transition-colors ${
                      !filterState.selectedCategory
                        ? 'bg-rose-50 text-rose-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    همه دسته‌ها
                  </button>
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() =>
                        setFilterState((prev) => ({ ...prev, selectedCategory: c.slug }))
                      }
                      className={`w-full text-right p-2 rounded-xl font-medium transition-colors flex items-center justify-between ${
                        filterState.selectedCategory === c.slug
                          ? 'bg-rose-50 text-rose-600 font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{c.name}</span>
                      {filterState.selectedCategory === c.slug && (
                        <Check className="w-3.5 h-3.5 text-rose-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              {/* 3. Price Filter */}
              <div className="space-y-2 border-t border-slate-100 pt-4">
                <div className="font-bold text-slate-700">بر اساس قیمت (تومان):</div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    max={3000000}
                    placeholder="حداقل"
                    value={filterState.priceRange[0] === 0 ? '' : filterState.priceRange[0]}
                    onChange={(e) => {
                      const v = e.target.value === '' ? 0 : Math.min(3000000, Math.max(0, Number(e.target.value)));
                      setFilterState((prev) => ({ ...prev, priceRange: [v, prev.priceRange[1]] }));
                    }}
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                  />
                  <span className="text-slate-400 font-bold shrink-0">تا</span>
                  <input
                    type="number"
                    min={0}
                    max={3000000}
                    placeholder="حداکثر"
                    value={filterState.priceRange[1] >= 3000000 ? '' : filterState.priceRange[1]}
                    onChange={(e) => {
                      const v = e.target.value === '' ? 3000000 : Math.min(3000000, Math.max(0, Number(e.target.value)));
                      setFilterState((prev) => ({ ...prev, priceRange: [prev.priceRange[0], v] }));
                    }}
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2 px-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>از {formatPrice(filterState.priceRange[0])}</span>
                  <span>تا {formatPrice(filterState.priceRange[1])}</span>
                </div>
              </div>

              {/* 4. Brand Filter */}
              <div className="space-y-2 border-t border-slate-100 pt-4">
                <div className="font-bold text-slate-700 flex items-center justify-between">
                  <span>بر اساس برند:</span>
                  {filterState.selectedBrands.length > 0 && (
                    <button
                      onClick={() => setFilterState((prev) => ({ ...prev, selectedBrands: [] }))}
                      className="text-[10px] text-rose-600 font-bold hover:underline"
                    >
                      حذف انتخاب‌ها
                    </button>
                  )}
                </div>
                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {BRANDS.map((b) => {
                    const isSelected = filterState.selectedBrands.includes(b.persianName);
                    return (
                      <label
                        key={b.id}
                        onClick={() => handleBrandToggle(b.persianName)}
                        className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer p-1.5 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0 ${
                            isSelected ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <span>{b.persianName}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 5. Availability toggles */}
              <div className="space-y-3 border-t border-slate-100 pt-4 text-xs font-bold text-slate-700">
                <label className="flex items-center justify-between cursor-pointer">
                  <span>فقط کالاهای موجود</span>
                  <input
                    type="checkbox"
                    checked={filterState.onlyInStock}
                    onChange={(e) =>
                      setFilterState((prev) => ({ ...prev, onlyInStock: e.target.checked }))
                    }
                    className="accent-rose-600 w-4 h-4"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span>فقط کالاهای تخفیف‌دار</span>
                  <input
                    type="checkbox"
                    checked={filterState.onlyDiscounted}
                    onChange={(e) =>
                      setFilterState((prev) => ({ ...prev, onlyDiscounted: e.target.checked }))
                    }
                    className="accent-rose-600 w-4 h-4"
                  />
                </label>
              </div>
            </div>

            {/* Sticky footer with action buttons */}
            <div className="shrink-0 border-t border-slate-100 p-4 bg-white">
              <div className="flex gap-2">
                <button
                  onClick={resetFilters}
                  disabled={activeFilterCount === 0}
                  className="flex-1 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl disabled:opacity-40 enabled:hover:bg-slate-50 transition-colors"
                >
                  حذف فیلترها
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-[2] bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 rounded-xl transition-colors"
                >
                  اعمال و نمایش {toPersianDigits(filteredProducts.length)} محصول
                </button>
              </div>
            </div>
          </div>
        </div>
      )}




    </div>
  );
};
