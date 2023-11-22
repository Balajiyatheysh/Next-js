import Link from "next/link";

const Products =()=>{
 let  productId = 123;
  return(
    <div>
        Products page...!!!!!!1
        <Link href="/">Home</Link>
        <h3><Link href="/products/1">Product 1</Link></h3>
        <h3><Link href="/products/2">Product 2</Link></h3>
        <h3><Link href="/products/3" replace>Product 3</Link></h3>
        <h3><Link href={`products/${productId}`}> {`Product ${productId}`} </Link></h3>
    </div>
  )
}

export default Products;