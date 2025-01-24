import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { square } from "ldrs";
import toast from "react-hot-toast";
import { GiEnergise } from "react-icons/gi";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import { useNavigate } from "react-router-dom";
const generateInvoiceNumber = () => {
  const date = new Date();

  // Format date components
  const year = date.getFullYear().toString().slice(-2); // Last 2 digits of the year
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month (1-12)
  const day = String(date.getDate()).padStart(2, "0"); // Day (01-31)
  const time = date.getTime().toString().slice(-5); // Last 5 digits of timestamp

  // Generate a random alphanumeric string of 4 characters
  const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();

  // Combine components for invoice number
  return `INV-${year}${month}${day}-${time}`;
};

square.register();
const VoucherInfo = () => {
  const navigate = useNavigate();
  const { records, restRecord } = useRecordStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [isSending, setIsSending] = useState(false);
  const onSubmit = async (data) => {
    setIsSending(true);
    const total = records.reduce((total, reduce) => total + reduce.cost, 0);
    const tax = total * 0.2;
    const netTotal = total + tax;
    const currentData = { ...data, records, total, tax, netTotal };
    const res = await fetch(import.meta.env.VITE_API_URL + "/Vouchers", {
      method: "POST",
      body: JSON.stringify(currentData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    setIsSending(false);
    toast.success("Voucher Create Success");
    reset();
    restRecord(true);
    
    if (redirect_to_voucherDetail) {
      navigate(`/voucher/detail/${json.id}`);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="grid col-span-3">
        <SaleForm />
        <VoucherTable />
      </div>
      <div className="grid col-span-1">
        <form onSubmit={handleSubmit(onSubmit)} id="productForm">
          <div className="grid grid-cols-1 gap-2">
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
                <p className="text-red-500 text-sm">
                  Customer name is required
                </p>
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
                <p className="text-red-500 text-sm">
                  Customer email is required
                </p>
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
                } bg-gray-50 mb-5 border  text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
              />

              {errors.sale_date?.type === "required" && (
                <p className="text-red-500 text-sm">Sale date is required</p>
              )}
            </div>
          </div>
        </form>
        <div className="flex flex-col justify-end items-end justify-end gap-3 mt-1">
          <div className="flex items-start mb-3">
            <div className="flex items-center gap-2 h-5">
              <label
                htmlFor="redirect_to_voucherDetail"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Redirect to Voucher Detail
              </label>
              <input
                {...register("redirect_to_voucherDetail")}
                id="redirect_to_voucherDetail"
                type="checkbox"
                form="productForm"
                className=" w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
          </div>
          <div className="flex items-start mb-3">
            <div className="flex gap-2 items-center h-5">
              <label
                htmlFor="all_check"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Make sure all fields are correct
              </label>
              <input
                {...register("all_check")}
                id="all_check"
                type="checkbox"
                form="productForm"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            form="productForm"
            className=" text-white inline-flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Confirm Voucher</span>{" "}
            {isSending && (
              <l-square
                size="20"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="1.2"
                color="white"
              ></l-square>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherInfo;
