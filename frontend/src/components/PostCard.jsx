import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="border p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
    </div>
  );
}

export default PostCard;
