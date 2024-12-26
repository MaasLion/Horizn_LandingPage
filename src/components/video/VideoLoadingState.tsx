import { Loader2 } from 'lucide-react';

export const VideoLoadingState = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#121B3F]/50">
      <Loader2 className="w-8 h-8 text-[#B68D40] animate-spin" />
    </div>
  );
};