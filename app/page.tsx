"use client";

import ScrollAnimation from "react-animate-on-scroll";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SectionHeader from "@/components/SectionHeader";
import PublicationCard from "@/components/PublicationCard";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { Colors } from "@/lib/colors";

export default function Home() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <TracingBeam>
        <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-lg mx-auto py-2 px-4 gap-2">
          {/* TITLE SECTION */}
          <ScrollAnimation animateIn="fadeIn">
            <div className="min-h-screen flex flex-col justify-center">
              <p className={`${Colors.accent} text-sm md:text-md font-extrabold`}>
                Hello, my name is
              </p>
              <h1 className={`${Colors.strong} mb-4 text-6xl tracking-tight leading-none md:text-8xl`}>
                Filipe Campos
              </h1>
              <p className={`${Colors.subtle} max-w-4xl lg:mb-8 md:text-lg lg:text-xl`}>
                Hi! I&apos;m a recent graduate in Informatics and Computing
                Engineering from FEUP. I love a good challenge and I&apos;m
                always looking for new opportunities to learn and grow.
              </p>
            </div>
          </ScrollAnimation>

          {/* ABOUT SECTION */}
          <ScrollAnimation animateIn="fadeIn">
            <div className="min-h-screen flex flex-col justify-center">
              <SectionHeader text="01. About me" />
              <p className="max-w-4xl text-gray-900 font-light lg:mb-8 md:text-lg dark:text-gray-400">
                I'm Filipe, originally from Vila Nova de Gaia.
              </p>
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

              <div className="flex gap-4 flex-col ml-4">
                <PublicationCard
                  title="Latent diffusion models for Privacy-preserving Medical Case-based Explanations"
                  authors=", L. Petrychenko, L. F. Teixeira, W. Silva"
                  year="2024"
                  link="#"
                  where="EXPLIMED: First Workshop on Explainable Artificial Intelligence for the medical domain, ECAI 2024"
                />
                <PublicationCard
                  title="Conditional Diffusion Models for Visual Anonymization of Medical Case-based Explanations"
                  authors=""
                  year="2024"
                  link="https://hdl.handle.net/10216/161023"
                  where="Master's Thesis, University of Porto"
                />
                <PublicationCard
                  title="YOLOMM - You Only Look Once for Multi-modal Multi-tasking"
                  authors=", F. Cerqueira, R. Cruz, J. Cardoso"
                  year="2023"
                  link="https://link.springer.com/chapter/10.1007/978-3-031-49018-7_40"
                  where="Iberoamerican Congress on Pattern Recognition 2023 (CIARP), Springer Nature Switzerland"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
        {/* <div className="grid grid-cols-2 max-w-screen-lg min-y-screen-xl px-8 py-8 mx-auto">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
            01. About me
          </h2>
        </div>
        <div className="col-span-2">
          <p className="text-gray-700 dark:text-white">
            Hi! I&apos;m Filipe Campos, a recent graduate in Informatics and Computing Engineering from the Faculty of Engineering of the University of Porto. I&apos;m passionate about Software Engineering and Machine Learning, and I&apos;m always looking for new challenges and opportunities to learn and grow.
          </p>
          <p className="text-gray-700 dark:text-white">
            Do you have anything you&apos;d like to discuss? Feel free to reach out to me!
          </p>

        </div>        */}
      </TracingBeam>
    </section>
  );
}
