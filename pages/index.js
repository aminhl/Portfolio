import Head from "next/head";
import { BsFillMoonStarsFill, BsStackOverflow } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import nh from "../public/nh-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web4 from "../public/web4.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Amin Hlel Portfolio</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              developedbynh
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-gray-200"
                />
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Amin Hlel
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              As a software engineering student and freelancer. Join me down
              below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
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
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 border-gray-700 flex-1">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500">
                Beautiful Designs
              </h3>
              <p className="py-2 text-gray-200">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 border-gray-700 flex-1">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500">
                Code your dream project
              </h3>
              <p className="py-2 text-gray-200">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 border-gray-700 flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500">
                Consulting
              </h3>
              <p className="py-2 text-gray-200">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1 overflow-hidden">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center py-10 dark:bg-gray-800 dark:text-gray-200">
        <h3 className="text-3xl md:text-2xl text-teal-500 pb-2">AminHlel</h3>
        <h4 className="text-2xl md:text-xl">
          © 2023 All right reserved - Amin Hlel
        </h4>
      </footer>
    </div>
  );
}
