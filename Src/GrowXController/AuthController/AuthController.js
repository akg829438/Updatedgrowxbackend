
const twt = require("jsonwebtoken")
const { isValidPassword } = require("../../GrowXUtils/GrowXUtils")
const { JWT_SECRET_KEY } = require("../../GrowXConstant/GrowXConstant")
const AdvertiserModal = require("../../GrowXModals/AllAuthModal/AdvertiserModal")
const PublisherModal = require("../../GrowXModals/AllAuthModal/PublishersModal")
const AffiliateModal = require("../../GrowXModals/AllAuthModal/AffiliateModal")
const TargetingModal = require("../../GrowXModals/CreateCampaignModal/TargetingModal")
const CappingAndLimitsModal = require("../../GrowXModals/CreateCampaignModal/CappingAndLimitsModal")
const AdvanceSettingsModal = require("../../GrowXModals/CreateCampaignModal/AdvanceSettings")
const CreateCampaignModal = require("../../GrowXModals/CreateCampaignModal/CreateCampaignModal")
const ProductModal = require("../../GrowXModals/ProductModal/ProductModal")


// Advertiser Auth 

exports.AdvertiserLogin = async (req, res) => {
try {
  const data = req.body
  console.log(data)
  
  const data_come = {
    email: data.email,
    password: data.password,
  }
  const ress = await AdvertiserModal.findOne({ email: data_come.email })
  if (ress) {
    const isValid = isValidPassword(data_come.password, ress.password)
    if (isValid) {
      const token = twt.sign({ id: ress._id }, JWT_SECRET_KEY)
      res.json({
        status: "success",
        message: "login sucessfully",
        data: ress,
        token: token
      })
    }
    else {
      res.json({
        status: "fail",
        message: "password is not correct",
      })
    }
  }
  else {
    res.json({
      status: "fail",
      message: "email is not correct",
    })
  }


}catch(error){
  
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


exports.AdvertiserSignup = async (req, res) => {
  try {
    const data = req.body
    console.log(data)
    
    const data_come = {
      
      fullName: data.fullName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      company: data.company,
      country: data.country,
      messenger: data.messenger,
      messengerDetails: data.messengerDetails,
     

    }

    const ress = await AdvertiserModal.create(data_come)
    if (ress) {
      res.json({
        status: "success",
        message: "signup sucessfully",
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

// Advertiser Auth 

// Publisher Auth 
exports.PublisherLogin = async (req, res) => {
  try {
    const data = req.body
    const data_come = {
      email: data.email,
      password: data.password,
    }
    const ress = await PublisherModal.findOne({ email: data_come.email })
    if (ress) {
      const isValid = isValidPassword(data_come.password, ress.password)
      if (isValid) {
        const token = twt.sign({ id: ress._id }, JWT_SECRET_KEY)
        res.json({
          status: "success",
          message: "login sucessfully",
          data: ress,
          token: token
        })
      }
      else {
        res.json({
          status: "fail",
          message: "password is not correct",
        })
      }
    }
    else {
      res.json({
        status: "fail",
        message: "email is not correct",
      })
    }
  
  
  }catch(error){
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
  
exports.PublisherSignup=async(req,res)=>{
  try {
    const data = req.body
    console.log(data)
    
    const data_come = {
      fullName: data.fullName,
      userLogin: data.userLogin,
      country: data.country,
      email: data.email,
      password: data.password,
      messenger: data.messenger,
      messengerDetails: data.messengerDetails,
      paymentMethod: data.paymentMethod,
    
    }

    const ress = await PublisherModal.create(data_come)
    if (ress) {
      res.json({
        status: "success",
        message: "signup sucessfully",
        data: ress,

      })
    }
    else {
      res.json({
        status: "fail",
      })
    }
  } catch (error) {
    
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

// Publisher Auth 


// Affiliate Auth 
exports.AffiliateLogin = async (req, res) => {
  try {
    const data = req.body
    const data_come = {   
      email: data.email,
      password: data.password,
    }
    const ress = await AffiliateModal.findOne({ email: data_come.email })
    if (ress) {
      const isValid = isValidPassword(data_come.password, ress.password)
      if (isValid) {
        const token = twt.sign({ id: ress._id }, JWT_SECRET_KEY)
        res.json({
          status: "success",
          message: "login sucessfully",
          data: ress,
          token: token
        })
      
      }
      else {
        res.json({
          status: "fail",
          message: "password is not correct",
        })
      }
    }
    else {
      res.json({
        status: "fail",
        message: "email is not correct",
      })
    }
  
  
  }catch(error){
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



exports.AffiliateSignup=async(req,res)=>{
  try {
    const data = req.body
    
    const data_come = {
      
      fullName: data.fullName,
      userLogin: data.userLogin,
      email: data.email,
      password: data.password,
      messenger: data.messenger,
      messengerDetails: data.messengerDetails,
      paymentMethod: data.paymentMethod,
      // company: data.company,
       
    }


    const ress = await AffiliateModal.create(data_come)
    if (ress) {
      res.json({
        status: "success",
        message: "signup sucessfully",
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



exports.AddProduct=async(req,res)=>{
  try {
    const data = req.body
    console.log(data)
    
    const data_come = {
      productName: data.productName,
      product_category_name: data.product_category_name,
      productDescription: data.productDescription,
      price: data.price,
       
    }


    const ress = await ProductModal.create(data_come)
    if (ress) {
      res.json({
        status: "success",
        message: "Product Created sucessfully",
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


// getAllProduct
exports.getAllProduct = async (req, res) => {
  try {
    // Use try-with-resources to handle asynchronous operations
    const products = await ProductModal.find({});
  
    const find_mongo = await ProductModal.aggregate([
      {
        $lookup: {
          from: "category",
          localField: "product_category_name",
          foreignField: "main_category_name",
          as: "category_data",
        },
      },
      {
        $unwind: {
          path: "$category_data",
       
        }
      }
    ]);
    console.log(find_mongo)
   

    if (find_mongo.length > 0 || products.length > 0) {
      res.json({
        status: "success",
        message: "Find Successfully",
        productList: find_mongo,
        allProducts: products,
      });
    } else {
      res.json({
        status: "Failed",
        message: "Not Found",
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: "fail",
      error: error.message,
    });
  }
};
// getSingleProduct
exports.getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await ProductModal.findById(productId);
    if (product) {
      res.json({
        status: "success",
        message: "Product fetched successfully",
        data: product,
      });
    } else {
      res.json({
        status: "fail",
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "fail",
      error: error.message,
    });
  }
}

// deleteProduct
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await ProductModal.findByIdAndDelete(productId);
    if (deletedProduct) {
      res.json({
        status: "success",
        message: "Product deleted successfully",
        data: deletedProduct,
      });
    } else {
      res.json({
        status: "fail",
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "fail",
      error: error.message,
    });
  }
}

// updateProduct

exports.updateProduct = async (req, res) => {
  try {

    const productId = req.params.productId;
    const data = req.body;
    const updatedProduct = await ProductModal.findByIdAndUpdate(productId, data, { new: true });
    if (updatedProduct) {
      res.json({
        status: "success",
        message: "Product updated successfully",
        data: updatedProduct,
      });
    } else {
      res.json({
        status: "fail",
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    const resError = {
      status: "fail",
      error: error.message,
    };
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      resError.error = errors;
    }
    res.json(resError);
  }
}

