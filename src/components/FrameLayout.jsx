import React from "react";
import { Link } from "react-router-dom";

export default function FrameLayout({ children }) {
  return (
    <div className="relative w-full overflow-x-hidden border-0">
      {/* --- Верхняя рамка --- */}
      <div className="relative flex justify-between items-start h-24">
        <img src="/frame/top-left.png" alt="top left" className="h-full w-auto select-none pointer-events-none" draggable="false" />
        <div
          className="flex-1 h-full bg-repeat-x bg-left"
          style={{ backgroundImage: "url(/frame/top-center.png)", backgroundSize: "contain", }}
        />
        <img src="/frame/top-right.png" alt="top right" className="h-full w-auto select-none pointer-events-none" draggable="false" />

        {/* Логотип по центру */}
<div className="absolute inset-0 flex justify-center items-end pb-3 select-none">
  <Link to="/" className="pointer-events-auto">
    <img
      src="/frame/logo.png"
      alt="DarkSamurai's Lair"
      className="h-9 opacity-100 select-none"
      draggable="false"
    />
  </Link>
</div>
      </div>

      {/* --- Центральная часть (рамка вокруг контента) --- */}
      <div className="flex">
        {/* Левая боковина */}
        <div className="flex flex-col w-20">
          <img src="/frame/side-top.png" alt="side top" className="w-full h-4 select-none pointer-events-none" draggable="false" />
          <div
            className="flex-1 bg-repeat-y bg-top"
            style={{
              backgroundImage: "url(/frame/side-center.png)",
              backgroundSize: "contain",
            }}
          />
          <img src="/frame/side-bottom.png" alt="side bottom" className="w-full h-10 select-none pointer-events-none" draggable="false" />
        </div>

        {/* Контент */}
        <div className="flex-1 bg-black/70 backdrop-blur-sm">{children}</div>

        {/* Правая боковина */}
        <div className="flex flex-col w-20">
          <img src="/frame/side-top-right.png" alt="side top" className="w-full h-4 select-none pointer-events-none" draggable="false" />
          <div
            className="flex-1 bg-repeat-y bg-top"
            style={{
              backgroundImage: "url(/frame/side-center.png)",
              backgroundSize: "contain",
            }}
          />
          <img src="/frame/side-bottom-right.png" alt="side bottom right" className="w-full h-10 select-none pointer-events-none" draggable="false" />
        </div>
      </div>



    </div>
  );
}