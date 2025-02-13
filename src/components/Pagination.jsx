import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Pagination = ({ links:{next_page_url,prev_page_url}, meta, handleUpdatePagination }) => {

  const handleNextPage = () => {
    handleUpdatePagination(next_page_url);
  }

  const handlePrevPage = () => {
    handleUpdatePagination(prev_page_url);
  }

  return (
    <div className="flex justify-between rounded-md me-6 mt-3 mb-3">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {meta.from}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {meta.to}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {meta.total}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          disabled={!prev_page_url}
          onClick={handlePrevPage}
          className="disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium rounded-s text-red-500 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <HiArrowLeft/>
        </button>
        <button
          type="button"
          disabled={!next_page_url}
          onClick={handleNextPage}
          className="disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium rounded-e text-red-500 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <HiArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
