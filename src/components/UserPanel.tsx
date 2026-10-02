import React, { useState } from 'react';
import { CartItem, OrderRecord, Product } from '../types';
import { formatPrice, toPersianDigits } from '../utils/formatters';
import { ProductCard } from './ProductCard';
import {
  ShoppingCart, Heart, User, LogOut, Package,
  Trash2, Plus, Minus, ArrowLeft, Truck
} from 'lucide-react';

interface UserPanelProps {
  userName: string;
  isLoggedIn: boolean;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, colorName?: string) => void;
  onRemoveItem: (productId: string, colorName?: string) => void;
  orders: OrderRecord[];
  wishlistIds: string[];
  wishlistProducts: Product[];
  onToggleWishlist: (productId: string, e?: React.MouseEvent) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onProceedToCheckout: () => void;
  onNavigateToStore: () => void;
  onNavigateToLogin: () => void;
  onLogout: () => void;
  defaultSection?: 'cart' | 'orders' | 'wishlist';
}

const STATUS_STYLES: Record<OrderRecord['status'], string> = {
  'در حال پردازش': 'bg-amber-100 text-amber-700',
  'در حال ارسال': 'bg-blue-100 text-blue-700',
  'تحویل داده شده': 'bg-emerald-100 text-emerald-700'
};

