"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const userType = searchParams.get("userType");

  const handleEmailSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const payload = { email };

    try {
      // Simulate sending OTP
      console.log("Sending OTP to:", payload);
      setIsOtpSent(true);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while sending OTP");
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const payload = { email, otp };

    try {
      // Simulate OTP verification
      console.log("Verifying OTP for:", payload);
      setLoading(false);
      router.push("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      setError("Invalid OTP");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Description"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2 p-4">
        <form
          onSubmit={isOtpSent ? handleOtpSubmit : handleEmailSubmit}
          className="w-full max-w-sm px-8 py-10 border border-gray-200 rounded shadow-sm bg-white"
        >
          <h2 className="text-2xl font-semibold mb-4">{isOtpSent ? "Verify OTP" : "Login"}</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email or Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {isOtpSent && (
            <div className="mb-4">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter OTP <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Loading..." : isOtpSent ? "Verify OTP" : "Send OTP"}
          </button>

          <p className="mt-4 text-center">
            Do not have an account yet?{" "}
            <a href={`/signup?userType=${userType}`} className="text-red-500 underline">
              Sign up here
            </a>
          </p>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => router.push(`/`)}
              className="text-blue-500 underline"
            >
              Go Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
