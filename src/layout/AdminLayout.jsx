import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Khu vực quản trị - Admin
      </h2>

      <nav className="mb-6 flex justify-center space-x-6">
        <Link to="/list" className="text-blue-600 hover:underline">
          Danh sách
        </Link>
        <Link to="/add" className="text-blue-600 hover:underline">
          Thêm mới
        </Link>
      </nav>

      <div className="bg-white shadow p-6 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;