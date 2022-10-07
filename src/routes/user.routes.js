import { Router } from "express";
const router = Router()
 import {authJwt} from '../middlewares'
import * as userCtrl from '../controllers/user.controller'
router.post('/'[
authJwt.verifyToken,
authJwt.isAdmin
], userCtrl.createUser)



export default router;