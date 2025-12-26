import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="h-64 flex flex-col justify-center items-center bg-gray-200">
  <input 
    placeholder="Email" 
    className="border mb-2 px-2 py-1 w-64" 
  />
  <input 
    placeholder="Password" 
    type="password" 
    className="border mb-2 px-2 py-1 w-64" 
  />
  <button 
    onClick={login} 
    className="bg-blue-500 text-white px-4 py-2 w-64"
  >
    Login
  </button>
</div>

  );
}
