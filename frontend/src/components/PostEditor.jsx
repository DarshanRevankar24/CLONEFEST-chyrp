import { useEffect, useMemo, useState } from "react";
import { marked } from "marked";

export default function PostEditor({ initial = {}, onSubmit, submitLabel = "Publish" }) {
  const [title, setTitle] = useState(initial.title || "");
  const [content, setContent] = useState(initial.content || "");
  const [format, setFormat] = useState(initial.format || "markdown");
  const [tags, setTags] = useState(initial.tags?.join(", ") || "");
  const [categories, setCategories] = useState(initial.categories?.join(", ") || "");

  const preview = useMemo(() => {
    if (format === "markdown") {
      return marked.parse(content || "");
    }
    if (format === "raw") {
      return content;
    }
    return (content || "").replace(/\n/g, "<br/>");
  }, [content, format]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required");
      return;
    }
    onSubmit({
      title: title.trim(),
      content,
      format,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      categories: categories.split(",").map((c) => c.trim()).filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="input min-h-[200px]"
        placeholder="Write your content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex gap-2">
        <select
          className="input"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="markdown">Markdown</option>
          <option value="raw">Raw HTML</option>
          <option value="text">Plain Text</option>
        </select>

        <input
          className="input"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <input
          className="input"
          placeholder="Categories (comma separated)"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
      </div>

      <button className="btn" type="submit">
        {submitLabel}
      </button>

      <div className="card p-4">
        <h3 className="font-semibold mb-2">Preview</h3>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: preview }}
        />
      </div>
    </form>
  );
}
