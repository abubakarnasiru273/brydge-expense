import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeModal = () => {
    onClose();
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form:", { fullName, email, password });
    closeModal();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4">Create an Account</h2>

            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-zinc-950 hover:bg-white-500 text-white font-bold py-2 px-4 rounded"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
