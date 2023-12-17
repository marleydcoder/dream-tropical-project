import BookEvent from "@helper/BookEvent";
import SocialLinks from "@helper/SocialLinks";
import TropicalTree from "@helper/TropicalTree";
import WelcomeMessage from "@helper/WelcomeMessage";

export default function ChildContent() {
  return (
    <section className="bg-red-100 w-full h-full lg:h-[83%] text-white relative overflow-hidden">
      <div className="flex items-end flex-col absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="SmallCircle"></div>
        <div className="BigCircle"></div>
      </div>

      <WelcomeMessage />
      <TropicalTree />
      <BookEvent />
      <SocialLinks />
    </section>
  );
}
