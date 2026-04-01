"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "@/types/TestimonialTypes";

export const mockTestimonials: Testimonial[] = [
  {
    id: "testi1",
    name: "Emily J.",
    avatar_url:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
    quote:
      "This app made finding the right research materials so easy. Saved me hours!",
  },
  {
    id: "testi2",
    name: "Michael S.",
    avatar_url:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 4,
    quote:
      "Found suffered some really obscure titles here. Fast shipping and excellent condition.",
  },
  {
    id: "testi3",
    name: "Sarah L.",
    avatar_url:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
    quote:
      "Great selection of children's books for my classroom. Friendly customer service.",
  },
  {
    id: "testi4",
    name: "David K.",
    avatar_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
    quote:
      "Best online bookstore experience I've had. Clean interface and good prices.",
  },
  {
    id: "testi5",
    name: "Jessica M.",
    avatar_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
    quote:
      "Highly recommended for any book lover. The packaging is always pristine.",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockTestimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = mockTestimonials[activeIndex];

  const getPositionClasses = (visPos: number) => {
    switch (visPos) {
      case 0:
        return "left-[25%] md:left-[calc(50%-10rem)] scale-50 md:scale-75 opacity-20 md:opacity-30 z-0";
      case 1:
        return "left-[35%] md:left-[calc(50%-6rem)] scale-90 md:scale-100 opacity-60 z-10 hover:opacity-100 cursor-pointer";
      case 2:
        return "left-[50%] scale-150 md:scale-150 opacity-100 z-20 ";
      case 3:
        return "left-[65%] md:left-[calc(50%+6rem)] scale-90 md:scale-100 opacity-60 z-10 hover:opacity-100 cursor-pointer";
      case 4:
        return "left-[75%] md:left-[calc(50%+10rem)] scale-50 md:scale-75 opacity-20 md:opacity-30 z-0";
      default:
        return "left-1/2 opacity-0";
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-10 relative overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-2xl px-4 min-h-[120px] justify-center transition-all duration-300">
        <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed mb-6">
          &quot;{activeTestimonial.quote}&quot;
        </p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < activeTestimonial.rating
                  ? "fill-primary text-primary"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-24 md:h-32 flex items-center justify-center ">
        {mockTestimonials.map((testimonial, index) => {
          let diff = index - activeIndex;
          if (diff < -2) diff += 5;
          if (diff > 2) diff -= 5;
          const visPos = diff + 2;

          return (
            <div
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out flex flex-col items-center rounded-full
                ${getPositionClasses(visPos)}
              `}
            >
              <div className="relative rounded-full overflow-hidden w-12 h-12 md:w-16 md:h-16">
                <Image
                  src={testimonial.avatar_url}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center min-h-[30px] transition-all">
        <h4 className="text-xl font-bold text-gray-800">
          {activeTestimonial.name}
        </h4>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
