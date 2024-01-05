"use client"
import { notFound } from "next/navigation";

function getRandomInt (max: number){
  return Math.floor(Math.random()*max);
}

const reviewDetails =({params}:{params:{
  productId :String,
  reviewId : string,
}})=>{
  //Throw error 50% of the time
  const random = getRandomInt(2);
  if (random == 1) {
    throw new Error("Error loading review");
  }


  if (parseInt(params.reviewId)  > 1000) {
    notFound();
  }
  return(
    <div>
      Here is {params.productId} and review for it is {params.reviewId}
    </div>
  )
}

export default reviewDetails;