import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";

const HomeHeader: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { user } = useUser();
  const firstname = user?.name.split(" ")[0];

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-10">
      <h1 className="text-4xl font-bold">Welcome to Food Finder</h1>
      {isAuthenticated ? (
        <>
          <h2 className="mt-4 text-lg w-4/5 mx-auto">
            Welcome back, {firstname}! Answer a couple questions to find the
            perfect place to eat. You can also look at your favorite restaurants
            if you already have an idea of what you'd like to eat.
          </h2>
        </>
      ) : (
        <>
          <h2 className="mt-4 text-lg w-4/5 mx-auto">
            Answer a couple questions to find the perfect place to eat. Login or
            sign up to save your favorite restaurants to easily find them later.
          </h2>
        </>
      )}
      <div className="mt-6 flex justify-center space-x-4">
        <Link
          to="/restaurant-questions"
          className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded shadow-lg"
        >
          Restaurant Questions
        </Link>
        {isAuthenticated ? (
          <Link
            to="/favorites"
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded shadow-lg"
          >
            Favorites
          </Link>
        ) : (
          <Link
            to="/sign-in"
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded shadow-lg"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
