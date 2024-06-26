import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { name: 'Home', path: '/' },
    // { name: 'Operation', path: '/operation' },
    // { name: 'Management', path: '/management' },
    { name: 'Finance', path: '/finance' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <div className="bg-gray-800 text-white h-screen p-8">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className="mb-2">
            <Link
              to={item.path}
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
