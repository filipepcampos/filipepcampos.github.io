import EducationTimeline from "@/components/EducationTimeline";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl min-y-screen-xl px-8 py-8 mx-auto">
        <div className="mr-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Welcome!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I&apos;m a Filipe Campos, a recent graduate with a MSc Degree in
            Informatics and Computing Engineering from FEUP.
          </p>
        </div>
        <div>
          <Image
            className="rounded-full border-solid border-4 border-gray-600 shadow-lg w-1/4"
            src="/self_image.jpg"
            alt="Picture of the website's author."
            width="256"
            height="256"
          />
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <EducationTimeline />
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          <ExperienceTimeline />
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Publications
          </h2>
        
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
              src="/logo_ecai.svg"
              alt=""
              width="200"
              height="100"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Latent diffusion models for Privacy-preserving Medical
                Case-based Explanations
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <u>F. Campos</u>, L. Petrychenko, L. F. Teixeira, W. Silva
                (2024). EXPLIMED: First Workshop on Explainable Artificial
                Intelligence for the medical domain, ECAI 2024.
              </p>
            </div>
          </a>
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-031-49018-7_40"
            className="flex flex-col gap-16 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
              src="/logo_ciarp.png"
              alt=""
              width="200"
              height="100"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                YOLOMM - You Only Look Once for Multi-modal Multi-tasking
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <u>F. Campos</u>, F. Cerqueira, R. Cruz, J. Cardoso (2023).
                Iberoamerican Congress on Pattern Recognition 2023 (CIARP),
                Springer Nature Switzerland
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
