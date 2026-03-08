import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface StoryViewerProps {
  items: { id: string | number; imageUrl: string; title?: string }[];
  initialIndex?: number;
  onClose: () => void;
}

export default function StoryViewer({
  items,
  initialIndex = 0,
  onClose,
}: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < items.length - 1) {
            setCurrentIndex((c) => c + 1);
            return 0;
          } else {
            clearInterval(timer);
            onClose();
            return 100;
          }
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [currentIndex, items.length, onClose]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-md h-[90vh] sm:h-[80vh] bg-neutral-900 sm:rounded-lg overflow-hidden flex flex-col">
        {/* Progress Bars */}
        <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-20">
          {items.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-white transition-all duration-75 ease-linear"
                style={{
                  width:
                    idx === currentIndex
                      ? `${progress}%`
                      : idx < currentIndex
                        ? "100%"
                        : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-4 left-0 right-0 p-4 z-20 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden border border-neutral-600">
            <img
              src={items[currentIndex].imageUrl}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-white font-semibold text-sm shadow-sm">
            {items[currentIndex].title || "Story"}
          </span>
          <span className="text-white/70 text-xs shadow-sm">2h</span>
        </div>

        {/* Image */}
        <img
          src={items[currentIndex].imageUrl}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Navigation Areas */}
        <div
          className="absolute inset-y-0 left-0 w-1/3 z-10 cursor-pointer"
          onClick={handlePrev}
        />
        <div
          className="absolute inset-y-0 right-0 w-2/3 z-10 cursor-pointer"
          onClick={handleNext}
        />

        {/* Nav Buttons (Desktop) */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 p-1 rounded-full text-white z-30 hover:bg-white/40 hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-1 rounded-full text-white z-30 hover:bg-white/40 hidden sm:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
