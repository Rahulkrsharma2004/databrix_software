import React from "react";

const Services: React.FC = () => {
  return (
    <div className="bg-white-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Services
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="bg-white p-6 rounded-lg shadow-lg bg-pink-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Digital Marketing
            </h2>
            <p className="text-gray-600 mb-4">
              DataBrix Soft delivers custom software solutions, data-driven marketing, and cloud-based services.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg bg-blue-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ISO & Trademark
            </h2>
            <p className="text-gray-600 mb-4">
              DataBrix Soft specializes in leveraging cutting-edge web technology to generate high returns for organizations across sectors.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Web Development
            </h2>
            <p className="text-gray-600 mb-4">
              DataBrix Soft is a premium web design, online marketing, and IT Solution Company based in Navi Mumbai, serving high-value clients.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              IT Solutions
            </h2>
            <p className="text-gray-600 mb-4">
              DataBrix Soft has consistently excelled in delivering high-quality customized web designs and services.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
