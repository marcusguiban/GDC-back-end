const multer = require('multer');

// Create a multer storage instance
const storage = multer.memoryStorage();

// Configure multer upload settings
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10 MB file size limit
  },
});

module.exports = upload;

