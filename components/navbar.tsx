import { useState } from "react";
import SignModal from "./signmodal";
import SignInModal from "./signin";

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [modalType, setModalType] = useState<"SignUp" | "SignIn" | null>(null);

  const openModal = (type: "SignUp" | "SignIn") => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
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
              onClick={() => openModal("SignUp")}
              className=" text-white p-4 rounded-xl mr-4 rounded-full bg-zinc-950 "
            >
              Sign Up
            </button>
            <button onClick={() => openModal("SignIn")}> Sign In</button>

            <SignModal isOpen={modalType === "SignUp"} onClose={closeModal} />
            <SignInModal isOpen={modalType === "SignIn"} onClose={closeModal} />
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
