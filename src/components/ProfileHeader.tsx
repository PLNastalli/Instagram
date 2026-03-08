import { useState } from "react";
import { Settings, Link as LinkIcon, X } from "lucide-react";
import { profileData } from "../data";
import StoryViewer from "./StoryViewer";

export default function ProfileHeader() {
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [storyOpen, setStoryOpen] = useState(false);

  const closeModal = () => setModalOpen(null);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-20 mb-10 px-4 md:px-0">
        {/* Avatar */}
        <div className="flex-shrink-0 mx-auto md:mx-0 cursor-pointer" onClick={() => setStoryOpen(true)}>
          <div className="w-24 h-24 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
            <img
              src={profileData.avatarUrl}
              alt="Profile Avatar"
              className="w-full h-full rounded-full border-4 border-black object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 w-full">
          {/* Username & Actions */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h2 className="text-xl md:text-2xl font-medium">
              {profileData.username}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setModalOpen("edit")}
                className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 font-semibold text-sm rounded-lg transition-colors"
              >
                Edit profile
              </button>
              <button
                onClick={() => setModalOpen("archive")}
                className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 font-semibold text-sm rounded-lg transition-colors"
              >
                View archive
              </button>
              <button
                onClick={() => setModalOpen("settings")}
                className="p-1.5 hover:bg-neutral-800 rounded-full transition-colors"
              >
                <Settings className="w-6 h-6 stroke-[1.5px]" />
              </button>
            </div>
          </div>

          {/* Stats (Desktop) */}
          <div className="hidden md:flex items-center gap-10 mb-4">
            <div className="text-base">
              <span className="font-semibold">{profileData.stats.posts}</span>{" "}
              posts
            </div>
            <div className="text-base">
              <span className="font-semibold">
                {profileData.stats.followers}
              </span>{" "}
              followers
            </div>
            <div className="text-base">
              <span className="font-semibold">
                {profileData.stats.following}
              </span>{" "}
              following
            </div>
          </div>

          {/* Bio */}
          <div className="text-sm md:text-base">
            <p className="font-semibold">{profileData.fullName}</p>
            <p className="whitespace-pre-line text-neutral-300">
              {profileData.bio}
            </p>
            <a
              href={`https://${profileData.link}`}
              className="text-blue-400 font-semibold flex items-center gap-1 mt-1 hover:underline"
            >
              <LinkIcon className="w-4 h-4" />
              {profileData.link}
            </a>
          </div>
        </div>
      </div>

      {/* Modals */}
      {storyOpen && (
        <StoryViewer
          items={[{ id: "profile-story", title: profileData.username, imageUrl: profileData.avatarUrl }]}
          initialIndex={0}
          onClose={() => setStoryOpen(false)}
        />
      )}

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              {modalOpen === "edit" && "Edit Profile"}
              {modalOpen === "archive" && "View Archive"}
              {modalOpen === "settings" && "Settings"}
            </h3>
            
            {modalOpen === "edit" && (
              <div className="space-y-4 mt-2 text-left">
                <div className="flex flex-col">
                  <label className="text-sm text-neutral-400 mb-1">Name</label>
                  <input type="text" defaultValue={profileData.fullName} className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white outline-none focus:border-neutral-600" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-neutral-400 mb-1">Username</label>
                  <input type="text" defaultValue={profileData.username} className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white outline-none focus:border-neutral-600" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-neutral-400 mb-1">Website</label>
                  <input type="text" defaultValue={profileData.link} className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white outline-none focus:border-neutral-600" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-neutral-400 mb-1">Bio</label>
                  <textarea defaultValue={profileData.bio} className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white outline-none focus:border-neutral-600 resize-none" rows={3} />
                </div>
                <button className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 mt-4 transition-colors" onClick={closeModal}>Save Changes</button>
              </div>
            )}

            {modalOpen === "archive" && (
              <div className="mt-2 grid grid-cols-3 gap-1 overflow-y-auto max-h-[60vh]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div key={i} className="aspect-square bg-neutral-800 relative group cursor-pointer">
                    <img src={`https://picsum.photos/seed/archive${i}/400/400`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            )}

            {modalOpen === "settings" && (
              <div className="flex flex-col mt-2 -mx-6">
                {["Edit Profile", "Notifications", "Privacy and security", "Supervision", "Login activity", "Emails from Instagram", "Help", "Log Out"].map((item) => (
                  <button key={item} className="w-full text-left px-6 py-3 hover:bg-neutral-800 border-b border-neutral-800 last:border-0 text-sm text-white transition-colors" onClick={closeModal}>
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
