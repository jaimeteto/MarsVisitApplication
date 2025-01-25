import React, { useState } from 'react';

const StepTwo = ({ formData, updateData, nextStep, prevStep }) => {
  const [error, setError] = useState('');

  const handleNextStep = () => {
    if (new Date(formData.returnDate) < new Date(formData.departureDate)) {
      setError('Return date cannot be earlier than departure date.');
    } else {
      setError('');
      nextStep();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-5 font-sans bg-gray-800 text-white shadow-md rounded-lg mt-20">
      <h2 className="text-center text-2xl font-bold mb-6">Travel Preferences</h2>

      <label className="block mb-4">
        Departure Date:
        <input
          type="date"
          value={formData.departureDate}
          onChange={(e) => updateData("departureDate", e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-gray-700 text-white"
        />
      </label>
      <label className="block mb-4">
        Return Date:
        <input
          type="date"
          value={formData.returnDate}
          onChange={(e) => updateData("returnDate", e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-gray-700 text-white"
        />
      </label>
      <label className="block mb-4">
        Accommodation Preference:
        <select
          value={formData.accommodation}
          onChange={(e) => updateData("accommodation", e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-gray-700 text-white"
        >
          <option value="">Select</option>
          <option value="Space Hotel">Space Hotel</option>
          <option value="Martian Base">Martian Base</option>
        </select>
      </label>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;