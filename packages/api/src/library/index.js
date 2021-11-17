import express from "express";

export const API = express;
export const Application = API();
export const Router = API.Router;

import compression from "compression";

export const Compression = compression;

import axios from "axios";

export const Axios = axios;

import octokit from "octokit";

export const Octokit = octokit;

import mongodb from "mongodb";

export const Database = mongodb;

import mongoose from "mongoose";

export const ORM = mongoose;