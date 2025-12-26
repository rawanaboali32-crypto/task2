import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <h1>Online Courses</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/cart">Cart</Link>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
