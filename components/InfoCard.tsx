import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

type Props = {};

const InfoCard = ({
  img,
  location,
  title,
  description,
  amenities,
  rating,
  price,
  total,
}: any) => {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h:52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          priority
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className=" flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl ">{title}</h4>

        <div className="border-b w-10 pt-3"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {description} <br />{" "}
          <span className=" text-gray-600">Amenities:</span> {amenities}
        </p>
      </div>
      <div className="flex justify-between items-end pt-5">
        <p className="flex item-center">
          <StarIcon className="h-5 text-red-400" />
          {rating}
        </p>
        <div>
          <p className="text-lg lg:text-1xl font-semibold pb-2">{price}</p>
          <p className="text-right font-extralight">{total}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
