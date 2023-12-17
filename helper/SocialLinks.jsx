import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

export default function SocialLinks() {
  return (
    <section className="absolute left-[50%] top-[25%] lg:top-[90%] lg:left-[90%] -translate-x-[50%] -translate-y-[50%]">
      <div className="flex items-center gap-4 lg:gap-2">
        <Link
          href="https://twitter.com/drealmlex/"
          className="border-[1px] border-gray-800 lg:border-0 p-2 hover:bg-white rounded-[50%] SocialTransition SocialShadow"
        >
          <AiOutlineTwitter size={22} className="text-gray-800" />
        </Link>
        <Link
          href="https://www.instagram.com/drealmlex/"
          className="border-[1px] border-gray-800 lg:border-0 p-2 hover:bg-white rounded-[50%] SocialTransition SocialShadow"
        >
          <AiOutlineInstagram size={22} className="text-gray-800" />
        </Link>
        <Link
          href="http://linkedin.com/in/gabriel-dream-043268247"
          className="border-[1px] border-gray-800 lg:border-0 p-2 hover:bg-white rounded-[50%] SocialTransition SocialShadow"
        >
          <BiLogoLinkedin size={22} className="text-gray-800" />
        </Link>
      </div>
    </section>
  );
}
