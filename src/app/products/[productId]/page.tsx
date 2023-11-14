export default function ProductDetails ({params}:{
  params:{productId:string}
}){
  return (
    <div>
       <h1>Product Details about {params.productId}</h1> 
    </div>
  )
}