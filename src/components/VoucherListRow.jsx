import React, { useState } from 'react'
import { HiArrowCircleRight, HiSearch } from "react-icons/hi";
import {  HiOutlineTrash, HiPlus } from "react-icons/hi2";
import ShowDate from './showDate';
import toast from 'react-hot-toast';
import { mutate, useSWRConfig } from 'swr';
import { ring2 } from 'ldrs';
ring2.register();
const VoucherListRow = ({voucher : {id,voucher_id,customer_name,customer_email,sale_date}}  ) => {
const [isDeleting,setIsDeleting] = useState(false);
const {mutate} = useSWRConfig();
  const handleDeleteBtn = async () => {
  setIsDeleting(true);
  await fetch(import.meta.env.VITE_API_URL + "/Vouchers/" + id,{
    method : "DELETE"
  });
  setIsDeleting(false);
  mutate(import.meta.env.VITE_API_URL + "/Vouchers");
  toast.success("Voucher Deleted Successfully");
}
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{voucher_id}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {customer_name}
              </th>
              <td className="px-6 py-4 text-end">{customer_email}</td>

              <td className="px-6 py-4 text-end">
                <ShowDate timestamp={sale_date} />
              </td>
              <td className="px-6 py-4 text-end">
                <div
                  className="inline-flex rounded-md shadow-sm items-end"
                  role="group"
                >
                  <button
                  onClick={handleDeleteBtn}
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-red-500 bg-white border-t rounded-lg border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                   {isDeleting ? (
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
  )
}

export default VoucherListRow