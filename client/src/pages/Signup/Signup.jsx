import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/api";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/register", formData);

      alert(data.message);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

        <h2 className="text-4xl font-bold text-center text-blue-600">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Join ShopSphere today.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSignup}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:border-blue-600"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Create Account
          </button>

          <div className="text-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t"></div>
          </div>

          <button
            type="button"
            className="w-full border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

        </form>

      </div>

    </div>
  );
}

export default Signup;