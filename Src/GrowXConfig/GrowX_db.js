const mongoose = require('mongoose');

// Connect to the MongoDB server
mongoose.connect('mongodb+srv://akg829438:7CMkQaCykEGkdTnA@cluster0.tbsstsi.mongodb.net/JJJ?retryWrites=true&w=majority', {
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


  