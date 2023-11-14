import { notFound } from "next/navigation";
const reviewDetails =({params}:{params:{
  productId :String,
  reviewId : string,
}})=>{
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