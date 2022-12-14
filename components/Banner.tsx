import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="bg father and son "
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go ? Perfect.</p>
        <button className="text-purple-400 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
