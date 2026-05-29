import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
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
            <Experience />
            <Projects />
            <Contact />

            <footer className="py-12 sm:py-16">
              <p className="max-w-md text-[13px] leading-6 text-[#64748b]">
                Built with Next.js, TypeScript, and Tailwind CSS. Designed and
                developed by Clement Wanjihia.
              </p>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}