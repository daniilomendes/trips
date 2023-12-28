import { prismaCliente } from "@/lib/prisma";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";

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
    <TripReservation trip={trip}/>
    </div>
  );
};

export default TripDetails;
