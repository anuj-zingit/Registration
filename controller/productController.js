const products=require('../constant/data');
const ProductModal=require('../model/ProductModal')


const defaultData=async()=>{
     try{
        ProductModal.insertMany(products)
        console.log('success')
        return('data store sucessfully.')
    }
    catch(err)
    {
        console.log('dafault data',{err})
    }
}

module.exports={defaultData}
