import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hello there</h1>
      <p>para</p>
      <Link href="/blog">Blog page</Link>
      <Link href="/products">Products page</Link>
    </div>
  )
}

export default Home;
