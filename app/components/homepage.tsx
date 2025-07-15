"use client";

import Image from "next/image";
import Head from "next/head";
import "../../app/globals.css";
import { useState, useEffect } from "react";


const projects = [
  {
    id: 1,
    title: "RentConnect App",
    description: "A comprehensive app for landlords and tenants, built with Flutter.",
    link: "https://apkpure.com/rentconnect/com.example.rentcon",
    images: ["/rcb.png", "/rcb.png", "/rcb.png"],
  },
  {
    id: 2,
    title: "E-portfolio",
    description: "My first react mini portfolio for case study.",
    link: "https://educare-seven.vercel.app/",
    images: ["/educare.png","/edu1.png","/edu2.png","/edu3.png"],
  },
  {
    id: 3,
    title: "OVPEC System",
    description: "Document inventory system for office of the vice president.",
    link: "https://vpecsys.vercel.app/",
    images: ["/vpec.png"],
  },
  {
    id: 4,
    title: "Villa Costa",
    description: "Booking app for Villa Costa Hotel (startup business of my clients)",
    link: "https://drive.google.com/drive/u/0/folders/1jFFai1X-YH5sPMZn8jz9dAZM6bJ92jkQ",
    images: ["/VC-1.png", "/VC-2.png"],
  },
];



export default function Home() {
  const [, setIsClient] = useState(false);

  type ProjectType = {
    id: number;
    title: string;
    description: string;
    link: string;
    images: string[];
  };
  
  const [modalProject, setModalProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>

      <div className="relative flex flex-col min-h-screen bg-white text-black">
        {/* Header */}
<header className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200">
  <h1 className="text-xl font-bold text-black">Joseph</h1>
  <button
    className="text-black hover:text-gray-700 focus:outline-none"
    aria-label="Menu"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </button>
</header>

        {/* Hero Section */}
        <div className="relative flex flex-col min-h-screen">
          <main className="flex-grow flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold sm:text-5xl font-geist-sans tracking-tighter text-black">
              NothingBut.jsph
            </h1>
            <p className="text-sml text-gray-700 mt-0 font-geist-sans">
              Lost in the web, found in the code.
            </p>
          </main>
        </div>

        {/* About Me Section */}
        <div className="relative flex flex-col min-h-screen">
          <main className="flex-grow flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold sm:text-4xl font-geist-sans tracking-tighter">
              About Me
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mt-4 font-geist-sans">
              Hey, I&apos;m <span className="font-semibold">Joseph</span>—a nub web & mobile app developer. I know some in{" "}
              <span className="font-semibold">Next.js, React, Three.js, Flutter</span>, and more. I love minimal designs with
              immersive web experiences. Currently exploring 3D web development and real-time interactions.
            </p>
          </main>
        </div>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 bg-white text-black text-center">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-700 mb-8">These are the tools and technologies I use frequently:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { name: "Next.js", icon: "devicon-nextjs-original" },
              { name: "React", icon: "devicon-react-original colored" },
              { name: "Three.js", icon: "devicon-threejs-original" },
              { name: "Flutter", icon: "devicon-flutter-plain colored" },
              { name: "Firebase", icon: "devicon-firebase-plain colored" },
              { name: "Node.js", icon: "devicon-nodejs-plain colored" },
              { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
              { name: "TailwindCSS", icon: "devicon-tailwindcss-original colored" },
              { name: "Express.js", icon: "devicon-express-original" },
              { name: "Dart", icon: "devicon-dart-plain colored" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-300"
              >
                <i className={`${tech.icon} text-xl`}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 bg-white text-black text-center">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Responsive Web Design</li>
                <li>React & Next.js</li>
                <li>Flutter (Mobile)</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Node.js with Express</li>
                <li>REST API Development</li>
                <li>MongoDB / Mongoose</li>
                <li>Firebase Auth & Firestore</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Others</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Git & GitHub</li>
                <li>Figma UI Collaboration</li>
                <li>Responsive Design Principles</li>
                <li>Basic 3D with Three.js</li>
              </ul>
            </div>
          </div>
        </section>

        

        {/* Projects Section */}
        
        <div className="relative flex flex-col min-h-screen">
          <main className="flex-grow flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">What I&apos;ve Built</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative bg-white p-4 rounded-xl shadow-md border border-gray-300 flex flex-col transition hover:scale-105 cursor-pointer"
                onClick={() => setModalProject(project)}
              >
                <Image
                  src={project.images[0]}
                  width={160}
                  height={100}
                  alt={project.title}
                  className="rounded-md self-center"
                />
                <h3 className="text-md font-semibold mt-2 text-center">{project.title}</h3>
                <p className="text-xs text-gray-700 text-center">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline mt-2 text-center"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>




        {modalProject && (
          <div className="fixed inset-0 backdrop-blur-md bg-white/30 z-50 flex items-center justify-center transition-opacity duration-900">


            <div className="bg-white max-w-2xl w-full p-6 rounded-xl relative shadow-xl">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                onClick={() => setModalProject(null)}
              >
                ×
              </button>

              <h3 className="text-xl font-bold mb-2">{modalProject.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{modalProject.description}</p>

              {/* Image Gallery */}
              <div className="flex overflow-x-auto gap-4 pb-2">
                {modalProject.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${modalProject.title} image ${index + 1}`}
                    width={250}
                    height={180}
                    className="rounded-lg border"
                    loading="lazy"
                  />
                ))}
              </div>

              {/* Project link */}
              <a
                href={modalProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-4 inline-block"
              >
                Visit Project →
              </a>
            </div>
          </div>
        )}

          </main>


          {/* Contact Section */}
        <section className="py-20 px-4 bg-white text-black text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            I'm open to freelance opportunities, collaborations, or just a good tech talk.
          </p>
          <a
            href="mailto:josephbaria89@gmail.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Send Me a Message
          </a>
        </section>

          {/* Footer */}
          <footer className="flex gap-6 flex-wrap items-center justify-center p-4 text-black border-t border-gray-200 mt-12">
            <a className="flex items-center gap-2 hover:underline" href="mailto:josephbaria89@gmail.com">
              <Image src="/email.svg" alt="email icon" width={16} height={16} />
              Email
            </a>
            <a
              className="flex items-center gap-2 hover:underline"
              href="https://vercel.com/templates"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/github.svg" alt="github icon" width={16} height={16} />
              GitHub
            </a>
            <a
              className="flex items-center gap-2 hover:underline"
              href="https://www.facebook.com/joseph.baria.24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/fb.svg" alt="FB icon" width={16} height={16} />
              Facebook
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
