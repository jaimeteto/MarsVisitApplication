"use client";

import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

const SurveyPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    nationality: "",
    age: "",
    gender: "",
    departureDate: "",
    returnDate: "",
    accommodation: "",
    medicalConditions: "",
    healthDeclaration: "",
    emergencyContact: "",
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const updateData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitForm = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 sm:p-20">
      <div className="bg-gray-700 shadow-lg rounded-lg p-8 sm:p-20 text-center max-w-2xl w-full">
        {currentStep === 1 && (
          <StepOne formData={formData} updateData={updateData} nextStep={nextStep} />
        )}
        {currentStep === 2 && (
          <StepTwo formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />
        )}
        {currentStep === 3 && (
          <StepThree formData={formData} updateData={updateData} prevStep={prevStep} submitForm={submitForm} />
        )}
      </div>
    </div>
  );
};

export default SurveyPage;