export default function About() {
  return (
    <div className="card p-6 space-y-5">
      <h1 className="text-3xl font-bold">About Our Blog</h1>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        This platform is a modern blogging application built for writers,
        developers, and readers who want a clean and interactive space to share
        ideas. With features like categories, tags, comments, likes, and
        Markdown support, it combines the simplicity of a blog with the power of
        a full-stack application.
      </p>

      <h2 className="text-xl font-semibold">Our Mission</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        We aim to make publishing accessible and enjoyable for everyone.
        Whether you are writing technical guides, personal stories, or creative
        articles, this app provides the tools you need without unnecessary
        complexity.
      </p>

      <h2 className="text-xl font-semibold">Features</h2>
      <ul className="list-disc ml-6 space-y-1 text-gray-600 dark:text-gray-400">
        <li>Write and publish posts with Markdown or raw HTML</li>
        <li>Organize content using categories and tags</li>
        <li>Engage with readers through comments and likes</li>
        <li>Responsive design with light and dark themes</li>
        <li>SEO-friendly pages with sitemap support</li>
      </ul>

      <h2 className="text-xl font-semibold">Future Roadmap</h2>
      <ul className="list-disc ml-6 space-y-1 text-gray-600 dark:text-gray-400">
        <li>User profiles and dashboards</li>
        <li>Media uploads for images and videos</li>
        <li>Advanced search and filtering</li>
        <li>Theme customization and gallery</li>
      </ul>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        This is a work in progress and will continue evolving with new features
        and improvements. Thank you for being part of the journey!
      </p>
    </div>
  );
}
