"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg max-w-xs w-full" key={i}>
                  <div className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{text}&rdquo;</div>
                  <div className="flex items-center gap-3">
                    <Image
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-gray-900 text-sm">{name}</div>
                      <div className="text-gray-500 text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

 