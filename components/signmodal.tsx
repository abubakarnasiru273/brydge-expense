"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4">Add a new expense</h2>
            <p className="mb-4">Log your expense </p>

            <div>
              <form className="w-full">
                <div className="flex">
                  <div className="w-1/2 mr-5">
                    <label>Name</label>
                    <input
                      type="text"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-1/2">
                    <label>Amount</label>
                    <input
                      type="number"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/2 mr-5">
                    <label>Category</label>
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                  </div>

                  <div className="w-1/2">
                    <label>Date</label>
                    <input
                      type="date"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label> Summary</label>
                  <input
                    type="text"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>

                <div className="flex mt-6">
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 w-1/2 mr-5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="w-1/2  bg-zinc-950 hover:bg-white-500 text-white appearance-none font-bold py-2 px-4 rounded"
                  >
                    {" "}
                    Add Expense
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignModal;
