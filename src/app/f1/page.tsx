import Link from 'next/link'
function Folder1 (){
  return (
    <>
    <h1>Folder 1 </h1>
    <div>
      <Link href='/f1/f2'>Intercepting Routes</Link>
    </div>
    </>
  )
}

export default Folder1;