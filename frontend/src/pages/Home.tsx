import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-indigo-200 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center transition duration-300 ease-in-out">
        <div className="mb-6">
          <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl">👤</span>
          </div>
        </div>
        <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Peer Evaluation System</h1>
        <p className="text-gray-500 mb-6">Welcome! Please login or register to continue.</p>

        <div className="grid grid-cols-3 gap-4 mb-6 text-left">
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm">
            <p className="font-semibold text-indigo-800 text-sm">Track Progress</p>
            <p className="text-xs text-indigo-600">Monitor your evaluation status and feedback in real time.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl shadow-sm">
            <p className="font-semibold text-green-800 text-sm">Easy Evaluation</p>
            <p className="text-xs text-green-600">Submit and review peer evaluations with a simple interface.</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-xl shadow-sm">
            <p className="font-semibold text-pink-800 text-sm">Secure & Private</p>
            <p className="text-xs text-pink-600">Your data is encrypted and privacy is our top priority.</p>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <Link to="/login" className="flex flex-col items-center">
            <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition">
              <span className="fas fa-sign-in-alt">🔐</span>
            </div>
            <span className="mt-2 font-medium text-gray-700">Login</span>
          </Link>
          <Link to="/register" className="flex flex-col items-center">
            <div className="h-14 w-14 bg-teal-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition">
              <span className="fas fa-user-plus">📝</span>
            </div>
            <span className="mt-2 font-medium text-gray-700">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}