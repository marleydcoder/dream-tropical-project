export default function BookEvent() {
  return (
    <div className="BookEventShaddow py-5 md:py-6 px-8 md:px-12 bg-white absolute flex gap-3 items-center top-[70%] lg:top-[80%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-30">
      <input
        type="text"
        placeholder="Enter your secret code"
        className=" outline-none font-Poppins text-gray-500 text-sm md:placeholder:text-sm placeholder:text-xs w-36 md:w-60"
      />
      <h3 className="text-green-600 font-Poppins font-semibold text-sm md:text-lg cursor-pointer hover:text-green-400 AuthTransition">
        BOOK
      </h3>
    </div>
  );
}
