import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="max-w-2xl mx-auto pt-4 px-4">
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-neutral-900 rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-1 focus:ring-neutral-700 text-white placeholder-neutral-500"
        />
      </div>
      <h3 className="font-semibold mb-4 text-white">Recent</h3>
      <div className="text-neutral-500 text-sm text-center mt-10">
        No recent searches.
      </div>
    </div>
  );
}
