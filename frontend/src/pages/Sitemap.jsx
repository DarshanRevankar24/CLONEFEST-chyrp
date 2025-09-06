import { useEffect, useState } from "react";
import { sitemap } from "../utils/api";
import { Link } from "react-router-dom";

export default function Sitemap() {
  const [items, setItems] = useState([]);
  useEffect(()=>{ (async ()=> setItems(await sitemap()))(); }, []);
  const staticPaths = ["/", "/categories", "/tags", "/about", "/contact", "/themes"];

  return (
    <div className="card p-6">
      <h1 className="text-2xl font-bold mb-3">Sitemap</h1>
      <h2 className="font-semibold mt-2 mb-1">Static Pages</h2>
      <ul className="list-disc ml-6">
        {staticPaths.map(p => <li key={p}><Link className="link" to={p}>{p}</Link></li>)}
      </ul>
      <h2 className="font-semibold mt-4 mb-1">Posts</h2>
      <ul className="list-disc ml-6">
        {items.map(i => (
          <li key={i.loc}>
            <Link className="link" to={i.loc}>{i.loc}</Link>
            <span className="text-xs text-gray-500 ml-2">lastmod {new Date(i.lastmod).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
