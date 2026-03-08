import { useState } from "react";
import {
  Home,
  Search,
  Compass,
  MessageCircle,
  Heart,
  PlusSquare,
  User,
  Menu,
  Settings,
  Bookmark,
  Moon,
  AlertCircle,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [actionModal, setActionModal] = useState<string | null>(null);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "search", icon: Search, label: "Search" },
    { id: "explore", icon: Compass, label: "Explore" },
    { id: "messages", icon: MessageCircle, label: "Messages" },
    { id: "notifications", icon: Heart, label: "Notifications" },
    { id: "create", icon: PlusSquare, label: "Create" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 h-screen border-r border-neutral-800 fixed left-0 top-0 bg-black p-4 z-40">
      <div className="mb-8 mt-4 px-2">
        <h1
          className="text-2xl font-bold font-serif italic tracking-tighter cursor-pointer"
          onClick={() => setActiveTab("home")}
        >
          InstaPortfolio
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-900 transition-colors w-full text-left ${isActive ? "font-bold" : ""}`}
            >
              <Icon
                className={`w-6 h-6 ${isActive ? "stroke-[2.5px]" : "stroke-[1.5px]"}`}
              />
              <span className="text-base">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto relative">
        {isMoreOpen && (
          <div className="absolute bottom-14 left-0 w-64 bg-neutral-900 rounded-xl shadow-lg border border-neutral-800 p-2 z-50">
            <button onClick={() => { setActionModal("Settings"); setIsMoreOpen(false); }} className="flex items-center gap-3 w-full p-3 hover:bg-neutral-800 rounded-lg text-sm transition-colors text-left">
              <Settings className="w-5 h-5" /> Settings
            </button>
            <button onClick={() => { setActionModal("Saved"); setIsMoreOpen(false); }} className="flex items-center gap-3 w-full p-3 hover:bg-neutral-800 rounded-lg text-sm transition-colors text-left">
              <Bookmark className="w-5 h-5" /> Saved
            </button>
            <button onClick={() => { setActionModal("Switch appearance"); setIsMoreOpen(false); }} className="flex items-center gap-3 w-full p-3 hover:bg-neutral-800 rounded-lg text-sm transition-colors text-left">
              <Moon className="w-5 h-5" /> Switch appearance
            </button>
            <button onClick={() => { setActionModal("Report a problem"); setIsMoreOpen(false); }} className="flex items-center gap-3 w-full p-3 hover:bg-neutral-800 rounded-lg text-sm transition-colors text-left">
              <AlertCircle className="w-5 h-5" /> Report a problem
            </button>
            <div className="h-[1px] bg-neutral-800 my-2"></div>
            <button onClick={() => { setActionModal("Switch accounts"); setIsMoreOpen(false); }} className="flex items-center gap-3 w-full p-3 hover:bg-neutral-800 rounded-lg text-sm transition-colors text-left">
              Switch accounts
            </button>
            <div className="h-[1px] bg-neutral-800 my-2"></div>
            <button onClick={() => { setActionModal("Log out"); setIsMoreOpen(false); }} className="flex items-center gap-3 w-full p-3 hover:bg-neutral-800 rounded-lg text-sm transition-colors text-left">
              <LogOut className="w-5 h-5" /> Log out
            </button>
          </div>
        )}
        <button
          onClick={() => setIsMoreOpen(!isMoreOpen)}
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-900 transition-colors w-full text-left"
        >
          <Menu className="w-6 h-6 stroke-[1.5px]" />
          <span className="text-base">More</span>
        </button>
      </div>

      {/* Action Modal */}
      {actionModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-sm overflow-hidden shadow-2xl">
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {actionModal}
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                {actionModal === "Log out"
                  ? "Are you sure you want to log out of your account?"
                  : actionModal === "Switch appearance"
                    ? "Dark mode is currently active. Light mode is coming soon!"
                    : "This feature is currently being updated. Please check back later."}
              </p>
              <div className="flex flex-col gap-2">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${actionModal === "Log out" ? "bg-red-600 hover:bg-red-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                  onClick={() => setActionModal(null)}
                >
                  {actionModal === "Log out" ? "Log Out" : "Got it"}
                </button>
                <button
                  className="w-full py-3 rounded-lg font-semibold text-white hover:bg-neutral-800 transition-colors"
                  onClick={() => setActionModal(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
