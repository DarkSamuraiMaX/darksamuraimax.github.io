import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import LogoIntro from "../components/LogoIntro";
import FrameLayout from "../components/FrameLayout";
import PageBackground from "../layouts/PageBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GamesCarousel from "../components/GamesCarousel";
import VideosShowcase from "../components/VideosShowcase";
import { useLanguage } from "../i18n/LanguageContext";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();
  const { t } = useLanguage();


  // ----- Интро -----
  useEffect(() => {
    const seen = sessionStorage.getItem("ds_seen_intro");
    if (seen) {
      sessionStorage.setItem("ds_seen_intro", "1");
      setShowIntro(false);
    } else {
      sessionStorage.setItem("ds_seen_intro", "1");
      setTimeout(() => setShowIntro(false), 3000);
    }
  }, []);

  // ----- Скролл к якорю -----
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <PageBackground>
      <div className="w-full max-w-6xl mx-auto">
        {showIntro && <LogoIntro />}

        <FrameLayout>
		<div className="px-6 sm:px-8 lg:px-10 space-y-6">
          <Header />

            {/* ---------- ОБО МНЕ ---------- */}
            <section id="about" className="text-center scroll-mt-24">
             <br />
			 <h2 className="text-3xl font-bold mb-4">{t("text_title_about")}</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                {t("text_home_about")}
              </p>

              <div className="text-right mt-4">
                <Link to="/about"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-200 transition text-sm font-medium"
                >
                  {t("text_home_more_1")}
                </Link>
              </div>
            </section>

			
            {/* ---------- ИГРЫ ---------- */}
            <section id="projects" className="scroll-mt-24">
              <GamesCarousel />
            </section>
			<br />

            {/* ---------- РОЛИКИ ---------- */}
            <section id="videos" className="scroll-mt-24">
              <h2 className="text-3xl font-bold py-6">{t("text_title_videos")}</h2>
              <VideosShowcase />
            </section>
			<br />

            {/* ---------- ДОКУМЕНТЫ ---------- */}
            <section id="blog" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">{t("text_title_documents")}</h2>

              <div className="bg-black/40 rounded-xl p-8 shadow-lg backdrop-blur-sm">
                <div className="grid md:grid-cols-3 gap-6">
                  <a href="https://docs.google.com/document/d/1Y0Oh9BIcF9NSr_6YmS6qrN4h0TMT9n1iCgAzCnmIlzw/" target="_blank" rel="noopener noreferrer" 
				  className="block bg-gray-950 hover:bg-gray-800 transition rounded-xl p-4">
                    <h3 className="font-semibold text-lg">{t("text_home_documents_1_name")}</h3>
					<h4 className="text-sm text-gray-400 mt-1">{t("text_home_documents_1_desc")}</h4>
                  </a>
                  <a href="https://docs.google.com/document/d/1jEPXhhCr12gqrlc6Q6C-J0UNrCj1e6KcDfpEe4LUso8/" target="_blank" rel="noopener noreferrer"
				  className="block bg-gray-950 hover:bg-gray-800 transition rounded-xl p-4">
                    <h3 className="font-semibold text-lg">{t("text_home_documents_2_name")}</h3>
					<h4 className="text-sm text-gray-400 mt-1">{t("text_home_documents_2_desc")}</h4>
                  </a>
                  <a href="https://docs.google.com/presentation/d/1feaYKSBTs9dKgTBoq5iyok0bSklPPg-XXObt9C88Efw/" target="_blank" rel="noopener noreferrer"
				  className="block bg-gray-950 hover:bg-gray-800 transition rounded-xl p-4">
                    <h3 className="font-semibold text-lg">{t("text_home_documents_3_name")}</h3>
					<h4 className="text-sm text-gray-400 mt-1">{t("text_home_documents_3_desc")}</h4>
                  </a>
                </div>

                <div className="text-right mt-6">
                  <Link to="/documents"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-200 transition text-sm font-medium"
                  >
                    {t("text_home_more_2")}
                  </Link>
                </div>
              </div>
            </section>

            {/* ---------- КОНТАКТЫ ---------- */}
            <section id="contact" className="text-center scroll-mt-24">
              <h2 className="text-3xl font-bold mb-4">{t("text_title_contacts")}</h2>
              <p className="text-gray-300 mb-6">
                {t("text_home_contacts")}
              </p>

  {/* Контактные иконки */}
  <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-2xl">
    {/* Email */}
    <a
      href="mailto:darksamurai.max@gmail.com"
      className="hover:text-yellow-400 transition"
      aria-label="Email"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/maxim-ostanin/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.06V24h-4v-7.7c0-1.83-.03-4.19-2.56-4.19-2.56 0-2.95 2-2.95 4.06V24h-4V8z"/>
      </svg>
    </a>

    {/* itch.io */}
    <a
      href="https://darksamuraimax.itch.io/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
      aria-label="itch.io"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M2 3l2-1h16l2 1 2 4v12l-2 4-2 1H4l-2-1-2-4V7l2-4zm10 4a3 3 0 110 6 3 3 0 010-6zm0 12c5 0 9-4 9-9h-2a7 7 0 11-14 0H3c0 5 4 9 9 9z"/>
      </svg>
    </a>

	{/* Steam */}
	<a
  href="https://steamcommunity.com/id/darksamurai_max/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-yellow-400 text-lg font-semibold tracking-wide transition"
	>
	Steam
	</a>

	{/* PSN */}
	<a
  href="https://psnprofiles.com/DarkSamurai-MaX"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-yellow-400 text-lg font-semibold tracking-wide transition"
	>
	PSN
	</a>
	</div>
	</section>


          <Footer />
      </div>
        </FrameLayout>
      </div>
    </PageBackground>
  );
}
