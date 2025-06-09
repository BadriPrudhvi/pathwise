"use client";

import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<React.ElementRef<typeof Switch>>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center mb-16">
        <span className="mr-3 text-sm font-medium text-gray-700">Monthly</span>
        <Switch
          ref={switchRef}
          checked={!isMonthly}
          onCheckedChange={handleToggle}
          className="data-[state=checked]:bg-green-600"
        />
        <span className="ml-3 text-sm font-medium text-gray-700">
          Annual <span className="text-green-600 font-semibold">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              "relative transition-all duration-300 hover:shadow-xl rounded-xl border bg-white text-center flex flex-col",
              plan.isPopular 
                ? "border-2 border-green-500 shadow-lg" 
                : "border border-gray-200 hover:border-green-300"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="mt-4">
                <div className="flex items-center justify-center gap-x-2">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    <NumberFlow
                      value={
                        isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                      }
                      format={{
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      transformTiming={{
                        duration: 500,
                        easing: "ease-out",
                      }}
                      willChange
                      className="font-variant-numeric: tabular-nums"
                    />
                  </span>
                  {plan.period !== "forever" && (
                    <span className="text-gray-600 ml-2 text-sm sm:text-base">
                      / {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-6 space-y-3 sm:space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={plan.href}
                  className={cn(
                    "w-full py-2 sm:py-3 text-base sm:text-lg font-semibold transition-colors duration-200 rounded-md inline-flex items-center justify-center",
                    plan.isPopular
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900"
                  )}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 