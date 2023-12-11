"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import useMousePosition from "@/components/utils/mouse-position";
import MatrixRainingCode from "@/components/MatrixRain";

export default function Home() {
  const { x, y } = useMousePosition();
  const size: number = 500;

  return (
    <main className="w-full flex flex-col justify-start items-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="relative w-full flex justify-center items-center h-[calc(100vh-150px)]"
      >
        <div className="absolute flex flex-col justify-center items-center rounded-full">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-widest">
            Hey Folks!!, I am
          </h4>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-widest lg:text-8xl my-8">
            Thamizhiniyan C S
          </h1>
          <div className="flex items-center h-[50px]">
            <motion.h3
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: [null, -10, 0], opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              className="scroll-m-20 text-2xl font-semibold tracking-widest"
            >
              Penetration Tester
            </motion.h3>
            <Separator className="bg-primary mx-5" orientation="vertical" />
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: [null, 10, 0], opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              className="scroll-m-20 text-2xl font-semibold tracking-widest"
            >
              Next.js Developer
            </motion.h3>
          </div>
        </div>

        <motion.div
          initial={{
            WebkitMaskPosition: '50% 50%',
          }}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className="w-full h-full flex justify-center items-center overflow-hidden mouse-mask text-primary"
        >
          <div className="absolute flex flex-col justify-center items-center rounded-full">
            <MatrixRainingCode />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-widest">
              Hey Folks!!, I am
            </h4>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-widest lg:text-8xl my-8">
              Thamizhiniyan C S
            </h1>
            <div className="flex items-center h-[50px]">
              <motion.h3
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: [null, -10, 0], opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                className="scroll-m-20 text-2xl font-semibold tracking-widest"
              >
                Penetration Tester
              </motion.h3>
              <Separator className="bg-primary mx-5" orientation="vertical" />
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: [null, 10, 0], opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                className="scroll-m-20 text-2xl font-semibold tracking-widest"
              >
                Next.js Developer
              </motion.h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
