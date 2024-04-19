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
    <div>
      <h1> Just a Dashboards</h1>

      <div>
        {/* Transaction */}

        <div className="flex flex-row justify-between" mb-6>
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

        <table className="w-full table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Summary</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Summary</td>
              <td>6000</td>
              <td>Rent</td>
              <td>16 April 2024</td>
              <td>Summary was quick</td>
            </tr>

            <tr>
              <td>Summary</td>
              <td>6000</td>
              <td>Rent</td>
              <td>16 April 2024</td>
              <td>Summary was quick</td>
            </tr>

            <tr>
              <td>Summary</td>
              <td>6000</td>
              <td>Rent</td>
              <td>16 April 2024</td>
              <td>Summary was quick</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
