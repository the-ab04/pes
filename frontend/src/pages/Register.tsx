import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200">
      {/* Home icon to route back to homepage */}
            <Link to="/" style={{
                position: 'absolute',
                top: 24,
                left: 24,
                zIndex: 2,
                background: '#fff',
                borderRadius: '50%',
                boxShadow: '0 2px 8px rgba(60,60,120,0.10)',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
            }} aria-label="Go to homepage">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-5h-6v5H4a1 1 0 0 1-1-1V10.5z" stroke="#667eea" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                </svg>
            </Link>
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
