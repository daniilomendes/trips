import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { ptBR } from "date-fns/locale";
import Button from "@/components/Button";
import { toast } from "react-toastify";


interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
  fetchReservations: () => void;
}

const UserReservationItem = ({ reservation, fetchReservations }: UserReservationItemProps) => {
  const { trip } = reservation;

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
        method: "DELETE"
    })

    if(!res.ok){
        return toast.error("Ocorreu um erro ao cancelar a reserva!")
    }

    toast.success("Reserva cancelada com sucesso!", {position: "bottom-center"})

    fetchReservations()
  }

  return (
    <div>
      {/* CARD */}
      <div className="mt-5 flex flex-col rounded-lg border border-solid border-grayLighter p-5 shadow-lg">
        <div className="flex items-center gap-3 border-b border-solid border-grayLighter pb-5">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              alt={trip.name}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-primaryDarker">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col text-primaryDarker">
          <h3 className="text-sm">Data</h3>
          <div className="flex items-center gap-1">
            <p className="text-sm">
              {format(new Date(reservation.startDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
            {" - "}
            <p className="text-sm">
              {format(new Date(reservation.endDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
          </div>

          <h3 className="mt-5 text-sm">Hóspedes</h3>
          <p className="pb-5 text-sm">{reservation.guests} hóspedes</p>

          <h3 className="mt-3 border-t border-solid border-grayLighter pt-5 font-semibold text-primaryDarker">
            Informações sobre o preço
          </h3>

          <div className="mt-1 flex justify-between">
            <p className="text-sm mt-2 text-primaryDarker">Total:</p>
            <p className="text-sm font-medium">
              R$ {Number(reservation.totalPaid)}
            </p>
          </div>

          <Button variant="danger" className="mt-5" onClick={handleDeleteClick}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
};

export default UserReservationItem;
