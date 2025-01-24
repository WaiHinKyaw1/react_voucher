import React, { useRef, useState } from "react";
import { HiArrowCircleRight, HiSearch, HiX } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";
import { Link } from "react-router-dom";
import { throttle } from "lodash";
const VoucherList = () => {
  const [search, setSearch] = useState("");
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    search
      ? import.meta.env.VITE_API_URL +
          "/Vouchers" +
          `?voucher_id_like=${search}`
      : import.meta.env.VITE_API_URL + "/Vouchers",
    fetcher
  );

  const handleSearch = throttle((e) => {
    setSearch(e.target.value);
  }, 500);
  const searchInput = useRef("");
  const handleClearSearch = () => {
    setSearch("");
    searchInput.current.value = "";
  }
  

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
                onChange={handleSearch}
                ref = {searchInput}
                type = "text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Voucher"
              />
              {search && <button  onClick={handleClearSearch} className="absolute top-0 end-0 mt-3 me-3"><HiX/></button>}
            </div>
          </div>
          <div className="">
            <Link
              to={"/sale"}
              type="submit"
              className="text-white flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Voucher <HiArrowCircleRight />
            </Link>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Voucher Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((voucher) => (
              <VoucherListRow voucher={voucher} key={voucher.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
