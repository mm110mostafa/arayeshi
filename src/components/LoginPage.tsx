import React, { useState } from 'react';
import {
  LogIn, Eye, EyeOff, Phone, Lock, ArrowRight, Sparkles,
  ShieldCheck, Gift, Truck, User
} from 'lucide-react';

interface LoginPageProps {
  onLogin: (name?: string) => void;
  onNavigateToRegister: () => void;
  onBack: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  onNavigateToRegister,
  onBack
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; phone?: string; password?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'نام و نام خانوادگی خود را وارد کنید.';
    }
    if (!phone.trim()) {
      newErrors.phone = 'شماره موبایل یا ایمیل خود را وارد کنید.';
    }
    if (!password.trim()) {
      newErrors.password = 'رمز عبور خود را وارد کنید.';
    } else if (password.trim().length < 6) {
      newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد.';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onLogin(name.trim());
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-10 sm:py-16 overflow-hidden font-vazir animate-fade-in">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl shadow-rose-200/50 border border-rose-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Right side (RTL): Branding panel */}
        <div className="relative hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 text-white overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-white/10 rounded-full blur-2xl" />

          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>فروشگاه اینترنتی خوش لبخند</span>
            </div>
            <h2 className="text-3xl font-black leading-tight">
              به دنیای زیبایی و سلامت<br />
              خوش آمدید
            </h2>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              با ورود به حساب کاربری خود می‌توانید از پیشنهادات اختصاصی، سفارش‌های سریع‌تر و لیست علاقه‌مندی‌های خود لذت ببرید.
            </p>
          </div>

          <div className="relative space-y-4 mt-10">
            {[
              { icon: Truck, text: 'ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان' },
              { icon: Gift, text: 'تخفیف ۲۰٪ ویژه اولین خرید اعضای کلوپ زیبایی' },
              { icon: ShieldCheck, text: 'ضمانت اصالت کالا و پرداخت امن' }
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

        {/* Left side (RTL): Login form */}
        <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
          {/* Back button */}
          <button
            onClick={onBack}
            className="self-start flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors mb-6"
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت به صفحه اصلی
          </button>

          <div className="space-y-2 mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800">ورود به حساب کاربری</h1>
            <p className="text-sm text-slate-500 font-medium">
              حساب کاربری ندارید؟{' '}
              <button
                onClick={onNavigateToRegister}
                className="text-rose-600 font-bold hover:text-rose-700 transition-colors"
              >
                ثبت‌نام کنید
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name input */}
            <div className="space-y-2">
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

            {/* Phone / Email input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">شماره موبایل یا ایمیل</label>
              <div className="relative">
                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                  className={`w-full pr-12 pl-4 py-3.5 rounded-2xl border-2 outline-none transition-all text-sm font-medium ${
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

            {/* Password input */}
            <div className="space-y-2">
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

            {/* Remember & forgot password */}
            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center gap-2 font-medium text-slate-600"
              >
                <span
                  className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
                    rememberMe
                      ? 'bg-rose-600 border-rose-600'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {rememberMe && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                مرا به خاطر بسپار
              </button>
              <button
                type="button"
                className="font-bold text-rose-600 hover:text-rose-700 transition-colors"
              >
                فراموشی رمز عبور
              </button>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-l from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-rose-300 flex items-center justify-center gap-2 text-sm"
            >
              <LogIn className="w-5 h-5" />
              ورود به حساب
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">یا</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Register CTA */}
          <button
            onClick={onNavigateToRegister}
            className="w-full bg-white border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50 text-rose-600 font-bold py-3.5 rounded-2xl transition-all text-sm"
          >
            ایجاد حساب کاربری جدید
          </button>

          <p className="text-center text-[11px] text-slate-400 font-medium mt-6 leading-relaxed">
            با ورود به حساب کاربری، شرایط و قوانین استفاده از خدمات فروشگاه خوش لبخند را می‌پذیرید.
          </p>
        </div>
      </div>
    </div>
  );
};
