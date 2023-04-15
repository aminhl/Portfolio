import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import nh from "../public/nh-wave.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amin Hlel Portfolio</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbynh</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Amin Hlel
            </h2>
            <h3 className="text-2xl py-2">Software Engineer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              As a software engineering student and freelancer, I am dedicated
              to developing innovative solutions through collaboration and
              communication. With a passion for staying up-to-date with the
              latest technologies, I strive to create customized software
              solutions that meet the unique needs of my clients.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={nh} layout="fill" objectFit="cover"/>
          </div>
        </section>
      </main>
    </div>
  );
}
