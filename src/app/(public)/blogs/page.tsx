import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPost {
  id: string;
  webTitle: string;
  webUrl: string;
  sectionName: string;
}

interface ApiResponse {
  articles: {
    id: string;
    title: string;
    url: string;
    source: string;
  }[];
}

async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `https://api.gdeltproject.org/api/v2/doc/doc?query=technology&mode=ArtList&format=json`
    );
    if (!res.ok) throw new Error("Failed to fetch blogs");

    const data: ApiResponse = await res.json();

    return (
      data.articles?.map((item) => ({
        id: item.id,
        webTitle: item.title || "Untitled Article",
        webUrl: item.url || "#",
        sectionName: item.source || "Technology",
      })) || []
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mt-9 mb-14">Latest Blog Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {blogs.map((blog) => (
          <li key={blog.id} className="border p-3 rounded-lg shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
              alt={blog.webTitle}
              className="object-cover mx-5 rounded-md"
              height={300}
              width={300}
            />

            <div className="my-6 text-center">
              <Link
                href={blog.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <h2 className="text-lg font-semibold">{blog.webTitle}</h2>
              </Link>
              <p className="text-sm mt-3">Section: {blog.sectionName}</p>
              <p className="text-sm my-2">Writer: Celliona Dyeon</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
