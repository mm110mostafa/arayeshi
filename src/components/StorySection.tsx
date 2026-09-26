import React, { useState } from 'react';
import { STORIES } from '../data/products';
import { Story } from '../types';
import { X, Sparkles, ShoppingBag } from 'lucide-react';

interface StorySectionProps {
  onSelectCategory: (slug: string) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onSelectCategory }) => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Horizontal Story Bubbles List */}
      <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
        {STORIES.map((story) => (
          <button
            key={story.id}
            onClick={() => setActiveStory(story)}
            className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none"
          >
            {/* Gradient Ring Outer */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-amber-400 via-rose-500 to-pink-600 group-hover:scale-105 transition-transform shadow-md">
              <div className="w-full h-full rounded-full p-0.5 bg-white">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Badge pill */}
            {story.badge && (
              <span className="text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded-full shadow-xs -mt-3.5 z-10">
                {story.badge}
              </span>
            )}

            <span className="text-xs font-bold text-slate-700 group-hover:text-rose-600 truncate max-w-[80px] text-center">
              {story.title}
            </span>
          </button>
        ))}
      </div>

      {/* Story Popup Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-sm bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 animate-scale-up">
            
            {/* Progress Bar Top */}
            <div className="absolute top-0 left-0 right-0 p-3 z-20 bg-gradient-to-b from-black/70 to-transparent flex gap-1">
              <div className="h-1 bg-white/40 rounded-full flex-1 overflow-hidden">
                <div className="h-full bg-rose-500 animate-pulse w-full"></div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 left-4 z-30 p-2 rounded-full bg-black/40 hover:bg-black/80 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Story Image */}
            <div className="relative h-96 w-full overflow-hidden">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            {/* Story Content Overlay */}
            <div className="p-6 relative z-10 -mt-16 space-y-3">
              <div className="inline-flex items-center gap-1 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeStory.badge || 'استوری خوش لبخند'}</span>
              </div>
              <h3 className="text-lg font-black text-white">{activeStory.contentTitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeStory.description}
              </p>

              <button
                onClick={() => {
                  onSelectCategory('face-makeup');
                  setActiveStory(null);
                }}
                className="w-full mt-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-3 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>مشاهده محصولات این پیشنهاد</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
