"use client";

import { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-50 w-full">
    <div className="container mx-auto flex flex-row justify-between py-4 px-40 ">
      <div>
        <h1 className="text-black-600 text-2xl">Expense</h1>
      </div>

      <div>
        <button className=" text-white p-4 rounded-xl mr-4 rounded-full bg-zinc-950 ">
          Sign Up
        </button>
        <button> Sign In</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
