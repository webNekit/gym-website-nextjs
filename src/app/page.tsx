import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Classes from "@/components/Classes/Classes";
import Hero from "@/components/Hero/Hero";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Blog />
    </>
  );
}
