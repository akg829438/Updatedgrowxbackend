const CategoryModal = require("../../GrowXModals/CategoryModal/CategoryModal")

exports.AddCategory=async(req,res)=>{
    try {
      const data = req.body

      
      const data_come = {
        name: data.name,
        icon: data.icon,
        color: data.color,
         
      }
  
  
      const ress = await CategoryModal.create(data_come)
      if (ress) {
        res.json({
          status: "success",
          message: "Category Created sucessfully",
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
  
  // Create Category
exports.AddCategory = async (req, res) => {
    try {
      const data = req.body;
  
      const data_come = {
        name: data.name,
        icon: data.icon,
        color: data.color,
        main_category_name: data.main_category_name,
      };
  
      const ress = await CategoryModal.create(data_come);
      if (ress) {
        res.json({
          status: "success",
          message: "Category Created successfully",
          data: ress,
        });
      } else {
        res.json({
          status: "fail",
        });
      }
    } catch (error) {
      console.log(error);
  
      const resError = {};
      resError.status = "failed";
      if (error.name === "ValidationError") {
        let errors = {};
        Object.keys(error.errors).forEach((key) => {
          errors[key] = error.errors[key].message;
        });
        resError.error = errors;
      }
      res.json(resError);
    }
  };
  
  // Get Single Category
  exports.getSingleCategory = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await CategoryModal.findById(categoryId);
  
      if (category) {
        res.json({
          status: "success",
          data: category,
        });
      } else {
        res.json({
          status: "fail",
          message: "Category not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: "failed",
        error: error.message,
      });
    }
  };
  
  // Get All Categories
  exports.getAllCategory = async (req, res) => {
    try {
      const categories = await CategoryModal.find();
      res.json({
        status: "success",
        data: categories,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: "failed",
        error: error.message,
      });
    }
  };
  
  // Delete Category
  exports.deleteCategory = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const deletedCategory = await CategoryModal.findByIdAndDelete(categoryId);
  
      if (deletedCategory) {
        res.json({
          status: "success",
          message: "Category deleted successfully",
          data: deletedCategory,
        });
      } else {
        res.json({
          status: "fail",
          message: "Category not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: "failed",
        error: error.message,
      });
    }
  };
  
  // Update Category
  exports.updateCategory = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const data = req.body;
  
      const updatedCategory = await CategoryModal.findByIdAndUpdate(
        categoryId,
        data,
        { new: true }
      );
  
      if (updatedCategory) {
        res.json({
          status: "success",
          message: "Category updated successfully",
          data: updatedCategory,
        });
      } else {
        res.json({
          status: "fail",
          message: "Category not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: "failed",
        error: error.message,
      });
    }
  };