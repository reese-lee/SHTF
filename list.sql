-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 01, 2019 at 07:53 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `list`
--
CREATE DATABASE IF NOT EXISTS `list` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `list`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Id`, `Name`) VALUES
(1, 'Item'),
(3, 'Contact'),
(4, 'Food'),
(5, 'Supply');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `ContactId` int(11) NOT NULL AUTO_INCREMENT,
  `ContactName` text,
  `ContactNote` text,
  `ContactCatId` int(11) NOT NULL,
  PRIMARY KEY (`ContactId`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`ContactId`, `ContactName`, `ContactNote`, `ContactCatId`) VALUES
(1, 'Police', '911', 3),
(2, 'Non-emergency', '(503) 823-3333', 3),
(3, 'Portland Bureau of Emergency Management', '(503) 823-4375', 3);

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
CREATE TABLE IF NOT EXISTS `food` (
  `FoodId` int(11) NOT NULL AUTO_INCREMENT,
  `FoodName` text,
  `FoodCatId` int(11) NOT NULL,
  PRIMARY KEY (`FoodId`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`FoodId`, `FoodName`, `FoodCatId`) VALUES
(1, 'Protein bars', 4),
(2, 'MREs', 4),
(3, 'Canned meat', 4),
(4, 'Peanut butter', 4),
(5, 'Canned soup', 4),
(6, 'Dried fruit', 4),
(7, 'Rice, grain, oats, etc.', 4),
(8, 'Milk powder', 4),
(9, 'Dried beans, peas, lentils, etc.', 4),
(10, 'Shortening oils', 4);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `ItemId` int(11) NOT NULL AUTO_INCREMENT,
  `ItemName` text,
  `ItemCatId` int(11) NOT NULL,
  PRIMARY KEY (`ItemId`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`ItemId`, `ItemName`, `ItemCatId`) VALUES
(1, 'Bandages/Band-aids', 1),
(2, 'Headlamp', 1),
(3, 'Multi-tool', 1),
(4, 'Waterproof matches', 1),
(5, 'Water filtration system', 1),
(6, 'Solar charger', 1),
(7, 'Paracord', 1),
(8, 'Thermal blanket', 1),
(9, 'Anti-bacterial wipes', 1),
(10, 'Tarp', 1),
(11, 'Water bottle/bladder', 1),
(12, 'Protein bars', 1);

-- --------------------------------------------------------

--
-- Table structure for table `supply`
--

DROP TABLE IF EXISTS `supply`;
CREATE TABLE IF NOT EXISTS `supply` (
  `SupplyId` int(11) NOT NULL AUTO_INCREMENT,
  `SupplyName` text,
  `SupplyCatId` int(11) NOT NULL,
  PRIMARY KEY (`SupplyId`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supply`
--

INSERT INTO `supply` (`SupplyId`, `SupplyName`, `SupplyCatId`) VALUES
(1, 'Mini shovel', 5),
(2, 'Axe', 5),
(3, 'Duct tape', 5),
(4, 'Pepper spray', 5),
(5, 'Folding saw', 5),
(6, 'Whistle', 5),
(7, 'Sewing kit', 5),
(8, 'Small mirror', 5),
(9, 'GPS', 5),
(10, 'First aid kit', 5),
(11, 'Flashlight', 5),
(12, 'Hand warmers/Toe warmers', 5);

-- --------------------------------------------------------

--
-- Table structure for table `__efmigrationshistory`
--

DROP TABLE IF EXISTS `__efmigrationshistory`;
CREATE TABLE IF NOT EXISTS `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL,
  PRIMARY KEY (`MigrationId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20190726221358_InitialCreate', '2.2.6-servicing-10079');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
