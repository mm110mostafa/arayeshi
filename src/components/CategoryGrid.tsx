import React from 'react';
import { CATEGORIES } from '../data/products';
import { Sparkles, Heart, Eye, Droplets, Scissors, Gift, ArrowLeft } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (slug: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-rose-500" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-pink-500" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-purple-500" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-sky-500" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-amber-500" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-emerald-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-rose-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base sm:text-2xl font-black text-slate-800 whitespace-nowrap">
            دسته‌بندی‌های محبوب خوش لبخند
          </h2>
          <p className="text-xs text-slate-400 font-medium mt-1">
            دسترسی سریع به تنوع گسترده‌ای از لوازم زیبایی
          </p>
        </div>
        <button
          onClick={() => onSelectCategory('')}
          className="text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group"
        >
          <span>مشاهده همه دسته‌بندی‌ها</span>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.slug)}
            className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col items-center text-center hover:-translate-y-1"
          >
            {/* Round Avatar Container */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-rose-100 to-pink-100 group-hover:from-rose-500 group-hover:to-pink-500 transition-colors shadow-inner mb-3 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex items-center gap-1.5 mb-1">
              {getIcon(cat.iconName)}
              <h3 className="text-xs sm:text-sm font-black text-slate-800 group-hover:text-rose-600 transition-colors">
                {cat.name}
              </h3>
            </div>

            <p className="text-[10px] text-slate-400 line-clamp-1 font-medium">
              {cat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
