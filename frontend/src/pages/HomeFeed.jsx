import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { listPosts } from "../utils/api"; // 👈 use listPosts here

function HomeFeed() {
  // Start with one dummy post
  const [posts, setPosts] = useState([
    { id: "dummy-1", title: "Welcome!", excerpt: "Your first blog post will appear here." }
  ]);

  useEffect(() => {
    (async () => {
      try {
        const data = await listPosts(); // 👈 fetch from backend
        const loadedPosts = data.data || data;

        // Replace dummy only if backend actually has posts
        if (loadedPosts.length > 0) {
          setPosts(loadedPosts);
        }
      } catch (err) {
        console.error("Failed to load posts:", err);
      }
    })();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default HomeFeed;
