import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useRecordStore from "../stores/useRecordStore";

const SaleForm = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );
  const { register, handleSubmit, reset } = useForm();
  const { addRecord, records,changeQuantity } = useRecordStore();
  const handleProductPurchase = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;
    const isExit = records.find(({product:{id}})=> id === currentProductId);
    if(isExit){
      changeQuantity(isExit.id,data.quantity);
    }else{

      addRecord({
        id: Date.now(),
        product: currentProduct,
        cost: currentProduct.price * data.quantity,
        quantity: data.quantity,
      });
    }
    reset();
  };
  return (
    <div className="bg-white p-5 border rounded-lg mt-3">
      <form onSubmit={handleSubmit(handleProductPurchase)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product
            </label>
            <select
              {...register("product")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={""}>Select a product</option>
              {!isLoading &&
                data.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Quantity
            </label>
            <input
              {...register("quantity")}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-1 flex mt-6 items-center justify-center">
            <button
              type="submit"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Product
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
