import { useState, useEffect } from 'react';
import {
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
  FaUserShield,
  FaBoxes,
  FaHome,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import clsx from 'clsx';

type Tab = 'home' | 'course' | 'batch' | 'role';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-8">Welcome to the Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-500 dark:bg-indigo-700 text-white p-6 rounded-2xl shadow-md text-center">
                <FaChalkboardTeacher size={36} className="mx-auto mb-2" />
                <h2 className="text-xl font-semibold">Teachers</h2>
                <p className="text-lg">2</p>
              </div>
              <div className="bg-green-500 dark:bg-green-700 text-white p-6 rounded-2xl shadow-md text-center">
                <FaBook size={36} className="mx-auto mb-2" />
                <h2 className="text-xl font-semibold">Courses</h2>
                <p className="text-lg">2</p>
              </div>
              <div className="bg-sky-500 dark:bg-sky-700 text-white p-6 rounded-2xl shadow-md text-center">
                <FaUserGraduate size={36} className="mx-auto mb-2" />
                <h2 className="text-xl font-semibold">Students</h2>
                <p className="text-lg">40</p>
              </div>
            </div>
          </div>
        );

      case 'role':
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Role Manager</h2>
            <p className="mb-6 text-gray-800 dark:text-gray-300">
              Update the role of a user by providing their email ID and selecting a role.
            </p>
            <div className="max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-white">Email ID</label>
                <input
                  type="email"
                  placeholder="Enter user email ID"
                  className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-white">Select Role</label>
                <select className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
                  <option>Admin</option>
                  <option>Teacher</option>
                  <option>Student</option>
                  <option>TA</option>
                </select>
              </div>
              <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800">Update Role</button>
            </div>
          </div>
        );

      case 'course':
        return (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Add New Course</h2>
              <input type="text" placeholder="Enter course ID" className="mb-2 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" />
              <input type="text" placeholder="Enter course name" className="mb-2 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" />
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" />
                <label className="text-gray-800 dark:text-white">Open Course</label>
              </div>
              <input type="date" className="mb-2 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" />
              <input type="date" className="mb-4 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" />
              <button className="bg-purple-700 text-white py-2 px-4 rounded">Add Course</button>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Delete Course</h2>
              <select className="mb-4 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
                <option>Select Course</option>
              </select>
              <button className="bg-purple-700 text-white py-2 px-4 rounded">Delete Course</button>
            </div>
          </div>
        );

      case 'batch':
        return (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Add New Batch</h2>
              <label className="block mb-1 text-sm font-medium text-gray-800 dark:text-white">Batch ID</label>
              <input type="text" placeholder="Enter batch ID" className="mb-2 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white" />
              <label className="block mb-1 text-sm font-medium text-gray-800 dark:text-white">Select Instructor</label>
              <select className="mb-2 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
                <option>Select Instructor</option>
              </select>
              <label className="block mb-1 text-sm font-medium text-gray-800 dark:text-white">Select Course</label>
              <select className="mb-4 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
                <option>Select Course</option>
              </select>
              <button className="bg-purple-700 text-white py-2 px-4 rounded">Add Batch</button>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Delete Batch</h2>
              <label className="block mb-1 text-sm font-medium text-gray-800 dark:text-white">Select Batch</label>
              <select className="mb-4 w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
                <option>Select Batch</option>
              </select>
              <button className="bg-purple-700 text-white py-2 px-4 rounded">Delete Batch</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={clsx('flex min-h-screen transition-colors duration-300', darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black')}>
      <aside className={clsx(
        'bg-indigo-800 text-white p-4 space-y-6 transition-all duration-300',
        sidebarCollapsed ? 'w-16' : 'w-64'
      )}>
        <div className="flex justify-between items-center">
          {!sidebarCollapsed && <h1 className="text-xl font-bold">Admin</h1>}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
            {sidebarCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          <button onClick={() => setActiveTab('home')} className="flex items-center gap-2 hover:bg-indigo-700 px-2 py-2 rounded">
            <FaHome /> {!sidebarCollapsed && 'Home'}
          </button>
          <button onClick={() => setActiveTab('role')} className="flex items-center gap-2 hover:bg-indigo-700 px-2 py-2 rounded">
            <FaUserShield /> {!sidebarCollapsed && 'Role Manager'}
          </button>
          <button onClick={() => setActiveTab('course')} className="flex items-center gap-2 hover:bg-indigo-700 px-2 py-2 rounded">
            <FaBook /> {!sidebarCollapsed && 'Course Manager'}
          </button>
          <button onClick={() => setActiveTab('batch')} className="flex items-center gap-2 hover:bg-indigo-700 px-2 py-2 rounded">
            <FaBoxes /> {!sidebarCollapsed && 'Batch Manager'}
          </button>
          <button onClick={() => setShowLogoutConfirm(true)} className="flex items-center gap-2 text-red-300 hover:text-red-500 mt-10">
            {!sidebarCollapsed && 'Logout'}
          </button>
        </nav>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-10 flex items-center gap-2 text-yellow-300 hover:text-yellow-400"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {!sidebarCollapsed && (darkMode ? 'Light Mode' : 'Dark Mode')}
        </button>
      </aside>

      <main className="flex-grow p-6">
        {renderContent()}

        {showLogoutConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg max-w-sm w-full space-y-4">
              <h3 className="text-lg font-semibold">Are you sure you want to logout?</h3>
              <div className="flex justify-end gap-4">
                <button
                  className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                  onClick={() => setShowLogoutConfirm(false)}
                >
                  No
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => alert('Logged out!')}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
