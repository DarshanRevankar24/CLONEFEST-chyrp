import { login as apiLogin, register as apiRegister, getProfile } from "./api";

const KEY = "chyrp-user";

// Save user + token to localStorage
function saveUser(user) {
  localStorage.setItem(KEY, JSON.stringify(user));
}

// Remove user
export function logout() {
  localStorage.removeItem(KEY);
}

// Get current user from localStorage
export function getMe() {
  try {
    return JSON.parse(localStorage.getItem(KEY));
  } catch {
    return null;
  }
}

// Require authentication
export function requireAuth() {
  const user = getMe();
  if (!user) throw new Error("Not authenticated");
  return user;
}

// Check admin
export function isAdmin() {
  const user = getMe();
  return user?.role === "admin";
}

// Login via API
export async function login(credentials) {
  const data = await apiLogin(credentials); // calls backend
  // data should include token + user info
  saveUser(data);
  return data;
}

// Register via API
export async function register(userData) {
  const data = await apiRegister(userData); // calls backend
  saveUser(data);
  return data;
}

// Refresh user profile from backend
export async function refreshProfile() {
  const user = getMe();
  if (!user?.token) return null;

  const profile = await getProfile(user.token);
  saveUser({ ...user, ...profile }); // update localStorage
  return profile;
}
