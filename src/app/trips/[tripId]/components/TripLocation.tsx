import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="p-5">
      <h2 className="mb-5 font-semibold text-primaryDarker">Localização</h2>
      <div className="relative h-[280px] w-full">
        <Image
          src="/map-mobile.png"
          alt={location}
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg shadow-md"
        />
      </div>
      <h3 className=" mt-3 text-sm font-semibold text-primaryDarker">
        {location}
      </h3>
      <p className="mt-3 text-xs leading-5 text-primaryDarker">
        {locationDescription}
      </p>
      <Button className="w-full mt-5">Ver no Google Maps</Button>
    </div>
  );
};

export default TripLocation;
