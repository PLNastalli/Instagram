import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Music,
} from "lucide-react";
import PostOptionsModal from "./PostOptionsModal";

interface ReelViewerProps {
  reels: { id: string | number; imageUrl: string; views?: string }[];
  initialIndex: number;
  onClose: () => void;
}

export default function ReelViewer({ reels, initialIndex, onClose }: ReelViewerProps) {
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>({});
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const reelHeight = containerRef.current.clientHeight;
      containerRef.current.scrollTop = reelHeight * initialIndex;
    }
  }, [initialIndex]);

  const toggleLike = (id: string | number) => {
    setIsLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative flex items-end justify-center h-[100vh] sm:h-[90vh] max-w-md w-full overflow-hidden">
        <div ref={containerRef} className="w-full h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide flex flex-col">
          {reels.map((reel, index) => (
            <div key={reel.id} className="w-full h-full flex-shrink-0 snap-start relative flex items-center justify-center">
              {/* Reel Video/Image Container */}
              <div className="relative w-full h-full bg-neutral-900 sm:rounded-xl overflow-hidden shadow-2xl sm:border border-neutral-800">
                <img
                  src={reel.imageUrl}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none" />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-16 p-4 z-20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden border border-neutral-600">
                      <img
                        src="https://picsum.photos/seed/avatar/100/100"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-white font-semibold text-sm">
                      PLNastalli
                    </span>
                    <button className="border border-white text-white text-xs px-3 py-1.5 rounded-lg font-semibold ml-2 hover:bg-white hover:text-black transition-colors">
                      Follow
                    </button>
                  </div>
                  <p className="text-white text-sm mb-3 line-clamp-2">
                    Check out this amazing reel! 🔥 #trending #viral #explore
                  </p>
                  <div className="flex items-center gap-2 text-white text-xs bg-white/20 w-max px-3 py-1.5 rounded-full backdrop-blur-md">
                    <Music className="w-3 h-3" />
                    <span>Original Audio - PLNastalli</span>
                  </div>
                </div>
              </div>

              {/* Right Actions Bar */}
              <div className="absolute bottom-4 right-2 sm:-right-16 flex flex-col items-center gap-6 z-20">
                <div className="flex flex-col items-center gap-1">
                  <button
                    onClick={() => toggleLike(reel.id)}
                    className="p-2 bg-black/20 sm:bg-neutral-900/50 rounded-full hover:bg-neutral-800 transition-colors backdrop-blur-sm"
                  >
                    <Heart
                      className={`w-7 h-7 ${isLiked[reel.id] ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </button>
                  <span className="text-white text-xs font-semibold drop-shadow-md">
                    {isLiked[reel.id] ? "124K" : "123K"}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button className="p-2 bg-black/20 sm:bg-neutral-900/50 rounded-full hover:bg-neutral-800 transition-colors backdrop-blur-sm">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </button>
                  <span className="text-white text-xs font-semibold drop-shadow-md">
                    4,321
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button className="p-2 bg-black/20 sm:bg-neutral-900/50 rounded-full hover:bg-neutral-800 transition-colors backdrop-blur-sm">
                    <Send className="w-7 h-7 text-white" />
                  </button>
                  <span className="text-white text-xs font-semibold drop-shadow-md">
                    Share
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button className="p-2 bg-black/20 sm:bg-neutral-900/50 rounded-full hover:bg-neutral-800 transition-colors backdrop-blur-sm">
                    <Bookmark className="w-7 h-7 text-white" />
                  </button>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button 
                    className="p-2 bg-black/20 sm:bg-neutral-900/50 rounded-full hover:bg-neutral-800 transition-colors backdrop-blur-sm"
                    onClick={() => setIsOptionsModalOpen(true)}
                  >
                    <MoreHorizontal className="w-7 h-7 text-white" />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-md overflow-hidden border-2 border-white mt-2 shadow-lg">
                  <img
                    src={reel.imageUrl}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PostOptionsModal 
        isOpen={isOptionsModalOpen} 
        onClose={() => setIsOptionsModalOpen(false)} 
      />
    </div>
  );
}
