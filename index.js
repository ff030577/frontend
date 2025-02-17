import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Ensure jQuery loads first
import $ from "jquery";
window.$ = window.jQuery = $;

// ✅ Import Owl Carousel styles BEFORE Owl Carousel JS
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// ✅ Import Owl Carousel JS AFTER jQuery is defined
import "owl.carousel";

// ✅ Import styles
import "./assets/styles/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/responsive.css";
import "./assets/styles/style.css";

console.log("✅ Index.js is running");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ No root element found! Check index.html.");
} else {
  console.log("✅ Root element found:", rootElement);
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

console.log("✅ React has been rendered.");

