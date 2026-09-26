import React, { useState } from 'react';
import { ARTICLES } from '../data/products';
import { BeautyArticle } from '../types';
import { BookOpen, Clock, User, ArrowLeft, X } from 'lucide-react';

export const BeautyMagView: React.FC<{ onArticleClick?: (article: BeautyArticle) => void }> = ({
  onArticleClick
}) => {
  const [selectedArticle, setSelectedArticle] = useState<BeautyArticle | null>(null);

  const handleArticleClick = (article: BeautyArticle) => {
    if (onArticleClick) {
      onArticleClick(article);
    } else {
      setSelectedArticle(article);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8 font-vazir animate-fade-in">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-600 text-xs font-bold px-3 py-1 rounded-full">
          <BookOpen className="w-4 h-4" />
          <span>مجله زیبایی و سلامت خوش لبخند</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-800">
          جدیدترین مقالات آرایشی و روتین‌های پوستی
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          آموزش‌های تخصصی میکاپ، مراقبت از سلامت پوست و رازهای ماندگاری عطر
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article) => (
          <div
            key={article.id}
            onClick={() => handleArticleClick(article)}
            className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium mb-2">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-rose-500" />
                  {article.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-black text-slate-800 text-sm sm:text-base line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors mb-2">
                {article.title}
              </h3>

              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600">
              <span>ادامه مطالعه مقاله</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-100 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto animate-scale-in">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="bg-rose-100 text-rose-600 text-xs font-bold px-3 py-1 rounded-full">
                {selectedArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 leading-snug">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span>نویسنده: {selectedArticle.author}</span>
                <span>•</span>
                <span>تاریخ: {selectedArticle.date}</span>
              </div>
            </div>

            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden">
              <img src={selectedArticle.image} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              {selectedArticle.tags.map((t, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-bold">
                  #{t}
                </span>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
