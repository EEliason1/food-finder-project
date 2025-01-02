import React from "react";

const HomeContent: React.FC = () => {
  return (
    <div className="p-10 text-center flex flex-col">
      <h2 className="text-3xl font-bold mb-4">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">1. Answer Questions</h3>
          <p>Tell us your preferences and dietary needs.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">2. Get Recommendations</h3>
          <p>Discover tailored restaurant suggestions.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">3. Save Favorites</h3>
          <p>Save your favorite places for future visits.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
