import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../Context";

const CocktailList = () => {
  const {cocktails,loading} = useGlobalContext();
  if(loading){
    return <Loading/>
  }
  if(cocktails.length<1){
    return <h2 className="section-title">No cocktails matched the search</h2>;  
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
          {cocktails.map((drink)=>{
            return <Cocktail key={drink.id} {...drink}/>
          })}
      </div>
    </section>
  );
};

export default CocktailList;
