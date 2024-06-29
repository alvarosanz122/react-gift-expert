import { useState } from "react";
import { AddCategory,GifGrid } from "./Components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch man']);
    
    const addCategory = (NewCategory) =>{
      if(categories.includes(NewCategory)) return;
        setCategories([NewCategory,...categories]);
    }
    
  return (
    <>
    <h1>GiftExpertApp</h1>
    <AddCategory onNewCategory = {(evento)=>addCategory(evento)}/>
       {categories.map( category => (<GifGrid key={category} category = {category}/>))}
    </>
  )
}
