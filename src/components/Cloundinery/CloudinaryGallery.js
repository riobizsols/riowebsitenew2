// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CloudinaryGallery = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get(
//           "https://res.cloudinary.com/REACT_APP_CLOUDINARY_CLOUD_NAME/image/list/rio_main_website.json"
//         );
//         const imageUrls = response.data.resources.map((image) => 
//           `https://res.cloudinary.com/REACT_APP_CLOUDINARY_CLOUD_NAME/image/upload/${image.public_id}.${image.format}`        );
//         setImages(imageUrls);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching images from Cloudinary:", error);
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   if (loading) {
//     return <p>Loading images...</p>;
//   }

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//       {images.map((url, index) => (
//         <img
//           key={index}
//           src={url}
//           alt={`Cloudinary Image ${index}`}
//           style={{ width: "150px", height: "150px", objectFit: "cover" }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CloudinaryGallery;