import Product from "../models/Product"

export const createProduct = async (req , res) =>{
    // console.log(req.body);
 const {name, category, price, imgURL}= req.body 


   const newProduct = new Product({name, category, price,imgURL});

const productSaved = await newProduct.save()

res.status(201).json(productSaved)

//  res.json('creating product')
}
export const getProducts = async (req , res) =>{    

    const products = await Product.find()
    res.json(products)
    // res.json ("get products")

}
export const getProductBy = async (req , res) =>{
  try {

    const product= await Product.findById(req.params.productId);
    res.status(200).json(product)
    
  } catch (error) {
    console.log(error);
  }
 
}
export const updateProductBy = async (req , res) =>{

 const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
  new : true
 })
 res.status( 200).json(updatedProduct)

}
export const deleteProductBy = async(req , res) =>{
  const { productId} = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(204).json();

}