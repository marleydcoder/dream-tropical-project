import ChildContent from "@components/Home-page/ChildContent";
import Navbar from "@components/Home-page/Navbar";

export default function Home() {
  return (
    <section className="h-screen bg-white lg:px-8  overflow-hidden">
      <Navbar />
      <ChildContent />
    </section>
  );
}
