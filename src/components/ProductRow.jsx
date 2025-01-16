import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import { useSWRConfig } from "swr";
import { ring2, square } from "ldrs";
import { Link } from "react-router-dom";

ring2.register();

const ProductRow = ({ product: { id, name, price, created_at } }) => {
  const { mutate } = useSWRConfig();
  const [sending, setSending] = useState(false);
  const date = new Date(created_at);
  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleDeleteBtn = async () => {
    setSending(true);
    await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
      method: "DELETE",
    });
    setSending(false);
    mutate(import.meta.env.VITE_API_URL + "/products");
    toast.success("Product Deleted Successfully");
  };
  
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>

      <td className="px-6 py-4 text-end">
        <p className="text-sm">{currentDate}</p>
        <p className="text-sm">{currentTime}</p>
      </td>
      <td className="px-6 py-4 text-end">
        <div
          className="inline-flex rounded-md shadow-sm items-end"
          role="group"
        >
          <Link 
          to={`/product/edit/${id}`}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil />
          </Link>
          <button
            onClick={handleDeleteBtn}
            type="button"
            className="px-4 py-2 text-sm font-medium text-red-500 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {sending ? (
              <l-ring-2
                size="10"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8"
                color="black"
              ></l-ring-2>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
