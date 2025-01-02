import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usePasswordReset } from "../contexts/PasswordResetContext";

const ForgotPassword: React.FC = () => {
  const { allowResetPageAccess } = usePasswordReset();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fakeSendCodeApi(email);
      setIsCodeSent(true);
      setMessage("Reset code sent to your email.");
    } catch (err) {
      setError("Failed to send reset code. Please try again.");
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (code === "123456") {
        allowResetPageAccess();
        navigate("/reset-password");
      } else {
        throw new Error("Invalid code");
      }
    } catch (err) {
      setError("Invalid reset code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {!isCodeSent ? (
          <form onSubmit={handleSendCode} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send Reset Code
            </button>
            <div className="text-center text-sm mt-4 text-gray-600">
              Or return to the{" "}
              <Link to="/sign-in" className="text-blue-600 hover:underline">
                Sign In
              </Link>{" "}
              page.
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Reset Code
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Verify Code
            </button>
            <div className="text-center text-sm mt-4 text-gray-600">
              Or return to the{" "}
              <Link to="/sign-in" className="text-blue-600 hover:underline">
                Sign In
              </Link>{" "}
              page.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const fakeSendCodeApi = async (email: string) => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default ForgotPassword;
