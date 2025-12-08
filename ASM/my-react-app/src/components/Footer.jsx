const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 py-10 px-6 mt-10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      {/* Logo / Thông tin công ty */}
      <div>
        <h2 className="text-xl font-bold text-blue-500 mb-2">ECMA Travel</h2>
        <p className="text-sm md:text-base">
          Bản quyền của ECMA ® 2024. Bảo lưu mọi quyền. Ghi rõ nguồn 
          "<span className="text-blue-400 hover:underline">www.abc.com.vn</span>" ® khi sử dụng lại thông tin từ website này.
        </p>
      </div>

      {/* Liên hệ */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
        <p>Email: <span className="text-blue-400">contact@ecma.com.vn</span></p>
        <p>Điện thoại: <span className="text-blue-400">+84 123 456 789</span></p>
        <p>Địa chỉ: <span className="text-blue-400">123 Đường ABC, Đà Nẵng</span></p>
      </div>

      {/* Social / Bản quyền */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Theo dõi chúng tôi</h3>
        <div className="flex gap-4 mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-400 transition">Facebook</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition">Instagram</a>
          <a href="#" className="text-blue-300 hover:text-blue-200 transition">Twitter</a>
        </div>
        <p className="text-xs md:text-sm">
          Số giấy phép kinh doanh lữ hành Quốc tế: 79-234/2022/TCDL-GP LHQT.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
