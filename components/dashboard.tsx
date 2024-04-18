import { CgMathPlus } from "react-icons/cg";

const Dashboard: React.FC = () => {
  return (
    <div className="">
      <h1> Just a Dashboards</h1>

      <div>
        {/* Transaction */}

        <div className="flex flex-row justify-between">
          <h2 className="text-red-600 text-lg">Expenses</h2>

          <button className=" text-white p-2 rounded-xl rounded-full bg-zinc-950">
            <div className="flex">
              <CgMathPlus /> <h2>Add </h2>
            </div>
          </button>
        </div>

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
