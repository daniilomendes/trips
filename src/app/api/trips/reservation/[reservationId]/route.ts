import { prismaCliente } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(_request: Request, { params: { reservationId } }: { params: { reservationId: string } }): Promise<any>{
  if (!reservationId) {
    return {
      status: 400,
      body: {
        message: "Missing reservationId",
      },
    };
  }

  const reservation = await prismaCliente.tripReservation.delete({
    where: {
      id: reservationId,
    },
  });

  return new NextResponse(JSON.stringify(reservation), { status: 200 });
  
}