"use client";

import { Trip } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import ptBR from "date-fns/locale/pt-BR";

const TripConfirmation = ({ params }: { params: { tripId: string } }) => {
  const [trip, setTrip] = useState<Trip | null>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`http://localhost:3000/api/trips/check`, {
        method: "POST",
        body: JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
        }),
      });

      const { trip, totalPrice } = await response.json();

      setTrip(trip);
      setTotalPrice(totalPrice);
    };

    fetchTrip();
  }, []);

  if (!trip) return null;

  const startDate = new Date(searchParams.get("startDate") as string);
  const endDate = new Date(searchParams.get("endDate") as string);
  const guests = searchParams.get("guests")

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-xl font-semibold text-primaryDarker">Sua viagem</h1>

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

        <h3 className="mt-3 text-lg font-semibold text-primaryDarker">
          Informações sobre o preço
        </h3>

        <div className="mt-1 flex justify-between">
          <p className="text-primaryDarker">Total:</p>
          <p className="font-medium">R$ {totalPrice}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col text-primaryDarker">
        <h3 className=" font-semibold ">Data</h3>
        <div className="mt-1 flex items-center gap-1">
          <p>{format(startDate, "dd 'de' MMMM", { locale: ptBR })}</p>
          {" - "}
          <p>{format(endDate, "dd 'de' MMMM", { locale: ptBR })}</p>
        </div>

        <h3 className="font-semibold mt-5">Hóspedes</h3>
        <p>{guests} hóspedes</p>
      </div>
    </div>
  );
};

export default TripConfirmation;
