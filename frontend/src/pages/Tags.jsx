import { useEffect, useState } from "react";
import { listTags, listPosts } from "../utils/api";
import PostCard from "../components/PostCard";

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [active, setActive] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => setTags(await listTags()))();
  }, []);

  useEffect(() => {
    (async () => {
      if (active) {
        setPosts((await listPosts({ tag: active })).data);
      }
    })();
  }, [active]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Browse by Tags</h1>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`badge ${active === t ? "!bg-blue-600 !text-white" : ""}`}
          >
            #{t}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {active ? (
          posts.map((p) => <PostCard key={p.id} post={p} />)
        ) : (
          <p className="text-sm text-gray-500">Select a tag.</p>
        )}
      </div>
    </div>
  );
}
