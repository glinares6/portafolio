import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  //* envio de una imagen
  //   const [images, setImages] = useState({
  //     urls: {
  //       regular: "",
  //     },
  //   });

  const [images, setImages] = useState([]);

  const peticion = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/?client_id=7z9AGmq0APUrPC9L7-x7onnHLrYPNFO8Bhk-cQe7NZk"
    );
    const data = await res.json();
    // console.log(data);
    setImages(data);
  };

  useEffect(() => {
    peticion();
  }, []);

  //*   envio de todas las imagenes usando map
  return (
    <>
      {images.map((img) => {
        return <Card key={img.id} img={img.urls.regular} />;
      })}
    </>
  );
};

export default Cards;
