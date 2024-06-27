import Image from "next/image";

const BookingCard = () => {
  return (
    <div className="w-full max-w-sm rounded-xl bg-blue-500 px-8 py-6 text-white shadow-lg">
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
                  sizes="100%"
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

export default BookingCard;
