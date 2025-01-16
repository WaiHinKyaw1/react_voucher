import React, { useState } from 'react';
import { generateInvoiceNumber } from './utils';

const InvoiceGenerator = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");

  const handleGenerateInvoice = () => {
    const newInvoiceNumber = generateInvoiceNumber();
    setInvoiceNumber(newInvoiceNumber);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Generate Invoice Number</h1>
      <button
        onClick={handleGenerateInvoice}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Invoice
      </button>
      {invoiceNumber && (
        <div className="mt-4">
          <h2 className="text-lg font-medium">Generated Invoice Number:</h2>
          <p className="text-gray-700">{invoiceNumber}</p>
        </div>
      )}
    </div>
  );
};

export default InvoiceGenerator;
