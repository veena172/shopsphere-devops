import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import DashboardCard from "../../components/Admin/DashboardCard";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Total Products" value="85" />
          <DashboardCard title="Total Orders" value="12" />
          <DashboardCard title="Total Users" value="8" />
          <DashboardCard title="Revenue" value="₹25,000" />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;