import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



import HomeFeed from "./pages/HomeFeed";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Categories from "./pages/Categories";
import Tags from "./pages/Tags";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ThemeGallery from "./pages/ThemeGallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
        <main className="flex-1 container-page min-h-[calc(100vh-8rem)] py-6">
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/themes" element={<ThemeGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
