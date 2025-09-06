// src/utils/api.js
import axios from "axios";

// 👉 Change this to your backend server (dev: localhost, prod: deployed URL)
const API_BASE = "https://chyrp.up.railway.app";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

// ================== AUTH ==================
export async function login(credentials) {
  const res = await api.post("/auth/login", credentials);
  return res.data;
}

export async function register(userData) {
  const res = await api.post("/auth/register", userData);
  return res.data;
}

export async function getProfile(token) {
  const res = await api.get("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

// ================== POSTS ==================
export async function listPosts(page = 1, limit = 10) {
  const res = await api.get(`/posts?page=${page}&limit=${limit}`);
  return res.data;
}

export async function getPost(id) {
  const res = await api.get(`/posts/${id}`);
  return res.data;
}

export async function createPost(data, user) {
  const res = await api.post("/posts", {
    ...data,
    author: user?.name || "Guest",
  });
  return res.data;
}

export async function updatePost(id, data) {
  const res = await api.put(`/posts/${id}`, data);
  return res.data;
}

export async function deletePost(id) {
  const res = await api.delete(`/posts/${id}`);
  return res.data;
}

// ================== LIKES ==================
export async function likePost(id) {
  const res = await api.post(`/posts/${id}/like`);
  return res.data;
}

export async function unlikePost(id) {
  const res = await api.post(`/posts/${id}/unlike`);
  return res.data;
}

// ================== COMMENTS ==================
export async function getComments(postId) {
  const res = await api.get(`/posts/${postId}/comments`);
  return res.data;
}

export async function addComment(postId, data) {
  const res = await api.post(`/posts/${postId}/comments`, data);
  return res.data;
}

export async function deleteComment(postId, commentId) {
  const res = await api.delete(`/posts/${postId}/comments/${commentId}`);
  return res.data;
}

// ================== TAGS ==================
export async function getPostsByTag(tag, page = 1, limit = 10) {
  const res = await api.get(`/tags/${tag}/posts?page=${page}&limit=${limit}`);
  return res.data;
}

export async function listTags() {
  const res = await api.get("/tags");
  return res.data;
}

// ================== CATEGORIES ==================
export async function listPostsByCategory(category, page = 1, limit = 10) {
  const res = await api.get(`/categories/${category}/posts?page=${page}&limit=${limit}`);
  return res.data;
}

export async function listCategories() {
  const res = await api.get("/categories");
  return res.data;
}

// ================== SEARCH ==================
export async function searchPosts(query, page = 1, limit = 10) {
  const res = await api.get(
    `/search?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`
  );
  return res.data;
}

// ================== SITEMAP ==================
export async function sitemap() {
  const res = await api.get("/sitemap");
  return res.data;
}
