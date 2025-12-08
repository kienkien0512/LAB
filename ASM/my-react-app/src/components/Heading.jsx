export default function Heading({ label = 'Khám phá sản phẩm ECMA-WD20306' }) {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white 
                   bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 
                   px-6 py-3 rounded-2xl shadow-lg text-center
                   transition-transform duration-300 hover:scale-105">
      {label}
    </h1>
  );
}
