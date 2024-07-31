import { Table } from "flowbite-react";

export const TableRowSkeleton = ({ rows, cols }:{rows:number,cols:number}) => {
  return (
    <>
      {
        // Loop to create the rows
        [...Array(rows)].map((_, i:number) => (
          <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            {
              // Loop to create the columns
              [...Array(cols)].map((_, i:number) => (
                <Table.Cell key={i} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </Table.Cell>
              ))
            }
          </Table.Row>
        ))
      }
    </>
  );
};
