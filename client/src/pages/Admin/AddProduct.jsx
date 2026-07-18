import { useState } from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import API from "../../api/api";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/products", formData);

      alert(data.message);

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
      });

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Add New Product
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Product Name */}
              <div>
                <label className="font-medium">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Product Name"
                  className="w-full border rounded-lg p-3 mt-2"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="font-medium">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter Price"
                  className="w-full border rounded-lg p-3 mt-2"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="font-medium">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              {/* Stock */}
              <div>
                <label className="font-medium">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="Enter Stock"
                  className="w-full border rounded-lg p-3 mt-2"
                  required
                />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="font-medium">
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Paste Image URL"
                  className="w-full border rounded-lg p-3 mt-2"
                  required
                />
              </div>

              {/* Image Preview */}
              {formData.image && (
                <div className="md:col-span-2">
                  <p className="font-medium mb-3">
                    Image Preview
                  </p>

                  <img
                    src={formData.image}
                    alt="Product Preview"
                    className="w-64 h-64 object-cover rounded-xl border shadow"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}

              {/* Description */}
              <div className="md:col-span-2">
                <label className="font-medium">
                  Description
                </label>

                <textarea
                  rows="5"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter Product Description"
                  className="w-full border rounded-lg p-3 mt-2"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;