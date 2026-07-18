import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Admin
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          to="/admin"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/admin/add-product"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition"
        >
          ➕ Add Product
        </Link>

        <Link
          to="/admin/orders"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition"
        >
          📦 Orders
        </Link>

        <Link
          to="/admin/users"
          className="px-4 py-3 rounded-lg hover:bg-slate-700 transition"
        >
          👥 Users
        </Link>
        <Link
  to="/admin/products"
  className="px-4 py-3 rounded-lg hover:bg-slate-700 transition"
>
  📋 Manage Products
</Link>
      </nav>
    </aside>
  );
}

export default AdminSidebar;