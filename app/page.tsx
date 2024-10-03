"use client";

import ScrollAnimation from "react-animate-on-scroll";
import EducationTimeline from "@/components/sections/EducationTimeline";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import SectionHeader from "@/components/SectionHeader";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { Colors } from "@/lib/colors";
import PublicationsList from "@/components/sections/PublicationsList";
import { useRef } from "react";

export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <TracingBeam>
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-lg mx-auto py-2 px-8 md:px-4 gap-2">
          {/* TITLE SECTION */}
          <div className="min-h-screen flex flex-col justify-center">
            <p
              className={`${Colors.accent} text-teal-800 text-sm md:text-md font-extrabold`}
            >
              Hello, my name is
            </p>
            <h1
              className={`${Colors.strong} mb-4 text-6xl tracking-tight leading-none md:text-8xl`}
            >
              Filipe Campos
            </h1>
            <p
              className={`max-w-4xl lg:mb-8 md:text-lg lg:text-xl text-muted-foreground`}
            >
              Hi! I&apos;m a recent graduate in Informatics and Computing
              Engineering from FEUP. I love a good challenge and I&apos;m always
              looking for new opportunities to learn and grow.
            </p>
            <div className="animate-bounce flex justify-items-center justify-center w-full mt-16">
              <button onClick={executeScroll}>
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10"
                >
                  <path
                    d="m2.009 11.998c0-5.518 4.48-9.998 9.998-9.998s9.998 4.48 9.998 9.998c0 5.517-4.48 9.997-9.998 9.997s-9.998-4.48-9.998-9.997zm1.5 0c0 4.69 3.808 8.497 8.498 8.497s8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498-8.498 3.808-8.498 8.498zm4.716 1.528s1.505 1.501 3.259 3.254c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.217-.526 0-.192-.074-.384-.221-.53-.292-.293-.766-.295-1.057-.004l-1.977 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.979-1.978c-.289-.289-.761-.287-1.054.006-.147.147-.221.339-.222.53 0 .191.071.38.216.525z"
                    fill-rule="nonzero"
                    fill="#115e59"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <ScrollAnimation animateIn="fadeIn">
            <div
              className="min-h-screen flex flex-col justify-center w-full"
              ref={myRef}
            >
              <SectionHeader text="01. About me" />
              <div className="w-full text-gray-900 font-light lg:mb-8 md:text-lg dark:text-gray-400 flex flex-col justify-center justify-items-center gap-4">
                <p className="w-full md:w-3/4">
                  Hi, I&apos;m Filipe, originally from Vila Nova de Gaia!
                  I&apos;m passionate about{" "}
                  <strong className="font-bold">
                    Software Engineering and Machine Learning
                  </strong>
                  , and I thrive on using technology to solve complex problems.
                  Over the years, I&apos;ve had the opportunity to work with a
                  broad range of tools and technologies.
                </p>
                <p className="w-full md:w-3/4">
                  Additionally, I have had the opportunity to work in{" "}
                  <strong className="font-bold">research positions</strong>{" "}
                  where I focused on computer vision, deepening my knowledge in
                  this exciting field. During these roles, I explored multiple
                  machine learning solutions and developed interesting projects.
                  These experiences helped me sharpen my analytical skills and
                  fuel my enthusiasm for AI and its potential to transform
                  industries.
                </p>
                <p className="w-full md:w-3/4">
                  I&apos;m constantly seeking opportunities to learn and grow,
                  eager to tackle new challenges and contribute to innovative
                  projects. If you have anything to discuss, feel free to reach
                  out!
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* EDUCATION SECTION */}

          <ScrollAnimation animateIn="fadeIn">
            <div className="min-h-screen flex flex-col justify-center">
              <div className="grid grid-cols-2">
                <div className="min-h-screen md:min-h-0 col-span-2 md:col-span-1 mt-8">
                  <SectionHeader text="02. Education" />
                  <div className="ml-4">
                    <EducationTimeline />
                  </div>
                </div>
                <div className="min-h-screen md:min-h-0 col-span-2 md:col-span-1 md:mt-8">
                  <SectionHeader text="03. Experience" />
                  <div className="ml-4">
                    <ExperienceTimeline />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* PUBLICATIONS SECTION */}
          <ScrollAnimation animateIn="fadeIn">
            <div className="col-span-2 min-h-screen">
              <SectionHeader text="04. Publications" />
              <PublicationsList />
            </div>
          </ScrollAnimation>
        </div>
      </TracingBeam>
    </section>
  );
}
