export const Form = () => {
  return (
    <div
      id="Form"
      className="layout flex items-center flex-col gap-y-6 sm:gap-y-8 md:gap-y-10   xl:gap-y-14 "
    >
      <div className="heading-text text-center">Why wait?</div>
      <form className="  items-start flex flex-col gap-y-8 lg:gap-y-10 ">
        <div className="  max-w-[864px] grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 ">
          <input
            className="w-full h-16 bg-transparent border rounded-xl heading-text placeholder:heading-text  placeholder:flex text-center placeholder:text-center "
            type="text"
            placeholder="name"
          />
          <input
            className="w-full h-16 bg-transparent border rounded-xl heading-text placeholder:heading-text  placeholder:flex text-center placeholder:text-center "
            type="text"
            placeholder="company name"
          />
          <input
            className="w-full h-16 bg-transparent border rounded-xl heading-text placeholder:heading-text  placeholder:flex text-center placeholder:text-center "
            type="text"
            placeholder="email"
          />
          <input
            className="w-full h-16 bg-transparent border rounded-xl heading-text placeholder:heading-text  placeholder:flex text-center placeholder:text-center "
            type="text"
            placeholder="phone number"
          />
        </div>

        <div className="hover:cursor-pointer text-center hover:animate-pulse w-[160px] text-[24px] h-fit px-4 py-2 text-black bg-white rounded-xl">
          Submit{" "}
        </div>
      </form>
    </div>
  );
};
