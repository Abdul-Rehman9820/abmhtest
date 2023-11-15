-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2023 at 09:20 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abmh_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `abmh_color`
--

CREATE TABLE `abmh_color` (
  `id` int(11) NOT NULL,
  `colorname` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `abmh_color`
--

INSERT INTO `abmh_color` (`id`, `colorname`) VALUES
(1, 'red'),
(2, 'yellow'),
(3, 'orange'),
(4, 'brown');

-- --------------------------------------------------------

--
-- Table structure for table `abmh_doctors`
--

CREATE TABLE `abmh_doctors` (
  `id` int(255) NOT NULL,
  `DoctorFName` varchar(50) DEFAULT NULL,
  `DoctorLName` varchar(50) DEFAULT NULL,
  `DoctorNameSlug` varchar(255) DEFAULT NULL,
  `DoctorExperience` varchar(255) DEFAULT NULL,
  `DoctorProfileImage` varchar(255) DEFAULT NULL,
  `DoctorSpeciality` varchar(255) DEFAULT NULL,
  `DoctorSpecialityList` varchar(255) DEFAULT NULL,
  `DoctorDesignation` varchar(50) DEFAULT NULL,
  `DoctoAboutme` text DEFAULT NULL,
  `DoctorExperienceField` text DEFAULT NULL,
  `DoctorLanguagesSpoken` text DEFAULT NULL,
  `DoctorMemberships` text DEFAULT NULL,
  `DoctorCertifications` text DEFAULT NULL,
  `DoctorPublications` text DEFAULT NULL,
  `SpecialtyID` varchar(255) DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `abmh_doctors`
--

INSERT INTO `abmh_doctors` (`id`, `DoctorFName`, `DoctorLName`, `DoctorNameSlug`, `DoctorExperience`, `DoctorProfileImage`, `DoctorSpeciality`, `DoctorSpecialityList`, `DoctorDesignation`, `DoctoAboutme`, `DoctorExperienceField`, `DoctorLanguagesSpoken`, `DoctorMemberships`, `DoctorCertifications`, `DoctorPublications`, `SpecialtyID`, `isactive`) VALUES
(1, 'Dr. Abdul Rehman ', 'Ansari', 'Dr-Abdul-Rehman-Ansari', '10', 'OurTeamExperts1.png', 'Cardiology', 'Neurosurgery1, Neurosurgery2', 'Cardiology Designation', 'Dr. Pooja Hiranandani is an experienced\n                                    physiotherapist known for her expertise in optimizing\n                                    physical well-being and mobility. With a focus on\n                                    personalized treatment plans, she helps individuals of\n                                    all ages and conditions regain function and improve\n                                    their quality of life. Dr. Hiranandani is skilled in\n                                    various techniques, including exercises, manual\n                                    therapy, and modalities like heat and ultrasound. Her\n                                    commitment to patient education and rehabilitation\n                                    after surgeries or accidents underscores her\n                                    dedication to holistic health.', 'Chief Physiotherapist, Aditya Birla Memorial Hospital, Pune.||Senior Physiotherapist, National Hospitals, Mumbai.||Junior Physiotherapist, DY Patil Hospital, Navi Mumbai.', 'English, Marathi, Hindi', 'Chief Physiotherapist, Aditya Birla Memorial Hospital, Pune.||Senior Physiotherapist, National Hospitals, Mumbai.||Junior Physiotherapist, DY Patil Hospital, Navi Mumbai.', 'Chief Physiotherapist, Aditya Birla Memorial Hospital, Pune.||Senior Physiotherapist, National Hospitals, Mumbai.||Junior Physiotherapist, DY Patil Hospital, Navi Mumbai.', 'Chief Physiotherapist, Aditya Birla Memorial Hospital, Pune.||Senior Physiotherapist, National Hospitals, Mumbai.||Junior Physiotherapist, DY Patil Hospital, Navi Mumbai.', '8', 1),
(2, 'Dr Prathamesh ', 'K', 'Dr-Prathamesh-k', '20', 'OurTeamExperts2.png', 'Critical Care', 'Neurosurgery1, Neurosurgery2', 'Critical Care Designation', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique', NULL, NULL, NULL, NULL, NULL, '8', 1),
(3, 'Dr Prathamesh 2', 'Kanaskar', NULL, '20', 'OurTeamExperts2.png', 'Critical Care', 'Neurosurgery1, Neurosurgery2', 'Critical Care Designation', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique', NULL, NULL, NULL, NULL, NULL, '2', 1),
(4, 'Dr Abdul Rehman 2', 'Ansari', NULL, '10', 'OurTeamExperts1.png', 'Cardiology', 'Neurosurgery1, Neurosurgery2', 'Cardiology Designation', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique', NULL, NULL, NULL, NULL, NULL, '7', 0),
(5, 'Dr Parth 2', 'Kanaskar', NULL, '20', 'OurTeamExperts2.png', 'Critical Care', 'Neurosurgery1, Neurosurgery2', 'Critical Care Designation', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique', NULL, NULL, NULL, NULL, NULL, '9', 1),
(6, 'Dr Prany 2', 'Kanaskar', NULL, '20', 'OurTeamExperts2.png', 'Critical Care', 'Neurosurgery1, Neurosurgery2', 'Critical Care Designation', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique', NULL, NULL, NULL, NULL, NULL, '10', 1),
(7, 'Dr Dilip', 'Ss', NULL, '20', 'OurTeamExperts2.png', 'Critical Care', 'Neurosurgery1, Neurosurgery2', 'Critical Care Designation', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique', NULL, NULL, NULL, NULL, NULL, '12', 1);

-- --------------------------------------------------------

--
-- Table structure for table `abmh_specialty`
--

CREATE TABLE `abmh_specialty` (
  `id` int(11) NOT NULL,
  `specialty_name` varchar(100) DEFAULT NULL,
  `specialty_slug` varchar(100) DEFAULT NULL,
  `is_specialityactive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `abmh_specialty`
--

INSERT INTO `abmh_specialty` (`id`, `specialty_name`, `specialty_slug`, `is_specialityactive`) VALUES
(1, 'Accident and Emergency', 'accident-and-emergency', 1),
(2, 'Anesthesiology', 'anesthesiology', 1),
(3, 'Andrology and Sexual Medicine', 'andrology-and-sexual-medicine', 1),
(4, 'Breast Onco Surgery', 'breast-onco-surgery', 1),
(5, 'Baritric and Metabolic Surgery', 'baritric-and-metabolic-surgery', 1),
(6, 'Brachial Plexus Injury and Hand Surgery', 'brachial-plexus-injury-and-hand-surgery', 1),
(7, 'Cardic Anesthesiology', 'cardic-anesthesiology', 1),
(8, 'Cardiology', 'cardiology', 1),
(9, 'Cardiovascular and Thoracic Surgery', 'cardiovascular-and-thoracic-surgery', 1),
(10, 'Clinical Hematology', 'clinical-hematology', 1),
(11, 'Clinical Psychology', 'clinical-psychology', 1),
(12, 'Critical Care', 'critical-care', 1),
(13, 'Child Psychology', 'child-psychology', 1),
(14, 'Clinical Pharmacology', 'clinical-pharmacology', 1),
(15, 'Dermatology and Aesthetics', 'dermatology-and-aesthetics', 1),
(16, 'Dentistry', 'dentistry', 1),
(17, 'Diabetology and Endocrinology', 'diabetology-and-endocrinology', 1),
(18, 'ENT', 'ent', 1),
(19, 'Endocrine Surgery', 'endocrine-surgery', 1),
(20, 'Epilepsy Surgery', 'epilepsy-surgery', 1),
(21, 'Foetal Medicine', 'foetal-medicine', 1),
(22, 'Foot and Ankle Surgery', 'foot-and-ankle-surgery', 1),
(23, 'Gastroenterology', 'gastroenterology', 1),
(24, 'Gastrointestinal Surgery', 'gastrointestinal-surgery', 1),
(25, 'General Surgery and Minimal Invasive', 'general-surgery-and-minimal-invasive', 1),
(26, 'Gynae Oncology', 'gynae-oncology', 1),
(27, 'Genetics', 'genetics', 1),
(28, 'Genito Urinary', 'genito-urinary', 1),
(29, 'Hepatology', 'hepatology', 1),
(30, 'Hepatobiliary Surgery', 'hepatobiliary-surgery', 1),
(31, 'Hair Transplant', 'hair-transplant', 1),
(32, 'Interventional Radiology', 'interventional-radiology', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abmh_color`
--
ALTER TABLE `abmh_color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `abmh_doctors`
--
ALTER TABLE `abmh_doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `abmh_specialty`
--
ALTER TABLE `abmh_specialty`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abmh_color`
--
ALTER TABLE `abmh_color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `abmh_doctors`
--
ALTER TABLE `abmh_doctors`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `abmh_specialty`
--
ALTER TABLE `abmh_specialty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
