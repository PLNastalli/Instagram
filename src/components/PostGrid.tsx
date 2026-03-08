import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Copy,
  Bookmark,
  MoreHorizontal,
  Grid,
  PlaySquare,
  UserSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { postsData, Post, profileData } from "../data";
import ReelViewer from "./ReelViewer";
import PostOptionsModal from "./PostOptionsModal";

export default function PostGrid() {
  const [activeTab, setActiveTab] = useState("POSTS");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);

  const reelsData = [1, 2, 3, 4, 5, 6].map((i) => ({
    id: i,
    imageUrl: `https://picsum.photos/seed/reel${i}/1080/1920`,
  }));

  const tabs = [
    { id: "POSTS", label: "POSTS", icon: Grid },
    { id: "REELS", label: "REELS", icon: PlaySquare },
    { id: "TAGGED", label: "TAGGED", icon: UserSquare },
  ];

  return (
    <>
      <div className="border-t border-neutral-800 mt-8">
        <div className="flex justify-center gap-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 text-xs font-semibold tracking-widest transition-colors ${
                  activeTab === tab.id
                    ? "border-t border-white text-white -mt-[1px]"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === "POSTS" && (
        <motion.div
          className="grid grid-cols-3 gap-1 md:gap-4 mb-20 md:mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {postsData.map((post) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="aspect-square relative group cursor-pointer overflow-hidden bg-neutral-900"
              onClick={() => setSelectedPost(post)}
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
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === "REELS" && (
        <div className="grid grid-cols-3 gap-1 md:gap-4 mb-20 md:mb-8">
          {reelsData.map((reel, index) => (
            <div
              key={reel.id}
              className="aspect-[9/16] relative group cursor-pointer overflow-hidden bg-neutral-900"
              onClick={() => setActiveReelIndex(index)}
            >
              <img
                src={reel.imageUrl}
                alt="Reel"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white font-bold text-sm">
                <PlaySquare className="w-4 h-4 fill-white" />
                <span>{Math.floor(Math.random() * 1000)}K</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "TAGGED" && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 border-2 border-neutral-800 rounded-full flex items-center justify-center mb-4">
            <UserSquare
              className="w-12 h-12 text-neutral-500"
              strokeWidth={1}
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Photos of you</h2>
          <p className="text-neutral-500 max-w-sm">
            When people tag you in photos, they'll appear here.
          </p>
        </div>
      )}

      {activeReelIndex !== null && (
        <ReelViewer 
          reels={reelsData} 
          initialIndex={activeReelIndex} 
          onClose={() => setActiveReelIndex(null)} 
        />
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-10"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-black border border-neutral-800 rounded-xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Side */}
              <div className="w-full md:w-[60%] bg-black flex items-center justify-center border-r border-neutral-800">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="max-w-full max-h-[50vh] md:max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Details Side */}
              <div className="w-full md:w-[40%] flex flex-col h-[40vh] md:h-auto bg-black text-white">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <img
                      src={profileData.avatarUrl}
                      alt="avatar"
                      className="w-8 h-8 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-semibold text-sm">
                      {profileData.username}
                    </span>
                    <span className="text-blue-500 font-semibold text-sm cursor-pointer hover:text-blue-400">
                      Follow
                    </span>
                  </div>
                  <MoreHorizontal 
                    className="w-5 h-5 cursor-pointer text-neutral-400 hover:text-white" 
                    onClick={() => setIsOptionsModalOpen(true)}
                  />
                </div>

                {/* Comments/Description */}
                <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
                  <div className="flex gap-3 mb-6">
                    <img
                      src={profileData.avatarUrl}
                      alt="avatar"
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="font-semibold text-sm mr-2">
                        {profileData.username}
                      </span>
                      <span className="text-sm text-neutral-300">
                        {selectedPost.description}
                      </span>
                      <div className="mt-2 text-blue-400 text-sm">
                        {selectedPost.tags.join(" ")}
                      </div>
                      <div className="text-xs text-neutral-500 mt-2">
                        {selectedPost.date}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-neutral-800 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <Heart className="w-6 h-6 hover:text-neutral-400 cursor-pointer transition-colors" />
                      <MessageCircle className="w-6 h-6 hover:text-neutral-400 cursor-pointer transition-colors" />
                      <Copy className="w-6 h-6 hover:text-neutral-400 cursor-pointer transition-colors" />
                    </div>
                    <Bookmark className="w-6 h-6 hover:text-neutral-400 cursor-pointer transition-colors" />
                  </div>
                  <div className="font-semibold text-sm mb-1">
                    {selectedPost.likes} likes
                  </div>
                  <div className="text-xs text-neutral-500 uppercase">
                    {selectedPost.date}
                  </div>
                </div>

                {/* Add Comment */}
                <div className="border-t border-neutral-800 p-4 flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 outline-none text-sm bg-transparent text-white placeholder-neutral-500"
                  />
                  <button className="text-blue-500 font-semibold text-sm hover:text-blue-400 transition-colors">
                    Post
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Close button for modal */}
            <button
              className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
              onClick={() => setSelectedPost(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <PostOptionsModal 
        isOpen={isOptionsModalOpen} 
        onClose={() => setIsOptionsModalOpen(false)} 
      />
    </>
  );
}
