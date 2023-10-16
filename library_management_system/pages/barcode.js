import { useState } from 'react';
import axios from 'axios'; // You may need to install axios if not already installed

export default function Library() {
  const [scannedBarcode, setScannedBarcode] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle barcode input
  const handleBarcodeInput = (event) => {
    // Check if the Enter key (key code 13) is pressed
    if (event.keyCode === 13) {
      // Prevent the default behavior (e.g., form submission)
      event.preventDefault();
      
      // Get the barcode data from the input field
      const scannedData = event.target.value;
      
      // Call the API with the actual barcode data
      sendBarcodeData(scannedData);
      
      // Clear the input field
      event.target.value = '';
    }
  };

  // Function to send barcode data to the API
  const sendBarcodeData = async (scannedData) => {
    try {
      // Send a POST request to the borrow API route
      const response = await axios.post('/api/loan/borrow', {
        scannedBarcode: scannedData,
      });

      // Handle the response from the API
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: Unable to borrow book.');
    }
  };

  return (
    <div>
      <h1>Library Management System</h1>
      <div>
        <input
          type="text"
          placeholder="Scan Barcode"
          onKeyDown={handleBarcodeInput}
        />
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}
