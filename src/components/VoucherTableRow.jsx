import React from "react";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import useRecordStore from "../stores/useRecordStore";
import toast from "react-hot-toast";

const VoucherTableRow = ({
  record: {
    product_id,
    cost,
    quantity,
    product: { name, price },
  },
  index,
}) => {
    const {removeRecord,changeQuantity} = useRecordStore();
    const handleVoucherDelete = ()=>{
        removeRecord(product_id);
        toast.success("Product Removed Successfully");
    }
    const handleIncreaseQuantity = ()=>{
        changeQuantity(product_id,1);
    }
    const handleDecreaseQuantity = (data)=>{
        changeQuantity(product_id,-1);
    }
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{index + 1}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
      <button
          onClick={handleDecreaseQuantity}
          type="button"
          className="px-4 py-2 text-sm font-medium text-red-500 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <HiOutlineMinus size={10}/>
        </button>
        {quantity}
        <button
          onClick={handleIncreaseQuantity}
          type="button"
          className="px-4 py-2 text-sm font-medium text-red-500 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <HiOutlinePlus size={10}/>
        </button></td>
      <td className="px-6 py-4 text-end">{cost}</td>
      <td className="px-6 py-4 text-end">
        <button
          onClick={handleVoucherDelete}
          type="button"
          className="px-4 py-2 text-sm font-medium text-red-500 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <HiOutlineTrash />
        </button>
      </td>
    </tr>
  );
};

export default VoucherTableRow;
