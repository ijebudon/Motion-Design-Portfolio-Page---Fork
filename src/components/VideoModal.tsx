import React, { useEffect } from 'react';
import { X as CloseIcon } from 'lucide-react';
interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}
export const VideoModal: React.FC<VideoModalProps> = ({
  videoUrl,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
      <div className="relative w-full max-w-4xl mx-auto">
        <button onClick={onClose} className="absolute -top-12 right-0 text-white hover:text-purple-400 focus:outline-none" aria-label="Close video">
          <CloseIcon className="w-8 h-8" />
        </button>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
          <iframe src={videoUrl} className="absolute top-0 left-0 w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>;
};