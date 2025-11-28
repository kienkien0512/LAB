import { useEffect, useState } from "react";

function List() {
  const[tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tours")
    .then(res => res.json())
    .then(data => setTours(data));
  },[]);

  const handleDelete = (id) => {
        if (!window.confirm("Bạn có chắc muốn xóa tour này?")) return;
    fetch(`http://localhost:3000/tours/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setTours(tours.filter(tour => tour.id !== id));
      alert("Xóa tour thành công!");
    })
    .catch(error => {
      console.error("Error deleting tour:", error);
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Ten Tour
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Diem den
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Thoi gian
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Gia
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Hinh anh
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Mo ta
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Con lai
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Xoa
              </th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour, index) => (
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
              <td className="px-4 py-2 border border-gray-300">{tour.name}</td>
              <td className="px-4 py-2 border border-gray-300">{tour.destination}</td>
              <td className="px-4 py-2 border border-gray-300">{tour.duration}</td>
              <td className="px-4 py-2 border border-gray-300">{tour.price.toLocaleString()}</td>
              <td className="px-4 py-2 border border-gray-300">{tour.image && (<img src={tour.image} alt={tour.name}/>)}</td>
              <td className="px-4 py-2 border border-gray-300">{tour.description}</td>
              <td className="px-4 py-2 border border-gray-300">{tour.available}</td>
              <button onClick={() => handleDelete(tour.id)}>Xoa</button>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
