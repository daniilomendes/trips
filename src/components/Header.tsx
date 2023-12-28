"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);
  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <Link href="/">
      <div className="relative h-[32px] w-[182px] items-center">
        <Image src="/logo.png" alt="Logo" fill />
      </div>
      </Link>

      {status === "unauthenticated" && (
        <button
          className="text-sm font-semibold text-primary"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="border-grayLighter relative flex items-center gap-3 rounded-full border border-solid p-2 px-3">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer shadow-md"
          />

          <Image
            width={35}
            height={35}
            alt={data.user.name!}
            src={data.user.image!}
            className=" rounded-full"
          />

          {menuIsOpen && (
            <div className="absolute left-0 top-14 z-50 flex h-[100px] w-full flex-col items-center justify-center rounded-lg bg-white shadow-md">
              <button
                className="pt-2 text-sm font-semibold text-primary"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
