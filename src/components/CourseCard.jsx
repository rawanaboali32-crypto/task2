import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function CourseCard({ course }) {
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();

  return (
    <div className="border p-4 rounded">
      <h2>{course.title}</h2>
      <p>{course.shortDescription}</p>
      <p>{course.price}$</p>
       

      <div className="flex space-x-4 mt-2">
  <Link
    to={`/courses/${course.id}`}
    className="text-blue-500 font-semibold hover:underline"
  >
    View Details
  </Link>

  <button
    onClick={() => isLoggedIn && addToCart(course)}
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition cursor-pointer"
  >
    Add to Cart
  </button>
</div>

    </div>
  );
}
