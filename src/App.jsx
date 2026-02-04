import { Navbar } from "@/layout/Navbar";
import { Projects } from "@/sections/Projects";
import { SideProjects } from "@/sections/SideProjects";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Projects />
        <SideProjects />
      </main>
    </div>
  );
}

export default App;