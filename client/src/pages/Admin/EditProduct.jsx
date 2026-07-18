import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import API from "../../api/api";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const { data } = await API.get(`/products/${id}`);

      setFormData({
        name: data.product.name,
        description: data.product.description,
        price: data.product.price,
        category: data.product.category,
        image: data.product.image,
        stock: data.product.stock,
      });
    } catch (error) {
      console.log(error);
      alert("Failed to fetch product");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.put(`/products/${id}`, formData);

      alert(data.message);

      navigate("/admin/products");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to update product"
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">
              Edit Product
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <label className="block mb-2 font-semibold">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 font-semibold">
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                  required
                />
              </div>

              {formData.image && (
                <div className="md:col-span-2 flex justify-center">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-48 h-48 rounded-xl object-cover border"
                  />
                </div>
              )}

              <div className="md:col-span-2">
                <label className="block mb-2 font-semibold">
                  Description
                </label>

                <textarea
                  rows="5"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;