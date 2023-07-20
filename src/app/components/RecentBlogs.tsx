import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import React from "react";

export default function RecentBlogs() {
  const blogPosts = getSortedPostsData();

  return (
    <div className="w-full  mt-6">
      <h3 className="font-bold text-l md:text-xl">مطالب اخیر</h3>
      <div className=" w-full mt-2">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            className="underline cursor-pointer text-sm my-2 w-full block"
            href={`posts/${post.id}`}
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
