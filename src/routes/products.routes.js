import { Router } from "express";
const router = Router()

import * as productsCtrl from  '../controllers/products.controller'


router.post('/', productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductBy)

router.put('/:productId', productsCtrl.updateProductBy)

router.delete('/:productId', productsCtrl.deleteProductBy)


export default router;