import Link from "next/link"; // Import Link for navigation
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const items = [
    { name: "Curriculum", href: "/curriculum" },
    { name: "Item 2", href: "/page2" },
    { name: "Item 3", href: "/page3" },
    { name: "Item 4", href: "/page4" },
  ]; // Example items with links

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <Button className="p-8 text-white text-center shadow-lg">
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
