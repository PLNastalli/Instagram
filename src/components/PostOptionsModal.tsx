import { motion, AnimatePresence } from "motion/react";

interface PostOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostOptionsModal({ isOpen, onClose }: PostOptionsModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 w-full max-w-sm rounded-xl overflow-hidden flex flex-col text-sm"
            >
              <button
                className="w-full py-3 text-red-500 font-bold border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                Report
              </button>
              <button
                className="w-full py-3 text-red-500 font-bold border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                Unfollow
              </button>
              <button
                className="w-full py-3 text-white border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                Add to favorites
              </button>
              <button
                className="w-full py-3 text-white border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                Go to post
              </button>
              <button
                className="w-full py-3 text-white border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                Share to...
              </button>
              <button
                className="w-full py-3 text-white border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  onClose();
                }}
              >
                Copy link
              </button>
              <button
                className="w-full py-3 text-white border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                Embed
              </button>
              <button
                className="w-full py-3 text-white border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                About this account
              </button>
              <button
                className="w-full py-3 text-white hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
