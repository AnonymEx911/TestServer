/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100804
 Source Host           : localhost:3306
 Source Schema         : horizon

 Target Server Type    : MySQL
 Target Server Version : 100804
 File Encoding         : 65001

 Date: 18/02/2024 13:47:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS accounts (
  id INT AUTO_INCREMENT,
  socialClub VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  login VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  promo VARCHAR(255) DEFAULT NULL,
  adminlvl INT DEFAULT 0,
  PRIMARY KEY (id)
);

-- ----------------------------
-- Records of accounts
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;