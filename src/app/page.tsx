"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const {data} = useSession()

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <div>
      
    </div>
  )
}
