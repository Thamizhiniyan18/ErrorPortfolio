"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import useMousePosition from "@/components/utils/mouse-position";
import MatrixRainingCode from "@/components/MatrixRain";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Particles from "@/components/particles";

export default function Home() {
  const { x, y } = useMousePosition();
  const size: number = 500;

  const myworks = [
    {
      title: "Projects",
      href: "/projects",
      description: "A Curated list of all my work.",
      initialY: -40,
      initialX: -40,
    },
    {
      title: "Blogs",
      href: "/blogs",
      description: "A small research on topics that grab my attention.",
      initialY: 40,
      initialX: 40,
    },
    {
      title: "Writeups",
      href: "/writeups?sbd=latest",
      description:
        "All my writeups and walkthroughs that I documented through out my career.",
      initialY: -40,
      initialX: -40,
    },
  ];

  return (
    <main className="w-full flex flex-col justify-start items- overflow-hidden">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="relative w-full flex justify-center items-center h-[calc(100vh-100px)] max-h-[1080px]"
      >
        <Particles
          className="absolute inset-0 pointer-events-none lg:hidden"
          quantity={100}
          staticity={10}
        />
        <div className="absolute flex flex-col justify-center items-center rounded-full">
          <h4 className="scroll-m-20 text-md md:text-xl font-semibold tracking-widest">
            Hey Folks!!, I am
          </h4>
          <h1 className="scroll-m-20 text-2xl md:text-6xl font-extrabold tracking-widest xl:text-8xl my-8">
            Thamizhiniyan C S
          </h1>
          <div className="flex items-center h-[50px]">
            <motion.h3
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: [null, -10, 0], opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              className="scroll-m-20 text-md text-right md:text-2xl font-semibold tracking-widest"
            >
              Penetration Tester
            </motion.h3>
            <Separator className="bg-primary mx-5" orientation="vertical" />
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: [null, 10, 0], opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              className="scroll-m-20 text-md text-left md:text-2xl font-semibold tracking-widest"
            >
              Next.js Developer
            </motion.h3>
          </div>
          <Link
            href="#about"
            className="absolute top-[350px] md:top-[450px] xl:top-[400px] flex flex-col justify-center items-center z-[2]"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col justify-center items-center"
            >
              <p className="tracking-widest text-sm md:text-lg">
                Click To Scroll
              </p>
              <span className="material-symbols-outlined text-[2rem] md:text-[4rem] xl:text-[6rem] animate-bounce ">
                expand_more
              </span>
            </motion.div>
          </Link>
        </div>

        <motion.div
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className="hidden w-full h-full lg:flex justify-center items-center overflow-hidden mouse-mask text-primary "
        >
          <div className="absolute flex flex-col justify-center items-center rounded-full">
            <MatrixRainingCode className="z-[1]" />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-widest z-[2]">
              Hey Folks!!, I am
            </h4>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-widest z-[2] lg:text-8xl my-8">
              Thamizhiniyan C S
            </h1>
            <div className="flex items-center h-[50px] z-[2]">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-widest">
                Penetration Tester
              </h3>
              <Separator className="bg-primary mx-5" orientation="vertical" />
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-widest">
                Next.js Developer
              </h3>
            </div>
            <Link
              href="#about"
              className="absolute top-[350px] md:top-[450px] xl:top-[400px] flex flex-col justify-center items-center z-[2] text-primary"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col justify-center items-center text-primary dark:text-primary"
              >
                <p className="tracking-widest text-primary md:text-lg">
                  Click To Scroll
                </p>
                <span className="material-symbols-outlined text-[2rem] md:text-[4rem] xl:text-[6rem] animate-bounce text-primary">
                  expand_more
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        id="about"
        className="relative w-full h-[100vh] flex flex-col pt-[100px] items-center justify-start max-h-[1080px]"
      >
        <h2 className="w-full h-[100px] flex justify-center items-center scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-widest z-[2] lg:text-8xl my-8">
          <motion.span
            initial={{ x: -40, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            ABOUT
          </motion.span>
          &nbsp;
          <motion.span
            initial={{ x: 40, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            MYSELF
          </motion.span>
        </h2>
        <motion.div className="w-[90%] lg:w-[70%] xl:h-[50%] flex flex-col justify-center items-center z-[2]  rounded-xl xl:p-4 bg-none">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
            className="leading-10 text-sm md:text-xl md:leading-[60px] xl:text-2xl xl:leading-[80px] [&:not(:first-child)]:mt-6 xl:w-[70%] text-justify"
          >
            Hello, everyone. I&apos;m{" "}
            <span className="text-primary">Thamizhiniyan C S</span>, an Ethical
            hacker, Next.js Developer, and Cyber Security enthusiast currently
            in my third year of engineering studies. My expertise is centered
            around cyber security, digital forensics, and crafting engaging web
            applications with Next.js.
          </motion.p>

          <Link href="/about" className="my-5">
            <Button
              variant="outline"
              className="w-[90vw] h-14 flex justify-center items-center flex-col md:w-[500px] md:h-[100px] rounded-full p-0"
            >
              <p className="leading-7 lg:text-2xl [&:not(:first-child)]:mt-6 text-justify">
                Click To Know More About Me
              </p>
            </Button>
          </Link>
        </motion.div>

        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={100}
          staticity={10}
        />

        <Link
          href="#myworks"
          className="absolute bottom-[2rem] xl:bottom-0 flex flex-col justify-center items-center z-[2]"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col justify-center items-center"
          >
            <p className="tracking-widest md:text-lg">Click To Scroll</p>
            <span className="material-symbols-outlined text-[2rem] md:text-[4rem] xl:text-[6rem] animate-bounce ">
              expand_more
            </span>
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        id="myworks"
        className="relative w-full h-[100vh] flex flex-col pt-[100px] items-center justify-start max-h-[1080px]"
      >
        <h2 className="w-full h-[100px] flex justify-center items-center scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-widest z-[2] lg:text-8xl my-8">
          <motion.span
            initial={{ x: -40, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            MY
          </motion.span>
          &nbsp;
          <motion.span
            initial={{ x: 40, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            WORKS
          </motion.span>
        </h2>

        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={100}
          staticity={10}
        />
        <div className="lg:hidden relative md:w-[95%] xl:w-[80%] h-full flex flex-col md:flex-row justify-evenly items-center">
          {myworks.map((each, index) => (
            <motion.div
              initial={{ x: each.initialX, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 0.2,
                delay: 1 + index / 2,
              }}
              key={`Work_${each.title}`}
              className="w-[90] xs:w-[400px] h-[150px] xl:h-[500px] flex justify-center items-center rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-sm"
            >
              <Link
                href={each.href}
                className="relative w-full h-full flex flex-col justify-center items-center text-center p-4 hover:backdrop-blur-md"
              >
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight z-[1]">
                  {each.title}
                </h2>
                <p>{each.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:flex relative md:w-[95%] xl:w-[80%] h-full flex-col md:flex-row justify-evenly items-center">
          {myworks.map((each, index) => (
            <motion.div
              initial={{ y: each.initialY, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 0.2,
                delay: 1 + index / 2,
              }}
              key={`Work_${each.title}`}
              className="w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] 2xl:w-[400px] xl:h-[500px] flex justify-center items-center rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-sm"
            >
              <Link
                href={each.href}
                className="relative w-full h-full flex flex-col justify-center items-center text-center p-4 hover:backdrop-blur-md"
              >
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight z-[1]">
                  {each.title}
                </h2>
                <p>{each.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
