import { Home, Search, PlusSquare, PlaySquare, User } from "lucide-react";

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileNav({ activeTab, setActiveTab }: MobileNavProps) {
  const navItems = [
    { id: "home", icon: Home },
    { id: "search", icon: Search },
    { id: "create", icon: PlusSquare },
    { id: "reels", icon: PlaySquare },
    { id: "profile", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-12 bg-black border-t border-neutral-800 flex items-center justify-around z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="p-2"
          >
            <Icon
              className={`w-6 h-6 ${isActive ? "stroke-[2.5px]" : "stroke-[1.5px]"}`}
            />
          </button>
        );
      })}
    </div>
  );
}
