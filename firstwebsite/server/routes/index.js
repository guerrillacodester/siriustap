import {
  Router
} from "express";

import {
  get_index as index
} from '../controllers/index.js';

var router = Router();

/* GET home page. */
router.get("/", index);

export default router;