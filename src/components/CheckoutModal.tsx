import React, { useState } from 'react';
import { CartItem } from '../types';
import { formatPrice } from '../utils/formatters';
import confetti from 'canvas-confetti';
import { 
  X, CheckCircle, MapPin, CreditCard, ShieldCheck 
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [address, setAddress] = useState('تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج زیبایی خوش لبخند، واحد ۴۰۲');
  const [fullName, setFullName] = useState('سارا محمدی');
  const [phone, setPhone] = useState('۰۹۱۲۳۴۵۶۷۸۹');
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');
  const [orderTrackingId, setOrderTrackingId] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingCode = `KHL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderTrackingId(trackingCode);
    setStep('success');

    // Fire Confetti!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-100 p-6 animate-scale-in">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center font-black">
              خ
            </div>
            <div>
              <h2 className="font-black text-slate-800 text-base">تسویه حساب و تکمیل خرید</h2>
              <span className="text-xs text-slate-400">فروشگاه آنلاین زیبایی خوش لبخند</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleFinalSubmit} className="space-y-6">
            
            {/* Step 1: Delivery Address */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>۱. آدرس تحویل سفارش</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 mb-1 block">نام و نام خانوادگی گیرنده:</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:bg-white focus:border-rose-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-600 mb-1 block">شماره موبایل گیرنده:</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:bg-white focus:border-rose-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 mb-1 block">آدرس دقیق پستی:</label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:bg-white focus:border-rose-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Step 2: Payment Options */}
            <div className="space-y-3 border-t border-slate-100 pt-4">
              <h3 className="text-xs font-bold text-slate-700 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-rose-600" />
                <span>۲. روش پرداخت</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  onClick={() => setPaymentMethod('online')}
                  className={`p-3.5 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                    paymentMethod === 'online'
                      ? 'border-rose-600 bg-rose-50/60 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'online'}
                    onChange={() => setPaymentMethod('online')}
                    className="accent-rose-600"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-800">پرداخت اینترنتی کارت‌های شتاب</div>
                    <div className="text-[10px] text-slate-500">درگاه شتاب بانکی (بانک سامان / ملت)</div>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-rose-600 bg-rose-50/60 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-rose-600"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-800">پرداخت در محل (تهران)</div>
                    <div className="text-[10px] text-slate-500">پرداخت با کارتخوان هنگام تحویل</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Summary & Submit */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>تعداد اقلام سفارش:</span>
                <span>{cartItems.length} کالا</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-800 border-t border-slate-200 pt-2">
                <span>مبلغ نهایی پرداختی:</span>
                <span className="text-rose-600">{formatPrice(totalAmount)}</span>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-3.5 rounded-2xl shadow-xl shadow-rose-200 flex items-center justify-center gap-2 text-sm transition-all hover:scale-[1.01]"
              >
                <ShieldCheck className="w-5 h-5 text-amber-300" />
                <span>پرداخت و نهایی‌سازی سفارش</span>
              </button>
            </div>

          </form>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-5 animate-scale-up">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-100">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-800">
                سفارش شما با موفقیت ثبت شد!
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                از اعتماد و خرید شما از خوش لبخند متشکریم. پیامک تایید سفارش ارسال گردید.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-sm mx-auto space-y-2 text-xs">
              <div className="flex justify-between font-bold text-slate-700">
                <span>کد پیگیری سفارش:</span>
                <span className="text-rose-600 font-mono text-sm">{orderTrackingId}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>گیرنده:</span>
                <span className="font-bold text-slate-800">{fullName}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>زمان تخمینی تحویل:</span>
                <span className="font-bold text-emerald-600">فردا بین ساعت ۱۰ الی ۱۶</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-8 py-3 rounded-xl shadow-md transition-colors"
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
