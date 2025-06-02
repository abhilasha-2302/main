// app/video/page.js
import { Suspense } from 'react';
import VideoPage from '../../components/VideoPage';

function VideoPageWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading video...</div>
      </div>
    }>
      <VideoPage />
    </Suspense>
  );
}

export default VideoPageWrapper;