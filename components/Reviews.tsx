"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaPlay } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

interface ReviewProps {
  videoPaths?: string[];
}

interface Review {
  text: string;
  author: string;
  rating: number;
  featured?: boolean;
}

interface VideoInfo {
  path: string;
  title: string;
  thumbnail?: string;
}

export default function Reviews({ 
  videoPaths = [
    "/atharv-sir-review.mp4", 
    "/Candicemp4",
  ] 
}: ReviewProps): JSX.Element {
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Create video objects with titles
  const videos: VideoInfo[] = videoPaths.map((path, index) => ({
    path,
    title: ``,
  }));

  const reviews: Review[] = [
    {
      text: "Aakarsh was great to work with. I gave him a challenging brief and supplied some code that was difficult to work with. His communication was great and we worked well together to get the new apps upgraded and published on the app stores. I will definitely be using Aakarsh for future app work. Highly recommended!",
      author: "Client",
      rating: 5,
    },
    {
      text: "Fantastic work, done quickly and communicates effectively as well as promptly. Definitely would hire again!",
      author: "Client",
      rating: 5,
    },
    {
      text: "He is really good and understanding and adjustable person. He will be able to complete the task on time even if any of the components are not known by him. He learns and completes the project on time.",
      author: "Client",
      rating: 5,
    },
    {
      text: "Aakarsh is very responsive and quick to adjust. He is someone who initiates by himself. I respected his work and the level of quality he provides.",
      author: "Client",
      rating: 5,
    },
    {
      text: "I hired Aakarsh for extracting e-commerce products from many e-commerce websites which used proxies, and he did a great job. He is a great communicator, a great guy!!",
      author: "Client",
      rating: 5,
    },
    {
      text: "Excellent work, very satisfied with the quality and effort provided.",
      author: "Client",
      rating: 5,
    },
    {
      text: "Aakarsh is very good hands on coding with both frontend and backend. He is quick with understanding and also delivering code. I will definitely use him again with my other work and I recommend him for any of your work.",
      author: "Client",
      rating: 5,
    },
    {
      text: "Aakarsh is awesome. Really talented, really nice to work with. Looking forward to working with him again.",
      author: "Client",
      rating: 5,
    },
    {
      text: "I had an incredible experience working with you, Aakarsh! You delivered a fantastic Android app in React Native with such hard work and precision. The app works flawlessly and looks amazing, exactly as envisioned. I really appreciate how you stayed on top of everything and completed the project on time. Your dedication and responsiveness made the process smooth and enjoyable. Highly recommend your skills!",
      author: "Featured Client",
      rating: 5,
      featured: true,
    },
  ];

  // Auto-rotate reviews
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && inView) {
      interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, inView, reviews.length]);

  // Handle video playback
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef && index !== activeVideo) {
        videoRef.pause();
      }
    });

    // Play the active video if set
    if (activeVideo !== null && videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].play().catch((error: Error) => {
        console.log("Video play error:", error);
      });
    }
  }, [activeVideo]);

  const nextReview = (): void => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = (): void => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number): void => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex(index);
  };

  const scrollCarousel = (direction: "left" | "right"): void => {
    if (!carouselRef.current) return;
    
    const numVideosToShow = Math.min(3, videos.length);
    const maxSlides = Math.max(0, videos.length - numVideosToShow);
    
    if (direction === "left") {
      setCurrentSlide(prev => Math.max(0, prev - 1));
    } else {
      setCurrentSlide(prev => Math.min(maxSlides, prev + 1));
    }

    // Calculate scroll position based on current slide
    const videoWidth = carouselRef.current.offsetWidth / numVideosToShow;
    carouselRef.current.scrollTo({
      left: currentSlide * videoWidth,
      behavior: "smooth",
    });
  };

  const handleVideoClick = (index: number): void => {
    if (activeVideo === index) {
      // If clicking the active video, pause it
      setActiveVideo(null);
    } else {
      // Otherwise, set it as the active video
      setActiveVideo(index);
    }
  };

  const handleVideoEnd = (index: number): void => {
    if (activeVideo === index) {
      setActiveVideo(null);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="testimonials"
      className="py-20 bg-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-full mx-auto px-4">
        <SectionHeading>Client Testimonials</SectionHeading>
        
        {/* Video Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 relative"
        >
         
          <div className="relative">
            {/* Carousel Navigation Arrows */}
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 rounded-full p-3 shadow-lg z-10 text-white transition-colors"
              aria-label="Scroll left"
              disabled={currentSlide === 0}
            >
              <BsArrowLeftCircle size={28} />
            </button>
            
            <button
              onClick={() => scrollCarousel("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 rounded-full p-3 shadow-lg z-10 text-white transition-colors"
              aria-label="Scroll right"
              disabled={currentSlide >= videos.length - 3}
            >
              <BsArrowRightCircle size={28} />
            </button>
            
            {/* Video Carousel */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-1/2  flex-shrink-0 snap-center px-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div
                    className={`rounded-xl overflow-hidden shadow-lg bg-black aspect-square cursor-pointer relative ${
                      activeVideo === index ? 'ring-4 ring-blue-500' : 'hover:ring-2 hover:ring-blue-400'
                    }`}
                    onClick={() => handleVideoClick(index)}
                  >
                    <video 
                      ref={el => videoRefs.current[index] = el}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      onEnded={() => handleVideoEnd(index)}
                    >
                      <source src={video.path} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {activeVideo !== index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="bg-gray-700 bg-opacity-70 p-5 rounded-full hover:bg-opacity-90 transition-all">
                          <FaPlay className="text-white text-2xl" />
                        </div>
                     
                        
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-4 px-4">
                          <h4 className="text-white text-lg font-medium">{video.title}</h4>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Text Reviews Section */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="relative h-80 md:h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReviewIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="bg-gray-800 rounded-xl shadow-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <FaQuoteLeft className="text-blue-400 text-opacity-60 text-4xl mb-4" />
                    <p className="text-gray-300 text-lg">
                      {reviews[currentReviewIndex].text}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-white">
                        {reviews[currentReviewIndex].author}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500 text-sm" />
                        ))}
                      </div>
                    </div>
                    <FaQuoteRight className="text-blue-400 text-opacity-60 text-2xl" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Controls */}
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentReviewIndex === index
                      ? "bg-blue-500 w-6"
                      : "bg-gray-600"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 rounded-full p-2 shadow-lg z-10 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Previous review"
            >
              <BsArrowLeftCircle size={28} />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-800 rounded-full p-2 shadow-lg z-10 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Next review"
            >
              <BsArrowRightCircle size={28} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}