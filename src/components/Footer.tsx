import React, { useState } from 'react';
import { 
  ShieldCheck, Truck, RotateCcw, Headphones, 
  Send, Phone, Mail, MapPin, Heart, Sparkles 
} from 'lucide-react';
import { TRUST_BADGES } from '../data/products';

interface FooterProps {
  setActiveTab: (tab: any) => void;
  onSelectCategory: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectCategory }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-rose-500" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-rose-500" />;
      case 'RotateCcw':
        return <RotateCcw className="w-8 h-8 text-rose-500" />;
      case 'Headphones':
        return <Headphones className="w-8 h-8 text-rose-500" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-rose-500" />;
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 4000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 font-vazir border-t border-slate-800 pt-10 pb-6 mt-16">
      
      {/* Trust Badges Strip (Digikala Style) */}
      <div className="max-w-7xl mx-auto px-4 pb-10 border-b border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {TRUST_BADGES.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2 p-3 rounded-2xl hover:bg-slate-800/60 transition-colors">
              <div className="p-3 bg-slate-800 rounded-2xl shadow-inner">
                {getBadgeIcon(badge.icon)}
              </div>
              <h4 className="font-black text-xs sm:text-sm text-white">{badge.title}</h4>
              <p className="text-[11px] text-slate-400 font-medium">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs sm:text-sm">
        
        {/* Col 1 & 2: About خوش لبخند & Newsletter */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center font-black text-xl">
              خ
            </div>
            <span className="text-xl font-black text-white">خوش لبخند</span>
          </div>

          <p className="text-slate-400 leading-relaxed text-xs">
            فروشگاه تخصصی اینترنتی خوش لبخند بزرگ‌ترین مرجع خرید آنلاین لوازم آرایشی، مراقبت پوستی، عطر و ادکلن در ایران است. با ضمانت ۱۰۰٪ اصالت کالا و ارسال اکسپرس به سراسر کشور.
          </p>

          {/* Newsletter Box */}
          <div className="space-y-2 pt-2">
            <div className="font-bold text-white text-xs flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>عضویت در خبرنامه و دریافت کدهای تخفیف اختصاصی:</span>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
              />
              <button
                type="submit"
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>عضویت</span>
              </button>
            </form>

            {newsletterSuccess && (
              <div className="text-[11px] text-emerald-400 font-bold">
                ✓ با تشکر! ایمیل شما با موفقیت در خبرنامه ثبت گردید.
              </div>
            )}
          </div>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="font-black text-white text-sm border-b border-rose-600/50 pb-2 w-fit">
            دسترسی سریع
          </h4>
          <ul className="space-y-2 text-slate-400 text-xs font-medium">
            <li>
              <button onClick={() => setActiveTab('home')} className="hover:text-rose-400 transition-colors">
                صفحه اصلی
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('store')} className="hover:text-rose-400 transition-colors">
                فروشگاه و محصولات
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('incredible')} className="hover:text-rose-400 transition-colors text-rose-400 font-bold">
                پیشنهادات شگفت‌انگیز ⚡
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('mag')} className="hover:text-rose-400 transition-colors">
                مجله زیبایی
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('about')} className="hover:text-rose-400 transition-colors">
                درباره خوش لبخند
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('contact')} className="hover:text-rose-400 transition-colors">
                تماس با ما
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Top Categories */}
        <div className="space-y-3">
          <h4 className="font-black text-white text-sm border-b border-rose-600/50 pb-2 w-fit">
            دسته‌بندی‌های اصلی
          </h4>
          <ul className="space-y-2 text-slate-400 text-xs font-medium">
            <li>
              <button onClick={() => onSelectCategory('face-makeup')} className="hover:text-rose-400 transition-colors">
                آرایشی صورت (کرم پودر و پنکیک)
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('solid-lipstick')} className="hover:text-rose-400 transition-colors">
                آرایش لب (رژ لب مخملی)
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('eyeshadow')} className="hover:text-rose-400 transition-colors">
                آرایش چشم (ریمل و پالت سایه)
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('serums')} className="hover:text-rose-400 transition-colors">
                مراقبت پوست (سرم هیالورونیک)
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('women-perfume')} className="hover:text-rose-400 transition-colors">
                عطر و ادکلن اورجینال
              </button>
            </li>
          </ul>
        </div>

        {/* Col 5: Contact & Certifications */}
        <div className="space-y-3">
          <h4 className="font-black text-white text-sm border-b border-rose-600/50 pb-2 w-fit">
            پشتیبانی ۲۴/۷
          </h4>
          <div className="space-y-2 text-slate-400 text-xs font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-rose-500" />
              <span>۰۲۱-۹۱۰۱۰۰۰۰</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-rose-500" />
              <span>support@khoshlabkhand.ir</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>تهران، برج تجاری زیبایی ونک</span>
            </div>
          </div>

          {/* Electronic Trust Badges / Enamad preview icons */}
          <div className="pt-2 flex items-center gap-3">
            <div className="w-12 h-14 bg-slate-800 rounded-xl border border-slate-700 p-1 flex items-center justify-center text-[9px] text-center text-slate-400 font-bold">
              نماد اعتماد الکترونیکی
            </div>
            <div className="w-12 h-14 bg-slate-800 rounded-xl border border-slate-700 p-1 flex items-center justify-center text-[9px] text-center text-slate-400 font-bold">
              سامانه ساماندهی
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bottom Strip */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          تمامی حقوق این وب‌سایت متعلق به فروشگاه اینترنتی <span className="text-rose-500 font-bold">خوش لبخند</span> می‌باشد. © ۱۴۰۳
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span>طراحی شده با</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>برای بانوانی که لبخندشان زیباست</span>
        </div>
      </div>

    </footer>
  );
};
