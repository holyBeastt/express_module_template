import express from "express";
import pool from "../config/pool.js";

const getTetSite = async (req, res) => {
  res.render("tet.ejs");
};

const tetController = {
  getTetSite,
};

export default tetController;
