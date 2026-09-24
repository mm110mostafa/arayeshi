import React from 'react';
import { Product } from '../types';
import { formatPrice, toPersianDigits } from '../utils/formatters';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  isWishlisted: boolean;
  onQuickView?: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onQuickView
}) => {
  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group relative hover:-translate-y-1"
    >
      {/* Top badges & heart */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1">
          {product.discountPercent > 0 && (
            <span className="bg-rose-600 text-white font-black text-xs px-2 py-0.5 rounded-xl shadow-xs">
              ٪{toPersianDigits(product.discountPercent)}
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-amber-500 text-white font-bold text-[10px] px-2 py-0.5 rounded-xl">
              پرفروش
            </span>
          )}
        </div>

        <button
          onClick={(e) => onToggleWishlist(product.id, e)}
          className={`p-2 rounded-full transition-colors ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600'
              : 'bg-slate-100 text-slate-400 hover:text-rose-600 hover:bg-rose-50'
          }`}
          title="علاقه‌مندی"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
        </button>
      </div>

      {/* Image container with quick view overlay */}
      <div className="relative my-3 h-44 sm:h-48 flex items-center justify-center bg-slate-50/80 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain p-2"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView?.(product, e);
          }}
          title="مشاهده سریع"
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1 hover:bg-white hover:scale-105 transition-all"
        >
          <Eye className="w-3.5 h-3.5 text-rose-600" />
          مشاهده سریع
        </button>
      </div>

      {/* Color shades dots if available */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex items-center gap-1 mb-2">
          {product.colors.map((c, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border border-white shadow-xs"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-[10px] text-slate-400 font-bold mr-1">
              +{toPersianDigits(product.colors.length - 4)} رنگ
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-slate-400 truncate">
          {product.brand}
        </div>

        <h3 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 min-h-[2.5rem] leading-snug group-hover:text-rose-600 transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="font-bold text-slate-700">{toPersianDigits(product.rating)}</span>
          <span className="text-slate-400">({toPersianDigits(product.reviewCount)})</span>
        </div>

        {/* Price & Cart button */}
        <div className="pt-2 border-t border-slate-100 flex items-end justify-between">
          <div>
            {product.discountPercent > 0 && (
              <div className="text-[11px] text-slate-400 line-through font-medium">
                {formatPrice(product.originalPrice)}
              </div>
            )}
            <div className="text-sm sm:text-base font-black text-rose-600">
              {formatPrice(product.price)}
            </div>
          </div>

          <button
            onClick={(e) => onAddToCart(product, e)}
            className="bg-rose-600 hover:bg-rose-700 text-white p-2.5 rounded-2xl shadow-md shadow-rose-200 transition-all group-hover:scale-105"
            title="افزودن به سبد خرید"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
