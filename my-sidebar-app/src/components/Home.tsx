import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white-100 mt-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center mt-6">
        Innovative IT solutions, Tailored for Success.
      </h1>
      <p className="text-lg text-gray-600 mb-5 text-center">
        Boost your effectiveness and expand your business with optimized solutions.
      </p>
      <img
        src="https://www.databrixsoft.com/static/media/cloud.3609daee557d29574ae3.png"
        alt="Cloud graphic"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Home;
