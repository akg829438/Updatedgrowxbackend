const express = require('express');
const { AdvertiserLogin, AdvertiserSignup, PublisherLogin, PublisherSignup, AffiliateLogin, AffiliateSignup, AddProduct, getAllProduct, getSingleProduct, deleteProduct, updateProduct } = require('../GrowXController/AuthController/AuthController');
const { CreateCampaign, CappingAndLimits, AdvanceSettings, Targeting } = require('../GrowXController/CreateCampaignController/CreateCampaignController');
const { campaignImagesUpload } = require('../GrowXMiddleware/Upload');
const { UserCampaign } = require('../GrowXController/UserCampaign/UserCampaignController');
const { AddCategory, getAllCategory, getSingleCategory, updateCategory, deleteCategory } = require('../GrowXController/CategoryController/CategoryController');


const GrowXrouter = express.Router()

// Advertiser Auth 
GrowXrouter.post('/advertiserlogin', AdvertiserLogin)
GrowXrouter.post('/advertisersignup', AdvertiserSignup)
// Advertiser Auth 

// Publisher Auth 
GrowXrouter.post('/publisherlogin', PublisherLogin)
GrowXrouter.post('/publishersignup', PublisherSignup)
// Publisher Auth 

// Affiliate Auth 


GrowXrouter.post('/affiliatelogin', AffiliateLogin)
GrowXrouter.post('/affiliatesignup', AffiliateSignup)

GrowXrouter.post('/addProduct', AddProduct)
GrowXrouter.get('/getallproduct', getAllProduct)
GrowXrouter.get('/getsingleProduct/:productId', getSingleProduct)
GrowXrouter.delete('/deleteproduct/:productId', deleteProduct)
GrowXrouter.put('/updateproduct/:productId', updateProduct)



GrowXrouter.post('/addcategory', AddCategory)
GrowXrouter.post('/getAllCategory', getAllCategory)
GrowXrouter.get('/getsinglecategory/:categoryId', getSingleCategory)
GrowXrouter.delete('/deletecategory/:categoryId', deleteCategory)
GrowXrouter.put('/updatecategory/:categoryId', updateCategory)



// Affiliate Auth 



// Create Campaign Routes 
GrowXrouter.post('/createcampaign',campaignImagesUpload, CreateCampaign)
GrowXrouter.post('/targetingCampaign', Targeting)

GrowXrouter.post('/advancesettings', AdvanceSettings)
GrowXrouter.post('/cappingandlimits', CappingAndLimits)
GrowXrouter.post('/usercampaign',UserCampaign)
// addToCart 

module.exports = GrowXrouter;