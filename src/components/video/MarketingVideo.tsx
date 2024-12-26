import { useState, useEffect, useRef } from 'react';
import { VideoControls } from './VideoControls';
import { VideoLoadingState } from './VideoLoadingState';

export const MarketingVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolume(value);
      setIsMuted(value === 0);
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 px-4 md:px-8">
      <div className="relative w-full rounded-2xl overflow-hidden aspect-video bg-[#121B3F]/50 group">
        {isLoading && <VideoLoadingState />}
        
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          loading="lazy"
          onLoadedData={handleLoadedData}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          aria-label="Horizn Marketing Video"
        >
          <source src="/images/Horizn_Marketing.mp4" type="video/mp4" />
          <p className="text-[#88A9C3]">
            Your browser doesn't support HTML video. View our marketing video on{' '}
            <a href="#" className="text-[#B68D40] hover:underline">YouTube</a>.
          </p>
        </video>

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <VideoControls
            isPlaying={isPlaying}
            isMuted={isMuted}
            volume={volume}
            onPlayPause={handlePlayPause}
            onMute={handleMute}
            onVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};