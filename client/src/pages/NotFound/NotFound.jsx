import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-8xl font-bold text-blue-600">
            404
          </h1>

          <h2 className="text-4xl font-bold mt-6">
            Page Not Found
          </h2>

          <p className="text-gray-500 mt-4">
            Sorry, the page you are looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
          >
            Go To Home
          </Link>

        </div>
      </section>
    </>
  );
}

export default NotFound;