import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Footer from "./Footer.tsx";
import "./index.css";

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

localStorage.theme = 'light'
localStorage.removeItem('theme')

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
