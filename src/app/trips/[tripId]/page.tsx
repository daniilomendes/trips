import { prismaCliente } from "@/lib/prisma";
import Image from "next/image";

const getTripDetails = async (tripId: string) => {
  const trip = await prismaCliente.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container">
      <div className="relative h-[300px] w-full">
        <Image
          src={trip?.coverImage}
          fill
          style={{ objectFit: "cover" }}
          alt={trip.name}
        />
      </div>
    </div>
  );
};

export default TripDetails;
