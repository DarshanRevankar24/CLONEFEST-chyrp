import { useEffect, useState } from "react";
import { listCategories } from "../utils/api";
import ThemeSwitcher from "../components/ThemeSwitcher"; // 👈 correct relative path

export default function Themes() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await listCategories();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading themes...</p>;

  return (
    <div className="p-4">
      {/* 👇 Theme switcher at the top */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Themes</h1>
        <ThemeSwitcher />
      </div>

      {categories.length === 0 ? (
        <p>No themes available.</p>
      ) : (
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.id} className="p-2 rounded border shadow-sm">
              {cat.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
