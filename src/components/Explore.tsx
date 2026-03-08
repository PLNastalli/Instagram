import { Heart, MessageCircle } from "lucide-react";
import { postsData } from "../data";

export default function Explore() {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4 mb-20 md:mb-8 pt-4">
      {postsData.map((post) => (
        <div
          key={`explore-${post.id}`}
          className="aspect-square relative group cursor-pointer overflow-hidden bg-neutral-900"
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-white font-bold">
              <Heart className="w-6 h-6 fill-white" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-2 text-white font-bold">
              <MessageCircle className="w-6 h-6 fill-white" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
