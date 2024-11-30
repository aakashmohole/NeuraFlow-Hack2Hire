import React, { useState } from "react";
import OverviewStep from "../components/custom/Services/OverviewStep";
import PricingStep from "../components/custom/Services/PricingStep";
import DescriptionStep from "../components/custom/Services/DescriptionStep";
import FAQStep from "../components/custom/Services/FAQStep";
import GalleryStep from "../components/custom/Services/GalleryStep";
import PublishStep from "../components/custom/Services/PublishStep";

const ProjectSubmission = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    overview: {
      service_title: "",
      category: "",
      skills: [],
    },
    pricing: {
      basePrice: "",
      packageDetails: "",
    },
    description: {
      detailedDescription: "",
      highlights: "",
    },
    faq: [{ question: "", answer: "" }],
    gallery: [],
    agreeToTerms: false,
  });

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFormUpdate = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  const handleSubmit = () => {
    if (formData.agreeToTerms) {
      // Call API with `formData`
      console.log("Form Data Submitted:", formData);
    } else {
      alert("Please agree to the terms and conditions before submitting.");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OverviewStep
            data={formData.overview}
            onUpdate={(data) => handleFormUpdate("overview", data)}
          />
        );
      case 2:
        return (
          <PricingStep
            data={formData.pricing}
            onUpdate={(data) => handleFormUpdate("pricing", data)}
          />
        );
      case 3:
        return (
          <DescriptionStep
            data={formData.description}
            onUpdate={(data) => handleFormUpdate("description", data)}
          />
        );
      case 4:
        return (
          <FAQStep
            data={formData.faq}
            onUpdate={(data) => handleFormUpdate("faq", data)}
          />
        );
      case 5:
        return (
          <GalleryStep
            data={formData.gallery}
            onUpdate={(data) => handleFormUpdate("gallery", data)}
          />
        );
      case 6:
        return (
          <PublishStep
            data={formData.agreeToTerms}
            onUpdate={(data) => handleFormUpdate("agreeToTerms", data)}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full  bg-slate-950">
      <div className="container mx-auto max-w-6xl px-4 py-8 space-y-6">
        <div className="flex justify-between items-center bg-slate-950 max-w-3xl mx-auto">
          {[
            "Overview",
            "Pricing",
            "Description",
            "FAQ's",
            "Gallery",
            "Publish",
          ].map((label, index) => (
            <div key={index} className="flex flex-col items-center w-1/6">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <p className="mt-2 text-sm">{label}</p>
            </div>
          ))}
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg"></div>

        {/* Dynamic Form Section */}
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="py-2 px-4 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === 6}
            className="py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>

      {/* Step Tracker */}
    </div>
  );
};

export default ProjectSubmission;
