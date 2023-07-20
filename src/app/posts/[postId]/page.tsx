import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import "./styles.css";
type Params = {
  params: {
    postId: string;
  };
};

export const generateStaticParams = async () => {
  const posts = getSortedPostsData();
  return posts.map((post) => {
    return {
      postId: post.id,
    };
  });
};

export default async function Post({ params }: Params) {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) return notFound();

  const { title, date, author, readingTime, icon, contentHtml } =
    await getPostData(postId);

  return (
    <main className="pb-6 pt-3">
      <p className="text-6xl">{icon}</p>
      <h1 className="text-4xl mt-2  mb-0">{title}</h1>
      <p className="mt-0 text-xs">{` زمان خواندن: ${readingTime} .  تاریخ: ${date} `}</p>
      <p className="mt-0 text-xs">{`  نویسنده: ${author} `}</p>
      <article className="pb-48 mt-6">
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Link className="underline" href="/">
          <p className="mt-4">← صفحه اصلی</p>
        </Link>
      </article>
    </main>
  );
}
