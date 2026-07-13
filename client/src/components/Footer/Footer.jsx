import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            ShopSphere
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Your one-stop destination for premium fashion and lifestyle
            products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Products
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Categories
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Customer Care
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">
              Help Center
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Returns
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex justify-center sm:justify-start gap-5 text-2xl text-blue-400">

            <FaFacebook className="hover:text-white cursor-pointer transition" />

            <FaInstagram className="hover:text-white cursor-pointer transition" />

            <FaTwitter className="hover:text-white cursor-pointer transition" />

            <FaLinkedin className="hover:text-white cursor-pointer transition" />

          </div>
        </div>

      </div>

      <hr className="my-10 border-gray-700" />

      <p className="text-center text-gray-500 text-sm md:text-base px-4">
        © 2026 ShopSphere. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;