import PostCard from "@/components/PostCard/PostCard"

async function loadPost(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  //await new Promise((resolve) => setTimeout(resolve, 5000))

  return data
}

async function PostPage() {

  const posts = await loadPost()

  return (
    <div className={`flex flex-wrap p-[10px] gap-[5px]  justify-center`}>
      {
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default PostPage