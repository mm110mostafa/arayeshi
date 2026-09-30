import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { formatPrice, formatTimeLeft, toPersianDigits } from '../utils/formatters';
import { Flame, ShoppingCart, Heart, Sparkles } from 'lucide-react';

interface IncredibleOffersProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  wishlistIds: string[];
}

export const IncredibleOffers: React.FC<IncredibleOffersProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}) => {
  // Live Countdown timer in seconds (e.g., 14 hours 28 mins 45 secs)
  const [timeLeft, setTimeLeft] = useState(14 * 3600 + 28 * 60 + 45);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 24 * 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeFormatted = formatTimeLeft(timeLeft);
  const incredibleProducts = products.filter((p) => p.isIncredibleOffer);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Digikala Red Wrapper Box */}
      <div className="bg-gradient-to-l from-rose-600 via-rose-600 to-pink-700 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
        
        {/* Decorative background sparkles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          
          {/* Right Header Box (Incredible Offer Title & Timer) */}
          <div className="lg:col-span-1 text-white flex flex-col items-center lg:items-start text-center lg:text-right space-y-4">
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold border border-white/30">
              <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
              <span>پیشنهاد شگفت‌انگیز</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black leading-tight whitespace-nowrap">
                تخفیف‌های استثنایی
              </h2>
              <p className="text-xs text-rose-100 font-medium">
                فرصت محدود خرید لوازم آرایشی با بالاترین درصد تخفیف سال!
              </p>
            </div>

            {/* Countdown Box */}
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-3 w-full max-w-[240px]">
              <div className="text-[11px] font-bold text-rose-100 text-center mb-2 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                زمان باقی‌مانده تا پایان:
              </div>
              <div className="flex items-center justify-center gap-2 dir-ltr font-mono font-black text-lg text-white">
                <div className="bg-rose-950/80 px-2.5 py-1 rounded-xl min-w-[40px] text-center shadow-inner">
                  {timeFormatted.seconds}
                </div>
                <span>:</span>
                <div className="bg-rose-950/80 px-2.5 py-1 rounded-xl min-w-[40px] text-center shadow-inner">
                  {timeFormatted.minutes}
                </div>
                <span>:</span>
                <div className="bg-rose-950/80 px-2.5 py-1 rounded-xl min-w-[40px] text-center shadow-inner">
                  {timeFormatted.hours}
                </div>
              </div>
            </div>

            <div className="hidden lg:block text-xs font-bold text-rose-200">
              ⚡ ارسال رایگان سفارش‌های شگفت‌انگیز
            </div>
          </div>

          {/* Left Side: Product Cards Grid/Carousel */}
          <div className="lg:col-span-4 overflow-x-auto pb-4 pt-1 scrollbar-none">
            <div className="flex items-stretch gap-4 min-w-max">
              {incredibleProducts.map((product) => {
                const isLiked = wishlistIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className="w-56 sm:w-64 bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between group relative border border-slate-100 hover:-translate-y-1"
                  >
                    {/* Top Badges */}
                    <div className="flex items-center justify-between z-10">
                      <span className="bg-rose-600 text-white font-black text-xs px-2.5 py-1 rounded-xl shadow-sm">
                        ٪{toPersianDigits(product.discountPercent)}
                      </span>
                      <button
                        onClick={(e) => onToggleWishlist(product.id, e)}
                        className={`p-2 rounded-full transition-colors ${
                          isLiked
                            ? 'bg-rose-50 text-rose-600'
                            : 'bg-slate-100 text-slate-400 hover:text-rose-600'
                        }`}
                        title="افزودن به علاقه‌مندی‌ها"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-600' : ''}`} />
                      </button>
                    </div>

                    {/* Product Image */}
                    <div className="my-3 h-40 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-50 relative group-hover:scale-105 transition-transform">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-slate-400 truncate">{product.brand}</div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 min-h-[2.5rem] leading-snug group-hover:text-rose-600 transition-colors">
                        {product.title}
                      </h3>

                      {/* Stock meter */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                          <span>موجودی در انبار:</span>
                          <span className="text-rose-600">{toPersianDigits(product.stock)} عدد</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-rose-500 to-amber-500 h-full rounded-full"
                            style={{ width: `${Math.min(100, (product.stock / 30) * 100)}%` }}
                          />
                        </div>
                      </div>

                      {/* Prices & Rating */}
                      <div className="pt-2 border-t border-slate-100 flex items-end justify-between">
                        <div>
                          <div className="text-[11px] text-slate-400 line-through font-medium">
                            {formatPrice(product.originalPrice)}
                          </div>
                          <div className="text-sm sm:text-base font-black text-rose-600">
                            {formatPrice(product.price)}
                          </div>
                        </div>

                        <button
                          onClick={(e) => onAddToCart(product, e)}
                          className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2.5 rounded-2xl transition-all shadow-xs group/btn"
                          title="افزودن به سبد"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
