import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/bac372bb-59b0-4bca-994b-55050a228aec/files/55fcd7c0-f518-4ad6-a921-67cb46ae2bba.jpg"
          alt="RobShop hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          CambeckSHOP
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Лучшие цифровые товары для Roblox — скины, геймпасы, робуксы и эксклюзивные предметы
        </p>
        <a
          href="#catalog"
          className="inline-block bg-white text-black px-8 py-3 uppercase text-sm tracking-wide font-bold hover:bg-neutral-200 transition-colors duration-300"
        >
          Перейти в каталог
        </a>
      </div>
    </div>
  );
}