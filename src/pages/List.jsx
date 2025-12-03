import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/tours")
      .then(res => res.json())
      .then(data => setTours(data))
      .catch(err => console.error("Error fetching tours:", err));
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa tour này?")) return;

    fetch(`http://localhost:3000/tours/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTours(prevTours => prevTours.filter(tour => tour.id !== id));
        alert("Xóa tour thành công!");
      })
      .catch(error => console.error("Error deleting tour:", error));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách tour</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Tên tour</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Điểm đến</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Thời gian</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Giá</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Hình ảnh</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Mô tả</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Còn lại</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Xóa</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Sửa</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour, index) => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.name}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.destination}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.duration}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {Number(tour.price).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {tour.image ? (
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-20 h-16 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400">Không có ảnh</span>
                  )}
                </td>
                <td className="px-4 py-2 border border-gray-300">{tour.description}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.available}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => handleDelete(tour.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={() => handleEdit(tour.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
