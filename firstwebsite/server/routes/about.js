import {
  Router
} from "express";
var router = Router();

import {
  get_about as get_about
} from '../controllers/about.js';

router.get("/", get_about);

export default router;