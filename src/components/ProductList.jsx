import React, { useRef, useState } from "react";
import { HiPlus, HiSearch, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import useSWR from "swr";
import ProductListSkeleton from "./ProductListSkeleton";
import ProductListEmpty from "./ProductListEmpty";
import ProductRow from "./ProductRow";
import { debounce } from "lodash";
import Pagination from "./Pagination";

const ProductList = () => {
  const setSearching = useRef("");
  const [search, setSearch] = useState();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products"
  );
  const { data, isLoading } = useSWR(fetchUrl, fetcher);
  console.log(data);
  const handleSearch = debounce((e) => {
    setFetchUrl(
      `${import.meta.env.VITE_API_URL}/products?name=${e.target.value}`
    );
  }, 1000);
  const handleUpdatePagination = (url)=>{
    setFetchUrl(url);
  }
  const handleClearSearch = () => {
    setSearch("");
    setSearching.current.value = "";
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex justify-between mb-5">
          <div>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <HiSearch />
              </div>
              <input
                type="text"
                ref={setSearching}
                onChange={handleSearch}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Product"
              />
              {search && (
                <button
                  onClick={handleClearSearch}
                  className="absolute top-0 end-0 mt-3 me-3"
                >
                  <HiX />
                </button>
              )}
            </div>
          </div>
          <div className="">
            <Link
              to="create"
              type="submit"
              className="text-white flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add New Product <HiPlus />
            </Link>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th><th scope="col" className="px-6 py-3 text-end">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductListSkeleton />
            ) : (
              <>
                {data?.data?.length === 0 ? (
                  <ProductListEmpty />
                ) : (
                  data?.data?.map((product, index) => (
                    <ProductRow
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
       {isLoading ? null : <Pagination links={data?.links} meta={data?.meta} handleUpdatePagination={handleUpdatePagination} />}
    </div>
  );
};

export default ProductList;
