import React, { useState, useMemo } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Link } from "react-router-dom";

export default function VideosShowcase() {
  const { t } = useLanguage();

  const videos = useMemo(() => [
    {
      id: "1",
      title: t("text_home_videos_1_name"),
      description: t("text_home_videos_1_desc"),
      youtubeId: "yVEsSlntucQ",
      thumbnail: "/src/assets/video1.jpg",
    },
    {
      id: "2",
      title: t("text_home_videos_2_name"),
      description: t("text_home_videos_2_desc"),
      youtubeId: "8NtXG1DfgLw",
      thumbnail: "/src/assets/video2.jpg",
    },
    {
      id: "3",
      title: t("text_home_videos_3_name"),
      description: t("text_home_videos_3_desc"),
      youtubeId: "kFLOPHAbSyc",
      thumbnail: "/src/assets/video3.jpg",
    },
    {
      id: "4",
      title: t("text_home_videos_4_name"),
      description: t("text_home_videos_4_desc"),
      youtubeId: "E6ihgGH3URU",
      thumbnail: "/src/assets/video4.jpg",
    },
  ], [t]);

  const [currentId, setCurrentId] = useState("1");

  const current = videos.find((v) => v.id === currentId);

  return (
    <div className="bg-black/40 rounded-xl p-6 shadow-lg backdrop-blur-sm">
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Левая колонка */}
        <div className="md:col-span-2">
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${current.youtubeId}`}
              title={current.title}
              allowFullScreen
            />
          </div>

          <h3 className="text-2xl font-bold mt-4">{current.title}</h3>
          <p className="text-gray-400 mt-2">{current.description}</p>
        </div>

        {/* Правая колонка */}
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition 
                ${
                  currentId === video.id
                    ? "bg-gray-800 ring-2 ring-yellow-400"
                    : "bg-gray-950 hover:bg-gray-800"
                }`}
              onClick={() => setCurrentId(video.id)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-24 h-14 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-100 line-clamp-2">
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ссылка */}
      <div className="text-right">
        <Link to="videos"
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-200 transition text-sm font-medium"
        >
          {t("text_home_videos_more")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}