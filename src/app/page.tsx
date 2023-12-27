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
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <h1>Olá, {data?.user?.name}</h1>
      <img src={data?.user?.image ?? ""} alt="" />
    </div>
  )
}
