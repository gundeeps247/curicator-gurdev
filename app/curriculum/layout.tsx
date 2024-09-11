import Sidebar from "../../components/sidebar"; // Adjust the path as needed

const links = [
  { name: "Department Vision/Mission", href: "/curriculum/department" },
  { name: "Curriculum", href: "/curriculum/design" },
  { name: "POs / PSOs", href: "/curriculum/po" },
  { name: "Curriculum Settings", href: "/curriculum/settings" },
  { name: "Course", href: "/curriculum/course" },
  { name: "Course Outcome(CO)", href: "/curriculum/co" },
  { name: "CO to PO Mapping(Course wise)", href: "/curriculum/copo" },
  { name: "Manage Topic & TLOs", href: "/curriculum/tlo" },
  { name: "Manage Lab Experiment & TLOs", href: "/curriculum/lab" },
]; // Define the links for the sidebar

export default function CurriculumLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar links={links} /> {/* Render the Sidebar */}
      <main className="flex-1 pl-72 pt-24 pr-8">
        {children} {/* Render the nested pages */}
      </main>
    </div>
  );
}
