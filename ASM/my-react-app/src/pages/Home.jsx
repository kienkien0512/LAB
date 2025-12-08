import TourCard from "../components/TourCard";
import Button from "../components/Button";

const Home = () => {
  const tours = [
    {
      id: 1,
      title: "Đà Nẵng - Huế - Thành cổ Quảng Trị - Động Thiên Đường & Động Phong Nha - Bà Nà - Cầu Vàng - Sơn Trà - Phố Cổ Hội An - Đà Nẵng",
      image: "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__1_10256_ba-na-hill-4.webp",
      price: "7,500,000 VND",
      code: "DN001",
      duration: "3 ngày 2 đêm",
      startDate: "25/12/2024",
      startPlace: "Hà Nội",
      transport: "Ô tô",
      badge: "Hot Tour",
    },
    {
      id: 2,
      title: "Sức sống mới qua miền di sản: Đà Nẵng - Hội An - Huế - Phong Nha",
      image: "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__1_12686_dainoi5.webp",
      price: "35,000,000 VND",
      code: "DN002",
      duration: "7 ngày 6 đêm",
      startDate: "10/01/2025",
      startPlace: "Hồ Chí Minh",
      transport: "Máy bay",
      badge: "Cao Cấp",
    },
{
      id: 3,
      title: "Liên Tuyến Bắc Trung: Sapa – Fansipan – Hà Nội - Hạ Long - Ninh Bình - Đà Nẵng – Bà Nà – Hội An - Động Phong Nha & Thiên Đường - Huế - La Vang",
      image: "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__0_7767_dinh-fansipan.webp",
      price: "5,000,000 VND",
      code: "DN003",
      duration: "2 ngày 1 đêm",
      startDate: "05/12/2024",
      startPlace: "Đà Nẵng",
      transport: "Ô tô",
      badge: "Khuyến mãi",
    },
    {
      id: 4,
      title: "Đà Nẵng - Hội An - Rừng Dừa Bẩy Mẫu - Đại Nội - Huế",
      image: "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_240401084016_116668_XE LUA QUA DEO HAI VAN.jpg",
      price: "6,200,000 VND",
      code: "DN004",
      duration: "3 ngày 2 đêm",
      startDate: "15/12/2024",
      startPlace: "Hà Nội",
      transport: "Ô tô",
      badge: "Tiêu Chuẩn",

    },
    {
      id: 5,
      title: "Caravan miền Trung - Hành trình đa sắc: Vịnh Vĩnh Hy - Quy Nhơn - phố cổ Hội An - Đà Nẵng - Tuy Hòa",
      image: "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__0_13535_vinh-vinh-hi-1-4.webp",
      price: "6,200,000 VND",
      code: "DN005",
      duration: "3 ngày 2 đêm",
      startDate: "15/12/2024",
      startPlace: "Hà Nội",
      transport: "Ô tô",
      badge: "Khuyến mãi",

    },
    {
      id: 6,
      title: "Huế - Động Phong Nha & Thiên Đường - La Vang - Phổ Cổ Hội An - KDL Bà Nà - Cầu Vàng - Sơn Trà - Mỹ Khê - Đà Nẵng (Khách sạn 4* trọn tour)",
      image: "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__1_11511_dongphongnha2.webp",
      price: "6,200,000 VND",
      code: "DN006",
      duration: "3 ngày 2 đêm",
      startDate: "15/12/2024",
      startPlace: "Hà Nội",
      transport: "Ô tô",
      badge: "Khuyến mãi",

    },
    {
      id: 7,
      title: "HUẾ - LA VANG - ĐỘNG THIÊN ĐƯỜNG - KDL BÀ NÀ - CẦU VÀNG - HỘI AN - ĐÀ NẴNG (KHÁCH SẠN 4* TRỌN TOUR)",
      image: "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__0_13889_1.webp",
      price: "6,200,000 VND",
      code: "DN007",
      duration: "3 ngày 2 đêm",
      startDate: "15/12/2024",
      startPlace: "Hà Nội",
      transport: "Ô tô",
      badge: "Khuyến mãi",

    },
    {
      id: 8,
      title: "Miền Trung: Thượng lưu giữa lòng di sản - Đà Nẵng - Hội An - Trải nghiệm nghỉ dưỡng 5 sao cao cấp - Anatara Hội An Resort & InterContinental Danang Sun Peninsula Resort",
      image: "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__1_13717_anantarahoiandesktop.webp",
      price: "6,200,000 VND",
      code: "DN008",
      duration: "3 ngày 2 đêm",
      startDate: "15/12/2024",
      startPlace: "Hà Nội",
      transport: "Ô tô",
      badge: "Khuyến mãi",

    },  ];

  return (
    <div className="py-10 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">Du lịch Đà Nẵng</h1>
      <p className="text-md font-medium text-center text-gray-700 mb-8 max-w-4xl mx-auto">
        Đà Nẵng nằm giữa ba di sản thế giới: <span className="text-blue-600 font-semibold">cố đô Huế</span>, 
        <span className="text-blue-600 font-semibold"> phố cổ Hội An</span> và 
        <span className="text-blue-600 font-semibold"> thánh địa Mỹ Sơn</span>. 
        Đà Nẵng còn có nhiều danh thắng tuyệt đẹp như 
        <span className="text-red-500 font-semibold"> Ngũ Hành Sơn</span>, 
        <span className="text-red-500 font-semibold"> Bà Nà, bán đảo Sơn Trà</span> và 
        <span className="text-green-600 font-semibold"> cầu quay Sông Hàn</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {tours.map(tour => (
          <TourCard
            key={tour.id}
            title={tour.title}
            image={tour.image}
            price={tour.price}
            code={tour.code}
            duration={tour.duration}
            startDate={tour.startDate}
            startPlace={tour.startPlace}
            transport={tour.transport}
            badge={tour.badge}
          />
        ))}
      </div>

      <div className="text-center">
        <Button label="Xem thêm" onClick={() => alert("Xem thêm clicked!")} />
      </div>
    </div>
  );
};

export default Home;
