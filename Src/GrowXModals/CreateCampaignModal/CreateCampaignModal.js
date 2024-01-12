const mongoose = require("mongoose")
require("../../GrowXConfig/GrowX_db")
const Collection=require("../../GrowXConfig/Collection")


const CreateCampaignSchema = new mongoose.Schema({
    campaignName:{type:String},
    connectionType:{type:String},
    pricingType:{type:String},
    adUnitCategory:{type:String},
    trafficType:{type:String},
    landingUrl:{type:String},   
    deviceFormat:{type:String},
    // image1:{type:String,required:[true,"image1 is required field"]},
    countries:{type:String},
    totalBudget:{type:String},
    dailyBudget:{type:String},
    afterVerification:{type:String},
    createcampaign_images:[{type:String}],
    // manuallySelect:{type:String,required:[true,"Manually Select is required field"]},
    // price:{type:String,required:[true,"Price  is required field"]},
    // timeOfStart:{type:String,required:[true," Time Of Start  is required field"]},
},
{timestamps:true}
)
    


const CreateCampaignModal = mongoose.model(Collection.CreateCampaign,CreateCampaignSchema)

module.exports = CreateCampaignModal;

