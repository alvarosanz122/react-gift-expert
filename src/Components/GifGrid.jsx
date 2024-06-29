import {useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ({category}) => {
const {images, isLoading} = useFetchGifts(category);
console.log(isLoading);
  return (
    <>
     <h3>{category}</h3>
     {
      isLoading && (<h2 >cargando...</h2>) 
     }
     
     <div className="card-grid">
     {images.map( (images) => (
      <GifItem key={images.id} 
      {... images}
      />
     ))}
     </div>
    </>
     
   
  )
}
