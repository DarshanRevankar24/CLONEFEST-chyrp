import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostEditor from "../components/PostEditor";
import { getPost, updatePost } from "../utils/api";
import { requireAuth } from "../utils/auth";

export default function EditPost() {
  const { id } = useParams();
  const nav = useNavigate();
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    (async () => setInitial(await getPost(id)))();
  }, [id]);

  const onSubmit = async (data) => {
    requireAuth();
    await updatePost(id, data);
    nav(`/post/${id}`);
  };

  if (!initial) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <PostEditor initial={initial} onSubmit={onSubmit} submitLabel="Save Changes" />
    </div>
  );
}
