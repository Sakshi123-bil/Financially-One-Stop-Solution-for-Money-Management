const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('only .jpeg, .jpg and .png formats are allowed'))
    }
}

const upload = multer({ storage, fileFilter });

module.exports = upload;

// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");

// // ✅ Cloudinary credentials (from your Cloudinary dashboard)
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // ✅ Cloudinary storage setup
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "uploads", // cloudinary folder name
//     allowed_formats: ["jpg", "jpeg", "png"], // allowed file types
//     transformation: [{ quality: "auto" }], // optional image optimization
//   },
// });

// // ✅ File filter (only allow images)
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only .jpeg, .jpg, and .png formats are allowed"), false);
//   }
// };

// ✅ Multer instance using Cloudinary storage
// const upload = multer({ storage, fileFilter });

// module.exports = { upload, cloudinary };

