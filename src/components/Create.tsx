import { Image as ImageIcon } from "lucide-react";

export default function Create() {
  return (
    <div className="max-w-3xl mx-auto pt-10 px-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-sm">
        <div className="border-b border-neutral-800 p-3 text-center font-semibold">
          Create new post
        </div>
        <div className="flex flex-col items-center justify-center h-[60vh] p-8 text-center">
          <ImageIcon className="w-24 h-24 text-neutral-400 mb-4 stroke-[1px]" />
          <h2 className="text-xl font-light mb-6 text-white">
            Drag photos and videos here
          </h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Select from computer
          </button>
        </div>
      </div>
    </div>
  );
}
