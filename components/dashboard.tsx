import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";

// components

import Modal from "./modal";

const Dashboard: React.FC = () => {
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
    <div className="">
      <h1> Just a Dashboards</h1>

      <div>
        {/* Transaction */}

        <div className="flex flex-row justify-between">
          <h2 className="text-red-600 text-lg">Expenses</h2>

          <button
            onClick={openModal}
            className=" text-white p-2 rounded-xl rounded-full bg-zinc-950"
          >
            <div className="flex">
              <CgMathPlus /> <h2>Add </h2>
            </div>
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} />

        <table className="w-full">
          <thead>
            <tr>
              <th py-4 px-6>
                Name
              </th>
              <th py-4 px-6>
                Amount
              </th>
              <th py-4 px-6>
                Category
              </th>
              <th py-4 px-6>
                Date
              </th>
              <th py-4 px-6>
                Summary
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
