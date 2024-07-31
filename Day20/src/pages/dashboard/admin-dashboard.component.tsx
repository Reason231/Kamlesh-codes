import { Card } from "flowbite-react";
import { FaShoppingBag } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
export const AdminDashBoard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className=" border-gray-300 rounded-lg dark:border-gray-600">
          <Card className="bg-blue-500 max-w-sm">
            <h5 className="text-xl font-bold tracking-tight flex justify-between text-gray-900 dark:text-white">
               Customer<FaUsers></FaUsers>
            </h5>
            <strong className=" text-xl font-normal text-white-700 dark:text-gray-400">
            1000           </strong>
          </Card>
        </div>

        <div className=" border-gray-300 rounded-lg dark:border-gray-600">
          <Card className="bg-red-500 max-w-sm">
            <h5 className="text-xl font-bold tracking-tight flex justify-between text-gray-900 dark:text-white">
               Products<FaShoppingBag />
            </h5>
            <strong className=" text-xl font-normal text-white-700 dark:text-gray-400">
            1000           </strong>
          </Card>
        </div>

        <div className=" border-gray-300 rounded-lg dark:border-gray-600">
          <Card className="bg-yellow-300 max-w-sm">
            <h5 className="text-xl font-bold tracking-tight flex justify-between text-gray-900 dark:text-white">
               Income<FaShoppingBag />
            </h5>
            <strong className=" text-xl font-normal text-white-700 dark:text-gray-400">
             {
              new Intl.NumberFormat("np",{style:'currency',currency:"NPR"}).format(24434343)
             }           
             </strong>

          </Card>
        </div>

        <div className=" border-gray-300 rounded-lg dark:border-gray-600">
          <Card className="bg-purple-500 max-w-sm">
            <h5 className="text-xl font-bold tracking-tight flex justify-between text-gray-900 dark:text-white">
               New Orders<FaShoppingBag />
            </h5>
            <strong className=" text-xl font-normal text-white-700 dark:text-gray-400">
            1000           </strong>
          </Card>
        </div>
      </div>


      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
    </>
  );
};
