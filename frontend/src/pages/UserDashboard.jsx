import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMe } from "../utils/auth";
import { listPosts } from "../utils/api";

export default function UserDashboard() {
  const me = getMe();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!me) return;
    (async () => {
      try {
        setLoading(true);
        const all = await listPosts();
        const mine = all.data.filter(
          (p) => p.author?.email === me?.email || p.author?.name === me?.name
        );
        setPosts(mine);
      } catch (err) {
        setError("Failed to load your posts.");
      } finally {
        setLoading(false);
      }
    })();
  }, [me]);

  if (!me) return <p>Please login to view your dashboard.</p>;
  if (loading) return <p>Loading your dashboard...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-6">
      <header className="card p-5">
        <h1 className="text-2xl font-bold">Welcome, {me.name}</h1>
        <p className="text-sm text-gray-500">Role: {me.role}</p>
        <div className="mt-3 flex gap-2">
          <Link to="/create" className="btn">
            ➕ New Post
          </Link>
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="font-semibold">Your Posts ({posts.length})</h2>
        {posts.length ? (
          posts.map((p) => (
            <div
              key={p.id}
              className="card p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
            >
              <div>
                <p className="font-semibold">{p.title}</p>
                <p className="text-xs text-gray-500">
                  Updated {new Date(p.updatedAt).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                <Link className="btn" to={`/post/${p.id}`}>
                  View
                </Link>
                <Link
                  className="px-3 py-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800"
                  to={`/edit/${p.id}`}
                >
                  Edit
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">You have no posts yet.</p>
        )}
      </section>
    </div>
  );
}
