import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  return (
    <>
      <Spotlight />

      <main className="mx-auto min-h-screen w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12">
          <Sidebar />

          <div className="w-full pb-20 lg:ml-[52%] lg:w-[48%] lg:pb-0">
            <About />

            <Skills />

            <Services />

            <Experience />

            <Projects />

            <Contact />

            <footer className="py-12 sm:py-16">
  <div className="border-t border-[#233554] pt-8">
    <p className="text-[13px] leading-6 text-[#64748b]">
      Built and designed by Clement Wanjihia.
    </p>

    <p className="mt-2 text-[13px] leading-6 text-[#64748b]">
      Software Engineer • Cybersecurity Student • Problem Solver
    </p>
  </div>
</footer>
          </div>
        </div>
      </main>
    </>
  );
}