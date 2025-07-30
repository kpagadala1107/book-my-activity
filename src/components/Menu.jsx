export default function Menu({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'activities', label: 'Activities' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-600 text-white p-2">
      <ul className="flex space-x-8">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActivePage(item.id)}
              className={`w-full text-left p-1 rounded transition ${activePage === item.id ? 'bg-blue-500' : 'hover:bg-gray-700'}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}