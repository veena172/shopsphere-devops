import Navbar from "../../components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";

function Wishlist() {
  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            My Wishlist ❤️
          </h1>

          {wishlistItems.length === 0 ? (

            <div className="bg-white rounded-2xl shadow p-10 text-center">

              <h2 className="text-2xl font-semibold">
                Your Wishlist is Empty ❤️
              </h2>

              <p className="text-gray-500 mt-3">
                Add your favourite products.
              </p>

            </div>

          ) : (

            <div className="space-y-6">

              {wishlistItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center"
                >

                  <div className="flex items-center gap-5">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 rounded-xl object-cover"
                    />

                    <div>

                      <h2 className="text-xl font-semibold">
                        {item.name}
                      </h2>

                      <p className="text-blue-600 text-lg font-bold mt-2">
                        ₹{item.price}
                      </p>

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      dispatch(removeFromWishlist(item.id))
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>
      </section>
    </>
  );
}

export default Wishlist;