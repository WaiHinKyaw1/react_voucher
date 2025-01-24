import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import printJS from 'print-js';
import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr';

const VoucherCard = () => {
  const {id} = useParams();
  const fetcher = (url) => fetch(url).then((res)=>res.json());
  const {data,isLoading} = useSWR(import.meta.env.VITE_API_URL + `/Vouchers/${id}`,fetcher);
  const handlePdf = () =>{
    const input = document.getElementById("print");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("voucher.pdf");
    });
  }
  const handlePrint = ()=> {
    printJS({
      printable : 'print',
      type : 'html',
      styleSheet : 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
      css: [
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css", // Link to Tailwind's CDN
      ],
    });

    
  }
  

  if(isLoading) return <div>Loading...</div>;
  return (
    <>
    
    <div id="print" className="w-[14.8 cm] bg-white shadow-lg">
      <div className="flex">
       
        
        <div className="flex-1 p-8">
          <div className="flex justify-between mb-8">
            <div>
              <h1 className="text-4xl font-light text-emerald-400">INVOICE</h1>
              <div className="text-sm text-gray-600 mt-1">
                <p>Invoice Details</p>
                <p>{data.sale_date}</p>
                <p>Invoice No: {data.voucher_id}</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-semibold">{data.customer_name}</h2>
            </div>
          </div>

          
          <div className="mb-8">
            <h3 className="font-semibold mb-2">BILL TO</h3>
            <p className="text-gray-700">{data.customer_name}</p>
            <p className="text-gray-600">{data.customer_email}</p>
            <p className="text-gray-600">{data.customer_address}</p>
          </div>

          {/* Items Table */}
          <table className="w-full mb-8">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">NO</th>
                <th className="py-2">PRODUCT DESCRIPTION</th>
                <th className="py-2">UNIT PRICE</th>
                <th className="py-2">QTY</th>
                <th className="py-2 text-right">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {data.records.map((record, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{(index + 1).toString().padStart(2, "0")}</td>
                  <td className="py-2">{record.product.name}</td>
                  <td className="py-2">{record.product.price}</td>
                  <td className="py-2">{record.quantity}</td>
                  <td className="py-2 text-right">{record.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-64">
              <div className="flex justify-between mb-2">
                <span>Sub Total</span>
                <span>{data.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax 5%</span>
                <span>{data.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Grand Total</span>
                <span>{data.netTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">PAYMENT INFO</h3>
            <p className="text-gray-600">A/c Name : {data.customer_name}</p> 
            <p className="text-gray-600">A/c Number :09-999999999 </p>
            <p className="text-gray-600">Bank Details : AYA Bank</p>
          </div>

        </div>
      </div>
    </div>
    <div className='flex justify-end mt-4'>
    <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 me-10">Print Voucher</button>
    <button onClick={handlePdf} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 me-10">Print Pdf</button>
    </div>
    </>
    
  )
}

export default VoucherCard