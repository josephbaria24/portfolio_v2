"use client";

import Image from "next/image";
import Head from "next/head";
import "../../app/globals.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

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

        {/* Projects Section */}
        <div className="relative flex flex-col min-h-screen">
          <main className="flex-grow flex flex-col items-center justify-center text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl">
              {/* Card 1 */}
              <div className="bg-gray-100 p-4 rounded-xl shadow-md border border-gray-300 flex flex-col items-center text-center transition hover:scale-105">
                <Image src="/rc.png" width={150} height={100} alt="Project 1" className="rounded-md" />
                <h3 className="text-md font-semibold mt-2">RentConnect App</h3>
                <p className="text-xs text-gray-700">
                  A comprehensive app for landlords and tenants, built with Flutter.
                </p>
                <a
                  href="https://apkpure.com/rentconnect/com.example.rentcon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline mt-2 inline-block"
                >
                  View Project →
                </a>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-100 p-4 rounded-xl shadow-md border border-gray-300 flex flex-col items-center text-center transition hover:scale-105">
                <Image src="/educare.png" width={120} height={80} alt="Project 2" className="rounded-md" />
                <h3 className="text-md font-semibold mt-2">Real-time Chat App</h3>
                <p className="text-xs text-gray-700">
                  My first react mini portfolio for case study.
                </p>
                <a
                  href="https://educare-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline mt-2 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>
          </main>

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
