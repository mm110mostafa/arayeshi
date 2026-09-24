import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, ArrowLeft } from 'lucide-react';
import { heroSerum, heroPerfume, productLipstickVelvet } from '../assets/images';
import { toPersianDigits } from '../utils/formatters';

interface HeroBannerProps {
  onNavigateStore: (categorySlug?: string) => void;
}

/**
 * Custom designed poster for the Lipstick Festival slide.
 * A rich gradient stage with a glassy product showcase so it's unmistakably
 * a lipstick promotion — no plain background photo needed.
 */
const LipstickPoster: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Rich rose gradient stage */}
    <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-rose-800 to-pink-600" />
    <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-rose-900/20 to-pink-300/10" />

    {/* Decorative glow orbs */}
    <div className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-rose-400/30 blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-pink-300/25 blur-3xl" />

    {/* Giant soft lipstick silhouette rings on the left */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-white/10 pointer-events-none" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/10 pointer-events-none" />

    {/* Floating swatch chips */}
    <div className="absolute top-1/4 right-6 sm:right-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-rose-950 shadow-2xl ring-4 ring-white/20 animate-hero-float hidden sm:block" />
    <div
      className="absolute bottom-28 right-14 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-rose-500 shadow-xl ring-4 ring-white/20 animate-hero-float hidden sm:block"
      style={{ animationDelay: '1.4s' }}
    />
    <div
      className="absolute top-1/2 right-24 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-pink-200 shadow-lg ring-4 ring-white/15 animate-hero-float hidden md:block"
      style={{ animationDelay: '2.2s' }}
    />

    {/* Product showcase card (left side so it doesn't overlap the RTL text) */}
    <div
      className={`absolute top-1/2 -translate-y-1/2 left-4 sm:left-10 lg:left-20 w-[44%] max-w-[340px] transition-all duration-700 ease-out hidden sm:block ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={isActive ? { transitionDelay: '0.25s' } : undefined}
    >
      <div className="relative">
        {/* Glow behind product */}
        <div className="absolute inset-0 -m-6 rounded-[2rem] bg-white/20 blur-2xl" />
        <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/30 shadow-2xl shadow-rose-950/60 bg-white/10 backdrop-blur-sm">
          <img
            src={productLipstickVelvet}
            alt="رژ لب مخملی"
            className="w-full h-[200px] sm:h-[280px] lg:h-[340px] object-cover"
          />
          {/* Discount badge */}
          <div className="absolute top-3 right-3 flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-lg ring-2 ring-white/40">
            <span className="text-lg sm:text-xl font-black leading-none">۷۰٪</span>
            <span className="text-[9px] sm:text-[10px] font-bold">تخفیف</span>
          </div>
        </div>
        {/* Feature chips under the card */}
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 justify-center">
          {['مخملی', 'ماندگار', 'آبرسان'].map((tag) => (
            <span
              key={tag}
              className="bg-white/15 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-white/25"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const HERO_SLIDES = [
  {
    id: 1,
    poster: true as const,
    badge: 'تخفیف ویژه جشنواره',
    title: 'جشنواره رژ لب و آرایش لب',
    subtitle: 'تا ۷۰٪ تخفیف روی انواع رژ لب‌های مخملی کالیستا و مای، تجربه‌ای از نرمی بی‌نظیر روی لب‌های شما',
    buttonText: 'مشاهده و خرید رژلب‌ها',
    categorySlug: 'solid-lipstick',
  },
  {
    id: 2,
    badge: 'برند اورجینال وارداتی',
    title: 'درخشش و شادابی پوست',
    subtitle: 'آبرسانی عمیق ۷۲ ساعته با هیالورونیک اسید لورآل پاریس، پوستی شفاف، شاداب و جوان',
    buttonText: 'کشف راز جوان‌سازی',
    categorySlug: 'serums',
    image: heroSerum,
    overlay: 'bg-gradient-to-r from-pink-950/80 via-pink-900/45 to-pink-600/5',
    glow: 'bg-pink-300/25',
  },
  {
    id: 3,
    badge: 'ضمانت اصالت ۱۰۰٪',
    title: 'کلکسیون عطرهای لاکچری',
    subtitle: 'ماندگاری طولانی با خط بوی جادویی ویژه بانوان و آقایان، انتخابی ماندگار و به یاد ماندنی',
    buttonText: 'انتخاب عطر اختصاصی',
    categorySlug: 'women-perfume',
    image: heroPerfume,
    overlay: 'bg-gradient-to-r from-rose-950/80 via-pink-950/45 to-rose-700/5',
    glow: 'bg-amber-300/20',
  },
];

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigateStore }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="relative h-[460px] sm:h-[540px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/20 group">
        {/* Slides */}
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              {slide.poster ? (
                <LipstickPoster isActive={isActive} />
              ) : (
                <>
                  {/* Background image with Ken Burns effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full object-cover ${isActive ? 'animate-kenburns' : 'scale-105'}`}
                    />
                  </div>

                  {/* Gradient overlays for text readability */}
                  <div className={`absolute inset-0 ${slide.overlay}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Decorative floating glow orbs */}
                  <div className={`absolute top-12 left-20 w-48 h-48 rounded-full blur-3xl animate-hero-float ${slide.glow} pointer-events-none`} />
                  <div
                    className={`absolute bottom-20 left-1/3 w-32 h-32 rounded-full blur-2xl animate-hero-float ${slide.glow} pointer-events-none`}
                    style={{ animationDelay: '1.8s' }}
                  />
                </>
              )}

              {/* Slide content */}
              <div className="relative h-full flex items-end p-6 sm:p-10 lg:p-14">
                <div className="max-w-2xl space-y-4 sm:space-y-5">
                  <span
                    className={`inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full border border-white/25 transition-opacity duration-300 ${
                      isActive ? 'animate-hero-content' : 'opacity-0'
                    }`}
                    style={isActive ? { animationDelay: '0.05s' } : undefined}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    {slide.badge}
                  </span>

                  <h2
                    className={`text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight text-white drop-shadow-lg transition-opacity duration-300 ${
                      isActive ? 'animate-hero-content' : 'opacity-0'
                    }`}
                    style={isActive ? { animationDelay: '0.15s' } : undefined}
                  >
                    {slide.title}
                  </h2>

                  <p
                    className={`text-sm sm:text-base lg:text-lg text-white/85 font-medium leading-relaxed max-w-lg drop-shadow transition-opacity duration-300 ${
                      isActive ? 'animate-hero-content' : 'opacity-0'
                    }`}
                    style={isActive ? { animationDelay: '0.28s' } : undefined}
                  >
                    {slide.subtitle}
                  </p>

                  <div
                    className={`flex items-center gap-3 sm:gap-4 pt-1 sm:pt-2 transition-opacity duration-300 ${
                      isActive ? 'animate-hero-content' : 'opacity-0'
                    }`}
                    style={isActive ? { animationDelay: '0.42s' } : undefined}
                  >
                    <button
                      onClick={() => onNavigateStore(slide.categorySlug)}
                      className="group/btn inline-flex items-center gap-2 bg-white hover:bg-rose-50 text-rose-700 font-bold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl shadow-xl shadow-black/25 transition-all hover:scale-105 active:scale-95"
                    >
                      {slide.buttonText}
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:-translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slider Prev/Next Arrow Buttons */}
        <button
          onClick={handlePrev}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
          aria-label="اسلاید قبلی"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
          aria-label="اسلاید بعدی"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom progress indicators */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className="relative h-2 w-10 sm:w-14 rounded-full bg-white/30 hover:bg-white/50 overflow-hidden transition-all"
              aria-label={`اسلاید ${idx + 1}`}
            >
              {currentSlide === idx && (
                <span
                  key={currentSlide}
                  className="absolute inset-0 block bg-white rounded-full animate-hero-progress"
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide counter badge */}
        <div className="absolute bottom-5 sm:bottom-7 right-6 z-30 hidden sm:flex items-center gap-1.5 bg-black/30 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
          <span className="text-white">{toPersianDigits(currentSlide + 1)}</span>
          <span className="text-white/50">/</span>
          <span className="text-white/60">{toPersianDigits(HERO_SLIDES.length)}</span>
        </div>
      </div>
    </section>
  );
};
