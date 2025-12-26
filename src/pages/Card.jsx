import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, c) => sum + c.price, 0);

  return (
   <div className="p-4 max-w-md mx-auto flex flex-col  justify-center space-y-2 mt-30 mb-30">
  {cart.map(course => (
    <div 
      key={course.id} 
      className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
    >
      <span className="font-semibold">{course.title}</span>
      <button 
        onClick={() => removeFromCart(course.id)} 
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Remove
      </button>
    </div>
  ))}
  <h3 className="text-xl font-bold text-right">Total: {total}$</h3>
</div>

  );
}
