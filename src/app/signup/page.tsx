"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const userType = searchParams.get("userType");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      name,
      email,
      contactNumber,
      city,
      state,
      ...(userType === "employee" && { organizationName, webUrl }),
    };

    try {
      // Simulate API call
      console.log("Signing up with payload:", payload);
      setLoading(false);
      // Redirect to a success page or dashboard
      router.push("/success");
    } catch (error) {
      setError("An error occurred");
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
          onSubmit={handleSubmit}
          className="w-full max-w-sm px-8 py-10 border border-gray-200 rounded shadow-sm bg-white"
        >
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          {userType === "employee" && (
            <>
              <div className="mb-4">
                <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
                  Organization Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organizationName"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="webUrl" className="block text-sm font-medium text-gray-700">
                  Web URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="webUrl"
                  value={webUrl}
                  onChange={(e) => setWebUrl(e.target.value)}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
            </>
          )}

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => router.push(`/login?userType=${userType}`)}
              className="text-blue-500 underline"
            >
              Go Back to Login Page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
