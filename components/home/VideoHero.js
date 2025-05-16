// // import Link from 'next/link';

// // export default function VideoHero() {
// //   return (
// //     <div className="relative h-screen w-full overflow-hidden">
// //       <div className="absolute inset-0 z-0">
// //         <video
// //           className="w-full h-full object-cover"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //         >
// //           {/** TODO */}
// //           <source src="/videos/sdcvp-x.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
// //       </div>
      
// //       <div className="relative z-10 h-full flex items-center">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="max-w-lg">
// //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
// //               Introducing SDCVP-X
// //             </h1>
// //             <p className="text-xl md:text-2xl text-white mb-8">
// //               AI-based verification
// //             </p>
// //             <Link 
// //               href="/products/sdcvp-x" 
// //               className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded transition-colors duration-200"
// //             >
// //               Discover Advanced Verification
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';
// import Slider from 'react-slick';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const videos = [
//   {
//     src: '/videos/sdcvp-x.mp4',
//     title: 'Introducing SDCVP-X',
//     description: 'AI-based verification',
//     link: '/products/sdcvp-x',
//   },
//   {
//     src: '/videos/video2.mp4',
//     title: 'Power Aware SoC Verification',
//     description: 'Low power. High confidence.',
//     link: '/solutions/low-power-verification',
//   },
//   {
//     src: '/videos/video3.mp4',
//     title: 'Formal Meets AI',
//     description: 'Accelerate assertion-based verification',
//     link: '/solutions/formal-verification',
//   },
// ];

// const VideoHeroSlider = () => {
//   const [isVideoReady, setIsVideoReady] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 8000,
//     pauseOnHover: false,
//     fade: true,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//     customPaging: (i) => (
//       <button className={`w-3 h-3 rounded-full transition-all duration-300 ${
//         i === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
//       }`} />
//     ),
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <Slider {...settings} className="custom-slider">
//         {videos.map((video, index) => (
//           <div key={index} className="relative h-screen w-full">
//             <div className="absolute inset-0">
//               <video
//                 className="w-full h-full object-cover"
//                 src={video.src}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="auto"
//                 aria-hidden="true"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
//             <div className="relative z-10 h-full flex items-center">
//               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-2xl">
//                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp">
//                     {video.title}
//                   </h1>
//                   <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeInUp animation-delay-100">
//                     {video.description}
//                   </p>
//                   <Link
//                     href={video.link}
//                     className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 animate-fadeInUp animation-delay-200"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VideoHeroSlider;


'use client';

import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const videos = [
  {
    src: '/videos/sdcvp-x.mp4',
    title: 'Introducing SDCVP-X',
    description: 'AI-based verification',
    link: '/products/sdcvp-x',
  },
  {
    src: '/videos/ai.mp4',
    title: 'Unleashing the world of AI',
    description: 'Accelerate to Smart Engineering',
    link: '/solutions/formal-verification',
  },
];

export default function VideoHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    afterChange: (index) => {
      // Force video reload on slide change
      if (videoRefs.current[index]) {
        videoRefs.current[index].load();
        videoRefs.current[index].play();
      }
    },
  };


  const handleEnded = () => {
    const nextIndex = (currentSlide + 1) % videos.length;
    sliderRef.current.slickGoTo(nextIndex);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('video-hero');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!inView) {
        const current = videoRefs.current[currentSlide];
        if (current) current.pause();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  return (
    <div id="video-hero" className="relative h-screen w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="relative h-screen w-full">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full object-cover absolute inset-0 z-0"
              src={video.src}
              muted
              playsInline
              preload="auto"
              onEnded={handleEnded}
              autoPlay={index === currentSlide}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {video.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8">
                    {video.description}
                  </p>
                  <Link
                    href={video.link}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
