// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { FileText, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    function onDoc(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  const resumeHref = language === "ru" ? "https://docs.google.com/document/d/1JAWbx7Dxf893s0nVn87C0wbfyaMkm-7jbMt94gAXCDA/edit?tab=t.0" : "https://docs.google.com/document/d/1JAWbx7Dxf893s0nVn87C0wbfyaMkm-7jbMt94gAXCDA/edit?tab=t.0"; /* сюда можно ру резюме потом вставить */

  return (
    <header className="text-white font-medium flex justify-between items-center px-4 py-4 ">
        {/* Левая часть — навигация */}
        <div className="flex flex-col items-start md:row-span-2 md:h-full justify-center">
		<nav className="flex flex-wrap justify-end gap-6 mt-2 text-sm">
		<Link to="/about" className="hover:text-yellow-300 transition">
		{t("text_title_about")}
		</Link>

		<Link to="/games" className="hover:text-yellow-300 transition">
		{t("text_title_games")}
		</Link>

		<Link to="/videos" className="hover:text-yellow-300 transition">
		{t("text_title_videos")}
		</Link>
		
		<Link to="/documents" className="hover:text-yellow-300 transition">
		{t("text_title_documents")}
		</Link>
		
		<Link to="/#contact" className="hover:text-yellow-300 transition">
		{t("text_title_contacts")}
		</Link>
        </nav>
        </div>

        {/* Правая строка — резюме и язык */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
            title={t("text_header_cv_download")}
          >
            <FileText size={18} />
            <span className="text-sm">{t("text_header_cv_title")}</span>
          </a>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((s) => !s)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
              aria-haspopup="true"
              aria-expanded={open}
              title={t("text_header_language")}
            >
              <img
                src={language === "ru" ? "/flags/ru.png" : "/flags/en.png"}
                alt={language}
                className="w-5 h-5 object-cover rounded-sm"
              />
              <span className="uppercase text-sm">{language}</span>
              <Globe size={14} />
            </button>

	{open && (
		<div
		className="
		absolute right-0 mt-2 w-36
		bg-black/80
		rounded-md border border-white/10
		backdrop-blur-sm
		shadow-lg
		z-50
		isolate
		pointer-events-auto
		"
		>
		<button
		onClick={() => handleLanguageChange("ru")}
		className="flex items-center gap-2 w-full px-3 py-2 hover:bg-white/6 transition"
		>
		<img src="/flags/ru.png" alt="Русский" className="w-4 h-4 rounded-sm" />
		<span className="text-sm">Русский</span>
		</button>

		<button
		onClick={() => handleLanguageChange("en")}
		className="flex items-center gap-2 w-full px-3 py-2 hover:bg-white/6 transition"
		>
		<img src="/flags/en.png" alt="English" className="w-4 h-4 rounded-sm" />
		<span className="text-sm">English</span>
		</button>
		</div>
		)}
          </div>
        </div>
    </header>
  );
}
