import { useEffect, useState } from "react";
import { getGifts } from "../Helpers/getGifts";

export const useFetchGifts = (category) => {
const [images, setimages] = useState([]);
const [isLoading, setLoading] = useState(true);

const getImages = async ()=>{
  const getIm = await getGifts(category);
  setimages(getIm);
  setLoading(false);
}

  useEffect(()=>{
    getImages();
  },[]);

  return{
    images:images,
    isLoading: isLoading
  }

}
