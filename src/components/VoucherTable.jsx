import React from 'react'
import useRecordStore from '../stores/useRecordStore';
import VoucherTableRow from './VoucherTableRow';

const VoucherTable = () => {
  const {records} = useRecordStore();
  const total = records.reduce((total , reduce)=>(total + reduce.cost),0);
  const tax = total * 0.05;
  const net_total = total + tax;
  return (
    <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
        <table className="w-full mt-5  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    price
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Cost
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((record,index)=>(<VoucherTableRow key={record.product.id} record={record} index={index}/>))}
              </tbody>
              <tfoot >
                <tr className='border-b'>
                    <td className='px-6 py-4 text-end'colSpan={4}>Total</td>
                    <td className='px-6 py-4 text-end'>
                      {total.toFixed(2)}
                    </td>
                    <td className='px-6 py-4 text-end'></td>
                </tr>
                <tr className='border-b'>
                    <td className='px-6 py-4 text-end'colSpan={4}>Tax(Val 5%)</td>
                    <td className='px-6 py-4 text-end'>
                      {tax.toFixed(2)}
                    </td>
                    <td className='px-6 py-4 text-end'></td>
                </tr>
                <tr className='border-b'>
                    <td className='px-6 py-4 text-end'colSpan={4}> NetTotal</td>
                    <td className='px-6 py-4 text-end'>
                      {net_total.toFixed(2)}
                    </td>
                    <td className='px-6 py-4 text-end'></td>
                </tr>
              </tfoot>
            </table>
    </div>
  )
}

export default VoucherTable