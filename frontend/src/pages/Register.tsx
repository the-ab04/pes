import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transition hover:scale-105 duration-300 ease-in-out">
        <div className="flex justify-center mb-6">
          <div className="bg-purple-500 text-white text-4xl rounded-full h-16 w-16 flex items-center justify-center shadow-lg transform hover:rotate-6 transition">
            👤
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Create Account</h2>
        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition"
          />
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition"
          />
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition"
          />
          <select 
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition"
          >
            <option>Student</option>
            <option>Professor</option>
            <option>TA</option>
            <option>Admin</option>
          </select>
          <button 
            type="submit" 
            className="w-full !bg-purple-500 text-black py-3 rounded-lg hover:bg-purple-600 transition shadow-md transform hover:scale-105"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-purple-600 font-semibold hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}
