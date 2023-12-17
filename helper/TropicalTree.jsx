import Image from "next/image";

import e2 from "@public/e2.png";

export default function TropicalTree() {
  return (
    <div className="absolute md:top-[70%] -scale-x-[1] xl:top-[68%] md:-translate-y-[50%] md:left-[50%] md:-translate-x-[50%] top-[70%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-20">
      <Image
        src={e2}
        alt="tropical leave"
        className="min-w-[350px] md:w-[500px]"
      />
    </div>
  );
}
