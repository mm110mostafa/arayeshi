import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, ChevronDown, 
  CheckCircle, MessageSquare, Headphones 
} from 'lucide-react';
import { categoryFaceMakeup } from '../assets/images';

export const ContactUsView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'مشاوره خرید محصول',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSent(true);
    setFormData({ name: '', phone: '', subject: 'مشاوره خرید محصول', message: '' });
    setTimeout(() => setIsSent(false), 5000);
  };

  const faqs = [
    {
      q: 'چگونه می‌توانم از اصالت محصولات خوش لبخند اطمینان حاصل کنم؟',
      a: 'تمام محصولات عرضه شده در خوش لبخند دارای گارانتی اصالت کالا، کد شبنم، سیب سلامت و برچسب اصالت سازمان غذا و دارو می‌باشند و مستقیما از نمایندگی‌های رسمی تامین می‌شوند.'
    },
    {
      q: 'سفارش‌ها چه زمانی تحویل داده می‌شوند؟',
      a: 'در شهر تهران ارسال‌ها به صورت اکسپرس ظرف کمتر از ۲۴ ساعت صورت می‌پذیرد. برای سایر استان‌ها نیز ارسال از طریق پست پیشتاز ظرف ۲ الی ۴ روز کاری تحویل می‌گردد.'
    },
    {
      q: 'شرایط بازگشت ۷ روزه کالا چیست؟',
      a: 'در صورت وجود هرگونه مغایرت، آسیب‌دیدگی در حمل و نقل یا اشکال در محصول، تا ۷ روز پس از دریافت می‌توانید کالا را در حالت اولیه عودت داده و وجه خود را کاملا دریافت کنید.'
    },
    {
      q: 'کد تخفیف خریداران جدید چگونه اعمال می‌شود؟',
      a: 'شما می‌توانید در مرحله تسویه حساب در سبد خرید با وارد کردن کد تخفیف SMILE20 از ۲۰٪ تخفیف اختصاصی اولین خرید بهره‌مند شوید.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12 font-vazir animate-fade-in">
      
      {/* Page Title */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-600 text-xs font-bold px-3 py-1 rounded-full">
          <Headphones className="w-4 h-4" />
          <span>ارتباط با کارشناسان خوش لبخند</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-800">
          تماس با ما و مرکز پشتیبانی
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          مشاوران آرایشی و زیبایی خوش لبخند ۲۴ ساعت شبانه‌روز آماده راهنمایی شما هستند.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Info Cards (5 columns) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3">
              اطلاعات دفتر مرکزی و فروشگاه حضوری
            </h3>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">نشانی دفتر و نمایشگاه:</div>
                  <div className="text-slate-500 mt-1 leading-relaxed">
                    تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج تجاری زیبایی خوش لبخند، طبقه ۴، واحد ۴۰۲
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">تلفن پشتیبانی ۲۴/۷:</div>
                  <div className="text-slate-500 mt-0.5 dir-ltr text-right">۰۲۱-۹۱۰۱۰۰۰۰ | ۰۲۱-۸۸۸۸۹۹۹۹</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">پست الکترونیک:</div>
                  <div className="text-slate-500 mt-0.5">info@khoshlabkhand.ir</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">ساعات کاری بخش فروشگاه حضوری:</div>
                  <div className="text-slate-500 mt-0.5">شنبه تا پنجشنبه: ۹ صبح الی ۲۱ شب</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Store Map Preview Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-lg space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-amber-400">موقعیت روی نقشه</span>
              <span>تهران، ونک</span>
            </div>
            <div className="h-32 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 text-xs border border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('${categoryFaceMakeup}')` }}></div>
              <div className="relative z-10 bg-slate-900/90 px-4 py-2 rounded-xl text-rose-400 font-bold flex items-center gap-2">
                <MapPin className="w-4 h-4 animate-bounce" />
                <span>برج زیبایی خوش لبخند</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (7 columns) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-800 text-lg">ارسال پیام یا درخواست مشاوره</h3>
            <p className="text-xs text-slate-400">فرم زیر را پر کنید، مشاوران ما ظرف کمتر از ۱ ساعت با شما تماس می‌گیرند.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">نام و نام خانوادگی:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="مثلا: مریم احمدی"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-800 focus:bg-white focus:border-rose-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">شماره تماس جهت پیگیری:</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="۰۹۱۲..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-800 focus:bg-white focus:border-rose-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">موضوع پیام:</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-800 focus:bg-white focus:border-rose-500 focus:outline-none"
              >
                <option value="مشاوره انتخاب رژلب و کرم پودر">مشاوره انتخاب رژلب و کرم پودر</option>
                <option value="پیگیری سفارش خریده شده">پیگیری سفارش خریده شده</option>
                <option value="انتقادات و پیشنهادات">انتقادات و پیشنهادات</option>
                <option value="همکاری در فروش و نمایندگی">همکاری در فروش و نمایندگی</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">متن پیام یا سوال شما:</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="سوال یا پیام خود را بنویسید..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-800 focus:bg-white focus:border-rose-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-xs px-8 py-3.5 rounded-2xl shadow-lg shadow-rose-200 flex items-center gap-2 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>ارسال پیام</span>
              </button>

              {isSent && (
                <div className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 animate-bounce">
                  <CheckCircle className="w-4 h-4" />
                  <span>پیام شما با موفقیت دریافت شد. به زودی تماس می‌گیریم.</span>
                </div>
              )}
            </div>
          </form>
        </div>

      </div>

      {/* FAQ Accordion Section */}
      <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="text-center max-w-md mx-auto space-y-1">
          <h3 className="font-black text-slate-800 text-xl flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5 text-rose-600" />
            <span>پرسش‌های متداول مشتریان</span>
          </h3>
          <p className="text-xs text-slate-500">پاسخ‌های سریع به سوالات رایج خریداران خوش لبخند</p>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full text-right p-4 font-bold text-slate-800 text-xs sm:text-sm flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="grid grid-rows-[1fr] opacity-100 animate-accordion transition-all duration-300 ease-out">
                    <div className="overflow-hidden">
                      <div className="p-4 bg-rose-50/50 border-t border-slate-100 text-xs text-slate-700 leading-relaxed font-medium">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
