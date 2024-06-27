"use client";

import BookingCard from "./BookingCard";
import CrossIcon from "@/public/icons/icon-cross-small.svg";
import PrevIcon from "@/public/icons/arrow-prev.svg";

const Booking = () => {
  return (
    <div className="grid h-screen w-full place-items-center px-4">
      <div className="w-full max-w-xl overflow-hidden rounded-xl shadow-lg">
        <div className="flex items-center justify-between bg-blue-800 p-4 px-6 font-medium text-white">
          <h2 className="text-xl">Book a training</h2>
          <button className="relative h-8 w-8">
            <CrossIcon className="text-3xl" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-9 px-10 pb-12 pt-7">
          <div className="flex gap-6 text-gray-950">
            <button className="text-xs">
              <PrevIcon className="text-xl" />
            </button>
            <p className="relative flex flex-col items-center gap-1">
              <span className="text-lg font-bold ">24 Sep</span>
              {/* <span className="absolute -bottom-6 left-0 right-0 m-auto rounded-full bg-green-600 px-2 py-1 text-center text-xs font-medium text-white">
                Today
              </span> */}
            </p>
            <button className="text-xs">
              <PrevIcon className="rotate-180 text-xl" />
            </button>
          </div>
          <div className="flex w-full flex-col items-center gap-3">
            <BookingCard />
            <BookingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
