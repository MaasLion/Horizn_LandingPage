import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  onPlayPause: () => void;
  onMute: () => void;
  onVolumeChange: (value: number) => void;
}

export const VideoControls = ({
  isPlaying,
  isMuted,
  volume,
  onPlayPause,
  onMute,
  onVolumeChange,
}: VideoControlsProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
      <div className="flex items-center gap-4">
        <button
          onClick={onPlayPause}
          className="text-white hover:text-[#B68D40] transition-colors focus-ring rounded-full p-1"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onMute}
            className="text-white hover:text-[#B68D40] transition-colors focus-ring rounded-full p-1"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-24 accent-[#B68D40]"
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  );
};