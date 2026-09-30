import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, ShoppingCart, Heart, Menu, ChevronDown, 
  Sparkles, User, Percent, PhoneCall,
  Grid, Flame, BookOpen, Info, Phone, LogIn, X
} from 'lucide-react';
import { Category, Product, CartItem } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { formatPrice, toPersianDigits } from '../utils/formatters';

interface HeaderProps {
  cartItems: CartItem[];
  wishlistIds: string[];
  activeTab: string;
  setActiveTab: (tab: any) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenMobileMenu: () => void;
  onSelectCategoryFilter: (categorySlug: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
  onNavigateToLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  wishlistIds,
  activeTab,
  setActiveTab,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct,
  onOpenMobileMenu,
  onSelectCategoryFilter,
  searchQuery,
  setSearchQuery,
  isLoggedIn,
  userName,
  onLogout,
  onNavigateToLogin
}) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState<Category>(CATEGORIES[0]);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(CATEGORIES[0].id);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close the user dropdown when clicking/tapping anywhere outside of it
  useEffect(() => {
    if (!isUserMenuOpen) return;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Filter products for instant search preview
  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.title.includes(searchQuery) ||
          p.englishTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.includes(searchQuery) ||
          p.category.includes(searchQuery)
      ).slice(0, 5)
    : [];

  const quickSearchTags = ['رژ لب کالیستا', 'سرم هیالورونیک', 'کرم پودر مای', 'ضد آفتاب سینره', 'روغن آرگان', 'ریمل'];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm font-vazir">
      {/* Top Banner Ribbon - Digikala style */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 relative overflow-hidden">
        <Sparkles className="w-4 h-4 animate-bounce text-amber-300" />
        <span>⚡ جشنواره استثنایی خوش لبخند | تا ۷۰٪ تخفیف روی محبوب‌ترین رژ لب‌ها و محصولات پوستی + ارسال رایگان</span>
        <span className="hidden md:inline bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold">کد: SMILE20</span>
      </div>

      {/* Main Header Middle Row */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Right side: Logo & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile Hamburger Button */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="باز کردن منو"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 group text-right"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-md shadow-rose-200 group-hover:scale-105 transition-transform">
              <span className="text-white text-2xl font-black leading-none">خ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-rose-600 tracking-tight leading-tight group-hover:text-rose-700">
                خوش لبخند
              </span>
              <span className="text-[10px] text-slate-400 font-medium">فروشگاه تخصصی زیبایی و آرایشی</span>
            </div>
          </button>
        </div>

        {/* Center: Digikala style Live Search Input */}
        <div className="flex-1 max-w-2xl relative hidden sm:block">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="جستجو در بین بیش از ۱۰,۰۰۰ محصول آرایشی، برند و..."
              className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-rose-500 rounded-2xl py-2.5 pr-11 pl-10 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-all shadow-inner"
            />
            <Search className="w-5 h-5 text-slate-400 absolute right-3.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 text-slate-400 hover:text-slate-600 text-xs bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Live Search Auto-complete Overlay */}
          {isSearchFocused && (
            <div className="absolute top-full right-0 left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 p-4 animate-dropdown-in">
              {searchQuery.trim() ? (
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-2">نتایج پیشنهادی:</div>
                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => {
                            onSelectProduct(product);
                            setIsSearchFocused(false);
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-rose-50 rounded-xl cursor-pointer transition-colors"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-10 h-10 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-slate-800 truncate">{product.title}</h4>
                            <div className="text-[11px] text-slate-400">{product.brand} • {product.category}</div>
                          </div>
                          <div className="text-xs font-bold text-rose-600">
                            {formatPrice(product.price)}
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          setActiveTab('store');
                          setIsSearchFocused(false);
                        }}
                        className="w-full text-center py-2 text-xs text-rose-600 font-bold hover:bg-rose-50 rounded-lg mt-2"
                      >
                        مشاهده همه نتایج جستجو ({searchResults.length})
                      </button>
                    </div>
                  ) : (
                    <div className="py-6 text-center text-xs text-slate-400">
                      محصولی با این مشخصات یافت نشد.
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-rose-500" />
                    جستجوهای پرطرفدار
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {quickSearchTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSearchQuery(tag);
                          setActiveTab('store');
                        }}
                        className="text-xs bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 px-3 py-1.5 rounded-xl transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Left side: Wishlist, User Profile, Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            className="p-2.5 rounded-2xl hover:bg-slate-100 text-slate-700 relative transition-colors hidden sm:flex items-center justify-center"
            title="علاقه‌مندی‌ها"
          >
            <Heart className="w-5 h-5" />
            {wishlistIds.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {toPersianDigits(wishlistIds.length)}
              </span>
            )}
          </button>

          {/* User Account Button / Dropdown */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => {
                if (isLoggedIn) {
                  setIsUserMenuOpen(!isUserMenuOpen);
                } else {
                  onNavigateToLogin();
                }
              }}
              className="flex items-center gap-2 border border-slate-200 hover:border-rose-300 rounded-2xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-rose-50/50 transition-all"
            >
              <User className="w-4 h-4 text-rose-600" />
              <span className="hidden md:inline">
                {isLoggedIn ? userName : 'ورود / ثبت‌نام'}
              </span>
              {isLoggedIn && (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
              {!isLoggedIn && (
                <LogIn className="w-3.5 h-3.5 text-rose-500" />
              )}
            </button>

            {isLoggedIn && isUserMenuOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 text-xs animate-dropdown-in">
                <div className="p-3 bg-rose-50 rounded-xl mb-2">
                  <div className="font-bold text-slate-800">سلام، {userName}</div>
                  <div className="text-[11px] text-slate-500">مشتری ویژه خوش لبخند</div>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('orders');
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-right p-2 hover:bg-slate-100 rounded-lg font-medium text-slate-700 flex items-center justify-between"
                >
                  پنل کاربری
                </button>
                <button
                  onClick={() => {
                    onOpenWishlist();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-right p-2 hover:bg-slate-100 rounded-lg font-medium text-slate-700"
                >
                  لیست علاقه مندی‌ها ({toPersianDigits(wishlistIds.length)})
                </button>
                <hr className="my-1 border-slate-100" />
                <button
                  onClick={() => {
                    onLogout();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-right p-2 hover:bg-rose-50 text-rose-600 rounded-lg font-bold"
                >
                  خروج از حساب کاربری
                </button>
              </div>
            )}
          </div>

          {/* Cart Drawer Trigger Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-2xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold transition-all shadow-sm"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {toPersianDigits(totalCartCount)}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">سبد خرید</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Row */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setActiveTab('store');
            }}
            placeholder="جستجوی محصول یا برند در خوش لبخند..."
            className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2 pr-10 pl-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
        </div>
      </div>

      {/* Navigation Bar & Mega Menu Strip */}
      <div className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12 text-xs sm:text-sm font-medium relative">
          
          {/* Mega Menu Toggle */}
          <div className="relative group">
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              className="flex items-center gap-2 text-slate-800 hover:text-rose-600 font-bold py-3 border-b-2 border-transparent hover:border-rose-600 transition-colors"
            >
              <Grid className="w-4 h-4 text-rose-600" />
              <span>دسته‌بندی کالاها</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Dropdown (Desktop) */}
            {isMegaMenuOpen && (
              <div
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                className="absolute right-0 top-full mt-0 w-[780px] bg-white rounded-b-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 hidden lg:flex animate-dropdown-in"
              >
                {/* Right categories sidebar */}
                <div className="w-56 bg-slate-50 border-l border-slate-100 p-2 space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onMouseEnter={() => setActiveMegaCategory(cat)}
                      onClick={() => {
                        onSelectCategoryFilter(cat.slug);
                        setIsMegaMenuOpen(false);
                      }}
                      className={`w-full text-right px-3 py-2.5 rounded-xl font-bold text-xs flex items-center justify-between transition-colors ${
                        activeMegaCategory.id === cat.id
                          ? 'bg-rose-500 text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-200/60'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <ChevronDown className="-rotate-90 w-3.5 h-3.5 opacity-60" />
                    </button>
                  ))}
                </div>

                {/* Left side subcategories & banner */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b pb-2">
                      <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <span>{activeMegaCategory.name}</span>
                        <span className="text-[11px] text-slate-400 font-normal">({activeMegaCategory.description})</span>
                      </h3>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter(activeMegaCategory.slug);
                          setIsMegaMenuOpen(false);
                        }}
                        className="text-xs text-rose-600 hover:underline font-bold"
                      >
                        همه محصولات {activeMegaCategory.name} ←
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {activeMegaCategory.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onSelectCategoryFilter(sub.slug);
                            setIsMegaMenuOpen(false);
                          }}
                          className="text-right text-slate-600 hover:text-rose-600 text-xs py-1.5 px-2 hover:bg-rose-50 rounded-lg transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                          <span>{sub.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Promotion Mini Card */}
                  <div 
                    onClick={() => {
                      onSelectCategoryFilter(activeMegaCategory.slug);
                      setIsMegaMenuOpen(false);
                    }}
                    className="mt-6 bg-gradient-to-r from-rose-50 to-pink-50 p-3 rounded-xl border border-rose-100 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={activeMegaCategory.image}
                        alt={activeMegaCategory.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-800">تخفیف ویژه کلکسیون {activeMegaCategory.name}</div>
                        <div className="text-[11px] text-rose-600 font-medium">تا ۵۰٪ تخفیف اختصاصی برای خریدهای امروز</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-rose-600 text-white px-3 py-1.5 rounded-xl shadow-sm">
                      خرید کن
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Category Mega Menu Overlay (slides over page content) */}
          {isMegaMenuOpen && (
            <>
              {/* Backdrop - dims & sits on top of page content, tap to close */}
              <div
                onClick={() => setIsMegaMenuOpen(false)}
                className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs animate-overlay-in lg:hidden"
              />
              {/* Category panel - anchored under the nav strip, overlays all elements */}
              <div className="absolute top-full inset-x-0 z-50 lg:hidden bg-white shadow-2xl border-b border-slate-100 max-h-[70vh] overflow-y-auto animate-dropdown-in">
                <div className="px-4 py-3">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-black text-slate-800 text-sm flex items-center gap-2">
                      <Grid className="w-4 h-4 text-rose-600" />
                      <span>دسته‌بندی کالاها</span>
                    </h3>
                    <button
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                      aria-label="بستن دسته‌بندی‌ها"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-2 pb-2">
                    {CATEGORIES.map((category) => {
                      const isExpanded = mobileExpandedId === category.id;
                      return (
                        <div
                          key={category.id}
                          className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs"
                        >
                          <button
                            onClick={() =>
                              setMobileExpandedId(isExpanded ? null : category.id)
                            }
                            className="w-full text-right p-3 font-bold text-slate-800 flex items-center justify-between hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                              <span>{category.name}</span>
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 transition-transform ${
                                isExpanded ? 'rotate-180 text-rose-600' : ''
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="bg-slate-50 border-t border-slate-100 p-2 space-y-1 animate-accordion">
                              <button
                                onClick={() => {
                                  onSelectCategoryFilter(category.slug);
                                  setIsMegaMenuOpen(false);
                                }}
                                className="w-full text-right p-2 text-xs font-bold text-rose-600 hover:bg-rose-100/50 rounded-lg"
                              >
                                مشاهده همه {category.name} ←
                              </button>
                              {category.subcategories.map((sub) => (
                                <button
                                  key={sub.id}
                                  onClick={() => {
                                    onSelectCategoryFilter(sub.slug);
                                    setIsMegaMenuOpen(false);
                                  }}
                                  className="w-full text-right p-2 text-xs text-slate-600 hover:text-rose-600 hover:bg-white rounded-lg transition-colors flex items-center gap-2"
                                >
                                  <span className="text-slate-300">•</span>
                                  <span>{sub.name}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}


          {/* Quick Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-slate-600 font-medium text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('home')}
              className={`py-3 border-b-2 transition-colors ${
                activeTab === 'home'
                  ? 'border-rose-600 font-bold text-rose-600'
                  : 'border-transparent hover:text-rose-600'
              }`}
            >
              صفحه اصلی
            </button>
            <button
              onClick={() => setActiveTab('store')}
              className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors ${
                activeTab === 'store'
                  ? 'border-rose-600 font-bold text-rose-600'
                  : 'border-transparent hover:text-rose-600'
              }`}
            >
              <span>فروشگاه محصولات</span>
              <span className="bg-rose-100 text-rose-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">تنوع بالا</span>
            </button>
            <button
              onClick={() => {
                onSelectCategoryFilter('incredible');
              }}
              className="flex items-center gap-1 text-rose-600 font-bold hover:text-rose-700 py-3"
            >
              <Percent className="w-4 h-4 animate-spin text-rose-500" />
              <span>پیشنهادات شگفت‌انگیز</span>
            </button>
            <button
              onClick={() => setActiveTab('mag')}
              className={`py-3 border-b-2 flex items-center gap-1 transition-colors ${
                activeTab === 'mag'
                  ? 'border-rose-600 font-bold text-rose-600'
                  : 'border-transparent hover:text-rose-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>مجله زیبایی</span>
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`py-3 border-b-2 flex items-center gap-1 transition-colors ${
                activeTab === 'about'
                  ? 'border-rose-600 font-bold text-rose-600'
                  : 'border-transparent hover:text-rose-600'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>درباره ما</span>
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-3 border-b-2 flex items-center gap-1 transition-colors ${
                activeTab === 'contact'
                  ? 'border-rose-600 font-bold text-rose-600'
                  : 'border-transparent hover:text-rose-600'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>تماس با ما</span>
            </button>
          </nav>

          {/* Left side Phone & Support Info */}
          <div className="hidden xl:flex items-center gap-2 text-slate-500 text-xs font-semibold">
            <PhoneCall className="w-4 h-4 text-rose-500" />
            <span>پشتیبانی: ۰۲۱-۹۱۰۱۰۰۰۰</span>
          </div>
        </div>
      </div>
    </header>
  );
};
