// implement your API here
const express = require ('express');

const server = express();

// middleware
server.use(express.json());

const db = require ('./data/db.js');