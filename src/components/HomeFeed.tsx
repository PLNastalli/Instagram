import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import { postsData, profileData } from "../data";
import { useState } from "react";
import StoryViewer from "./StoryViewer";
import PostOptionsModal from "./PostOptionsModal";

export default function HomeFeed() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);

  const storyItems = [
    { id: "my-story", imageUrl: profileData.avatarUrl, title: "Your story" },
    ...profileData.highlights,
  ];

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="max-w-xl mx-auto pb-20 md:pb-8 pt-4">
      {/* Stories / Highlights bar for Home Feed */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-6 px-4 scrollbar-hide border-b border-neutral-800">
        <div
          className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer"
          onClick={() => setActiveStoryIndex(0)}
        >
          <div className="w-16 h-16 rounded-full p-[2px] border-2 border-neutral-800 relative">
            <img
              src={profileData.avatarUrl}
              alt="Your story"
              className="w-full h-full rounded-full object-cover border-2 border-black"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full border-2 border-black w-5 h-5 flex items-center justify-center text-white text-xs font-bold">
              +
            </div>
          </div>
          <span className="text-xs text-neutral-400">Your story</span>
        </div>
        {profileData.highlights.map((highlight, index) => (
          <div
            key={highlight.id}
            className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer"
            onClick={() => setActiveStoryIndex(index + 1)}
          >
            <div className="w-16 h-16 rounded-full p-[2px] border-2 border-pink-500">
              <img
                src={highlight.imageUrl}
                alt={highlight.title}
                className="w-full h-full rounded-full object-cover border-2 border-black"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs text-neutral-300">{highlight.title}</span>
          </div>
        ))}
      </div>

      {/* Feed Posts */}
      <div className="flex flex-col gap-8">
        {postsData.map((post) => {
          const isLiked = likedPosts.has(post.id);
          return (
            <article key={post.id} className="border-b border-neutral-800 pb-6">
              {/* Post Header */}
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-3 cursor-pointer">
                  <img
                    src={profileData.avatarUrl}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-semibold text-sm">
                    {profileData.username}
                  </span>
                  <span className="text-neutral-500 text-sm">
                    • {post.date.toLowerCase()}
                  </span>
                </div>
                <MoreHorizontal 
                  className="w-5 h-5 cursor-pointer text-neutral-400 hover:text-white" 
                  onClick={() => setIsOptionsModalOpen(true)}
                />
              </div>

              {/* Post Image */}
              <div className="w-full bg-black aspect-square flex items-center justify-center my-2">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onDoubleClick={() => {
                    if (!isLiked) toggleLike(post.id);
                  }}
                />
              </div>

              {/* Post Actions */}
              <div className="px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="transition-transform active:scale-125"
                  >
                    <Heart
                      className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : "text-white hover:text-neutral-400"}`}
                    />
                  </button>
                  <MessageCircle className="w-6 h-6 text-white hover:text-neutral-400 cursor-pointer" />
                  <Send className="w-6 h-6 text-white hover:text-neutral-400 cursor-pointer" />
                </div>
                <Bookmark className="w-6 h-6 text-white hover:text-neutral-400 cursor-pointer" />
              </div>

              {/* Post Info */}
              <div className="px-4">
                <div className="font-semibold text-sm mb-1">
                  {post.likes + (isLiked ? 1 : 0)} likes
                </div>
                <div className="text-sm">
                  <span className="font-semibold mr-2">
                    {profileData.username}
                  </span>
                  <span className="text-neutral-300">{post.description}</span>
                </div>
                <div className="text-blue-400 text-sm mt-1">
                  {post.tags.join(" ")}
                </div>
                <div className="text-neutral-500 text-sm mt-2 cursor-pointer">
                  View all {post.comments} comments
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 outline-none text-sm bg-transparent text-white placeholder-neutral-500"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {activeStoryIndex !== null && (
        <StoryViewer
          items={storyItems}
          initialIndex={activeStoryIndex}
          onClose={() => setActiveStoryIndex(null)}
        />
      )}

      <PostOptionsModal 
        isOpen={isOptionsModalOpen} 
        onClose={() => setIsOptionsModalOpen(false)} 
      />
    </div>
  );
}
