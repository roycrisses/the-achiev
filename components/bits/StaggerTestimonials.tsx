"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TESTIMONIALS } from '@/lib/data';

const SQRT_5000 = Math.sqrt(5000);

const U = (id: string) => `https://images.unsplash.com/${id}?q=80&w=200&auto=format&fit=crop`;

/* Real Achievers voices, Unsplash portraits to match the site's imagery rule. */
const testimonials = TESTIMONIALS.map((t, i) => ({
  tempId: i,
  testimonial: t.text,
  by: `${t.name}, ${t.role}`,
  imgSrc: U([
    "photo-1544005313-94ddf0286df2",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1438761681033-6461ffad8d80",
    "photo-1500648767791-00dcc994a43e",
    "photo-1472099645785-5658abf4ff4e",
    "photo-1580489944761-15a19d654956",
    "photo-1519085360753-af0119f7cbe7",
    "photo-1573496359142-b8d87734a5a2",
  ][i % 8]),
}));

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 border-[#0a3a24] bg-[#0a3a24] text-white"
          : "z-0 border-[#e4e0d4] bg-white text-neutral-900 hover:border-[#0a3a24]/40"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0 24px 50px -20px rgba(10,58,36,0.55)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#cbe4c6]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 rounded-lg bg-[#eef5ec] object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #cbe4c6"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-white" : "text-[#1c2b22]"
      )}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/80" : "text-[#0a3a24]/55"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-[26px] border border-[#e4e0d4] bg-white"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-colors",
            "bg-white border border-[#e4e0d4] text-[#0a3a24] hover:bg-[#0a3a24] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a3a24] focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-colors",
            "bg-white border border-[#e4e0d4] text-[#0a3a24] hover:bg-[#0a3a24] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a3a24] focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
