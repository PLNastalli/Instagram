import { useState } from "react";
import { profileData } from "../data";
import StoryViewer from "./StoryViewer";

export default function Highlights() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 mb-8 px-4 md:px-0 scrollbar-hide">
      {profileData.highlights.map((highlight, index) => (
        <div
          key={highlight.id}
          className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group"
          onClick={() => setActiveStoryIndex(index)}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] border border-neutral-800 group-hover:border-neutral-600 transition-colors">
            <img
              src={highlight.imageUrl}
              alt={highlight.title}
              className="w-full h-full rounded-full object-cover border-2 border-black"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xs md:text-sm font-medium text-neutral-300">
            {highlight.title}
          </span>
        </div>
      ))}
      {activeStoryIndex !== null && (
        <StoryViewer
          items={profileData.highlights}
          initialIndex={activeStoryIndex}
          onClose={() => setActiveStoryIndex(null)}
        />
      )}
    </div>
  );
}
