import { Metadata } from "next"

type Props ={
  params:{
    productId: string
  }
}


export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
  const {productId}=params;
  const title = await new Promise((resolve)=>{
    setTimeout(() => {
      resolve(productId)
    }, 100);
  });
  return {
    title: `Product ${title}`
  }
}


export default function ProductDetails ({params}:Props){
  return (
    <div>
       <h1>Product Details about {params.productId}</h1> 
    </div>
  )
}