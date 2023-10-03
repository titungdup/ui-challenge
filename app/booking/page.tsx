import Image from "next/image";
import CrossIcon from "@/public/icons/icon-cross-small.svg";

const BookingCard = () => {
  return (
    <div className="w-full max-w-sm rounded-xl bg-blue-900 px-8 py-6 text-white shadow-lg">
      <div className="flex flex-wrap justify-between gap-6">
        <div>
          <p className="mb-1 font-bold">Pilates</p>
          <div className="flex items-center gap-3 text-sm">
            <p>9:30</p>
            <div className="h-1 w-1 rounded-full bg-white"></div>
            <p>60 mins</p>
          </div>
        </div>
        <div>
          <button className="rounded bg-white px-4 py-3 text-xs font-semibold text-gray-950 shadow-md">
            Book a spot
          </button>
        </div>
        <div>
          <p className="mb-2 text-xs">Trained by</p>
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 rounded-full bg-blue-600 p-0.5">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/profile-1.jpeg"
                  alt="User image"
                  fill={true}
                />
              </div>
            </div>
            <p className="text-sm">Erik Nest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Booking = () => {
  return (
    <div className="grid h-screen w-full place-items-center px-4">
      <div className="w-full max-w-xl overflow-hidden rounded-xl shadow-lg">
        <div className="flex items-center justify-between bg-blue-900 p-4 px-6 font-medium text-white">
          <h2 className="text-xl">Book a training</h2>
          <button className="relative h-8 w-8">
            <Image src={CrossIcon} alt="Icon to close" fill={true} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-9 px-10 pb-12 pt-7">
          <div className="flex gap-6 text-gray-950">
            <button className="text-xs">Prev</button>
            <p className="flex flex-col items-center gap-1">
              <span className="text-lg font-bold ">Sep. 24</span>
              <span className="text-xs font-bold">Today</span>
            </p>
            <button className="text-xs">Next</button>
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
