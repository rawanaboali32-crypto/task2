import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-8xl font-extrabold text-gray-400">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        Page Not Found
      </h2>

  

      <button
        onClick={() => navigate("/")}
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700 hover:scale-105"
      >
   Back to Home
      </button>
    </div>
  );
};

export default NotFound;

