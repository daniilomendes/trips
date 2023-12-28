import { Trip } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <Link href={`/trips/${trip.id}`}>
    <div className="flex flex-col">
      <div className="relative h-[280px] w-[280px]">
      <Image
        src={trip.coverImage}
        className="rounded-lg shadow-md"
        style={{
          objectFit: "cover"
        }}
        alt={trip.name}
        fill
      />
      </div>
      <h3 className=" mt-2 text-sm font-medium text-primaryDarker">
        {trip.name}
      </h3>
      <div className="flex items-center gap-1 my-1">
        <ReactCountryFlag countryCode={trip.countryCode} svg />
        <p className="text-xs text-grayPrimary">{trip.location}</p>
      </div>
      <p className="text-xs text-grayPrimary">
        <span className="font-medium text-primary">
          R$ {trip.pricePerDay.toString()}
        </span>{" "}
        por dia
      </p>
    </div>
    </Link>
  );
};

export default TripItem;
