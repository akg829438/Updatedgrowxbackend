const mongoose = require("mongoose")
require("../../GrowXConfig/GrowX_db")
const Collection=require("../../GrowXConfig/Collection")

const CategorySchema = new mongoose.Schema({

    name:{type:String,required:[true," name is required field"]},
    icon:{type:String,required:[true," icon  is required field"]},
    color:{type:String,required:[true," color is required field"]},
    main_category_name:{type:String,required:[true," main_category_name is required field"]},

},
{timestamps:true}
)

const CategoryModal = mongoose.model(Collection.Category,CategorySchema)

module.exports = CategoryModal;

