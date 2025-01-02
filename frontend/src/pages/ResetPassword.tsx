import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { usePasswordReset } from "../contexts/PasswordResetContext";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const ResetPassword: React.FC = () => {
  const { canAccessResetPage } = usePasswordReset();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (!canAccessResetPage) {
    return <Navigate to="/forgot-password" replace />;
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await fakeResetPasswordApi(password);
      setMessage("Password reset successfully. You can now sign in.");
      navigate("/sign-in");
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <form onSubmit={handleResetPassword} className="mt-6 space-y-4">
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-0 bottom-0 right-3 mt-9 text-gray-600 h-5 w-5"
            >
              {passwordVisible ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md"
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute top-0 bottom-0 right-3 mt-9 text-gray-600 h-5 w-5"
            >
              {confirmPasswordVisible ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Reset Password
          </button>
          <div className="text-center text-sm mt-4 text-gray-600">
            Or return to the{" "}
            <Link to="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </Link>{" "}
            page.
          </div>
        </form>
      </div>
    </div>
  );
};

const fakeResetPasswordApi = async (password: string) => {
  console.log(password);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default ResetPassword;
