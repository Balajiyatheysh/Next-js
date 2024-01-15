import Link from 'next/link'

export default function Folder4 (){
  return (
    <div>
      <h1>Folder 4</h1>
      <div style={{border:"1px solid black", padding:'5px', margin:'5px'}}>
      <Link href='/f1/f3'>Navigating to Folder 3 back</Link>
      </div>
      <div style={{border:"1px solid black", padding:'5px', margin:'5px', width:'200px'}}>
        <Link href='/about/'> About Page..</Link>
      </div>
    </div>
  )
}