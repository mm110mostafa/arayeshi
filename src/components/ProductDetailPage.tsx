import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { formatPrice, toPersianDigits } from '../utils/formatters';
import {
  Star, ShoppingCart, ShieldCheck, Truck, RotateCcw,
  Check, Sparkles, MessageSquare, ThumbsUp, ChevronLeft, Heart
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  onAddToCart: (product: Product, quantity: number, selectedColor?: ProductColor) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onBack,
  onSelectProduct
}) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(
    product.colors && product.colors.length > 0 ? product.colors[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'desc' | 'reviews'>('specs');

  const savingsAmount = product.originalPrice - product.price;

  // Similar products: same category, excluding current product
  const similarProducts = allProducts
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-5 flex-wrap">
        <button onClick={onBack} className="hover:text-rose-600 transition-colors flex items-center gap-1 font-bold">
          <ChevronLeft className="w-4 h-4" />
          فروشگاه
        </button>
        <span>/</span>
        <span className="text-slate-500">{product.category}</span>
        <span>/</span>
        <span className="text-slate-700 font-bold line-clamp-1">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Gallery */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-sm p-4 h-72 sm:h-96 flex items-center justify-center overflow-hidden group">
            <img
              src={selectedImage}
              alt={product.title}
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {product.discountPercent > 0 && (
              <span className="absolute top-3 right-3 bg-rose-600 text-white font-black text-xs px-2.5 py-1 rounded-xl shadow-md">
                ٪{toPersianDigits(product.discountPercent)} تخفیف
              </span>
            )}
          </div>

          {product.images && product.images.length > 1 && (
            <div className="flex items-center gap-2 bg-white rounded-2xl border border-slate-100 p-2 overflow-x-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 shrink-0 rounded-xl p-1.5 border-2 transition-all flex items-center justify-center bg-slate-50 ${
                    selectedImage === img
                      ? 'border-rose-500 ring-2 ring-rose-100'
                      : 'border-transparent hover:border-slate-200'
                  }`}
                >
                  <img src={img} alt="" className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Product Info */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold bg-rose-100 text-rose-600 px-2.5 py-1 rounded-full inline-block">
                  {product.brand}
                </span>
                <h1 className="text-base sm:text-lg font-black text-slate-800 leading-snug">
                  {product.title}
                </h1>
                {product.englishTitle && (
                  <p className="text-[11px] text-slate-400 font-medium" dir="ltr">
                    {product.englishTitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => onToggleWishlist(product.id)}
                className={`p-2.5 rounded-full border transition-colors shrink-0 ${
                  isWishlisted
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50'
                }`}
                title="علاقه‌مندی"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pb-3 border-b border-slate-100">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-bold text-slate-700">{toPersianDigits(product.rating)}</span>
              <span className="text-slate-400">({toPersianDigits(product.reviewCount)} نظر)</span>
              {product.isBestSeller && (
                <span className="bg-amber-100 text-amber-700 font-bold text-[10px] px-2 py-0.5 rounded-full mr-auto">
                  پرفروش
                </span>
              )}
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700">
                  رنگ: <span className="text-rose-600">{selectedColor?.name}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      title={color.name}
                      className={`relative w-9 h-9 rounded-full border-2 shadow-xs transition-all ${
                        selectedColor?.name === color.name
                          ? 'border-rose-500 ring-2 ring-rose-100 scale-110'
                          : 'border-white hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor?.name === color.name && (
                        <Check className="w-4 h-4 text-white absolute inset-0 m-auto drop-shadow" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="flex items-end justify-between gap-3">
              <div>
                {product.discountPercent > 0 && (
                  <div className="text-xs text-slate-400 line-through font-medium">
                    {formatPrice(product.originalPrice)}
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-rose-600">
                    {formatPrice(product.price * quantity)}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">تومان</span>
                </div>
              </div>
              {savingsAmount > 0 && (
                <span className="bg-rose-100 text-rose-700 text-[11px] font-bold px-2.5 py-1 rounded-xl whitespace-nowrap">
                  سود شما: {formatPrice(savingsAmount * quantity)}
                </span>
              )}
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 font-bold text-slate-800 flex items-center justify-center transition-colors border border-slate-100"
                  aria-label="کاهش تعداد"
                >
                  -
                </button>
                <span className="font-bold text-sm text-slate-800 min-w-[24px] text-center">
                  {toPersianDigits(quantity)}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 font-bold text-slate-800 flex items-center justify-center transition-colors border border-slate-100"
                  aria-label="افزایش تعداد"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => onAddToCart(product, quantity, selectedColor)}
                className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-2.5 px-3 rounded-2xl shadow-lg shadow-rose-200 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] text-xs whitespace-nowrap"
              >
                <ShoppingCart className="w-4 h-4 shrink-0" />
                <span>افزودن به سبد خرید</span>
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 space-y-2.5">
            {[
              { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, text: 'گارانتی اصالت و سلامت فیزیکی کالا' },
              { icon: <Truck className="w-4 h-4 text-blue-600" />, text: 'ارسال سریع اکسپرس به سراسر ایران' },
              { icon: <RotateCcw className="w-4 h-4 text-rose-500" />, text: '۷ روز مهلت بازگشت کالا' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick specs box */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 pb-3 border-b border-slate-200">
              <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black">
                خ
              </div>
              <div>
                <div>فروشنده: خوش لبخند</div>
                <div className="text-[10px] text-emerald-600 font-medium">۱۰۰٪ رضایت از اصالت کالا</div>
              </div>
            </div>

            {product.skinType && (
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-2.5 rounded-2xl text-xs font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{product.skinType}</span>
              </div>
            )}

            <ul className="space-y-2 text-xs text-slate-600">
              {product.features.slice(0, 4).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                  <span className="font-semibold text-slate-800">{feat.key}:</span>
                  <span>{feat.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs: Specs / Description / Reviews */}
      <div className="mt-8 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex items-center border-b border-slate-100 overflow-x-auto">
          {[
            { key: 'specs', label: 'مشخصات محصول', icon: <Check className="w-4 h-4" /> },
            { key: 'desc', label: 'توضیحات', icon: <Sparkles className="w-4 h-4" /> },
            { key: 'reviews', label: `نظرات (${toPersianDigits(product.comments.length)})`, icon: <MessageSquare className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center gap-1.5 px-5 py-3.5 text-xs font-bold whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab.key
                  ? 'text-rose-600 border-rose-600 bg-rose-50/50'
                  : 'text-slate-500 border-transparent hover:text-slate-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-5">
          {/* Specs Tab */}
          {activeTab === 'specs' && (
            <div className="space-y-3">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 text-xs pb-3 border-b border-slate-50 last:border-0"
                >
                  <span className="font-bold text-slate-800">{feat.key}</span>
                  <span className="text-slate-600 text-left">{feat.value}</span>
                </div>
              ))}
              {product.volume && (
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="font-bold text-slate-800">حجم</span>
                  <span className="text-slate-600">{product.volume}</span>
                </div>
              )}
            </div>
          )}

          {/* Description Tab */}
          {activeTab === 'desc' && (
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>{product.description}</p>
              {product.usage && (
                <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 space-y-2">
                  <h4 className="font-bold text-rose-700 text-xs flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    روش مصرف
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{product.usage}</p>
                </div>
              )}
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {product.comments.length === 0 ? (
                <p className="text-center text-slate-400 text-sm py-8">
                  هنوز نظری برای این محصول ثبت نشده است.
                </p>
              ) : (
                product.comments.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-slate-50 border border-slate-100 p-4 rounded-2xl space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-800">{rev.userName}</span>
                        {rev.isVerified && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> خریدار واقعی
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{rev.comment}</p>
                    <div className="flex items-center justify-end text-[11px] text-slate-400">
                      <button className="flex items-center gap-1 hover:text-slate-600">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>مفید بود ({toPersianDigits(rev.likes)})</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="mt-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg sm:text-xl font-black text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-600" />
              <span>محصولات مشابه</span>
            </h2>
            <span className="text-xs text-slate-400 font-medium">
              سایر محصولات دسته {product.category}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {similarProducts.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-right group flex flex-col gap-2"
              >
                <div className="h-32 sm:h-40 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 block truncate">
                    {item.brand}
                  </span>
                  <h3 className="text-[11px] sm:text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-rose-600 transition-colors min-h-[2rem] leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="font-bold">{toPersianDigits(item.rating)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 pt-1.5 border-t border-slate-50">
                    <span className="text-xs sm:text-sm font-black text-rose-600">
                      {formatPrice(item.price)}
                    </span>
                    {item.discountPercent > 0 && (
                      <span className="text-[9px] bg-rose-100 text-rose-600 font-bold px-1.5 py-0.5 rounded-lg">
                        ٪{toPersianDigits(item.discountPercent)}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

