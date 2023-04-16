import Link from "next/link";
import React from "react";

async function page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <>
            <li key={post.id}>
              <Link href={"/blog/" + post.id}>
                {post.id}. {post.title}
              </Link>
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
}

export default page;
