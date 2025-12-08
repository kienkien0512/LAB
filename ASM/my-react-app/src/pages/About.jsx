const About = () => (
  <div className="py-16 px-6 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
      <p className="text-gray-700 text-lg text-center mb-4">
        Chào mừng đến với <span className="text-blue-600 font-semibold">ECMA Travel</span>, nơi mang đến cho bạn những trải nghiệm du lịch <span className="text-red-500 font-semibold">chuyên nghiệp</span>, <span className="text-green-600 font-semibold">an toàn</span> và <span className="text-purple-600 font-semibold">đáng nhớ</span>.
      </p>
      <p className="text-gray-700 text-lg text-center">
        Chúng tôi cam kết:
      </p>
      <ul className="mt-4 list-disc list-inside text-gray-700 text-lg space-y-2">
        <li><span className="font-semibold text-blue-600">Dịch vụ uy tín:</span> Đội ngũ nhân viên tận tâm và giàu kinh nghiệm.</li>
        <li><span className="font-semibold text-green-600">Trải nghiệm trọn gói:</span> Tour du lịch đa dạng, linh hoạt theo nhu cầu.</li>
        <li><span className="font-semibold text-red-500">An toàn tuyệt đối:</span> Chúng tôi đảm bảo mọi chuyến đi đều an toàn và tiện nghi.</li>
      </ul>
    </div>
  </div>
);

export default About;
