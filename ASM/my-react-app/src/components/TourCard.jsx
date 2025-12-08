const TourCard = ({ title, image, price, code, duration, startDate, startPlace, transport, badge }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {badge && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {badge}
        </span>
      )}
    </div>
    <div className="p-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-blue-700 line-clamp-2">{title}</h3>

      <p className="text-gray-700 text-sm">
        <span className="font-semibold text-purple-600">Mã tour:</span> {code}
      </p>

      <p className="text-gray-700 text-sm">
        <span className="font-semibold text-red-500">Giá:</span> {price}
      </p>

      <p className="text-gray-700 text-sm">
        <span className="font-semibold text-green-600">Thời gian:</span> {duration}
      </p>

      <p className="text-gray-700 text-sm">
        <span className="font-semibold text-orange-500">Ngày khởi hành:</span> {startDate}
      </p>

      <p className="text-gray-700 text-sm">
        <span className="font-semibold text-blue-500">Khởi hành tại:</span> {startPlace}
      </p>

      <p className="text-gray-700 text-sm">
        <span className="font-semibold text-teal-500">Phương tiện:</span> {transport}
      </p>
    </div>
  </div>
);

export default TourCard;
