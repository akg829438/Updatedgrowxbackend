const mongoose = require("mongoose")
require("../../GrowXConfig/GrowX_db")
const Collection=require("../../GrowXConfig/Collection")

const ProductModalSchema = new mongoose.Schema({

    productName:{type:String,required:[true," Product Name is required field"]},
    productDescription:{type:String,required:[true," productDescription  is required field"]},
    price:{type:String,required:[true," price is required field"]},
    image:{type:String},
    images:{type:Array},
    
    product_category_name:{type:String,ref:'category'},
    
    countInStock:{
        type:Number,
        min:0,
        max:255
    },
    numReviews:{
        type:Number,
        default:0
    },
    isFeatured:{
        type:Boolean,
        default:false
    }

},
{timestamps:true}
)

const ProductModal = mongoose.model(Collection.UserProduct,ProductModalSchema)

module.exports = ProductModal;

