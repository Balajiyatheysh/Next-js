export default function ProductDetailsLayout ({children}:{
  children:
    React.ReactNode;
}){
  return (
    <>
      {children}
      <h3>
        Featured Products
      </h3>
    </>
  )
}