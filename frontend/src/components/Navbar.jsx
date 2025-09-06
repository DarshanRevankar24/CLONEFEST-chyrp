import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo + Links together */}
          <div className="flex items-center space-x-5">
            {/* Logo */}
            <NavLink
              href="/"
              className="whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white"
            >
              Chyrp Modern
            </NavLink>

            {/* Links */}
            <div className="flex space-x-0.2">
              <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
    >
                Home
              </NavLink>
              <NavLink
      to="/categories"
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
    >
      Categories
    </NavLink>
              <NavLink
      to="/tags"
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
    >
      Tags
    </NavLink>

              <NavLink
      to="/themes"
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
    >
      Themes
    </NavLink>

              <NavLink
      to="/about"
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
    >
      About
    </NavLink>

              
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        ` mr-2.5 px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
    >
      Contact
    </NavLink>
            </div>
          </div>

          {/* Right: Search + Auth + Theme Switcher */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="mr-1.75 px-2 py-1 border rounded-md dark:bg-gray-700 dark:text-white"
            />
            <NavLink
  to="/login"
  className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
>
  Login
</NavLink>

            <a
              href="/register"
              className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 whitespace-nowrap"
            >
              Sign up
            </a>

            {/* Theme Switcher */}
           
<ThemeSwitcher />

          </div>
        </div>
      </div>
    </nav>
  );
}
