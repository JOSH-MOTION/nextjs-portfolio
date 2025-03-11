"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-10 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left"
        >
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-orange-500 bg-clip-text bg-gradient-to-r from-orange-500 to-black">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Joshua Doe",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mt-4 lg:text-xl">
            Passionate about crafting high-performance web and mobile apps with a focus on sleek design and smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 to-black text-white hover:opacity-80 transition"
            >
              Hire Me
            </Link>
            <Link href="/" className="relative">
              <span className="block bg-orange-500 hover:bg-gray-900 rounded-full px-6 py-3 text-white border border-orange-500 transition">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 flex justify-center"
        >
          <div className="relative rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center">
            <Image
              src="/images/hero1-image.png"
              alt="Hero image"
              className="object-cover rounded-full"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>

      {/* About Me Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          About Me
        </h2>
        <p className="text-yellow-600 text-lg mt-4">
          I am Joshua Doe, a creative and detail-oriented developer specializing in web, mobile, and UI/UX design. With a passion for building intuitive digital products, I thrive on creating seamless user experiences that balance aesthetics and functionality. Let's build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
