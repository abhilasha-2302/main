// components/VideoPage.js
'use client';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

 const stories = [
    {
      id: 'story-1',
      src: '/videos/sdcvp.webm',
      title: 'AI Chip Verification',
      heading: 'Introducing SdCvP-X',
      headingTrademark: '™',
      subheading: 'Verification Acceleration AI Tool',
      description: 'Boost Verification and Productivity - First-Time Silicon Success',
      link: '/products/sdcvp-x',
      discoverText: 'Discover Advanced Verification',
      discoverLink: '/products/sdcvp-x',
      watchLink: 'ai-chip-development' // Changed to video ID
    },
    {
      id: 'story-2',
      src: '/videos/aiml.webm',
      title: 'AI Smart Solutions',
      heading: 'Discover AI',
      subheading: 'Driving Intelligent Transformation',
      description: 'Rapid, Secure, Adaptive Innovation',
      link: '/solutions/multi-die',
      discoverText: 'Discover Smart Engineering',
      discoverLink: '/solutions/ai-ml',
      watchLink: 'ai-engineering' // Changed to video ID
    },
    {
      id: 'story-3',
      src: '/videos/blockchain.webm',
      title: 'Blockchain',
      heading: 'Explore Blockchain',
      subheading: 'Accelerating Blockchain Transformation',
      description: 'Fast, Secure, Scalable Innovation',
      link: '/solutions/multi-die',
      discoverText: 'Discover Advanced Solutions',
      discoverLink: '/solutions/blockchain',
      watchLink: 'blockchain' // Changed to video ID
    }
  ];


export default function VideoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const videoId = searchParams.get('id') || 'ai-chip-development';
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  const video = videoData[videoId];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedMetadata = () => {
      setDuration(videoElement.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);

    return () => {
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };
// Update the handleWatchClick function
  const handleWatchClick = (watchLink) => {
    // Navigate to the video page with the video ID as a query parameter
    router.push(`/video?id=${watchLink}`);
  };
  const handleSeek = (e) => {
    const videoElement = videoRef.current;
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoElement.currentTime = pos * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const videoElement = videoRef.current;
    if (isMuted) {
      videoElement.volume = volume;
      setIsMuted(false);
    } else {
      videoElement.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    
    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
    };
  }, []);

  if (!video) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Video not found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="relative z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-white hover:text-gray-300 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-white text-lg font-medium">{video.title}</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Video Player */}
      <div 
        ref={containerRef}
        className="relative bg-black group"
        style={{ aspectRatio: '16/9' }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer"
          src={video.src}
          onClick={togglePlayPause}
          onDoubleClick={toggleFullscreen}
        />

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Progress Bar */}
          <div 
            className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-white rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Play/Pause */}
              <button 
                onClick={togglePlayPause}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              {/* Volume */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={toggleMute}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isMuted ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Time */}
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Fullscreen */}
            <button 
              onClick={toggleFullscreen}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isFullscreen ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Play button overlay when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={togglePlayPause}
              className="bg-black/40 backdrop-blur-sm rounded-full p-4 hover:bg-black/60 transition-colors"
            >
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Video Information */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Video Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {video.heading}
                {video.headingTrademark && (
                  <sup className="text-xl font-normal">{video.headingTrademark}</sup>
                )}
              </h1>
              <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">
                {video.subheading}
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                {video.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href={video.learnMoreLink}
                  className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded transition-colors duration-200 inline-flex items-center"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
                <button
                  onClick={() => router.back()}
                  className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded transition-colors duration-200"
                >
                  Go Back
                </button>
              </div>
            </div>

            {/* Right Column - Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {video.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}