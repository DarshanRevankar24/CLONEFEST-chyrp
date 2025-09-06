import { useTheme } from "../context/ThemeContext.jsx";


const themes = [
  { id: "system", name: "System Default", preview: "https://dummyimage.com/200x120/e5e7eb/111827&text=System" },
  { id: "light", name: "Light", preview: "https://dummyimage.com/200x120/ffffff/111827&text=Light+Theme" },
  { id: "dark", name: "Dark", preview: "https://dummyimage.com/200x120/111827/ffffff&text=Dark+Theme" },
];

export default function ThemeGallery() {
  const { mode, setMode } = useTheme();

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Theme Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <div
            key={theme.id}
            onClick={() => setMode(theme.id)}
            className={`cursor-pointer rounded-xl p-6 flex flex-col items-center transition
              bg-white dark:bg-gray-800 shadow-md hover:shadow-xl
              ${mode === theme.id ? "border-4 border-blue-500" : "border border-gray-200"}`}
          >
            <img
              src={theme.preview}
              alt={`${theme.name} preview`}
              className="w-48 h-28 object-cover rounded-md border mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">{theme.name}</h3>
            <button
              className={`px-5 py-2 rounded-lg transition 
                ${mode === theme.id
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"}`}
            >
              {mode === theme.id ? "Applied" : "Apply"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}