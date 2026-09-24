import React, { useState } from 'react';
import { BeautyArticle, Product, ProductColor } from '../types';
import { ARTICLES, getArticleSuggestedProduct } from '../data/products';
import { formatPrice, toPersianDigits } from '../utils/formatters';
import {
  Clock, User, ChevronLeft, Sparkles, ShoppingBag, TrendingUp,
  Search, Bookmark, ArrowLeft, Star
} from 'lucide-react';

interface ArticleDetailPageProps {
  article: BeautyArticle;
  onBack: () => void;
  onSelectArticle: (article: BeautyArticle) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart?: (product: Product, quantity: number, selectedColor?: ProductColor) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onBack,
  onSelectArticle,
  onSelectProduct,
  onAddToCart
}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [query, setQuery] = useState('');

  // Most viewed articles: all except current, ordered by readTime length as popularity proxy
  const mostViewed = ARTICLES.filter((a) => a.id !== article.id);

  const filtered = query.trim()
    ? mostViewed.filter(
        (a) => a.title.includes(query.trim()) || a.category.includes(query.trim())
      )
    : mostViewed;

  const suggestedProduct = getArticleSuggestedProduct(article);

  const handleAddSuggested = () => {
    if (suggestedProduct && onAddToCart) onAddToCart(suggestedProduct, 1, suggestedProduct.colors?.[0]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-5 flex-wrap">
        <button onClick={onBack} className="hover:text-rose-600 transition-colors flex items-center gap-1 font-bold">
          <ChevronLeft className="w-4 h-4" />
          مجله زیبایی
        </button>
        <span>/</span>
        <span className="text-slate-500">{article.category}</span>
        <span>/</span>
        <span className="text-slate-700 font-bold line-clamp-1">{article.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Article content */}
        <article className="lg:col-span-8 space-y-5">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Hero image */}
            <div className="h-48 sm:h-72 flex items-center justify-center bg-gradient-to-bl from-rose-50 to-pink-50 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-rose-100 text-rose-600 font-bold text-[11px] px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {article.category}
                  </span>
                  <button
                    onClick={() => setBookmarked((b) => !b)}
                    className={`mr-auto p-2 rounded-full border transition-colors ${
                      bookmarked
                        ? 'bg-rose-50 border-rose-200 text-rose-600'
                        : 'border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50'
                    }`}
                    title="ذخیره مقاله"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-rose-600' : ''}`} />
                  </button>
                </div>

                <h1 className="text-lg sm:text-2xl font-black text-slate-800 leading-snug">
                  {article.title}
                </h1>
                <p className="text-sm text-slate-500 leading-relaxed">{article.excerpt}</p>

                <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium pt-2 pb-3 border-b border-slate-100 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-4">
                {article.content.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-[15px] text-slate-700 leading-8 font-medium"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-500">برچسب‌ها:</span>
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-5">
          {/* Search filter */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 space-y-4">
            <h3 className="text-sm font-black text-slate-800 flex items-center gap-2">
              <Search className="w-4 h-4 text-rose-600" />
              جستجو در مقالات
            </h3>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="عنوان یا دسته مقاله..."
                className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-2xl py-2.5 pr-9 pl-3 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {ARTICLES.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    onSelectArticle(a);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-[11px] font-bold px-3 py-1.5 rounded-xl transition-colors border ${
                    a.id === article.id
                      ? 'bg-rose-600 text-white border-rose-600'
                      : 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100'
                  }`}
                >
                  {a.category}
                </button>
              ))}
            </div>
          </div>

          {/* Suggested product */}
          {suggestedProduct && (
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-3xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-rose-700">
                <Sparkles className="w-4 h-4" />
                <span>پیشنهاد ویژه برای این مقاله</span>
              </div>
              <div className="bg-white rounded-2xl p-3 flex items-center gap-3">
                <div className="w-20 h-20 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center">
                  <img
                    src={suggestedProduct.image}
                    alt={suggestedProduct.title}
                    className="max-h-full max-w-full object-contain p-1"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="text-[10px] font-bold text-slate-400 block truncate">
                    {suggestedProduct.brand}
                  </span>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug">
                    {suggestedProduct.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="font-bold">{toPersianDigits(suggestedProduct.rating)}</span>
                  </div>
                  <span className="text-sm font-black text-rose-600">
                    {formatPrice(suggestedProduct.price)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onSelectProduct(suggestedProduct);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 bg-white border border-rose-200 text-rose-600 font-bold text-xs py-2.5 rounded-2xl hover:bg-rose-50 transition-colors whitespace-nowrap"
                >
                  مشاهده محصول
                </button>
                {onAddToCart && (
                  <button
                    onClick={handleAddSuggested}
                    className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2.5 rounded-2xl flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                  >
                    <ShoppingBag className="w-4 h-4 shrink-0" />
                    افزودن به سبد
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Most viewed */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 space-y-4">
            <h3 className="text-sm font-black text-slate-800 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-rose-600" />
              پربازدیدترین مقالات
            </h3>
            {filtered.length === 0 ? (
              <p className="text-center text-slate-400 text-xs py-6">مقاله‌ای یافت نشد.</p>
            ) : (
              <div className="space-y-3">
                {filtered.map((a, idx) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      onSelectArticle(a);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-3 w-full text-right group"
                  >
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-rose-100 text-rose-600 font-black text-xs flex items-center justify-center">
                      {toPersianDigits(idx + 1)}
                    </span>
                    <div className="w-14 h-14 shrink-0 bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center">
                      <img src={a.image} alt="" className="max-h-full max-w-full object-contain p-1" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-[11px] font-bold text-slate-800 line-clamp-2 group-hover:text-rose-600 transition-colors leading-snug">
                        {a.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {a.readTime}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Back to magazine */}
          <button
            onClick={onBack}
            className="w-full bg-white border border-slate-200 text-slate-700 font-bold text-xs py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            بازگشت به مجله زیبایی
          </button>
        </aside>
      </div>
    </div>
  );
};
