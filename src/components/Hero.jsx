import React from "react";

const Shape = () => (
  <img
    src="https://cdn.easyfrontend.com/pictures/hero/hero_28.svg"
    alt=""
    className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-[1] rounded-[50px] img-fluid"
  />
);

const Hero = () => {
  return (
    <section className="ezy__header25 light pt-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-6 text-center lg:text-start items-center">
          <div className="col-span-12 lg:col-span-6 py-12">
            <h1 className="text-3xl font-bold leading-[1.1] md:text-[62px] mb-2">
              Software developer, Tech Enthusiast!!
            </h1>
            <p className="text-[22px] leading-snug opacity-80 my-6">
              Our customers pay us every month, which means we pay you every
              month. Once you refer someone to us, you earn a commission for as
              long as that person stays a customer.
            </p>
            <p className="text-[22px] leading-snug opacity-80 mb-6">
              We'll deposit money straight into your PayPal account. Hassle-free
              and guaranteed.
            </p>

            <div>
              <a
                href="#!"
                className="bg-blue-600 rounded py-3 px-8 hover:bg-opacity-90 duration-300 text-white text-xl inline-flex mt-6 md:mt-12"
              >
                Become A Instructor
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <Shape />
              <img
                src="https://cdn.easyfrontend.com/pictures/hero/hero_28.png"
                alt=""
                className="relative left-1/2 -translate-x-[55%] img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
