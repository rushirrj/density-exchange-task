"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SelfImprovement = () => {
  return (
    <section className="px-20 my-5">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div className="text-xl font-bold text-black">
            Wrong with self improvement & how we're fixing it.
          </div>
          <div className="text-6xl font-bold text-black">
            Self Improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 1.9, ease: "easeInOut", type: "spring" }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -550],
              y: [35, 20, 10, 0],
              rotate: [-60, -45, -35,-35,-35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0},
          }}
          className="flex items-center justify-center"
        >
          <Image
            src="/blue-ghost.png"
            alt="download applestore"
            width={70}
            height={70}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SelfImprovement;