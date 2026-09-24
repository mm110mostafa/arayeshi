import React from 'react';
import { BRANDS } from '../data/products';
import { Award } from 'lucide-react';

interface BrandCarouselProps {
  onSelectBrand: (brandName: string) => void;
}

export const BrandCarousel: React.FC<BrandCarouselProps> = ({ onSelectBrand }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-6 border-b border-slate-700/60 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                محبوب‌ترین برندهای آرایشی و زیبایی
              </h2>
              <p className="text-xs text-slate-300 font-medium">
                تضمین اصالت اورجینال ۱۰۰٪ از معتبرترین نمایندگی‌های رسمی
              </p>
            </div>
          </div>
          <span className="text-xs text-amber-400 font-bold hidden sm:inline">
            برندهای مطرح جهانی و ایرانی
          </span>
        </div>

        {/* Brand Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.persianName)}
              className="bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-105 group"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-2 mb-2 flex items-center justify-center shadow-md">
                <img
                  src={brand.logo}
                  alt={brand.persianName}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="font-bold text-xs text-white group-hover:text-amber-300 transition-colors">
                {brand.persianName}
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
