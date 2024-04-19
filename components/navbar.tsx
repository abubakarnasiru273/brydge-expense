"use client";

import { useState } from "react";

import SignModal from "./signmodal";

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="container mx-auto flex flex-row justify-between py-4 px-40 ">
        <div>
          <h1 className="text-black-600 text-2xl">Expense</h1>
        </div>
        {loggedIn ? (
          <div>
            <button
              onClick={openModal}
              className=" text-white p-4 rounded-xl mr-4 rounded-full bg-zinc-950 "
            >
              Sign Up
            </button>
            <button> Sign In</button>

            <SignModal isOpen={isModalOpen} onClose={closeModal} />
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
