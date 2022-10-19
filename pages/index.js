import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Project from "../Components/Project";
import { projects } from "../projects";
import { useEffect, useState, useRef } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/outline";

export default function Home() {
  //Scroll up button feature
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= screen.height * 0.5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollUpHandler = () => window.scrollTo({ top: 0, behavior: "smooth" });
  //End of Scroll up button feature

  //Scroll to projects feature
  const projectsRef = useRef(null);

  const scrollToProject = (project) => {
    switch (project) {
      case "pokeapp":
        projectsRef.current.children[0].scrollIntoView({ behavior: "smooth" });
        break;
      case "appflix":
        projectsRef.current.children[1].scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  //End of Scroll to projects feature

  return (
    <div className="relative h-[140vh] bg-[#fefffc]">
      <Header />
      <main className="relative flex flex-col w-screen py-24">
        <Banner scrollToProject={scrollToProject} />
        {isScrolled && (
          <button onClick={() => scrollUpHandler()}>
            <ChevronDoubleUpIcon className="hidden lg:inline fixed right-12 h-9 w-9 hover:scale-125 transition-all top-[50%] z-50 text-blue-700 " />
          </button>
        )}
        <section ref={projectsRef} className="relative">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              summary={project.summary}
              technologies={project.technologies}
              url={project.url}
              ref={projectsRef[index]}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
