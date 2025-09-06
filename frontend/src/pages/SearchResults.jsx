import { useEffect, useState } from "react";
import { listPosts } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => setPosts((await listPosts({ q })).data))();
  }, [q]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Search Results</h1>
      <p className="text-sm text-gray-500">
        Query: <span className="font-mono">{q}</span>
      </p>
      {posts.length ? (
        posts.map((p) => <PostCard key={p.id} post={p} />)
      ) : (
        <p>No results.</p>
      )}
    </div>
  );
}
