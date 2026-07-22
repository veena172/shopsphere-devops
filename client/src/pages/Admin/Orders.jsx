import { useEffect, useState } from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import API from "../../api/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/orders/admin/all");
      setOrders(data.orders);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const { data } = await API.put(
        `/orders/admin/${id}/status`,
        { status }
      );

      alert(data.message);
      fetchOrders();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to update order"
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Order Management
          </h1>

          {loading ? (
            <p>Loading Orders...</p>
          ) : orders.length === 0 ? (
            <p>No Orders Found</p>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full border-collapse">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 text-left">Customer</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-center">Items</th>
                    <th className="p-3 text-center">Amount</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Created</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="p-3">
                        {order.user?.name}
                      </td>

                      <td className="p-3">
                        {order.user?.email}
                      </td>

                      <td className="p-3 text-center">
                        {order.items.length}
                      </td>

                      <td className="p-3 text-center">
                        ₹{order.totalAmount.toLocaleString("en-IN")}
                      </td>

                      <td className="p-3 text-center">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateStatus(
                              order._id,
                              e.target.value
                            )
                          }
                          className="border rounded px-2 py-1"
                        >
                          <option value="Pending">
                            Pending
                          </option>
                          <option value="Processing">
                            Processing
                          </option>
                          <option value="Shipped">
                            Shipped
                          </option>
                          <option value="Delivered">
                            Delivered
                          </option>
                        </select>
                      </td>

                      <td className="p-3 text-center">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;