export const UserPanel: React.FC<UserPanelProps> = ({
  userName,
  isLoggedIn,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  orders,
  wishlistIds,
  wishlistProducts,
  onToggleWishlist,
  onSelectProduct,
  onAddToCart,
  onProceedToCheckout,
  onNavigateToStore,
  onNavigateToLogin,
  onLogout,
  defaultSection = 'cart'
}) => {
  const [section, setSection] = useState<'cart' | 'orders' | 'wishlist'>(defaultSection);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shippingFee = subtotal >= 500000 || subtotal === 0 ? 0 : 45000;
  const finalTotal = subtotal + shippingFee;
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const tabs = [
    { id: 'cart' as const, label: 'سبد خرید', icon: ShoppingCart, count: totalCartCount },
    { id: 'orders' as const, label: 'خریداری شده', icon: Package, count: orders.length },
    { id: 'wishlist' as const, label: 'علاقه‌مندی‌ها', icon: Heart, count: wishlistIds.length }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 space-y-6 animate-fade-in">
      {/* Page Title */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-black text-slate-800 flex items-center gap-2">
          <User className="w-6 h-6 text-rose-600" />
          <span>پنل کاربری خوش لبخند</span>
        </h1>
        <p className="text-xs text-slate-400 font-medium mt-1">
          مدیریت سبد خرید، سفارش‌های شما و لیست علاقه‌مندی‌هایتان
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-4">
          {/* Profile card */}
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-rose-200">
              {userName.charAt(0)}
            </div>
            <h3 className="font-black text-slate-800 mt-3 text-sm">سلام، {userName}</h3>
            <p className="text-[11px] text-slate-400 font-medium mt-0.5">مشتری ویژه خوش لبخند</p>

            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-100 rounded-xl py-2.5 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                خروج از حساب کاربری
              </button>
            ) : (
              <button
                onClick={onNavigateToLogin}
                className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-gradient-to-l from-rose-600 to-pink-600 rounded-xl py-2.5 transition-colors hover:from-rose-700 hover:to-pink-700"
              >
                <LogOut className="w-4 h-4" />
                ورود به حساب کاربری
              </button>
            )}
          </div>

          {/* Navigation tabs */}
          <nav className="bg-white rounded-3xl p-3 border border-slate-100 shadow-sm space-y-1.5">
            {tabs.map((tab) => {
              const active = section === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSection(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    active
                      ? 'bg-gradient-to-l from-rose-600 to-pink-600 text-white shadow-md shadow-rose-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <tab.icon className={`w-5 h-5 ${active ? 'text-white' : 'text-rose-500'}`} />
                    {tab.label}
                  </span>
                  {tab.count > 0 && (
                    <span
                      className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                        active ? 'bg-white/25 text-white' : 'bg-rose-100 text-rose-600'
                      }`}
                    >
                      {toPersianDigits(tab.count)}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Support card */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-5 border border-rose-100">
            <div className="flex items-center gap-2 text-rose-600 font-black text-sm">
              <Truck className="w-5 h-5" />
              ارسال رایگان
            </div>
            <p className="text-[11px] text-slate-500 font-medium mt-1.5 leading-relaxed">
              برای سفارش‌های بالای ۵۰۰ هزار تومان، هزینه ارسال رایگان است.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-5">
          {/* ===== Cart Section ===== */}
          {section === 'cart' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-rose-600" />
                  سبد خرید من
                </h2>
                {cartItems.length > 0 && (
                  <span className="text-xs text-slate-400 font-medium">
                    {toPersianDigits(cartItems.length)} عنوان کالا
                  </span>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
                  <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="font-bold text-slate-700">سبد خرید شما خالی است</h3>
                  <p className="text-xs text-slate-400">
                    محصولات دلخواهتان را به سبد خرید اضافه کنید تا اینجا مشاهده کنید.
                  </p>
                  <button
                    onClick={onNavigateToStore}
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-colors"
                  >
                    مشاهده فروشگاه
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Items list */}
                  <div className="md:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm divide-y divide-slate-100">
                    {cartItems.map((item) => (
                      <div
                        key={`${item.product.id}-${item.selectedColor?.name ?? 'default'}`}
                        className="p-4 flex items-center gap-4"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-20 h-20 object-contain rounded-2xl bg-slate-50 p-1.5 border border-slate-100 shrink-0 cursor-pointer"
                          onClick={() => onSelectProduct(item.product)}
                        />
                        <div className="flex-1 min-w-0">
                          <h4
                            className="font-bold text-slate-800 text-sm leading-snug cursor-pointer hover:text-rose-600 transition-colors line-clamp-2"
                            onClick={() => onSelectProduct(item.product)}
                          >
                            {item.product.title}
                          </h4>
                          {item.selectedColor && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium mt-1">
                              <span
                                className="w-3 h-3 rounded-full border border-slate-200"
                                style={{ backgroundColor: item.selectedColor.hex }}
                              />
                              {item.selectedColor.name}
                            </span>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1.5 bg-slate-50 rounded-xl p-1">
                              <button
                                onClick={() =>
                                  onUpdateQuantity(
                                    item.product.id,
                                    item.quantity + 1,
                                    item.selectedColor?.name
                                  )
                                }
                                className="w-6 h-6 rounded-lg bg-white hover:bg-rose-50 hover:text-rose-600 text-slate-600 flex items-center justify-center transition-colors border border-slate-100"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-black text-slate-800 w-6 text-center">
                                {toPersianDigits(item.quantity)}
                              </span>
                              <button
                                onClick={() =>
                                  onUpdateQuantity(
                                    item.product.id,
                                    item.quantity - 1,
                                    item.selectedColor?.name
                                  )
                                }
                                className="w-6 h-6 rounded-lg bg-white hover:bg-rose-50 hover:text-rose-600 text-slate-600 flex items-center justify-center transition-colors border border-slate-100"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <span className="text-sm font-black text-rose-600">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedColor?.name)}
                          className="p-2 rounded-xl text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition-colors shrink-0"
                          title="حذف از سبد"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Price summary */}
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 h-fit space-y-3 sticky top-24">
                    <h3 className="font-black text-slate-800 text-sm border-b border-slate-100 pb-3">
                      خلاصه سفارش
                    </h3>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>جمع کل کالاها:</span>
                        <span className="font-bold text-slate-800">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>هزینه ارسال:</span>
                        {shippingFee === 0 ? (
                          <span className="text-emerald-600 font-bold">رایگان</span>
                        ) : (
                          <span className="font-bold text-slate-800">{formatPrice(shippingFee)}</span>
                        )}
                      </div>
                      {subtotal < 500000 && subtotal > 0 && (
                        <p className="text-[11px] text-amber-600 font-medium bg-amber-50 rounded-lg p-2 leading-relaxed">
                          با {formatPrice(500000 - subtotal)} خرید بیشتر، ارسال سفارش رایگان می‌شود!
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between text-sm font-black text-slate-800 border-t border-slate-200 pt-3">
                      <span>مبلغ قابل پرداخت:</span>
                      <span className="text-rose-600">{formatPrice(finalTotal)}</span>
                    </div>
                    <button
                      onClick={onProceedToCheckout}
                      className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-rose-200 flex items-center justify-center gap-2 text-sm transition-all hover:scale-[1.01]"
                    >
                      <span>ادامه ثبت سفارش</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===== Orders Section ===== */}
          {section === 'orders' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Package className="w-5 h-5 text-rose-600" />
                  سفارش‌های من
                </h2>
                {orders.length > 0 && (
                  <span className="text-xs text-slate-400 font-medium">
                    {toPersianDigits(orders.length)} سفارش ثبت شده
                  </span>
                )}
              </div>

              {orders.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
                  <Package className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="font-bold text-slate-700">هنوز سفارشی ثبت نکرده‌اید</h3>
                  <p className="text-xs text-slate-400">
                    پس از تکمیل اولین خریدتان، جزئیات سفارش‌ها اینجا نمایش داده می‌شود.
                  </p>
                  <button
                    onClick={onNavigateToStore}
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-colors"
                  >
                    شروع خرید
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                    >
                      {/* Order header */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-4 bg-slate-50/70 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="font-black text-slate-800 text-sm">
                            کد سفارش: {toPersianDigits(order.id)}
                          </span>
                          <span
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${STATUS_STYLES[order.status]}`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-medium">
                          تاریخ ثبت: {order.date}
                        </span>
                      </div>

                      {/* Order items */}
                      <div className="p-4 space-y-3">
                        {order.items.map((item) => (
                          <div
                            key={`${item.product.id}-${item.selectedColor?.name ?? 'default'}`}
                            className="flex items-center gap-3"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.title}
                              className="w-14 h-14 object-contain rounded-xl bg-slate-50 p-1 border border-slate-100 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-slate-700 text-xs leading-snug line-clamp-1">
                                {item.product.title}
                              </h4>
                              <span className="text-[11px] text-slate-400 font-medium">
                                {toPersianDigits(item.quantity)} عدد
                                {item.selectedColor ? ` • ${item.selectedColor.name}` : ''}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-slate-700 shrink-0">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Order footer */}
                      <div className="flex items-center justify-between p-4 bg-slate-50/70 border-t border-slate-100">
                        <span className="text-[11px] text-slate-400 font-medium">
                          مجموع {toPersianDigits(order.items.reduce((a, i) => a + i.quantity, 0))} کالا
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-slate-400 font-medium">مبلغ کل:</span>
                          <span className="text-sm font-black text-rose-600">
                            {formatPrice(order.total)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ===== Wishlist Section ===== */}
          {section === 'wishlist' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-600" />
                  علاقه‌مندی‌های من
                </h2>
                {wishlistIds.length > 0 && (
                  <span className="text-xs text-slate-400 font-medium">
                    {toPersianDigits(wishlistIds.length)} محصول
                  </span>
                )}
              </div>

              {wishlistProducts.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
                  <Heart className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="font-bold text-slate-700">لیست علاقه‌مندی‌های شما خالی است</h3>
                  <p className="text-xs text-slate-400">
                    با زدن آیکن قلب روی محصولات، آن‌ها را برای مشاهده بعدی اینجا ذخیره کنید.
                  </p>
                  <button
                    onClick={onNavigateToStore}
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-colors"
                  >
                    مشاهده فروشگاه
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {wishlistProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={onAddToCart}
                      onSelectProduct={onSelectProduct}
                      onToggleWishlist={onToggleWishlist}
                      isWishlisted={true}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

