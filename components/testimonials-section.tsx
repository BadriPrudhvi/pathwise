"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "The conversational goal scoping was incredible. Pathwise helped me break down 'learn machine learning' into actionable steps. Now I'm building ML models at work!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Marcus Johnson",
    role: "Data Scientist",
  },
  {
    text: "As a career changer, I was overwhelmed. Pathwise's skill assessment placed me perfectly, and the AI tutor answered every question. Best investment I've made!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Rodriguez",
    role: "Product Manager",
  },
  {
    text: "The dynamic adaptation feature is genius. When I struggled with React concepts, Pathwise automatically provided extra practice. It's like having a personal mentor.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "David Kim",
    role: "Frontend Developer",
  },
  {
    text: "I've tried many learning platforms, but Pathwise's personalized approach is unmatched. The progress tracking kept me motivated throughout my DevOps journey.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Jessica Thompson",
    role: "DevOps Engineer",
  },
  {
    text: "From zero to cloud architect in 6 months! Pathwise's curriculum builder created the perfect learning path for AWS certification. The AI assistant was invaluable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Alex Rivera",
    role: "Cloud Architect",
  },
  {
    text: "The bite-sized lessons fit perfectly into my busy schedule. Pathwise helped me transition from marketing to UX design while working full-time.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Park",
    role: "UX Designer",
  },
  {
    text: "Pathwise's goal scoping conversation was eye-opening. It helped me realize I wanted to focus on mobile development, not just 'programming'. Game changer!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    name: "Michael Brown",
    role: "Mobile Developer",
  },
  {
    text: "The progress dashboard kept me accountable, and the AI tutor explained complex algorithms in ways I could understand. Now I'm acing technical interviews!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Sophia Lee",
    role: "Software Engineer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              ✨ Success Stories
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Learners Love Pathwise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners who&apos;ve transformed their careers with personalized AI-powered learning journeys.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}; 