import React from "react";

import { GoShareAndroid } from "react-icons/go";

import image1 from "../assets/homeimage/image1.jpg";
import image2 from "../assets/homeimage/image2.jpg";
import image3 from "../assets/homeimage/image3.jpg";
import image4 from "../assets/homeimage/image4.jpg";
import image5 from "../assets/homeimage/image5.jpg";
import image6 from "../assets/homeimage/image6.jpg";
import image7 from "../assets/homeimage/image7.jpg";
import image8 from "../assets/homeimage/image8.jpg";
import image9 from "../assets/homeimage/image9.jpg";
import image10 from "../assets/homeimage/image10.jpg";
import image11 from "../assets/homeimage/image11.jpg";
import image12 from "../assets/homeimage/image12.jpg";
import cardCompuny from "../assets/homeimage/cardCompuny.png";
import { FiMessageSquare, FiFileText } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BsSave } from "react-icons/bs";

export const cardData = [
  {
    id: 0,
    image: image1,
    downImage: cardCompuny,
    text: "New Breakthrough in Cancer Immunotherapy Treatment",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    share: <GoShareAndroid />,
    file: <FiFileText />,
    heading1: "The Role of Immunotherapy in Cancer Treatment",
    heading2: "The Recent Breakthrough",
    heading3: "Implications for the Future of Cancer Treatment",
    heading4: "What This Means for Patients",
    category: ["AI-Powered Insights", "Most Popular"]
  },
  {
    id: 1,
    image: image2,
    downImage: cardCompuny,
    text: "Understanding the Role of Genetics in Heart Disease",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Genetics and Heart Disease: The Link",
    heading2: "New Discoveries in Cardiogenetics",
    heading3: "Impact on Diagnosis and Prevention",
    heading4: "Future of Heart Health Research",
    category: ["Most Relevant", "By Specialty"]
  },
  {
    id: 2,
    image: image3,
    downImage: cardCompuny,
    text: "Diabetes Medication Linked to Lower Risk of Stroke",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Diabetes Drugs and Stroke Prevention",
    heading2: "Study Findings Explained",
    heading3: "How It Affects Diabetic Patients",
    heading4: "Recommendations for Physicians",
    category: ["Most Recent", "By Source"]
  },
  {
    id: 3,
    image: image4,
    downImage: cardCompuny,
    text: "How AI is Revolutionizing Diagnostics in Radiology",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "AI's Role in Medical Imaging",
    heading2: "Technological Breakthroughs",
    heading3: "Accuracy and Efficiency Gains",
    heading4: "AI's Future in Radiology",
    category: ["AI-Powered Insights", "By Specialty"]
  },
  {
    id: 4,
    image: image5,
    downImage: cardCompuny,
    text: "Latest Advances in Parkinson’s Disease Treatment",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "New Therapies for Parkinson’s Disease",
    heading2: "Clinical Trials & Results",
    heading3: "How Patients Benefit",
    heading4: "What Comes Next",
    category: ["Most Popular", "By Specialty"]
  },
  {
    id: 5,
    image: image6,
    downImage: cardCompuny,
    text: "Study Finds Link Between Sleep Disorders and Alzheimer's Disease",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Sleep Health and Brain Function",
    heading2: "Link Between Sleep and Alzheimer's",
    heading3: "Prevention Through Better Sleep",
    heading4: "Advice for Clinicians and Patients",
    category: ["Most Relevant", "Saved for Later"]
  },
  {
    id: 6,
    image: image7,
    downImage: cardCompuny,
    text: "FDA Approves New Vaccine for Respiratory Illness in Children",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Pediatric Respiratory Illness: Vaccine Approved",
    heading2: "FDA Approval Insights",
    heading3: "Benefits for Public Health",
    heading4: "Distribution and Usage",
    category: ["Most Recent", "By Source"]
  },
  {
    id: 7,
    image: image8,
    downImage: cardCompuny,
    text: "FDA Approves New Vaccine for Respiratory Illness in Children",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Pediatric Respiratory Illness: Vaccine Approved",
    heading2: "FDA Approval Insights",
    heading3: "Benefits for Public Health",
    heading4: "Distribution and Usage",
    category: ["Saved for Later", "Most Popular"]
  },
  {
    id: 8,
    image: image9,
    downImage: cardCompuny,
    text: "New Guidelines for Hypertension Treatment in Older Adults",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Hypertension in the Elderly",
    heading2: "Updated Treatment Protocols",
    heading3: "Benefits and Risks",
    heading4: "What Doctors Should Know",
    category: ["Most Relevant", "By Specialty"]
  },
  {
    id: 9,
    image: image10,
    downImage: cardCompuny,
    text: "How Telemedicine is Shaping the Future of Healthcare",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Telemedicine in Modern Healthcare",
    heading2: "Virtual Care Trends",
    heading3: "Patient Access and Equity",
    heading4: "Where Telehealth is Headed",
    category: ["AI-Powered Insights", "Most Popular"]
  },
  {
    id: 10,
    image: image11,
    downImage: cardCompuny,
    text: "The Role of Nutrition in Managing Autoimmune Diseases",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Nutrition for Autoimmune Health",
    heading2: "Foods That Fight Inflammation",
    heading3: "Clinical Evidence & Studies",
    heading4: "Practical Guidelines for Diet",
    category: ["By Specialty", "Saved for Later"]
  },
  {
    id: 11,
    image: image12,
    downImage: cardCompuny,
    text: "Recent Findings on the Effectiveness of Statins in Heart Attack Recovery",
    message: <FiMessageSquare />,
    like: <BiLike />,
    save: <BsSave />,
    componyName: "Medscape",
    heading1: "Statins and Post-Heart Attack Recovery",
    heading2: "Recent Clinical Trials",
    heading3: "Patient Case Studies",
    heading4: "Long-Term Health Outcomes",
    category: ["Most Recent", "By Source"]
  }
];




