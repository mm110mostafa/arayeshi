import React, { useState, useEffect } from 'react';
import { PRODUCTS, ARTICLES } from './data/products';
import { Product, CartItem, FilterState, ProductColor, BeautyArticle } from './types';
import { Header } from './components/Header';
import { MobileMenuDrawer } from './components/MobileMenuDrawer';
import { StorySection } from './components/StorySection';
import { HeroBanner } from './components/HeroBanner';
import { IncredibleOffers } from './components/IncredibleOffers';
import { CategoryGrid } from './components/CategoryGrid';
import { BrandCarousel } from './components/BrandCarousel';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ArticleDetailPage } from './components/ArticleDetailPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { StoreView } from './components/StoreView';
import { AboutUsView } from './components/AboutUsView';
import { ContactUsView } from './components/ContactUsView';
import { BeautyMagView } from './components/BeautyMagView';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { Footer } from './components/Footer';
import { formatPrice, slugify } from './utils/formatters';
import { 
  CheckCircle2, Heart, ShoppingBag, 
  Flame, ShieldCheck, ArrowLeft, Sparkles 
} from 'lucide-react';

export function App() {
  // State
  const [products] = useState<Product[]>(PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Pre-populate 1 item for great initial UX
      quantity: 1,
      selectedColor: PRODUCTS[0].colors ? PRODUCTS[0].colors[0] : undefined
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['p1', 'p2']);
  const [activeTab, setActiveTab] = useState<'home' | 'store' | 'about' | 'contact' | 'mag' | 'wishlist' | 'orders' | 'login' | 'register'>('home');

  // User Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('کاربر گرامی');
  
  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Search & Catalog Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState<FilterState>({
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

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart Handler Actions
  const handleAddToCart = (
    product: Product,
    quantity: number = 1,
    selectedColor?: ProductColor,
    e?: React.MouseEvent
  ) => {
    if (e) e.stopPropagation();

    setCartItems((prev) => {
      const colorName = selectedColor?.name;
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor?.name === colorName
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor }];
      }
    });

    showToast(`کالای "${product.title}" به سبد خرید اضافه شد.`);
  };

  const handleUpdateCartQuantity = (
    productId: string,
    quantity: number,
    colorName?: string
  ) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId, colorName);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedColor?.name === colorName
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string, colorName?: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.product.id === productId && item.selectedColor?.name === colorName)
      )
    );
    showToast('کالا از سبد خرید شما حذف گردید.');
  };

  // Wishlist Action
  const handleToggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    setWishlistIds((prev) => {
      if (prev.includes(productId)) {
        showToast('محصول از لیست علاقه‌مندی‌ها حذف شد.');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('محصول به لیست علاقه‌مندی‌ها اضافه شد.');
        return [...prev, productId];
      }
    });
  };

  // Select Brand Filter & Navigate to Store
  const handleSelectBrandFilter = (brandName: string) => {
    setFilterState((prev) => ({
      ...prev,
      selectedBrands: [brandName]
    }));
    setActiveTab('store');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ---- URL / History Routing (slug = product or article title) ----
  type DetailView =
    | { type: 'product'; product: Product }
    | { type: 'article'; article: BeautyArticle }
    | null;

  const [detailView, setDetailView] = useState<DetailView>(null);
  const [storePage, setStorePage] = useState(1);

  const productSlug = (p: Product) => slugify(p.title);
  const articleSlug = (a: BeautyArticle) => slugify(a.title);

  const VALID_TABS = ['home', 'store', 'about', 'contact', 'mag', 'wishlist', 'orders', 'login', 'register'] as const;

  // Login / Register / Logout handlers (shared with Header & pages)
  const handleLogin = (name?: string) => {
    if (name) setUserName(name);
    setIsLoggedIn(true);
    showToast('با موفقیت وارد حساب کاربری خود شدید.');
    navigate('#/home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('کاربر گرامی');
    showToast('از حساب کاربری خود خارج شدید.');
    navigate('#/home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Apply a hash route to app state (used on load, navigation and popstate)
  const applyHash = (hash: string) => {
    const clean = hash.replace(/^#\/?/, '');
    const [path, queryStr] = clean.split('?');
    const parts = path.split('/').filter(Boolean);
    const query = new URLSearchParams(queryStr || '');

    if (parts[0] === 'product' && parts[1]) {
      const p = products.find((x) => productSlug(x) === decodeURIComponent(parts[1]));
      if (p) {
        setDetailView({ type: 'product', product: p });
        setSelectedProduct(null);
        window.scrollTo(0, 0);
        return;
      }
    }

    if (parts[0] === 'article' && parts[1]) {
      const a = ARTICLES.find((x) => articleSlug(x) === decodeURIComponent(parts[1]));
      if (a) {
        setDetailView({ type: 'article', article: a });
        window.scrollTo(0, 0);
        return;
      }
    }

    if (parts[0] === 'category' && parts[1]) {
      setFilterState((prev) => ({ ...prev, selectedCategory: decodeURIComponent(parts[1]) }));
      setActiveTab('store');
      setDetailView(null);
      window.scrollTo(0, 0);
      return;
    }

    const tab = (parts[0] || 'home') as (typeof VALID_TABS)[number];
    if (VALID_TABS.includes(tab)) {
      setActiveTab(tab);
      setDetailView(null);
      if (tab === 'store') {
        const pg = Number(query.get('page'));
        setStorePage(pg > 0 ? pg : 1);
      }
      window.scrollTo(0, 0);
    }
  };

  const navigate = (hash: string) => {
    if (window.location.hash !== hash) {
      window.history.pushState({ hash }, '', hash);
    }
    applyHash(hash);
  };

  const navigateToProduct = (product: Product) => {
    navigate(`#/product/${encodeURIComponent(productSlug(product))}`);
  };

  const navigateToArticle = (article: BeautyArticle) => {
    navigate(`#/article/${encodeURIComponent(articleSlug(article))}`);
  };

  const goBackFromDetail = (fallbackHash: string) => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate(fallbackHash);
    }
  };

  // Handle browser back/forward + initial deep link
  useEffect(() => {
    const onPopState = () => applyHash(window.location.hash);
    window.addEventListener('popstate', onPopState);
    applyHash(window.location.hash);
    return () => window.removeEventListener('popstate', onPopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-vazir relative selection:bg-rose-500 selection:text-white">
      
      {/* Toast Notification Alert Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl border border-rose-500/40 flex items-center gap-2.5 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header Component */}
      <Header
        cartItems={cartItems}
        wishlistIds={wishlistIds}
        activeTab={activeTab}
        setActiveTab={(tab) => navigate(`#/${tab}`)}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        onOpenWishlist={() => navigate('#/wishlist')}
        onSelectProduct={navigateToProduct}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onSelectCategoryFilter={(categorySlug?: string) =>
          navigate(
            categorySlug
              ? `#/category/${encodeURIComponent(categorySlug)}`
              : '#/store'
          )}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
        onNavigateToLogin={() => navigate('#/login')}
      />

      {/* Mobile Drawer Navigation (Opens from RIGHT for RTL as requested) */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={(tab) => navigate(`#/${tab}`)}
        onSelectCategoryFilter={(categorySlug?: string) =>
          navigate(
            categorySlug
              ? `#/category/${encodeURIComponent(categorySlug)}`
              : '#/store'
          )}
      />

      {/* Main Page View Routing */}
      <main className="flex-1">
        {detailView ? (
          detailView.type === 'product' ? (
            <ProductDetailPage
              product={detailView.product}
              allProducts={products}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={wishlistIds.includes(detailView.product.id)}
              onBack={() => goBackFromDetail('#/store')}
              onSelectProduct={navigateToProduct}
            />
          ) : (
            <ArticleDetailPage
              article={detailView.article}
              onBack={() => goBackFromDetail('#/mag')}
              onSelectArticle={navigateToArticle}
              onSelectProduct={navigateToProduct}
              onAddToCart={handleAddToCart}
            />
          )
        ) : activeTab === 'home' && (
          <div className="space-y-6">
            
            {/* Digikala Style Stories Bubble Row */}
            <StorySection onSelectCategory={(slug?: string) =>
              navigate(slug ? `#/category/${encodeURIComponent(slug)}` : '#/store')} />

            {/* Main Hero Banner Carousel */}
            <HeroBanner onNavigateStore={(slug?: string) =>
              navigate(slug ? `#/category/${encodeURIComponent(slug)}` : '#/store')} />

            {/* Category Grid Section */}
            <CategoryGrid onSelectCategory={(slug?: string) =>
              navigate(slug ? `#/category/${encodeURIComponent(slug)}` : '#/store')} />

            {/* Digikala Style Incredible Deals Section */}
            <IncredibleOffers
              products={products}
              onSelectProduct={navigateToProduct}
              onAddToCart={(p: Product, e: React.MouseEvent) => handleAddToCart(p, 1, undefined, e)}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />

            {/* Best Sellers Section */}
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base sm:text-2xl font-black text-slate-800 flex items-center gap-2 whitespace-nowrap">
                    <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 shrink-0" />
                    <span>پرفروش‌ترین‌های این هفته</span>
                  </h2>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    محبوب‌ترین محصولات آرایشی به انتخاب بانوان ایرانی
                  </p>
                </div>

                <button
                  onClick={() => {
                    setFilterState((prev) => ({ ...prev, sortBy: 'popular' }));
                    navigate('#/store');
                  }}
                  className="text-xs font-bold text-rose-600 hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>مشاهده همه</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products.filter((p) => p.isBestSeller).slice(0, 4).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={navigateToProduct}
                    onQuickView={(p: Product) => setSelectedProduct(p)}
                    onAddToCart={(p: Product, e: React.MouseEvent) => handleAddToCart(p, 1, undefined, e)}
                    onToggleWishlist={handleToggleWishlist}
                    isWishlisted={wishlistIds.includes(product.id)}
                  />
                ))}
              </div>
            </div>

            {/* Brands Showcase */}
            <BrandCarousel onSelectBrand={handleSelectBrandFilter} />

            {/* Special Mid-Page Banners */}
            <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => navigate('#/category/skincare')}
                className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-6 text-white shadow-xl cursor-pointer hover:scale-[1.01] transition-transform flex items-center justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold bg-white/20 px-3 py-1 rounded-full border border-white/30">
                    روتین پوستی تخصصی
                  </span>
                  <h3 className="text-xl font-black">سرم‌های آبرسان و روشن‌کننده</h3>
                  <p className="text-xs text-rose-100">راز پوستی شاداب و جوان در تمام روزهای سال</p>
                  <span className="inline-block text-xs font-bold text-amber-300 pt-2">خرید کلکسیون پوست ←</span>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-white/10 p-2 backdrop-blur-md hidden sm:flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-amber-300" />
                </div>
              </div>

              <div
                onClick={() => navigate('#/category/women-perfume')}
                className="bg-gradient-to-r from-purple-800 to-indigo-900 rounded-3xl p-6 text-white shadow-xl cursor-pointer hover:scale-[1.01] transition-transform flex items-center justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold bg-white/20 px-3 py-1 rounded-full border border-white/30">
                    عطرهای لوکس فرانسوی
                  </span>
                  <h3 className="text-xl font-black">ادکلن‌های اصل و اورجینال</h3>
                  <p className="text-xs text-purple-200">با پخش بوی فوق‌العاده و گارانتی ۱۰۰٪ اصالت</p>
                  <span className="inline-block text-xs font-bold text-amber-300 pt-2">مشاهده عطرها ←</span>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-white/10 p-2 backdrop-blur-md hidden sm:flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-rose-300" />
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Store / Catalog Page View */}
        {!detailView && activeTab === 'store' && (
          <StoreView
            products={products}
            filterState={filterState}
            setFilterState={setFilterState}
            onSelectProduct={navigateToProduct}
            onQuickView={(p: Product) => setSelectedProduct(p)}
            onAddToCart={(p: Product, e: React.MouseEvent) => handleAddToCart(p, 1, undefined, e)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            initialPage={storePage}
            onPageChange={(page) => {
              setStorePage(page);
              navigate(`#/store?page=${page}`);
            }}
          />
        )}

        {/* Wishlist Page View */}
        {!detailView && activeTab === 'wishlist' && (
          <div className="max-w-7xl mx-auto px-4 py-10 space-y-6 animate-fade-in">
            <div className="border-b border-slate-200 pb-4">
              <h1 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                <Heart className="w-6 h-6 text-rose-600 fill-rose-600" />
                <span>لیست علاقه مندی‌های من</span>
              </h1>
              <p className="text-xs text-slate-400 font-medium mt-1">
                محصولاتی که علامت‌گذاری کرده‌اید تا بعداً خریداری کنید
              </p>
            </div>

            {wishlistIds.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center text-slate-400 space-y-3 border border-slate-100">
                <Heart className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-700 text-base">لیست علاقه‌مندی‌های شما خالی است</h3>
                <p className="text-xs text-slate-400">با کلیک بر روی آیکون قلب هر محصول می‌توانید آن را اینجا ذخیره کنید.</p>
                <button
                  onClick={() => navigate('#/store')}
                  className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-colors"
                >
                  مشاهده فروشگاه
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products
                  .filter((p) => wishlistIds.includes(p.id))
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelectProduct={navigateToProduct}
                      onQuickView={(p: Product) => setSelectedProduct(p)}
                      onAddToCart={(p: Product, e: React.MouseEvent) => handleAddToCart(p, 1, undefined, e)}
                      onToggleWishlist={handleToggleWishlist}
                      isWishlisted={true}
                    />
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Orders Page View */}
        {!detailView && activeTab === 'orders' && (
          <div className="max-w-7xl mx-auto px-4 py-10 space-y-6 animate-fade-in">
            <div className="border-b border-slate-200 pb-4">
              <h1 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-rose-600" />
                <span>سفارش‌های من</span>
              </h1>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-100 space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b pb-4 text-xs">
                <div>
                  <span className="font-bold text-slate-800">سفارش #KHL-894120</span>
                  <span className="text-emerald-600 font-bold mr-3">● تحویل داده شده</span>
                </div>
                <span className="text-slate-400">تاریخ: ۱۴۰۳/۰۲/۱۵</span>
              </div>

              <div className="flex items-center gap-4 py-2">
                <img src={PRODUCTS[0].image} alt="" className="w-16 h-16 object-contain rounded-xl bg-slate-50 p-1 border" />
                <div className="text-xs">
                  <div className="font-bold text-slate-800">{PRODUCTS[0].title}</div>
                  <div className="text-slate-400 mt-1">تعداد: ۱ عدد • مبلغ: {formatPrice(PRODUCTS[0].price)}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Us Page View */}
        {!detailView && activeTab === 'about' && <AboutUsView />}

        {/* Contact Us Page View */}
        {!detailView && activeTab === 'contact' && <ContactUsView />}

        {/* Beauty Mag Page View */}
        {!detailView && activeTab === 'mag' && <BeautyMagView onArticleClick={navigateToArticle} />}

        {/* Login Page View */}
        {!detailView && activeTab === 'login' && (
          <LoginPage
            onLogin={handleLogin}
            onNavigateToRegister={() => navigate('#/register')}
            onBack={() => navigate('#/home')}
          />
        )}

        {/* Register Page View */}
        {!detailView && activeTab === 'register' && (
          <RegisterPage
            onRegister={handleLogin}
            onNavigateToLogin={() => navigate('#/login')}
            onBack={() => navigate('#/home')}
          />
        )}

      </main>

      {/* Individual Product Detail Modal */}
      <ProductDetailModal
        key={selectedProduct?.id ?? 'no-product'}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, qty, color) => {
          handleAddToCart(p, qty, color);
          setSelectedProduct(null);
          setIsCartDrawerOpen(true);
        }}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => setIsCheckoutModalOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        cartItems={cartItems}
        onOrderSuccess={() => {
          setCartItems([]);
        }}
      />

      {/* Footer Component */}
      <Footer
        setActiveTab={(tab) => navigate(`#/${tab}`)}
        onSelectCategory={(slug: string) => navigate(`#/category/${encodeURIComponent(slug)}`)}
      />

    </div>
  );
}

export default App;
