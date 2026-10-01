import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, ArrowLeft } from 'lucide-react';
import { heroLipstickArt, heroSerum, heroPerfume } from '../assets/images';
import { toPersianDigits } from '../utils/formatters';

interface HeroBannerProps {
  onNavigateStore: (categorySlug?: string) => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    badge: 'تخفیف ویژه جشنواره',
    title: 'جشنواره رژ لب و آرایش لب',
    subtitle: 'تا ۷۰٪ تخفیف روی انواع رژ لب‌های مخملی کالیستا و مای، تجربه‌ای از نرمی بی‌نظیر روی لب‌های شما',
    buttonText: 'مشاهده و خرید رژلب‌ها',
    categorySlug: 'solid-lipstick',
    image: heroLipstickArt,
    overlay: 'bg-gradient-to-r from-rose-950/85 via-rose-900/50 to-pink-700/10',
    glow: 'bg-rose-300/30',
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
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

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

  // Touch swipe support: horizontal drag switches slides (RTL aware),
  // while vertical scrolls the page normally.
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Ignore mostly-vertical gestures so page scroll isn't hijacked
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
      if (deltaX < 0) {
        handlePrev(); // swiping left (finger right→left) → previous slide in RTL
      } else {
        handleNext(); // swiping right → next slide in RTL
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div
        className="relative h-[460px] sm:h-[540px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-rose-900/20 group select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
              <>
                {/* Background image with Ken Burns effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full object-cover object-center ${isActive ? 'animate-kenburns' : 'scale-105'}`}
                  />
                </div>

                {/* Gradient overlays for text readability */}
                <div className={`absolute inset-0 ${slide.overlay}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Extra centered-text readability shade on mobile/tablet */}
                <div className="absolute inset-0 bg-black/25 lg:hidden" />

                {/* Decorative floating glow orbs */}
                <div className={`absolute top-12 left-20 w-48 h-48 rounded-full blur-3xl animate-hero-float ${slide.glow} pointer-events-none`} />
                <div
                  className={`absolute bottom-20 left-1/3 w-32 h-32 rounded-full blur-2xl animate-hero-float ${slide.glow} pointer-events-none`}
                  style={{ animationDelay: '1.8s' }}
                />
              </>

              {/* Slide content */}
              <div className="relative h-full flex items-center justify-center text-center p-5 pb-16 sm:p-10 sm:pb-12 lg:p-14 lg:items-end lg:justify-start lg:text-right">
                <div className="max-w-sm sm:max-w-2xl space-y-2.5 sm:space-y-5">
                  <span
                    className={`inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border border-white/25 transition-opacity duration-300 ${
                      isActive ? 'animate-hero-content' : 'opacity-0'
                    }`}
                    style={isActive ? { animationDelay: '0.05s' } : undefined}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    {slide.badge}
                  </span>

                  <h2
                    className={`text-xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight text-white drop-shadow-lg transition-opacity duration-300 ${
                      isActive ? 'animate-hero-content' : 'opacity-0'
                    }`}
                    style={isActive ? { animationDelay: '0.15s' } : undefined}
                  >
                    {slide.title}
                  </h2>

                  <p
                    className={`text-[11px] sm:text-base lg:text-lg text-white/85 font-medium leading-relaxed max-w-sm sm:max-w-lg drop-shadow transition-opacity duration-300 ${
                      isActive ? 'animate-hero-content' : 'opacity-0'
                    }`}
                    style={isActive ? { animationDelay: '0.28s' } : undefined}
                  >
                    {slide.subtitle}
                  </p>

                  <div
                    className={`flex items-center justify-center gap-3 sm:gap-4 pt-0.5 sm:pt-2 transition-opacity duration-300 lg:justify-start ${
                      isActive ? 'animate-hero-content' : 'opacity-0'
                    }`}
                    style={isActive ? { animationDelay: '0.42s' } : undefined}
                  >
                    <button
                      onClick={() => onNavigateStore(slide.categorySlug)}
                      className="group/btn inline-flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-rose-50 text-rose-700 font-bold text-[11px] sm:text-base px-3.5 sm:px-7 py-2 sm:py-3.5 rounded-2xl shadow-xl shadow-black/25 transition-all hover:scale-105 active:scale-95"
                    >
                      {slide.buttonText}
                      <ArrowLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform group-hover/btn:-translate-x-1" />
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
