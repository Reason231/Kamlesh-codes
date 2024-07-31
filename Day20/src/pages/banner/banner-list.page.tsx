import { FaPlus, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Table } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { TableRowSkeleton } from "../../components/common/table/skeleton.component";

const AdminBannerList = () => {
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const [banner, setBanner] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const onPageChange = (page: number) => {
    setPaginationData({
      ...paginationData,
      currentPage: page,
    });
  };

  return (
    <>
      <div className="my-5 border-b border-spacing-4 flex justify-between">
        <h1 className="text-2xl font-semibold py-3 "> Banner List Page</h1>
        <NavLink
          to={"/admin/banner/create"}
          className={
            "flex text-center bg-slate-600 text-white px-3 py-4 rounded-xl"
          }
        >
          <FaPlus className="my-1" /> Add Banner
        </NavLink>
      </div>

      {/* Search */}
      <div className="overflow-x-auto">
        <div className="flex overflow-x-auto sm:justify-end my-5">
          <TextInput
            id="email4"
            type="email"
            rightIcon={FaSearch}
            placeholder="search"
            required
          />
        </div>

        {/* Table */}
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="bg-slate-800 text-white py-4">
              Title
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-800 text-white py-4">
              Link
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-800 text-white py-4">
              Status
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-800 text-white py-4">
              Image
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-800 text-white py-4">
              Actions
            </Table.HeadCell>
          </Table.Head>


            {/* If the loading is true then it will show the skeleton data, if loading is false then it will go to the banner */}
            {/* If the banner is true then it will show the data of banner else it says add some data due to no banners. */}
          <Table.Body className="divide-y">
            {loading ? (
              <>
               <TableRowSkeleton rows={3} cols={5}></TableRowSkeleton>
              </>
            ) : banner ? (
              <>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Apple MacBook Pro 17"'}
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>Laptop</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              </>
            ) : (
              <>Add Some Data</>
            )}
          </Table.Body>
        </Table>

        {/* Pagination */}
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={paginationData.currentPage}
            totalPages={paginationData.totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </>
  );
};

export default AdminBannerList;
