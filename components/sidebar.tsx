import Link from "next/link"; // Import Link for navigation

interface SidebarProps {
  links: { name: string; href: string }[]; // Define the type for the links prop
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="fixed w-64 bg-gray-800 text-white h-screen p-4 ">
      <h2 className="text-xl font-bold mb-4">Curricula</h2>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <Link href={link.href}>
                <span className="block p-2 rounded hover:bg-gray-700 transition-colors duration-300">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
