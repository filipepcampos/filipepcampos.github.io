import UrlButton from "../ui/url-button";

export default function EducationTimeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm leading-none text-muted-foreground">
          Sept. 2022 - July 2024
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          MSc in Informatics and Computing Engineering
        </h3>
        <p className="text-sm text-muted-foreground">
          Faculdade de Engenharia da Universidade do Porto
        </p>
        <p className="mb-4 text-sm text-muted-foreground">Grade: 19/20</p>
        {/* <UrlButton className="mr-2" variant="outline" href="/education#msc">
          About{" "}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </UrlButton> */}
        <UrlButton variant="outline" href="https://hdl.handle.net/10216/161023">
          Dissertation{" "}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </UrlButton>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm leading-none text-muted-foreground">
          Sept. 2019 - July 2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          BSc in Informatics and Computing Engineering
        </h3>
        <p className="text-sm text-muted-foreground">
          Faculdade de Engenharia da Universidade do Porto
        </p>
        <p className="mb-4 text-sm text-muted-foreground">Grade: 18/20</p>
        {/* <UrlButton className="mr-2" variant="outline" href="/education#bsc">
          About{" "}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </UrlButton> */}
      </li>
    </ol>
  );
}
