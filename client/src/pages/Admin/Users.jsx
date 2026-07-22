import { useEffect, useState } from "react";
import API from "../../api/api";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminNavbar from "../../components/Admin/AdminNavbar";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await API.get("/auth/admin/users");
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      const { data } = await API.delete(`/auth/admin/users/${id}`);

      alert(data.message);
      fetchUsers();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to delete user"
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
            Users Management
          </h1>

          {loading ? (
            <p>Loading Users...</p>
          ) : users.length === 0 ? (
            <p>No Users Found</p>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full border-collapse">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-center">Role</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user._id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="p-3">{user.name}</td>

                      <td className="p-3">{user.email}</td>

                      <td className="p-3 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            user.role === "admin"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td className="p-3 text-center">
                        <button
                          onClick={() => deleteUser(user._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>
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

export default Users;