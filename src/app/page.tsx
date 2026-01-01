import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio isStandalone={false} />
    </>
  );
}
