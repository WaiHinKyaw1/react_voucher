import React from 'react'

const ProductListEmpty = () => {
  return (
   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td className="px-6 py-4 text-center" colSpan={5}>There is no Product</td>
   </tr>
  )
}

export default ProductListEmpty