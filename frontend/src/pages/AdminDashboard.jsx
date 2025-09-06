import { isAdmin, getMe } from "../utils/auth";
import { listPosts } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const me = getMe();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await listPosts();
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (!isAdmin()) return <p className="text-red-500">Admins only.</p>;

  return (
    <div className="space-y-4">
      <header className="card p-5">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">Signed in as {me?.email}</p>
      </header>

      <section className="card p-5">
        <h2 className="font-semibold mb-3">Manage Posts</h2>
        {loading ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.id} className="flex justify-between">
                <span>{p.title}</span>
                <span className="text-sm text-gray-500 flex gap-3">
                  <Link className="link" to={`/post/${p.id}`}>
                    view
                  </Link>
                  <Link className="link" to={`/edit/${p.id}`}>
                    edit
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card p-5">
        <h2 className="font-semibold mb-3">Manage Users (demo)</h2>
        <p className="text-sm text-gray-500">
          Wire to backend later: list users, roles, rights, theme settings.
        </p>
      </section>
    </div>
  );
}
