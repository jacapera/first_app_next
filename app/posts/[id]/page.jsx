import PostCard from "@/components/PostCard/PostCard"
import Link from "next/link"
import Posts from "../page"
import {Suspense} from "react"


async function loadPost(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

const page = async ({ params }) => {
  const { id } = params
  const post = await loadPost(id)
  return (
    <div className={`flex flex-col items-center gap-[20px] justify-center mt-[20px]`}>
      <h1>
        <Link href={"/posts"}>Volver</Link>
      </h1>
      <PostCard post={post} />

      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <Posts />
      </Suspense>
    </div>
  )
}

export default page