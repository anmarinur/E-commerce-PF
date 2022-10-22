const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dgp7uhhx4', 
    api_key: '148442932221526', 
    api_secret: 'WLTFmb2xYTQnORg8YQZXooRPiuk',
    secure: true
});

const uploadImage = async (filePath)=>{
    return await cloudinary.uploader.upload(filePath, {
        folder: 'tecnoshop',
    });
}

const deleteImage = async (publicId)=>{
    return await cloudinary.uploader.destroy(publicId);
}

module.exports= {
    uploadImage,
    deleteImage
}