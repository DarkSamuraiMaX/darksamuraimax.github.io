import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SHOW_TIME = 2500;
const FADE_DURATION = 0.5;

export default function LogoIntro() {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
    }, SHOW_TIME);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: FADE_DURATION }}
      style={{
        pointerEvents: isFading ? "none" : "auto",
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="flex flex-col items-center"
      >
        <img
          src="/logo.png"
          alt="DarkSamurai"
          className="w-full mb-3 drop-shadow-xl"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-4xl font-bold text-white tracking-widest mx-auto"
        >
          Welcome to the secret location
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}