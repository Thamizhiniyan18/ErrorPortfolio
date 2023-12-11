"use client";

import { motion, stagger } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import useMousePosition from "@/components/utils/mouse-position";
import MatrixRainingCode from "@/components/MatrixRain";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Spotlight, { SpotlightCard } from "@/components/Spotlight";

export default function Home() {
  const { x, y } = useMousePosition();
  const size: number = 500;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const myworks = [
    {
      title: "Projects",
      href: "/projects",
      description: "A Curated list of all my work.",
    },
    {
      title: "Blogs",
      href: "/blogs",
      description: "A small research on topics that grab my attention.",
    },
    {
      title: "Writeups",
      href: "/writeups?sbd=latest",
      description:
        "All my writeups and walkthroughs that I documented through out my career.",
    },
  ];

  return (
    <main className="w-full flex flex-col justify-start items- overflow-hidden">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="relative w-full flex justify-center items-center h-[calc(100vh-100px)]"
      >
        <div className="absolute flex flex-col justify-center items-center rounded-full">
          <h4 className="scroll-m-20 text-md lg:text-xl font-semibold tracking-widest">
            Hey Folks!!, I am
          </h4>
          <h1 className="scroll-m-20 text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-widest xl:text-8xl my-8">
            Thamizhiniyan C S
          </h1>
          <div className="flex items-center h-[50px]">
            <motion.h3
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: [null, -10, 0], opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              className="scroll-m-20 text-md text-right lg:text-2xl font-semibold tracking-widest"
            >
              Penetration Tester
            </motion.h3>
            <Separator className="bg-primary mx-5" orientation="vertical" />
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: [null, 10, 0], opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
              className="scroll-m-20 text-md text-left lg:text-2xl font-semibold tracking-widest"
            >
              Next.js Developer
            </motion.h3>
          </div>
          <Link
            href="#about"
            className="absolute top-[400px] flex flex-col justify-center items-center z-[2]"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col justify-center items-center"
            >
              <p className="tracking-widest">Click To Scroll</p>
              <span className="material-symbols-outlined text-[6rem] animate-bounce ">
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
          className="hidden w-full h-full lg:flex justify-center items-center overflow-hidden mouse-mask text-primary"
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
              className="absolute top-[400px] flex flex-col justify-center items-center z-[2] text-primary"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col justify-center items-center text-primary dark:text-primary"
              >
                <p className="tracking-widest text-primary">Click To Scroll</p>
                <span className="material-symbols-outlined text-[6rem] animate-bounce text-primary">
                  expand_more
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        id="about"
        className="relative w-full h-[100vh] flex flex-col pt-[100px] items-center justify-start"
      >
        <motion.svg
          width="800"
          height="800"
          viewBox="0 0 600 600"
          initial="hidden"
          whileInView="visible"
          className="absolute z-0 top-20 left-[-20rem]"
        >
          <motion.circle
            cx="50%"
            cy="50%"
            r="200"
            stroke="#3b82f6"
            strokeWidth="50"
            variants={draw}
            custom={1}
            fill="transparent"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </motion.svg>

        <motion.svg
          width="1000"
          height="full"
          viewBox="0 0 600 600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute bottom-0 right-[-40rem] z-0"
          // className="absolute"
        >
          <motion.path
            d="M 0 1000 L 0 0"
            transform="translate(54.917 68.947)"
            fill="transparent"
            strokeWidth="5"
            stroke="#3b82f6"
          />
        </motion.svg>
        <h2 className="w-full h-[100px] flex justify-center items-center scroll-m-20 text-4xl font-extrabold tracking-widest z-[2] lg:text-8xl my-8">
          <motion.span
            initial={{ x: -40, opacity: 0 }}
            // animate={{ x: 1, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            ABOUT
          </motion.span>
          &nbsp;
          <motion.span
            initial={{ x: 40, opacity: 0 }}
            // animate={{ x: 1, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            MYSELF
          </motion.span>
        </h2>
        <motion.div className="w-[60%] flex flex-col justify-between items-center z-[2]  rounded-xl p-4 backdrop-blur-sm">
          <p className="leading-10 text-2xl [&:not(:first-child)]:mt-6 w-[70%] text-justify">
            Hello, everyone. I&apos;m{" "}
            <span className="text-primary">Thamizhiniyan C S</span>, an Ethical
            hacker, Next.js Developer, and Cyber Security enthusiast currently
            in my third year of engineering studies. My expertise is centered
            around cyber security, digital forensics, and crafting engaging web
            applications with Next.js.
          </p>

          <Link href="/about" className="my-5">
            <Button className="flex justify-center items-center flex-col w-[500px] h-[100px] rounded-full p-0">
              <p className="leading-7 text-2xl [&:not(:first-child)]:mt-6 text-justify">
                Click To Know More About Me
              </p>
            </Button>
          </Link>
        </motion.div>

        <Link href="/#myworks" className="my-5 z-[2]">
          <Button className="flex justify-center items-center flex-col w-[500px] h-[100px] rounded-full p-0 pt-4">
            <p className="leading-7 text-2xl [&:not(:first-child)]:mt-6 text-justify">
              Click To Take a Look at My Works
            </p>
            <span className="material-symbols-outlined text-[3rem] animate-bounce ">
              expand_more
            </span>
          </Button>
        </Link>
      </motion.div>

      <motion.div
        id="myworks"
        className="w-full h-[100vh] flex flex-col pt-[100px] items-center justify-start"
      >
        <h2 className="w-full h-[100px] flex justify-center items-center scroll-m-20 text-4xl font-extrabold tracking-widest z-[2] lg:text-8xl my-8">
          <motion.span
            initial={{ x: -40, opacity: 0 }}
            // animate={{ x: 1, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            MY
          </motion.span>
          &nbsp;
          <motion.span
            initial={{ x: 40, opacity: 0 }}
            // animate={{ x: 1, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            WORKS
          </motion.span>
        </h2>

        <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group h-[600px]">
          {myworks.map((work) => (
            <Link
              key={`Work_${work.title}`}
              href={work.href}
              className="h-full"
            >
              <SpotlightCard className="bg-white/20">
                <div className="relative h-full bg-background p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">
                        {work.title}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </Spotlight>
      </motion.div>
    </main>
  );
}
