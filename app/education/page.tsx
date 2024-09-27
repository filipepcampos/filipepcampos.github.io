import GradeTable from "@/components/GradeTable";

export default function Education() {
  const firstYear = [
    {
      uc: "Machine Learning",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "Project",
          url: "https://github.com/filipepcampos/feup-ac-proj ",
        },
      ],
    },
    {
      uc: "Large Scale Software Development",
      grade: 20,
      ects: "A",
    },
    {
      uc: "Information Processing and Retrieval",
      grade: 18,
      ects: "B",
      projects: [
        {
          name: "Book Quotes Information Search System",
          url: "https://github.com/filipepcampos/feup-pri",
        },
      ],
    },
    {
      uc: " Interactive Graphics Systems",
      grade: 20,
      ects: "A",
      projects: [
        {
          name: "Checkers",
          url: "https://github.com/filipepcampos/feup-sgi-proj",
          weburl: "https://sgi.projects.filipepcampos.com/tp3/"
        },
      ],
    },
    {
      uc: "Project Management Laboratory",
      grade: 18,
      ects: "A",
    },
    {
      uc: "Optimization",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "Temporary Staffing at GoodOldGoods",
          url: "https://github.com/filipepcampos/feup-optimization",
        },
      ],
    },
    {
      uc: "Natural Language Processing",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "MN-DS-News Classifier Assignment 1",
          url: "https://github.com/filipepcampos/feup-pln-assignment1",
        },
        {
          name: "MN-DS-News Classifier Assignment 2",
          url: "https://github.com/filipepcampos/feup-pln-assignment2",
        },
      ],
    },
    {
      uc: "Embedded and Real Time Systems",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "ArUco Follower AlphaBot",
          url: "https://github.com/filipepcampos/feup-setr-proj",
        },
      ],
    },
    {
      uc: "Computer Vision",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "Project 1",
          url: "https://github.com/filipepcampos/feup-vc-project",
        },
        {
          name: "Project 2",
          url: "https://github.com/filipepcampos/vc-proj-2",
        },
      ],
    },
  ];
  const secondYear = [
    {
      uc: "Intelligent Robotics",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "Reactive Wall Following Robot",
          url: "https://github.com/filipepcampos/feup-ri-reactive-robot",
        },
        {
          name: "DuckieBot Follower Environment",
          url: "https://github.com/filipepcampos/feup-ri-assign4"
        },
        {
          name: "DuckieBot Follower Model",
          url: "https://github.com/filipepcampos/feup-ri-assign4-model"
        }
      ],
    },
    {
      uc: "Data Analysis and Integration",
      grade: 19,
      ects: "B",
    },
    {
      uc: "Modelling and Simulation",
      grade: 20,
      ects: "A",
    },
    {
      uc: "Lifelong Employability",
      grade: 20,
      ects: "A",
    },
    {
      uc: "Dissertation Planning",
      grade: 20,
      ects: "A",
    },
    {
      uc: "Seminars",
      grade: 18,
      ects: "B",
      projects: [
        {
          name: "Time To Leave Alarm",
          url: "https://github.com/Rikenunes8/feup-s-TimeToLeaveAlarm",
        },
      ],
    },
    {
      uc: "Dissertation",
      grade: 19,
      ects: "B",
      projects: [
        {
          "name": "Dissertation Code",
          "url": "https://github.com/filipepcampos/anonymous-case-based-explainability"
        }
      ],
    },
  ];

  const bscFirstYear = [
    { uc: "Algebra", grade: 18, ects: "B"},
    { uc: "Mathematical Analysis", grade: 19, ects: "A" },
    {
      uc: "Computer Architecture and Organization",
      grade: 17,
      ects: "A",
    },
    { uc: "Complements of Mathematics", grade: 18, ects: "A"},
    { uc: "Physics I", grade: 17, ects: "B" },
    {
      uc: "Programming Fundamentals",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "Q-Snake",
          url: "https://github.com/filipepcampos/qsnake ",
        },
      ],
    },
    { uc: "Discrete Mathematics", grade: 19, ects: "A"},
    {
      uc: "Statistical Methods",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "Project",
          url: "https://github.com/filipepcampos/feup-mest-proj ",
        },
      ],
    },
    {
      uc: "Microprocessors and Personal Computers",
      grade: 17,
      ects: "B",
    },
    {
      uc: "Programming",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "Oware",
          url: "https://github.com/filipepcampos/oware",
        },
        {
          name: "Scrabble Junior",
          url: "https://github.com/filipepcampos/ScrabbleJunior",
        },
        {
          name: "Board Builder",
          url: "https://github.com/filipepcampos/BoardBuilder",
        },
      ],
    },
  ];

  const bscSecondYear = [
    {
      uc: "Algorithms and Data Structures",
      grade: 20,
      ects: "A",
      projects: [
        {
          name: "StreamZ",
          url: "https://github.com/filipepcampos/streamz",
        },
      ],
    },
    { uc: "Physics II", grade: 19, ects: "A" },
    {
      uc: "Computing Theory",
      grade: 19,
      ects: "A",
    },
    {
      uc: "Operating Systems",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "Projects",
          url: "https://github.com/filipepcampos/feup-sope-proj",
        },
      ],
    },
    {
      uc: "Object Oriented Programming Laboratory",
      grade: 17,
      ects: "B",
      projects: [
        {
          name: "LPOOMon",
          url: "https://github.com/filipepcampos/lpoomon ",
        },
      ],
    },
    {
      uc: "Computer Laboratory",
      grade: 20,
      ects: "A",
      projects: [
        {
          name: "CFLAP",
          url: "https://github.com/filipepcampos/cflap ",
        },
      ],
    },
    {
      uc: "Databases",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "Project",
          url: "https://github.com/filipepcampos/feup-bdad-proj ",
        },
      ],
    },
    { uc: "Numerical Methods", grade: 14, ects: "C" },
    {
      uc: "Algorithm Design and Analysis",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "Vaccine Router",
          url: "https://github.com/filipepcampos/vaccine_router ",
        },
      ],
    },
    {
      uc: "Computer Graphics",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "Project",
          url: "https://github.com/filipepcampos/feup-cgra ",
        },
      ],
    },
  ];

  const bscThirdYear = [
    {
      uc: "Functional and Logic Programming",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "BigNumbers & Renpaarden",
          url: "https://github.com/filipepcampos/feup-pfl-proj ",
        },
      ],
    },
    {
      uc: "Computer Networks",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "Projects",
          url: "https://github.com/filipepcampos/feup-rc-proj ",
        },
      ],
    },
    {
      uc: "Web Languages and Technologies",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "Mancala",
          url: "https://github.com/filipepcampos/feup-ltw ",
        },
      ],
    },
    {
      uc: "Computer Security Foundations",
      grade: 19,
      ects: "A",
    },
    {
      uc: "Database and Web Applications Laboratory",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "Eventful",
          url: "https://github.com/filipepcampos/eventful ",
        },
      ],
    },
    {
      uc: "Software Engineering",
      grade: 19,
      ects: "A",
      projects: [
        {
          name: "UniCalendar",
          url: "https://github.com/filipepcampos/unicalendar ",
        },
      ],
    },
    {
      uc: "Compilers",
      grade: 20,
      ects: "A",
      projects: [
        {
          name: "JMM Compiler",
          url: "https://github.com/filipepcampos/jmm_compiler ",
        },
      ],
    },
    {
      uc: "Parallel and Distributed Computing",
      grade: 18,
      ects: "A",
      projects: [
        {
          name: "Projects",
          url: "https://github.com/filipepcampos/feup-cpd-proj ",
        },
      ],
    },
    {
      uc: "Capstone Project",
      grade: 18,
      ects: "A",
      projects: [{ name: "Mobile Car Driving", url: "https://github.com/filipepcampos/mobile-car-driving-model" }],
    },
    {
      uc: "Artificial Intelligence",
      grade: 20,
      ects: "A",
      projects: [
        {
          name: "Robot-Mazes",
          url: "https://github.com/filipepcampos/robot-mazes",
        },
        {
          name: "Churn Classification",
          url: "https://github.com/filipepcampos/telco-churn-classification",
        },
      ],
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-16 max-w-screen-xl min-y-screen-xl px-8 py-8 mx-auto">
        <section id="msc">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              MSc in Informatics and Computing Engineering
              <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                Below is an overview of the work done during my studies.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="p-5 text-lg font-semibold text-gray-900 dark:text-white">
                1st Year
              </h3>
              <GradeTable data={firstYear} />
            </div>
            <div className="mb-8">
              <h3 className="p-5 text-lg font-semibold text-gray-900 dark:text-white">
                2nd Year
              </h3>
              <GradeTable data={secondYear} />
            </div>
          </div>
        </section>
        <section id="bsc">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              <h2>BSc in Informatics and Computing Engineering</h2>
              <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                Below is an overview of the work done during my studies.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="p-5 text-lg font-semibold text-gray-900 dark:text-white">
                1st Year
              </h3>
              <GradeTable data={bscFirstYear} />
            </div>
            <div className="mb-8">
              <h3 className="p-5 text-lg font-semibold text-gray-900 dark:text-white">
                2nd Year
              </h3>
              <GradeTable data={bscSecondYear} />
            </div>
            <div>
              <h3 className="p-5 text-lg font-semibold text-gray-900 dark:text-white">
                3rd Year
              </h3>
              <GradeTable data={bscThirdYear} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
