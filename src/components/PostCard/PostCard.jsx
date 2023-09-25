"use client"

import Link from "next/link"

const PostCard = ({ post }) => {
  return (
    <div key={post.id}
      className={`flex flex-col w-[360px] p-[5px] bg-blue-400`}
    >
      <Link href={`/posts/${post.id}`}>
        <h1
          className="bg-blue-800 p-[5px] text-blue-200"
        >{post.id} {post.title}</h1>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => alert('hey')}>click</button>
    </div>
  )
}

export default PostCard