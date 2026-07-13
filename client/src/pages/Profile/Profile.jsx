import Navbar from "../../components/Navbar/Navbar";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSignOutAlt } from "react-icons/fa";

function Profile() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-lg p-10">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mb-8">
              My Profile
            </h1>

            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <FaUserCircle className="text-8xl text-blue-600" />
            </div>

            {/* User Details */}
            <div className="space-y-6">

              <div className="flex items-center gap-4 border-b pb-4">
                <FaUserCircle className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-gray-500">Full Name</p>
                  <h2 className="text-xl font-semibold">
                    Vanshika Aneja
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b pb-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-gray-500">Email</p>
                  <h2 className="text-xl font-semibold">
                    vanshika@example.com
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b pb-4">
                <FaPhone className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-gray-500">Phone</p>
                  <h2 className="text-xl font-semibold">
                    +91 98765 43210
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <div>
                  <p className="text-gray-500">Address</p>
                  <h2 className="text-xl font-semibold">
                    Panipat, Haryana, India
                  </h2>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition">
                <FaEdit />
                Edit Profile
              </button>

              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition">
                <FaSignOutAlt />
                Logout
              </button>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Profile;