import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";

const HomeHeader: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { user } = useUser();
  const firstname = user?.name.split(" ")[0];

  return (
    <header className="bg-blue-500 p-16">
      <h1 className="text-slate-200 text-[36px]">Welcome to Food Finder</h1>
      {isAuthenticated ? (
        <>
          <h2 className="text-slate-300 text-[20px]">
            Welcome back, {firstname}! Answer a couple questions to find the
            perfect place to eat. You can also look at your favorite restaurants
            if you already have an idea of what you'd like to eat.
          </h2>
        </>
      ) : (
        <>
          <h2 className="text-slate-300 text-[20px]">
            Answer a couple questions to find the perfect place to eat. Login or
            sign up to save your favorite restaurants to easily find them later.
          </h2>
        </>
      )}
      <div className="flex gap-6 mt-6">
        <Link
          to="/restaurant-questions"
          className="bg-blue-600 hover:bg-blue-700 text-[20px] p-3 rounded-2xl"
        >
          Restaurant Questions
        </Link>
        {isAuthenticated ? (
          <Link
            to="/favorites"
            className="bg-blue-600 hover:bg-blue-700  text-[20px] p-3 rounded-2xl"
          >
            Favorites
          </Link>
        ) : (
            <Link
            to="/sign-in"
            className="bg-blue-600 hover:bg-blue-700  text-[20px] p-3 rounded-2xl"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
