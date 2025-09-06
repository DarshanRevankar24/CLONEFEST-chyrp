import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeSwitcher() {
  const { mode, setMode } = useTheme();   // ⬅️ get theme from context

  return (
    <select
      className="input !py-1 !w-auto"
      value={mode}
      onChange={(e) => setMode(e.target.value)}
      title="Theme"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}