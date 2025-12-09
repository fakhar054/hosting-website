import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { serviceProvider } from "../assets/assets";

export default function Feature() {
  return (
    <div className="py-50 bg-gray-50">
      <div className="container  mx-auto px-6">
        <div className="text-center">
          <h1 className="text 3xl md:text-4xl font-bold text-dark mb-4">
            We Provide Hosting Solutions
          </h1>
          <p className="text-dark/80 max-w-xl mx-auto">
            elect your solution and we will help you narrow down our best
            high-speed options to fit your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {serviceProvider.map((service, index) => (
            <div className="bg-white p-12 rounded-2xl border border-primary">
              <img className="mb-6" src={service.image} alt="" />
              <h3 className="text-xl text-dark font-bold mb-6">
                {service.title}
              </h3>
              <p className="text-dark/80 mb-6">{service.content}</p>
              <a href="#" className="flex items-center  gap-2">
                View Details <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
