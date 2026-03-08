import { Heart, MessageCircle, PlusSquare } from "lucide-react";

export default function TopNav() {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-black border-b border-neutral-800 flex items-center justify-between px-4 z-50">
      <h1 className="text-xl font-bold font-serif italic tracking-tighter">
        InstaPortfolio
      </h1>
      <div className="flex items-center gap-4">
        <PlusSquare className="w-6 h-6 stroke-[1.5px]" />
        <Heart className="w-6 h-6 stroke-[1.5px]" />
        <MessageCircle className="w-6 h-6 stroke-[1.5px]" />
      </div>
    </div>
  );
}
