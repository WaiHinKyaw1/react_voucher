import React from "react";

const ProductListSkeleton = () => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 w-6 bg-gray-300 rounded dark:bg-gray-700"></div>
        </td>
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
          <div className="h-4 w-48 bg-gray-300 rounded dark:bg-gray-700"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-12 bg-gray-300 rounded dark:bg-gray-700"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className="h-4 w-16 bg-gray-300 rounded dark:bg-gray-700"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex items-end space-x-2">
            <div className="h-8 w-8 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className="h-8 w-8 bg-gray-300 rounded dark:bg-gray-700"></div>
          </div>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 w-6 bg-gray-300 rounded dark:bg-gray-700"></div>
        </td>
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
          <div className="h-4 w-48 bg-gray-300 rounded dark:bg-gray-700"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-12 bg-gray-300 rounded dark:bg-gray-700"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className="h-4 w-16 bg-gray-300 rounded dark:bg-gray-700"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex items-end space-x-2">
            <div className="h-8 w-8 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className="h-8 w-8 bg-gray-300 rounded dark:bg-gray-700"></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductListSkeleton;
