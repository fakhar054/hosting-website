import React from "react";
import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <div className="py-40 relative">
      <div className="absolute inset-0 opacity-15">
        <img
          className="object-center object-cover w-full h-screen"
          src={assets.griImg}
        />
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* left-side */}
          <div className="w-full md:w-1/2 mt-30">
            <div className="flex flex-col">
              <div className="px-4 py-2.5 w-[300px] text-white shadow rounded-full mb-6 bg-primary/40">
                <span className="text-dark font-semibold">
                  Supercharge your website today
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-5">
                <span>Perimum Hosting</span>
                <br />
                <span>Solution for your busniess</span>
              </h1>
              <p className="text-dark/80 text-xl mb-8">
                Lightning fast hosting with 99.9% uptime, top-notch
                securtiy,24/7 expert support to keep your website running
              </p>
              <div className="relative flex items-center gap-4">
                <button
                  className="px-8 py-3 bg-primary text-white font-semibold
                 rounded cursor-pointer shadow-xl"
                >
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-dark rounded cursor-pointer font-semibold shadow-xl">
                  View Plan
                </button>
              </div>
            </div>
          </div>

          {/* right-side */}
          <div className="w-full md:w-1/2">
            <img
              className="h-full w-full rounded object-cover object-center"
              src={assets.HeroImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
