import { Router } from "express";
const router = Router()

import * as productsCtrl from  '../controllers/products.controller'
import {authJwt, verifyToken} from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductBy)

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.updateProductBy)

router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin],productsCtrl.deleteProductBy)


export default router;