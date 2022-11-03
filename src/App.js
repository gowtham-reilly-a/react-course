import axios from "axios";
import { useState, useEffect } from "react";

// 1) GET -> Read
// 2) POST -> Write
// 3) PUT -> Update the whole data
// 4) PATCH -> Update single item

// REST API

export const App = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const unsplashData = await axios.get("https://api.unsplash.com/photos", {
      headers: {
        Authorization: "Client-ID YOUR_ACCESS_KEY",
      },
    });
    setPhotos(unsplashData.data);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.length &&
        photos.map((photo) => <img src={photo.urls.regular} key={photo.id} />)}
    </div>
  );
};

// https://api.unsplash.com/photos
