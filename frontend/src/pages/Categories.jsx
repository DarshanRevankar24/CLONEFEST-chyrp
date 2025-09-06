import { useEffect, useState } from "react";
import { listCategories, listPosts } from "../utils/api";
import PostCard from "../components/PostCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => setCategories(await listCategories()))();
  }, []);

  useEffect(() => {
    (async () => {
      if (active) {
        setPosts((await listPosts({ category: active })).data);
      }
    })();
  }, [active]);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {/* Sidebar */}
      <aside className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
          Categories
        </h2>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c}>
              <button
                onClick={() => setActive(c)}
                className={`w-full text-left px-3 py-2 rounded-lg ${
                  active === c
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>

        {/* NEW: Grid of category boxes */}
        <div className="mt-6">
          <h3 className="font-medium mb-3 text-gray-700 dark:text-gray-300">
            Explore Categories
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {categories.map((c) => (
              <div
                key={c}
                onClick={() => setActive(c)}
                className={`cursor-pointer p-4 rounded-xl border shadow-sm text-center transition ${
                  active === c
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                }`}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Posts Section */}
      <section className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-3">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {active ? `Category: ${active}` : "Select a category"}
        </h1>
        {posts.length > 0 ? (
          posts.map((p) => <PostCard key={p.id} post={p} />)
        ) : (
          !active && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Pick a category to see posts.
            </p>
          )
        )}
      </section>
    </div>
  );
}
