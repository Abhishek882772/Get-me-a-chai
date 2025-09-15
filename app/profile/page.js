"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [router, session]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    razorpayKey: "",
    razorpaySecret: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Details saved successfully ✅");
  };

  if (!session) {
    return <div className="p-8 text-center text-white">Redirecting to login...</div>;
  }

  return (
    <div className="min-h-screen bg-radial-[at_25%_25%] from-zinc-800 to-black to-90% p-8 flex items-center justify-center ">
      <div className="max-w-4xl mx-autobg-radial-[at_25%_25%] from-zinc-800 to-black to-90% shadow-xl rounded-2xl p-8 text-white w-[80vw]">
        <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Information Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">User Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg w-full bg-gray-800 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg w-full bg-gray-800 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="p-3 rounded-lg w-full bg-gray-800 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-lg w-full bg-gray-800 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Razorpay Credentials Section */}
          {/* {input razorpay pay id} */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Razorpay Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="razorpayKey"
                autoComplete="username"
                placeholder="Razorpay Key ID"
                value={formData.razorpayKey}
                onChange={handleChange}
                className="p-3 rounded-lg w-full bg-gray-800 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="password"
                name="razorpaySecret"
                placeholder="Razorpay Secret"
                autoComplete="username"
                value={formData.razorpaySecret}
                onChange={handleChange}
                className="p-3 rounded-lg w-full bg-gray-800 text-white border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
