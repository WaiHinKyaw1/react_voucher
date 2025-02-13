import React from 'react'

const VoucherListSkeleton = () => {
  return (
<>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 animate-pulse">
  <td className="px-6 py-4">
    <div className="h-4 bg-gray-300 rounded w-24"></div>
  </td>
  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    <div className="h-4 bg-gray-300 rounded w-32"></div>
  </th>
  <td className="px-6 py-4 text-end">
    <div className="h-4 bg-gray-300 rounded w-40"></div>
  </td>
  <td className="px-6 py-4 text-end">
    <div className="h-4 bg-gray-300 rounded w-20"></div>
  </td>
  <td className="px-6 py-4 text-end">
    <div className="inline-flex rounded-md shadow-sm items-end" role="group">
      <div className="px-4 py-2 rounded-s-lg h-6 bg-gray-300 w-8"></div>
      <div className="px-4 py-2 rounded-e-lg h-6 bg-gray-300 w-8"></div>
    </div>
  </td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 animate-pulse">
  <td className="px-6 py-4">
    <div className="h-4 bg-gray-300 rounded w-24"></div>
  </td>
  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    <div className="h-4 bg-gray-300 rounded w-32"></div>
  </th>
  <td className="px-6 py-4 text-end">
    <div className="h-4 bg-gray-300 rounded w-40"></div>
  </td>
  <td className="px-6 py-4 text-end">
    <div className="h-4 bg-gray-300 rounded w-20"></div>
  </td>
  <td className="px-6 py-4 text-end">
    <div className="inline-flex rounded-md shadow-sm items-end" role="group">
      <div className="px-4 py-2 rounded-s-lg h-6 bg-gray-300 w-8"></div>
      <div className="px-4 py-2 rounded-e-lg h-6 bg-gray-300 w-8"></div>
    </div>
  </td>
</tr>
</>


  )
}

export default VoucherListSkeleton