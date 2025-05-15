import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          to={`/blog/${post.slug}`}
          key={post.id}
          className="bg-black rounded-xl p-4 hover:bg-zinc-100 transition"
        >
          <img src={post.image} alt={post.title} className="rounded mb-3" />
          <h2 className="text-xl font-semibold text-secondary">{post.title}</h2>
          <p className="text-sm text-zinc-400">{post.summary}</p>
        </Link>
      ))}
    </div>
  );
}
