import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import RestaurantQuestions from "./pages/RestaurantQuestions";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/restaurant-questions"
          element={
            <MainLayout>
              <RestaurantQuestions />
            </MainLayout>
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/favorites"
            element={
              <MainLayout>
                <Favorites />
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
