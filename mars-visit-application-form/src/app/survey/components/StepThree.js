import React, { useState } from 'react';

const StepThree = ({ formData, updateData, prevStep, submitForm }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.dob ||
      !formData.nationality ||
      !formData.departureDate ||
      !formData.returnDate ||
      !formData.accommodation ||
      !formData.healthDeclaration ||
      !formData.emergencyContact
    ) {
      setError('Please fill in all required fields.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Form submitted successfully!');
      submitForm();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-5 font-sans bg-gray-800 text-white shadow-md rounded-lg mt-20">
      <h2 className="text-center text-2xl font-bold mb-6">Health and Safety</h2>

      <label className="block mb-4">
        Any medical conditions if applicable:
        <textarea
          value={formData.medicalConditions}
          onChange={(e) => updateData("medicalConditions", e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-gray-700 text-white"
        />
      </label>
      <label className="block mb-4">
        Health Declaration:
        <select
          value={formData.healthDeclaration}
          onChange={(e) => updateData("healthDeclaration", e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-gray-700 text-white"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label className="block mb-4">
        Emergency Contact Information:
        <textarea
          value={formData.emergencyContact}
          onChange={(e) => updateData("emergencyContact", e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm bg-gray-700 text-white"
        />
      </label>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepThree;