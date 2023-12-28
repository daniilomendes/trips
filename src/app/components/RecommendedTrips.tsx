import TripItem from "@/components/TripItem";
import { prismaCliente } from "@/lib/prisma";
import { Trip } from "@prisma/client";

async function getTrips() {
  const trips = await prismaCliente.trip.findMany({});

  return trips;
}

const RecommendedTrips = async () => {
  const data = await getTrips();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="h-[1px] w-full bg-grayLighter"></div>
        <h2 className="whitespace-nowrap px-5 font-medium text-grayPrimary">
          Destinos Recomendados
        </h2>
        <div className="h-[1px] w-full bg-grayLighter"></div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
