"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Countdown from "react-countdown";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
          Neoon
        </div>
        <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
          Your Pathway To Excellence.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Coming Soon
        </div>

        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          <Countdown date={new Date("May 10, 2024 00:00:00")} />
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
