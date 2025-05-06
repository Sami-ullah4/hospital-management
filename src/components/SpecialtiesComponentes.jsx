// src/pages/SpecialtyFilterPage.jsx
import React, { useState } from "react";
import SpecialtiesButton from "./SpecialtiesButton";

const specialties = [
  "Allergy",
  "Anesthesiology and Pain Management",
  "Cardiology",
  "Critical Care",
  "Dermatology",
  "Emergency Medicine",
  "Endocrinology",
  "Family Medicine",
  "Gastroenterology",
  "Geriatrics",
  "Gynecology",
  "Hematology",
  "Hepatology",
  "Hospital Medicine",
  "Immunology",
  "Infectious Diseases",
  "Internal Medicine",
  "Neonatology",
  "Nephrology",
  "Neurology",
  "Neurosurgery",
  "Obesity",
  "Obstetric Medicine",
  "Occupational Medicine",
  "Oncology",
  "Ophthalmology",
  "Oral Health",
  "Orthopedics and Sports Medicine",
  "Otolaryngology",
  "Palliative Care",
  "Pathology and Laboratory Medicine",
];

const SpecialtiesComponentes = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      <div className="flex flex-wrap">
        {specialties.map((spec) => (
          <SpecialtiesButton
            key={spec}
            label={spec}
            isSelected={selected.includes(spec)}
            onClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default SpecialtiesComponentes;
