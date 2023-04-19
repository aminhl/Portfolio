import Head from "next/head";
import { BsFillMoonStarsFill, BsStackOverflow } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import Image from "next/image";
import nh from "../public/nh-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import nikeStore from "../public/nikeStore.png";
import lyriks from "../public/lyriks.png";
import resupply from "../public/resupply.png";
import movix from "../public/movix.png";
import {
  FaJava,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaSass,
  FaHtml5,
  FaBootstrap,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiSpring,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [darkModeIcon, setDarkModeIcon] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // add new state variable

  useEffect(() => {
    // simulate a delay before setting isLoading to false
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Amin Hlel Portfolio</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {isLoading ? ( // display loader if isLoading is true
        <div className="flex justify-center items-center h-screen dark:bg-gray-900">
          <Triangle
            height="80"
            width="80"
            color="#14B8A6"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
            <section className="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl font-burtons dark:text-white">
                  developedbynh
                </h1>
                <ul className="flex items-center">
                  <li>
                    {darkModeIcon ? (
                      <MdLightMode
                        onClick={() => {
                          setDarkMode(!darkMode);
                          setDarkModeIcon(!darkModeIcon);
                        }}
                        className="cursor-pointer text-2xl dark:text-gray-200"
                      />
                    ) : (
                      <BsFillMoonStarsFill
                        onClick={() => {
                          setDarkMode(!darkMode);
                          setDarkModeIcon(!darkModeIcon);
                        }}
                        className="cursor-pointer text-2xl dark:text-gray-200"
                      />
                    )}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
                  Amin Hlel
                </h2>
                <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                  Software Engineer.
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
                  As a software engineering student and freelancer. Join me down
                  below and lets get cracking!
                </p>
              </div>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-400">
                <a href="https://twitter.com/AminHlel" target="_blank">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://www.linkedin.com/in/aminhlel/" target="_blank">
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://stackoverflow.com/users/14586868/amin-hlel"
                  target="_blank"
                >
                  <BsStackOverflow />
                </a>
              </div>
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
                <Image src={nh} layout="fill" objectFit="cover" />
              </div>
            </section>
            <section>
              <div>
                <h3 className="text-3xl py-1 dark:text-white">
                  Services I offer
                </h3>
              </div>
              <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 border-gray-700 flex-1">
                  <Image
                    src={design}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500">
                    Beautiful Designs
                  </h3>
                  <p className="py-2 text-gray-800 dark:text-gray-200">
                    Creating elegant designs suited for your needs following
                    core design theory.
                  </p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 border-gray-700 flex-1">
                  <Image
                    src={code}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500">
                    Code your dream project
                  </h3>
                  <p className="py-2 text-gray-800 dark:text-gray-200">
                    Do you have an idea for your next great website? Lets make
                    it a reality.
                  </p>
                </div>
              </div>
            </section>
            <section className="py-10">
              <div>
                <h3 className="text-3xl py-1 dark:text-white">
                  Some Things I’ve Built
                </h3>
              </div>
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1 ">
                  <Image
                    className="rounded-lg object-cover"
                    width={"80%"}
                    height={"80%"}
                    layout="responsive"
                    src={nikeStore}
                  />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image
                    className="rounded-lg object-cover"
                    width={"80%"}
                    height={"80%"}
                    layout="responsive"
                    src={resupply}
                  />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image
                    className="rounded-lg object-cover"
                    width={"80%"}
                    height={"80%"}
                    layout="responsive"
                    src={lyriks}
                  />
                </div>
                <div className="basis-1/3 flex-1 overflow-hidden">
                  <Image
                    className="rounded-lg object-cover"
                    width={"80%"}
                    height="1080"
                    layout="responsive"
                    src={movix}
                  />
                </div>
              </div>
            </section>
            <section className="py-10 flex justify-between flex-wrap gap-8">
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FaHtml5 size={80} color="#DD4B25" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <SiCss3 size={80} color="#146EB1" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FaSass size={80} color="#C96195" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <SiTailwindcss size={80} color="#07B0CE" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FaBootstrap size={80} color="#8411F6" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <SiJavascript size={80} color="#E8D44D" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FaJava size={80} color="#0C85C2" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <SiTypescript size={80} color="#1573C1" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FaReact size={80} color="#00D1F7" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FaAngular size={80} color="#BD002E" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <SiSpring size={80} color="#6AAD3D" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FaNodeJs size={80} color="#7DBB45" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <SiGraphql size={80} color="#EE0097" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <AiFillGithub size={80} color="" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FcLinux size={80} color="" />
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-700">
                <FaDocker size={80} color="#2391E6" />
              </div>
            </section>
          </main>
          <footer className="text-center py-10 bg-gray-80 dark:bg-gray-800 dark:text-gray-200">
            <h3 className="text-3xl md:text-2xl text-teal-500 pb-2">
              AminHlel
            </h3>
            <h4 className="text-2xl md:text-xl">
              © 2023 All right reserved - Amin Hlel
            </h4>
          </footer>
        </>
      )}
    </div>
  );
}
