"use server"

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const userSession = await getServerSession();
  const req = await request.json();

  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY, {
    apiVersion: "2023-10-16",
  });

  const {
    tripId,
    totalPrice,
    name,
    description,
    coverImage,
    startDate,
    endDate,
    guests,
  } = req;

  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000",
    mode: "payment",
    payment_method_types: ["card"],
    metadata: {
      tripId,
      startDate,
      endDate,
      guests,
      userId: (userSession?.user as any)?.id,
    },
    line_items: [
      {
        price_data: {
          currency: "brl",
          product_data: {
            name,
            description,
            images: [coverImage],
          },
          unit_amount: totalPrice * 100,
        },
        quantity: 1,
      },
    ],
  });

  //   return new NextResponse(JSON.stringify({ sessionId: session.id }), {
  //     status: 200,
  //   });

  return session;
}
