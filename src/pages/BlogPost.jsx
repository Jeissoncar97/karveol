import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return
   <p className="text-white text-center">Artículo no encontrado.</p>
   ;

  return (
    <article className="text-white prose prose-invert mx-auto py-10 px-4 h-screen pt-40 bg-logo-gradient">
      <div className=" max-w-6xl mx-auto">
        <h1 className="">{post.title}</h1>
      <img src={post.image} alt={post.title} className="rounded my-4" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}
