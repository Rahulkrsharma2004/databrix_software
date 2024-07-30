import React from 'react';

const Contactus: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="bg-white max-w-4xl w-full p-6 rounded-lg shadow-lg flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Our Global Reach
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            At Databrix, our mission is to empower businesses with transformative technology solutions that drive growth, efficiency, and success. We strive to be at the forefront of innovation, constantly pushing the boundaries to deliver unparalleled value to our clients.
          </p>
          <div className="flex justify-center mb-6 w-full">
            <img 
              src="https://www.databrixsoft.com/static/media/req.5b3afc6a2547c48bbb67.jpg" 
              alt="Global Reach"
              className="w-full max-w-md max-h-80 rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
