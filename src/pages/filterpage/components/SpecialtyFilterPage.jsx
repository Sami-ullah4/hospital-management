// src/pages/SpecialtyFilterPage.jsx
import React, { useState } from 'react';
import FilterButton from './FilterButton';

const specialties = [
  "Allergy", "Anesthesiology and Pain Management", "Cardiology", "Critical Care", "Dermatology",
  "Emergency Medicine", "Endocrinology", "Family Medicine", "Gastroenterology", "Geriatrics",
  "Gynecology", "Hematology", "Hepatology", "Hospital Medicine", "Immunology",
  "Infectious Diseases", "Internal Medicine", "Neonatology", "Nephrology", "Neurology",
  "Neurosurgery", "Obesity", "Obstetric Medicine", "Occupational Medicine", "Oncology",
  "Ophthalmology", "Oral Health", "Orthopedics and Sports Medicine", "Otolaryngology",
  "Palliative Care", "Pathology and Laboratory Medicine", "Pediatrics", "Physical Medicine and Rehabilitation",
  "Primary Care", "Psychiatry", "Pulmonary Medicine", "Radiation Oncology", "Radiology",
  "Rheumatology", "Sleep Medicine", "Substance Use and Addiction Medicine", "Surgery", "Trauma",
  "Urology", "Womens Health"
];

const SpecialtyFilterPage = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Filter by Specialties</h1>
      <div className="flex flex-wrap">
        {specialties.map((spec) => (
          <FilterButton
            key={spec}
            label={spec}
            isSelected={selected.includes(spec)}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialtyFilterPage;
