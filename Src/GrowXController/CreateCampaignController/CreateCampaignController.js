
//    Create Campaign Controller


const AdvanceSettingsModal = require("../../GrowXModals/CreateCampaignModal/AdvanceSettings")
const CappingAndLimitsModal = require("../../GrowXModals/CreateCampaignModal/CappingAndLimitsModal")
const CreateCampaignModal = require("../../GrowXModals/CreateCampaignModal/CreateCampaignModal")
const TargetingModal = require("../../GrowXModals/CreateCampaignModal/TargetingModal")
//    Create Campaign Controller

exports.CreateCampaign = async (req, res) => {
  try {
    const data = req.body
    console.log(data)
    const data_come = {
      campaignName: data.campaignName,
      connectionType: data.connectionType,
      pricingType: data.pricingType,
      adUnitCategory: data.adUnitCategory,
      trafficType: data.trafficType,
      landingUrl: data.landingUrl,
      deviceFormat: data.deviceFormat,
      createcampaign_images:req.files?.map(ele => ele.filename),
      // image1: data.image1,

      countries: data.countries,
      totalBudget: data.totalBudget,
      dailyBudget: data.dailyBudget,
      afterVerification: data.afterVerification,
      // manuallySelect: data.manuallySelect,
      // price: data.price,
      // timeOfStart: data.timeOfStart,
      // campaignName:{type:String,required:[true,"Campaign Name is required field"],unique:true},
      // connectionType:{type:String,required:[true,"connection Type is required field"]},
      // pricingType:{type:String,required:[true,"Pricing Type is required field"]},
      // adUnitCategory:{type:String,required:[true,"ad Unit Category is required field"]},
      // trafficType:{type:String,required:[true,"traffic Type is required field"]},
      // landingUrl:{type:String,required:[true,"landing Url is required field"]},
      // deviceFormat:{type:String,required:[true,"Device forma is required field"]},
      // image1:{type:String,required:[true,"image1 is required field"]},
      // countries:{type:String,required:[true,"Countries is required field"]},
      // totalBudget:{type:String,required:[true," Total Budget is required field"]},
      // dailyBudget:{type:String,required:[true," Test Budget is required field"]},
      // afterVerification:{type:String,required:[true,"After Verification  is required field"]},
    }
    const ress = await CreateCampaignModal.create(data_come)
    console.log(ress)
    if (ress) {
      res.json({
        status: "success",
        message: "Create Campaign sucessfully",
        data: ress,
      })
    }
    else {
      res.json({
        status: "fail",
      })
    }
  } catch (error) {
    console.log(error)
    const resError = {}
    resError.status = "failed"
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      resError.error = errors;
    }
    res.json(resError)
  }
}


exports.Targeting = async (req, res) => {
  try {
    const data = req.body
    console.log(data)
    const data_come = {
      targetingType: data.targetingType,
    }

    const ress = await TargetingModal.create(data_come)

    console.log(`yours Targeting Data is ${ress}`)
    if (ress) {
      res.json({
        status: "success",
        message: "Create Campaign sucessfully",
        data: ress,
      })
    }
    else {
      res.json({
        status: "fail",
      })
    }
  } catch (error) {
    console.log(error)
    const resError = {}
    resError.status = "failed"
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      resError.error = errors;
    }
    res.json(resError)
  }
}


exports.AdvanceSettings = async (req, res) => {
  try {
    const data = req.body;
    console.log(`your advacne sewtting data is ${data}`)
    const data_come = {
      connectionType: data.connectionType,
      placementValue: data.placementValue,
      ipRangeTargeting: data.ipRangeTargeting,
      placements: data.placements,
      countryCodes: data.countryCodes,
      price: data.price,
    }

    const ress = await AdvanceSettingsModal.create(data_come)

    console.log(`yours Targeting Data is ${ress}`)
    if (ress) {
      res.json({
        status: "success",
        message: "Create Campaign sucessfully",
        data: ress,
      })
    }
    else {
      res.json({
        status: "fail",
      })
    }
  } catch (error) {
    console.log(error)
    const resError = {}
    resError.status = "failed"
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      resError.error = errors;
    }
    res.json(resError)
  }
}


exports.CappingAndLimits = async (req, res) => {
  try {
    const data = req.body;
    const data_come = {
      impressions : data.impressions,
      period : data.period,
      periodType : data.periodType,
      totalLimits : data.totalLimits,
      dailyLimits : data.dailyLimits,
      hourlyLimits : data.hourlyLimits,
      totalBudget : data.totalBudget,
      dailyBudget : data.dailyBudget,
      hourlyBudget : data.hourlyBudget,
    }

    const ress = await CappingAndLimitsModal.create(data_come)

    console.log(`yours Targeting Data is ${ress}`)
    if (ress) {
      res.json({
        status: "success",
        message: "Create Campaign sucessfully",
        data: ress,
      })
    }
    else {
      res.json({
        status: "fail",
      })
    }
  } catch (error) {
    console.log(error)
    const resError = {}
    resError.status = "failed"
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      resError.error = errors;
    }
    res.json(resError)
  }
}



// exports.setCampaignImages = async (req, res) => {
//   const createCampaign_id = req.params.createCampaign_id
//   console.log(createCampaign_id)
//   const updateData = {
//     createCampaign_images: req.files.map(ele => ele.filename)
//   }
//   const update_mongo = await CreateCampaignModal.updateOne({ _id: createCampaign_id }, updateData)
//   if (update_mongo) {
//     res.json({
//       status: "success",
//       message: "Campaig1 Image Images Upload Successfully"
//     })
//   }
// }


exports.allCreateCampaign = async (req, res) => {
  try {
    let find_mongo_all_campaign = await CreateCampaignModal.find({})
    find_mongo_all_products.map(ele =>
      ele.featured_image = `${Constent.IMAGE_HOST}${ele.featured_image}`
    )

    // const find_mongo = await ProductModel.find({})
    if (find_mongo || find_mongo_all_products) {
      res.json({
        status: "success",
        message: "Find  Successfully",
        // productList: find_mongo,
        allProducts: find_mongo_all_products
      })
    }
    else {
      res.json({
        status: "Failed",
        message: "Not Found"
      })
    }
  }
  catch (error) {
    res.json({
      status: "fail",
      message: "Error"
    })
  }
}