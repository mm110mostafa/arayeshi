import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { formatPrice, toPersianDigits } from '../utils/formatters';
import { 
  X, Star, Heart, ShoppingCart, ShieldCheck, Truck, 
  RotateCcw, Check, Sparkles, MessageSquare, ThumbsUp, Send, Info
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedColor?: ProductColor) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  const [selectedImage, setSelectedImage] = useState(product?.image ?? '');
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(
    product?.colors && product.colors.length > 0 ? product.colors[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'desc' | 'reviews'>('specs');
  
  // New review state
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [comments, setComments] = useState(product?.comments ?? []);
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);

  // Return null only AFTER all hooks have been called (Rules of Hooks)
  if (!product) return null;

  const savingsAmount = product.originalPrice - product.price;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newRev = {
      id: Date.now().toString(),
      userName: 'کاربر خوش لبخند',
      rating: newRating,
      date: 'امروز',
      comment: newComment,
      isVerified: true,
      likes: 0
    };

    setComments([newRev, ...comments]);
    setNewComment('');
    setShowReviewSuccess(true);
    setTimeout(() => setShowReviewSuccess(false), 4000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fade-in"
    >
      
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-100 max-h-[92vh] flex flex-col animate-scale-in"
      >
        
        {/* Modal Top Header */}
        <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold bg-rose-100 text-rose-600 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">| برند: {product.brand}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(product.id)}
              className={`p-2 rounded-full border transition-colors ${
                isWishlisted
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'border-slate-200 text-slate-400 hover:text-rose-600'
              }`}
              title="علاقه‌مندی"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-8">
          
          {/* Upper Section: Gallery & Details & Buy Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Gallery (4 columns on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="h-72 sm:h-80 bg-slate-50 rounded-3xl p-4 flex items-center justify-center border border-slate-100 shadow-inner overflow-hidden">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Thumbnails Carousel */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-2xl p-1 border-2 transition-all overflow-hidden shrink-0 ${
                      selectedImage === img ? 'border-rose-600 scale-105 shadow-md' : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover rounded-xl" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details (4 columns on lg) */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <h1 className="text-lg sm:text-xl font-black text-slate-800 leading-snug">
                  {product.title}
                </h1>
                <p className="text-xs text-slate-400 font-medium dir-ltr text-right mt-1">
                  {product.englishTitle}
                </p>
              </div>

              {/* Rating & Review counter */}
              <div className="flex items-center gap-3 text-xs font-bold text-slate-600 bg-slate-50 p-2.5 rounded-2xl">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{toPersianDigits(product.rating)}</span>
                </div>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{toPersianDigits(product.reviewCount)} دیدگاه ثبت‌شده</span>
              </div>

              {/* Shade / Color picker if product has colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span>انتخاب رنگ / طیف:</span>
                    <span className="text-rose-600 font-bold">{selectedColor?.name}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border text-xs font-bold transition-all ${
                          selectedColor?.name === color.name
                            ? 'border-rose-600 bg-rose-50 text-rose-700 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                        {selectedColor?.name === color.name && (
                          <Check className="w-3.5 h-3.5 text-rose-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Attributes Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700">ویژگی‌های برجسته محصول:</div>
                <ul className="space-y-1 text-xs text-slate-600">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span className="font-semibold text-slate-800">{feat.key}:</span>
                      <span>{feat.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skin Type Tag if available */}
              {product.skinType && (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-2.5 rounded-2xl text-xs font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{product.skinType}</span>
                </div>
              )}
            </div>

            {/* Digikala-style Buy Box Card (3 columns on lg) */}
            <div className="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-3xl p-5 space-y-5 flex flex-col justify-between shadow-sm">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 pb-3 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black">
                    خ
                  </div>
                  <div>
                    <div>فروشنده: خوش لبخند</div>
                    <div className="text-[10px] text-emerald-600 font-medium">۱۰۰٪ رضایت از اصالت کالا</div>
                  </div>
                </div>

                {/* Stock info */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>گارانتی اصالت و سلامت فیزیکی</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>ارسال سریع اکسپرس به سراسر ایران</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <RotateCcw className="w-4 h-4 text-rose-500" />
                  <span>۷ روز مهلت بازگشت کالا</span>
                </div>

                {/* Quantity Modifier */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-700 mb-1">تعداد سفارش:</div>
                  <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl p-1.5 w-fit">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-7 h-7 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm text-slate-800 px-2 min-w-[20px] text-center">
                      {toPersianDigits(quantity)}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                      className="w-7 h-7 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Block & Action Button */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                {savingsAmount > 0 && (
                  <div className="bg-rose-100 text-rose-700 text-xs font-bold p-2 rounded-xl text-center">
                    سود شما: {formatPrice(savingsAmount * quantity)}
                  </div>
                )}

                <div className="text-right">
                  {product.discountPercent > 0 && (
                    <div className="text-xs text-slate-400 line-through font-medium">
                      {formatPrice(product.originalPrice * quantity)}
                    </div>
                  )}
                  <div className="text-xl font-black text-rose-600">
                    {formatPrice(product.price * quantity)}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product, quantity, selectedColor);
                  }}
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-2.5 px-3 rounded-2xl shadow-lg shadow-rose-200 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] text-xs whitespace-nowrap"
                >
                  <ShoppingCart className="w-4 h-4 shrink-0" />
                  <span>افزودن به سبد خرید</span>
                </button>
              </div>

            </div>

          </div>

          {/* Lower Section: Tabs (Specs, Description, Reviews) */}
          <div className="border-t border-slate-200 pt-6">
            <div className="flex border-b border-slate-200 gap-6 text-xs sm:text-sm font-bold text-slate-500 mb-6">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-3 border-b-2 transition-colors ${
                  activeTab === 'specs'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent hover:text-slate-800'
                }`}
              >
                مشخصات فنی و جدول ویژگی‌ها
              </button>
              <button
                onClick={() => setActiveTab('desc')}
                className={`pb-3 border-b-2 transition-colors ${
                  activeTab === 'desc'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent hover:text-slate-800'
                }`}
              >
                توضیحات و نقد تخصصی
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-3 border-b-2 flex items-center gap-1.5 transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent hover:text-slate-800'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>نظرات کاربران ({toPersianDigits(comments.length)})</span>
              </button>
            </div>

            {/* Specs Tab Content */}
            {activeTab === 'specs' && (
              <div className="space-y-4 max-w-3xl">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <tbody>
                    {product.features.map((feat, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="p-3 font-bold text-slate-600 w-1/3 border-b border-slate-100">
                          {feat.key}
                        </td>
                        <td className="p-3 text-slate-800 border-b border-slate-100">
                          {feat.value}
                        </td>
                      </tr>
                    ))}
                    {product.volume && (
                      <tr className="bg-slate-50">
                        <td className="p-3 font-bold text-slate-600 w-1/3 border-b border-slate-100">حجم / وزن</td>
                        <td className="p-3 text-slate-800 border-b border-slate-100">{product.volume}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Description Tab Content */}
            {activeTab === 'desc' && (
              <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>{product.description}</p>
                {product.usage && (
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl space-y-1">
                    <div className="font-bold text-amber-800 flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-amber-600" />
                      <span>نحوه مصرف پیشنهادی کارشناسان خوش لبخند:</span>
                    </div>
                    <p className="text-amber-900 text-xs">{product.usage}</p>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Tab Content */}
            {activeTab === 'reviews' && (
              <div className="space-y-6 max-w-3xl">
                
                {/* Form to add a review */}
                <form onSubmit={handleAddReview} className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-3xl space-y-4">
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">ثبت دیدگاه جدید برای این محصول</h4>
                  
                  {/* Rating Picker */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-600 font-medium">امتیاز شما:</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1 hover:scale-125 transition-transform"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= newRating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="تجربه استفاده یا نظرتان در مورد این محصول را بنویسید..."
                    className="w-full bg-white border border-slate-200 rounded-2xl p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500"
                  />

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>ثبت دیدگاه</span>
                    </button>

                    {showReviewSuccess && (
                      <span className="text-xs font-bold text-emerald-600 animate-bounce">
                        ✓ دیدگاه شما با موفقیت ثبت شد و نمایش داده شد.
                      </span>
                    )}
                  </div>
                </form>

                {/* Existing Reviews List */}
                <div className="space-y-3">
                  {comments.map((rev) => (
                    <div key={rev.id} className="bg-white border border-slate-100 p-4 rounded-2xl space-y-2 shadow-xs">
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

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed pt-1">
                        {rev.comment}
                      </p>

                      <div className="flex items-center justify-end text-[11px] text-slate-400 pt-1">
                        <button className="flex items-center gap-1 hover:text-slate-600">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>مفید بود ({toPersianDigits(rev.likes)})</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
