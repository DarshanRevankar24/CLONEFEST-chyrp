import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addComment, getPost, likePost } from "../utils/api";
import { marked } from "marked";
import { getMe } from "../utils/auth";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    (async () => {
      setPost(await getPost(id));
    })();
  }, [id]);

  const onLike = async () => {
    await likePost(id);
    setPost(await getPost(id));
  };

  const onComment = async (e) => {
    e.preventDefault();
    const author = getMe()?.name ?? "Guest";
    if (!comment.trim()) return;
    await addComment(id, { author, text: comment.trim() });
    setComment("");
    setPost(await getPost(id));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <article className="space-y-4">
      <header className="card p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories?.map((c) => (
            <span key={c} className="badge">{c}</span>
          ))}
          {post.tags?.map((t) => (
            <span key={t} className="badge">#{t}</span>
          ))}
        </div>
        <h1 className="text-3xl font-black">{post.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          by {post.author?.name} • {new Date(post.createdAt).toLocaleString()}
        </p>
      </header>

      <section className="card p-5">
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html:
              post.format === "markdown"
                ? marked.parse(post.content)
                : post.format === "raw"
                ? post.content
                : post.content.replace(/\n/g, "<br/>"),
          }}
        />
      </section>

      <div className="flex items-center gap-3">
        <button className="btn" onClick={onLike}>
          👍 Like ({post.likes})
        </button>
        <span className="text-sm text-gray-500">{post.views} views</span>
      </div>

      <section className="card p-5">
        <h3 className="font-semibold mb-3">Comments</h3>
        <ul className="space-y-3 mb-4">
          {post.comments?.length ? (
            post.comments.map((c) => (
              <li
                key={c.id}
                className="border-b border-gray-200/60 dark:border-gray-700/60 pb-2"
              >
                <p className="text-sm">
                  <span className="font-semibold">{c.author}</span> •{" "}
                  {new Date(c.createdAt).toLocaleString()}
                </p>
                <p>{c.text}</p>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No comments yet.</p>
          )}
        </ul>
        <form onSubmit={onComment} className="flex gap-2">
          <input
            className="input"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="btn" type="submit">
            Comment
          </button>
        </form>
      </section>
    </article>
  );
}
