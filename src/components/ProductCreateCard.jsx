import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { square } from 'ldrs'
import toast from "react-hot-toast";

square.register()

const ProductCreateCard = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [isSending, setIsSending] = useState(false);
  const handleProductCreate = async(data) => {
    setIsSending(true);
    data.created_at = new Date().toISOString();
    await fetch(import.meta.env.VITE_API_URL + "/product",{
      method : "POST",
      body : JSON.stringify({"name" : data.name,"price" : data.price, "created_at" : data.created_at}),
      headers : {
        "Content-Type" : "application/json"
      }
    })
    setIsSending(false);
    reset();
    if(data.back_product_list){
      navigate('/dashboard/product');
    }
    toast.success("Product Created Successfully");
  };
  return (
    <div className="w-full md:w-1/2 bg-stone-100 p-3">
      <h1 className="mb-3 text-2xl font-bold">Create New Product</h1>
      <p className="text-stone-500 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iusto
        perferendis laboriosam ducimus provident consectetur quos alias itaque?
      </p>

      <form className="max-w-sm" onSubmit={handleSubmit(handleProductCreate)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className={`block mb-2 text-sm font-medium ${
              errors.name ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Product Name
          </label>
          <input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            type="text"
            className={`${
              errors.name
                ? "border-red-500 text-red-900 focus:ring-red-500"
                : "border-gray-300 text-gray-900 focus:ring-blue-500"
            } bg-gray-50 border  text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Product Name`}
          />

          {errors.name?.type === "required" && (
            <p className="text-red-500 text-sm">Product name is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-red-500 text-sm">
              Product name is minimun 3 character
            </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="text-red-500 text-sm">
              Product name is maximun 20 character
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="Price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Price
          </label>
          <input
            {...register("price", {
              required: true,
              min: 100,
              max: 1000000,
            })}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.price?.type === "required" && (
            <p className="text-red-500 text-sm">Product price is required</p>
          )}
          {errors.price?.type === "min" && (
            <p className="text-red-500 text-sm">Product price is min 100</p>
          )}
          {errors.price?.type === "max" && (
            <p className="text-red-500 text-sm">Product price is max 1000000</p>
          )}
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              {...register("all_check")}
              id="all_check"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="all_check"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make sure all fields are correct
          </label>
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              {...register("back_product_list")}
              id="back_product_list"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="back_product_list"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Back to product list
          </label>
        </div>
        <Link
          to={"/product"}
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Cancle
        </Link>
        <button
          type="submit"
          className="text-white inline-flex gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    </div>
  );
};

export default ProductCreateCard;
