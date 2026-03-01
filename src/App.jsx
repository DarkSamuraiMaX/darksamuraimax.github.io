import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GamesPage from "./pages/GamesPage.jsx";
import VideosPage from "./pages/VideosPage.jsx";
import DocumentsPage from "./pages/DocumentsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />		
        <Route path="/games" element={<GamesPage />} />
		<Route path="/videos" element={<VideosPage />} />
		<Route path="/documents" element={<DocumentsPage />} />
		
		<Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
