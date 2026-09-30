import React, { useState } from 'react';
import {
  UserPlus, Eye, EyeOff, User, Phone, Lock, Mail, ArrowRight, Sparkles,
  CheckCircle2, Gift, Percent
} from 'lucide-react';

// Convert any Persian/Arabic-Indic digits in the string to English digits
const toEnglishDigits = (value: string): string =>
  value
    .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())
    .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());

// Validate an Iranian mobile number in any of these formats:
// 09123456789 / ۹۱... (Persian digits) / +989123456789 / 00989123456789
const isValidIranMobile = (raw: string): boolean => {
  const phone = toEnglishDigits(raw).replace(/[\s\-_()]/g, '');
  return /^(\+98|0098|98|0)?9\d{9}$/.test(phone);
};

interface RegisterPageProps {
  onRegister: (name?: string) => void;
  onNavigateToLogin: () => void;
  onBack: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
  onRegister,
  onNavigateToLogin,
  onBack
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string; phone?: string; email?: string; password?: string; terms?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'نام و نام خانوادگی خود را وارد کنید.';
    if (!phone.trim()) {
      newErrors.phone = 'شماره موبایل خود را وارد کنید.';
    } else if (!isValidIranMobile(phone)) {
      newErrors.phone = 'شماره موبایل معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹).';
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'فرمت ایمیل وارد شده صحیح نیست.';
    }
    if (!password.trim()) {
      newErrors.password = 'رمز عبور خود را وارد کنید.';
    } else if (password.trim().length < 6) {
      newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد.';
    }
    if (!acceptTerms) newErrors.terms = 'برای ادامه باید قوانین را بپذیرید.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onRegister(name.trim());
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-10 sm:py-16 overflow-hidden font-vazir animate-fade-in">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-100/40 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl shadow-rose-200/50 border border-rose-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left side (RTL): Register form */}
        <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
          {/* Back button */}
          <button
            onClick={onBack}
            className="self-start flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors mb-6"
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت به صفحه اصلی
          </button>

          <div className="space-y-2 mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800">ایجاد حساب کاربری</h1>
            <p className="text-sm text-slate-500 font-medium">
              قبلاً حساب دارید؟{' '}
              <button
                onClick={onNavigateToLogin}
                className="text-rose-600 font-bold hover:text-rose-700 transition-colors"
              >
                وارد شوید
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">نام و نام خانوادگی</label>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: سارا محمدی"
                  className={`w-full pr-12 pl-4 py-3.5 rounded-2xl border-2 outline-none transition-all text-sm font-medium ${
                    errors.name
                      ? 'border-rose-400 bg-rose-50/50 focus:border-rose-500'
                      : 'border-slate-200 bg-slate-50/50 focus:border-rose-400 focus:bg-white'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-rose-600 font-bold pr-1">{errors.name}</p>
              )}
            </div>

            {/* Phone input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">شماره موبایل</label>
              <div className="relative">
                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  inputMode="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  className={`w-full pr-12 pl-4 py-3.5 rounded-2xl border-2 outline-none transition-all text-sm font-medium text-right ${
                    errors.phone
                      ? 'border-rose-400 bg-rose-50/50 focus:border-rose-500'
                      : 'border-slate-200 bg-slate-50/50 focus:border-rose-400 focus:bg-white'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-rose-600 font-bold pr-1">{errors.phone}</p>
              )}
            </div>

            {/* Email input (optional) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                ایمیل <span className="text-slate-400 font-normal">(اختیاری)</span>
              </label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  dir="ltr"
                  className={`w-full pr-12 pl-4 py-3.5 rounded-2xl border-2 outline-none transition-all text-sm font-medium text-right ${
                    errors.email
                      ? 'border-rose-400 bg-rose-50/50 focus:border-rose-500'
                      : 'border-slate-200 bg-slate-50/50 focus:border-rose-400 focus:bg-white'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-rose-600 font-bold pr-1">{errors.email}</p>
              )}
            </div>

            {/* Password input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">رمز عبور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="حداقل ۶ کاراکتر"
                  className={`w-full pr-12 pl-12 py-3.5 rounded-2xl border-2 outline-none transition-all text-sm font-medium ${
                    errors.password
                      ? 'border-rose-400 bg-rose-50/50 focus:border-rose-500'
                      : 'border-slate-200 bg-slate-50/50 focus:border-rose-400 focus:bg-white'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-rose-600 font-bold pr-1">{errors.password}</p>
              )}
            </div>

            {/* Accept terms */}
            <button
              type="button"
              onClick={() => setAcceptTerms(!acceptTerms)}
              className="flex items-start gap-2.5 text-xs font-medium text-slate-600 text-right w-full pt-1"
            >
              <span
                className={`shrink-0 mt-0.5 w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
                  acceptTerms
                    ? 'bg-rose-600 border-rose-600'
                    : 'border-slate-300 bg-white'
                }`}
              >
                {acceptTerms && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span>
                با ایجاد حساب کاربری،{' '}
                <span className="text-rose-600 font-bold">قوانین و مقررات</span> و{' '}
                <span className="text-rose-600 font-bold">سیاست حریم خصوصی</span> فروشگاه خوش لبخند را می‌پذیرم.
              </span>
            </button>
            {errors.terms && (
              <p className="text-xs text-rose-600 font-bold pr-1 -mt-2">{errors.terms}</p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-l from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-rose-300 flex items-center justify-center gap-2 text-sm mt-2"
            >
              <UserPlus className="w-5 h-5" />
              ثبت‌نام در خوش لبخند
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">یا</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Login CTA */}
          <button
            onClick={onNavigateToLogin}
            className="w-full bg-white border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50 text-rose-600 font-bold py-3.5 rounded-2xl transition-all text-sm"
          >
            ورود به حساب کاربری موجود
          </button>
        </div>

        {/* Right side (RTL): Welcome / benefits panel */}
        <div className="relative hidden lg:flex flex-col justify-between p-10 bg-gradient-to-bl from-rose-600 via-pink-600 to-rose-700 text-white overflow-hidden order-1 lg:order-2">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white/10 rounded-full blur-2xl" />

          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>کلوپ زیبایی خوش لبخند</span>
            </div>
            <h2 className="text-3xl font-black leading-tight">
              به جمع اعضای کلوپ<br />
              زیبایی بپیوندید
            </h2>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              ثبت‌نام در خوش لبخند فقط چند ثانیه طول می‌کشد و دست شما را برای بهره‌مندی از خدمات ویژه باز می‌گذارد.
            </p>
          </div>

          <div className="relative space-y-4 mt-10">
            {[
              { icon: Percent, text: 'تخفیف ۲۰٪ روی اولین سفارش بعد از ثبت‌نام' },
              { icon: Gift, text: 'دریافت هدیه ویژه در ماه تولد اعضای کلوپ' },
              { icon: CheckCircle2, text: 'پیگیری سفارش‌ها و مدیریت آسان آدرس‌ها' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-white/95">
                <div className="shrink-0 w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
