import { Trip } from "@prisma/client";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

interface TripHeaderProps {
    trip: Trip
}

const TripHeader = ({trip}: TripHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full">
        <Image
          src={trip?.coverImage}
          fill
          style={{ objectFit: "cover" }}
          alt={trip.name}
        />
      </div>

      <div className="flex flex-col p-5">
        <h1 className="text-xl font-semibold text-primaryDarker">
          {trip.name}
        </h1>

        <div className="my-1 flex items-center gap-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-xs text-grayPrimary underline">{trip.location}</p>
        </div>

        <p className="text-xs text-grayPrimary">
          <span className=" font-medium text-primary">
            R$ {trip.pricePerDay.toString()}
          </span>{" "}
          por dia
        </p>
      </div>
    </div>
  );
};

export default TripHeader;
