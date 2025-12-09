import React from "react";
import { TiTick } from "react-icons/ti";

export default function Pricing() {
  return (
    <div className="py-50 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl text-dark font-bold mb-6">
            Choose Hosting Plan
          </h1>
          <p className="text-shadow-dark/80 max-w-md  mx-auto">
            Globally incubate next-generation e-services via state of the art
            technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-white p-10 border border-primary/70 rounded-2xl shadow overflow-hidden">
            <h3 className="text-3xl font-bold text-dark mb-3">Started</h3>
            <p className="mb-6 text-dark/80">
              Perfect for small websites and blogs
            </p>
            <p className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold">$2.99</span>
              <span>/month</span>
            </p>
            <button className="py-2.5 bg-gray-200 w-full px-6 text-center cursur-pointer mb-8">
              Get Started
            </button>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                1 Website
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                10 GB SSD Storage
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                Unlimited Bandwidth
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                Free SSL Certificate
              </li>
            </ul>
          </div>
          <div className="bg-white p-10 border border-primary/70 rounded-2xl shadow overflow-hidden">
            <h3 className="text-3xl font-bold text-dark mb-3">Started</h3>
            <p className="mb-6 text-dark/80">
              Perfect for small websites and blogs
            </p>
            <p className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold">$2.99</span>
              <span>/month</span>
            </p>
            <button className="py-2.5 bg-gray-200 w-full px-6 text-center cursur-pointer mb-8">
              Get Started
            </button>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                1 Website
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                10 GB SSD Storage
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                Unlimited Bandwidth
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                Free SSL Certificate
              </li>
            </ul>
          </div>
          <div className="bg-white p-10 border border-primary/70 rounded-2xl shadow overflow-hidden">
            <h3 className="text-3xl font-bold text-dark mb-3">Started</h3>
            <p className="mb-6 text-dark/80">
              Perfect for small websites and blogs
            </p>
            <p className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold">$2.99</span>
              <span>/month</span>
            </p>
            <button className="py-2.5 bg-gray-200 w-full px-6 text-center cursur-pointer mb-8">
              Get Started
            </button>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                1 Website
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                10 GB SSD Storage
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                Unlimited Bandwidth
              </li>
              <li className="flex gap-2 items-center">
                <TiTick className="bg-primary h-5 w-5 text-white border rounded-full" />
                Free SSL Certificate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
