import express from "express";

export const API = express;
export const Application = API();
export const Router = API.Router;

import compression from "compression";

export const Compression = compression;

import validator from "express-validator";

export const Validator = validator;

import axios from "axios";

export const Axios = axios;

import octokit from "octokit";

export const Octokit = octokit;

import mongodb from "mongodb";

export const Database = mongodb;

import mongoose from "mongoose";

/*** Mongo-DB ORM Tool
 * @type {import("mongoose")}
 * */

export const ORM = mongoose;

const cryptography = {};
import bcrypt from "bcryptjs";

/*** Cryptography Module
 * @type {import("bcryptjs")}
 * */
cryptography.BCrypt = bcrypt;

/*** Cryptography Hashing Function
 * @type {import("bcryptjs").hash}
 * */
cryptography.Hash = bcrypt.hash;

/*** Cryptography Salt Generator
 * @type {import("bcryptjs").genSalt}
 * */

cryptography.generateSalt = bcrypt.genSalt;

/*** Cryptography Salt Getter
 * @type {import("bcryptjs").getSalt}
 * */

cryptography.getSalt = bcrypt.getSalt;

/*** Cryptography Comparator
 * @type {import("bcryptjs").compare}
 * */

cryptography.compare = bcrypt.compare;

/*** Cryptography Rounds Getter
 * @type {import("bcryptjs").getRounds}
 * */

cryptography.getRounds = bcrypt.getRounds;

/*** Cryptography Decoder (base-64)
 * @type {import("bcryptjs").decodeBase64}
 * */

cryptography.decode = bcrypt.decodeBase64;

/*** Cryptography Encoder (base-64)
 * @type {import("bcryptjs").encodeBase64}
 * */

cryptography.encode = bcrypt.encodeBase64;

/***
 * @extends {import("bcryptjs")}
 * @method encode {import("bcryptjs").encodeBase64}
 */
export const Cryptography = cryptography;

export default {
    API,
    Application,
    Router,
    Compression,
    Axios,
    Octokit,
    Database,
    ORM,
    Validator,
    Cryptography
};