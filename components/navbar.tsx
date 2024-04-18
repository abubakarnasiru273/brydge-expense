"use client";

import { useState } from "react";

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="container mx-auto flex flex-row justify-between py-4 px-40 ">
        <div>
          <h1 className="text-black-600 text-2xl">Expense</h1>
        </div>
        {loggedIn ? (
          <div>
            <button className=" text-white p-4 rounded-xl mr-4 rounded-full bg-zinc-950 ">
              Sign Up
            </button>
            <button> Sign In</button>
          </div>
        ) : (
          <div>
            <button className=" text-white p-4 rounded-xl mr-4 rounded-full bg-zinc-950 ">
              Add Category
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
