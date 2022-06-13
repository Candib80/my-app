// ---This code was for the blog homepage---
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'><a>Blog</a></Link>
    </div>
  )
}
// ----End of blog homepage code---


// ---This was for the getServerSideProps functionality of server-side rendering
// export default function DogImage({ image }) {
//   return (
//     <img src={image} />
//   )
// }


// export async function getServerSideProps() {
//   const res = await fetch('https://dog.ceo/api/breeds/image/random')
//   const data = await res.json()

//   return {
//     props: {
//       image: data.message
//     }
//   }
// }
// --- end of getServerSideProps functionality


// --- This is for using the React hook, useEffect()
// import { useEffect } from "react/cjs/react.production.min"

// export default function DogImage() {
//   const [image, setImage] = useState(null)

//   useEffect(() => {
//     async function getData() {
//       const res = await fetch('https://dog.ceo/api/breeds/image/random')
//       const data = await res.json
//       setImage(data.message)
//     }
//     getData()
//   }, [])
  
//   return (
//     <img src={image} />
//   )
// }