import React, { useState } from 'react';
import { CartItem } from '../types';
import { formatPrice, toPersianDigits } from '../utils/formatters';
import { 
  X, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Truck 
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, colorName?: string) => void;
  onRemoveItem: (productId: string, colorName?: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingFee = subtotal >= 500000 || subtotal === 0 ? 0 : 45000;
  const freeShippingThreshold = 500000;
  const freeShippingNeeded = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const finalTotal = subtotal - discountAmount + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');

    if (promoCode.trim().toUpperCase() === 'SMILE20') {
      setDiscountPercent(20);
      setPromoSuccess('کد تخفیف ۲۰٪ با موفقیت اعمال شد!');
    } else if (promoCode.trim().toUpperCase() === 'YALDA') {
      setDiscountPercent(15);
      setPromoSuccess('کد تخفیف ۱۵٪ شب یلدا اعمال شد!');
    } else {
      setPromoError('کد تخفیف نامعتبر یا منقضی شده است.');
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs animate-overlay-in"
      />

      {/* Drawer content (Slides in from Left in RTL layout) */}
      <div
        className={`fixed inset-y-0 left-0 max-w-md w-full bg-white shadow-2xl flex flex-col z-50 transform transition-transform ease-out duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        {/* Top Header */}
        <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-sm">سبد خرید شما</h2>
              <span className="text-[11px] text-slate-400">
                ({toPersianDigits(cartItems.length)} عنوان کالا)
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-rose-50 border-b border-rose-100 p-3 space-y-1 text-xs">
          <div className="flex items-center justify-between font-bold text-slate-800">
            <span className="flex items-center gap-1 text-rose-600">
              <Truck className="w-4 h-4" />
              {freeShippingNeeded === 0
                ? '🎉 تبریک! سفارش شما شامل ارسال رایگان گردید.'
                : `فقط ${formatPrice(freeShippingNeeded)} تا ارسال رایگان!`}
            </span>
            <span className="text-slate-500">{toPersianDigits(Math.round(freeShippingProgress))}%</span>
          </div>
          <div className="w-full bg-rose-200/60 h-2 rounded-full overflow-hidden">
            <div
              className="bg-rose-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
              <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-300 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-slate-700 text-sm">سبد خرید شما خالی است</h3>
              <p className="text-xs text-slate-400 max-w-xs">
                همین حالا محصولات محبوب آرایشی و زیبایی خوش لبخند را بررسی و اضافه کنید.
              </p>
              <button
                onClick={onClose}
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-colors"
              >
                شروع خرید از فروشگاه
              </button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedColor?.name || 'default'}-${idx}`}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex gap-3 items-center shadow-xs"
              >
                {/* Product Image */}
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-16 object-contain rounded-xl bg-white p-1 border border-slate-100 shrink-0"
                />

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
                    {item.product.title}
                  </h4>
                  {item.selectedColor && (
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <span
                        className="w-2.5 h-2.5 rounded-full border"
                        style={{ backgroundColor: item.selectedColor.hex }}
                      />
                      <span>رنگ: {item.selectedColor.name}</span>
                    </div>
                  )}

                  <div className="text-xs font-black text-rose-600">
                    {formatPrice(item.product.price)}
                  </div>
                </div>

                {/* Quantity Controls & Delete */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => onRemoveItem(item.product.id, item.selectedColor?.name)}
                    className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                    title="حذف"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-1 text-xs">
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.product.id,
                          item.quantity - 1,
                          item.selectedColor?.name
                        )
                      }
                      className="w-5 h-5 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold px-1">{toPersianDigits(item.quantity)}</span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.product.id,
                          item.quantity + 1,
                          item.selectedColor?.name
                        )
                      }
                      className="w-5 h-5 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer calculation & Checkout CTA */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-3">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="کد تخفیف (تست: SMILE20)"
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 uppercase focus:outline-none focus:border-rose-500"
              />
              <button
                type="submit"
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs px-3 py-1.5 rounded-xl transition-colors"
              >
                اعمال
              </button>
            </form>

            {promoError && <div className="text-[11px] text-rose-600 font-bold">{promoError}</div>}
            {promoSuccess && <div className="text-[11px] text-emerald-600 font-bold">{promoSuccess}</div>}

            {/* Price Table Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200 pt-2">
              <div className="flex justify-between">
                <span>جمع کل کالاها:</span>
                <span className="font-bold text-slate-800">{formatPrice(subtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-rose-600 font-bold">
                  <span>تخفیف کد promo:</span>
                  <span>- {formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>هزینه ارسال:</span>
                <span className="font-bold">
                  {shippingFee === 0 ? (
                    <span className="text-emerald-600 font-bold">رایگان</span>
                  ) : (
                    formatPrice(shippingFee)
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm font-black text-slate-800 border-t border-slate-200 pt-2">
                <span>مبلغ قابل پرداخت:</span>
                <span className="text-rose-600">{formatPrice(finalTotal)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-rose-200 flex items-center justify-center gap-2 text-sm transition-all hover:scale-[1.01]"
            >
              <span>ادامه ثبت سفارش و پرداخت</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
