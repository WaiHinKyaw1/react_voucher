import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { square } from 'ldrs'
import toast from "react-hot-toast";
import { GiEnergise } from "react-icons/gi";
const generateInvoiceNumber = () => {
    const date = new Date();
    
    // Format date components
    const year = date.getFullYear().toString().slice(-2); // Last 2 digits of the year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month (1-12)
    const day = String(date.getDate()).padStart(2, '0'); // Day (01-31)
    const time = date.getTime().toString().slice(-5); // Last 5 digits of timestamp
    
    // Generate a random alphanumeric string of 4 characters
    const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();
    
    // Combine components for invoice number
    return `INV-${year}${month}${day}-${time}`;
  };
  

  

square.register()
const VoucherInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isSending,setIsSending] = useState(false);
  const onSubmit = async (data)=>{
    console.log(data);
    await fetch(import.meta.env.VITE_API_URL + "/products",{
        method : "POST",
        body : JSON.stringify(data),
        headers : {
          "Content-Type" : "application/json"
        }
    } )
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-1">
          <label
            className={`block mb-2 text-sm font-medium ${
              errors.voucher_id ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Voucher Id
          </label>
          <input
            {...register("voucher_id", {
              required: true,
            })}
            defaultValue={generateInvoiceNumber()}
            type="text"
            className={`${
              errors.voucher_id
                ? "border-red-500 text-red-900 focus:ring-red-500"
                : "border-gray-300 text-gray-900 focus:ring-blue-500"
            } bg-gray-50 border  text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
          />

          {errors.voucher_id?.type === "required" && (
            <p className="text-red-500 text-sm">Voucher Id is required</p>
          )}
        </div>
        <div className="col-span-1">
          <label
            className={`block mb-2 text-sm font-medium ${
              errors.customer_name ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Customer Name
          </label>
          <input
            {...register("customer_name", {
              required: true,
            })}
            type="text"
            className={`${
              errors.customer_name
                ? "border-red-500 text-red-900 focus:ring-red-500"
                : "border-gray-300 text-gray-900 focus:ring-blue-500"
            } bg-gray-50 border  text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
          />

          {errors.customer_name?.type === "required" && (
            <p className="text-red-500 text-sm">Customer name is required</p>
          )}
        </div>
        <div className="col-span-1">
          <label
            className={`block mb-2 text-sm font-medium ${
              errors.customer_email ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Customer Email
          </label>
          <input
            {...register("customer_email", {
              required: true,
            })}
            type="text"
            className={`${
              errors.customer_email
                ? "border-red-500 text-red-900 focus:ring-red-500"
                : "border-gray-300 text-gray-900 focus:ring-blue-500"
            } bg-gray-50 border  text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
          />

          {errors.customer_email?.type === "required" && (
            <p className="text-red-500 text-sm">Customer email is required</p>
          )}
        </div>
        <div className="col-span-1">
          <label
            className={`block mb-2 text-sm font-medium ${
              errors.sale_date ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Sale Date
          </label>
          <input
            {...register("sale_date", {
              required: true,
            })}
            defaultValue={new Date().toISOString().split("T")[0]}
            type="date"
            className={`${
              errors.sale_date
                ? "border-red-500 text-red-900 focus:ring-red-500"
                : "border-gray-300 text-gray-900 focus:ring-blue-500"
            } bg-gray-50 border  text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
          />

          {errors.sale_date?.type === "required" && (
            <p className="text-red-500 text-sm">Sale date is required</p>
          )}
        </div>
      </div>
      <button
          type="submit"
          className="mt-3 text-white inline-flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Save Product</span> {isSending &&
          (<l-square
            size="20"
            stroke="5"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="1.2" 
            color="white" 
          ></l-square>)
          }
        </button>
    </form>
  );
};

export default VoucherInfo;
