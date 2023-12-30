import { prismaCliente } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY, {
  apiVersion: "2023-10-16",
});

export const POST = async (request: Request) => {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.error();
  }

  const text = await request.text();

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any

    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      },
    );
    const LineItems = sessionWithLineItems.line_items;

    // ATUALIZAR PEDIDO
    // await prismaCliente.tripReservation.update({
    //   where: {
    //     id: session.metadata.orderId
    //   },
    //   data: {
    //     status: ""
    //   }
    // })

    return NextResponse.json({ received: true });
  }
};
