import { useNavigate } from "react-router-dom";
import PostEditor from "../components/PostEditor";
import { createPost } from "../utils/api";

export default function CreatePost() {
  const nav = useNavigate();

  const onSubmit = async (data) => {
    const post = await createPost(data, { name: "Guest" }); // mock user
    nav(`/post/${post.id}`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create Post</h1>
      <PostEditor onSubmit={onSubmit} submitLabel="Publish" />
    </div>
  );
}
