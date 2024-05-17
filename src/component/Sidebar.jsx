import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { name: 'Operation', path: '/operation' },
    { name: 'Management', path: '/management' },
    { name: 'Finance', path: '/finance' },
    { name: 'Performance', path: '/performance' },
  ];

  return (
    <div className="bg-gray-800 text-white h-screen p-4">
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
