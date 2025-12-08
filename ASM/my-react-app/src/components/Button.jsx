const Button = ({ label = 'Default Label', onClick }) => (
  <button
    onClick={onClick}
    className="bg-amber-400 text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-amber-500 hover:shadow-lg hover:scale-105 transition transform duration-200"
  >
    {label}
  </button>
);

export default Button;
