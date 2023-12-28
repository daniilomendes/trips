import { prismaCliente } from "@/lib/prisma";
import TripHeader from "./components/TripHeader";

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
      <TripHeader trip={trip} />

    {/* Reserva */}
    </div>
  );
};

export default TripDetails;
