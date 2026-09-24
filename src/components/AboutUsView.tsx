import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Store, Users, Clock } from 'lucide-react';

export const AboutUsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12 font-vazir animate-fade-in">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center sm:text-right">
        <div className="max-w-2xl space-y-4 relative z-10">
          <span className="bg-white/20 text-white font-bold text-xs px-3 py-1 rounded-full border border-white/30 inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            داستان زیبایی خوش لبخند
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            زیبایی اصیل، لبخندی ماندگار
          </h1>
          <p className="text-xs sm:text-sm text-rose-100 leading-relaxed font-medium">
            فروشگاه تخصصی آرایشی و بهداشتی خوش لبخند از سال ۱۳۹۴ با هدف فراهم ساختن دسترسی آسان بانوان ایرانی به باکیفیت‌ترین و اصیل‌ترین محصولات آرایشی، پوستی و عطریات از برترین برندهای داخلی و بین‌المللی آغاز به کار کرد.
          </p>
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Store, value: '۵۰۰+', label: 'برند اورجینال جهانی' },
          { icon: Users, value: '۱۰۰,۰۰۰+', label: 'مشتری راضی و وفادار' },
          { icon: Award, value: '۱۰,۰۰۰+', label: 'تنوع کالای تخصصی' },
          { icon: Clock, value: '۱۰ سال', label: 'سابقه درخشان در صنعت زیبایی' }
        ].map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm text-center space-y-2 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto shadow-inner">
                <IconComp className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-800">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Values & Promises */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-black text-slate-800">تعهدات و ارزش‌های اصلی خوش لبخند</h2>
          <p className="text-xs text-slate-500">چرا بیش از ۱۰۰ هزار بانوی خوش‌سلیقه خریدهای زیبایی خود را از ما انجام می‌دهند؟</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">ضمانت اصالت ۱۰۰٪ کالا</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              تمام محصولات موجود در خوش لبخند دارای اصالت کامل و برچسب تایید سلامت وزارت بهداشت و سیب سلامت می‌باشند.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">مشاوره تخصصی رایگان</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              تیم کارشناسان و متخصصان پوست و موی ما همه روزه آماده پاسخگویی و راهنمایی شما جهت انتخاب مناسب‌ترین محصول بر اساس نوع پوست شما هستند.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">بسته‌بندی کادویی شیک</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              تمام سفارش‌ها در جعبه‌های اختصاصی عطر و زیبایی خوش لبخند با نهایت ظرافت و مراقبت برای شما ارسال می‌گردند.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
