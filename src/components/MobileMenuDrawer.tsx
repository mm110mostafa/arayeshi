import React, { useState } from 'react';
import { 
  X, ChevronDown, Sparkles, Phone, Info, BookOpen, 
  Home, ShoppingBag, Percent, Headset
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: any) => void;
  onSelectCategoryFilter: (categorySlug: string) => void;
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  onSelectCategoryFilter
}) => {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden overflow-hidden transition-opacity duration-300 ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs animate-overlay-in"
      />

      {/* Right-sliding Drawer Content for Persian RTL (slides out to the right when closing) */}
      <div
        className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 transform transition-transform ease-out duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Drawer Header */}
        <div className="p-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-black text-lg">
              خ
            </div>
            <div>
              <div className="font-black text-base leading-tight">خوش لبخند</div>
              <div className="text-[10px] text-rose-100">منوی دسترسی سریع</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Items Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
          
          {/* Quick Main Nav */}
          <div className="space-y-1 bg-slate-50 p-2 rounded-2xl border border-slate-100">
            <button
              onClick={() => {
                setActiveTab('home');
                onClose();
              }}
              className={`w-full text-right p-2.5 rounded-xl font-bold flex items-center gap-3 transition-colors ${
                activeTab === 'home' ? 'bg-rose-500 text-white' : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>صفحه اصلی</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('store');
                onClose();
              }}
              className={`w-full text-right p-2.5 rounded-xl font-bold flex items-center gap-3 transition-colors ${
                activeTab === 'store' ? 'bg-rose-500 text-white' : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>فروشگاه و محصولات</span>
            </button>

            <button
              onClick={() => {
                onSelectCategoryFilter('incredible');
                onClose();
              }}
              className="w-full text-right p-2.5 rounded-xl font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-3"
            >
              <Percent className="w-4 h-4 text-rose-500 animate-spin" />
              <span>پیشنهادات شگفت‌انگیز ⚡</span>
            </button>
          </div>

          {/* Categories Accordion */}
          <div>
            <div className="text-xs font-bold text-slate-400 mb-2 px-1">دسته‌بندی‌های آرایشی و بهداشتی</div>
            <div className="space-y-2">
              {CATEGORIES.map((category) => {
                const isExpanded = expandedCategoryId === category.id;
                return (
                  <div key={category.id} className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                    <button
                      onClick={() => setExpandedCategoryId(isExpanded ? null : category.id)}
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
                            onClose();
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
                              onClose();
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

          {/* Secondary Links */}
          <div className="space-y-1 border-t border-slate-100 pt-3">
            <button
              onClick={() => {
                setActiveTab('mag');
                onClose();
              }}
              className="w-full text-right p-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-3"
            >
              <BookOpen className="w-4 h-4 text-rose-500" />
              <span>مجله زیبایی خوش لبخند</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('about');
                onClose();
              }}
              className="w-full text-right p-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-3"
            >
              <Info className="w-4 h-4 text-rose-500" />
              <span>درباره خوش لبخند</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('contact');
                onClose();
              }}
              className="w-full text-right p-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-3"
            >
              <Phone className="w-4 h-4 text-rose-500" />
              <span>تماس با ما</span>
            </button>
          </div>

          {/* Support Info Box */}
          <div className="bg-rose-50 border border-rose-100 p-3 rounded-2xl space-y-1 text-xs">
            <div className="font-bold text-rose-800 flex items-center gap-2">
              <Headset className="w-4 h-4" />
              <span>پشتیبانی تلفنی ۲۴/۷</span>
            </div>
            <div className="text-slate-600">۰۲۱-۹۱۰۱۰۰۰۰ | ۰۲۱-۸۸۸۸۹۹۹۹</div>
            <div className="text-[11px] text-rose-600 font-medium">پاسخگویی سریع مشاوران آرایشی</div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <button
            onClick={() => {
              setActiveTab('store');
              onClose();
            }}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors text-xs flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>مشاهده جدیدترین محصولات</span>
          </button>
        </div>
      </div>
    </div>
  );
};
