import GradeTable from "@/components/GradeTable";

export default function Education() {
  const firstYear = [
    {
      uc: "Machine Learning",
      grade: 18,
      ects: "A",
      project: "[Project](https://github.com/filipepcampos/feup-ac-proj) ",
    },
    {
      uc: "Large Scale Software Development",
      grade: 20,
      ects: "A",
      project: "TODO ",
    },
    {
      uc: "Information Processing and Retrieval",
      grade: 18,
      ects: "B",
      project: "TODO ",
    },
    {
      uc: " Interactive Graphics Systems",
      grade: 20,
      ects: "A",
      project: "TODO ",
    },
    {
      uc: "Project Management Laboratory",
      grade: 18,
      ects: "A",
      project: "TODO ",
    },
    { uc: "Optimization", grade: 18, ects: "A", project: "TODO " },
    {
      uc: "Natural Language Processing",
      grade: 19,
      ects: "A",
      project: "TODO ",
    },
    {
      uc: "Embedded and Real Time Systems",
      grade: 18,
      ects: "A",
      project: "TODO ",
    },
    { uc: "Computer Vision", grade: 19, ects: "A", project: "TODO " },
  ];

  const bscFirstYear = [
    { uc: "Algebra", grade: 18, ects: "B", project: "N/A " },
    { uc: "Mathematical Analysis", grade: 19, ects: "A", project: "N/A " },
    {
      uc: "Computer Architecture and Organization",
      grade: 17,
      ects: "A",
      project: " ",
    },
    { uc: "Complements of Mathematics", grade: 18, ects: "A", project: "N/A " },
    { uc: "Physics I", grade: 17, ects: "B", project: "N/A " },
    {
      uc: "Programming Fundamentals",
      grade: 19,
      ects: "A",
      project: "[Q-Snake](https://github.com/filipepcampos/qsnake) ",
    },
    { uc: "Discrete Mathematics", grade: 19, ects: "A", project: "N/A " },
    {
      uc: "Statistical Methods",
      grade: 18,
      ects: "A",
      project: "[Project](https://github.com/filipepcampos/feup-mest-proj) ",
    },
    {
      uc: "Microprocessors and Personal Computers",
      grade: 17,
      ects: "B",
      project: " ",
    },
    {
      uc: "Programming",
      grade: 19,
      ects: "A",
      project:
        "[Oware](https://github.com/filipepcampos/oware) & [ScrabbleJunior](https://github.com/filipepcampos/ScrabbleJunior)+[BoardBuilder](https://github.com/filipepcampos/BoardBuilder) ",
    },
  ];

  const bscSecondYear = [
    {
      uc: "Algorithms and Data Structures",
      grade: 20,
      ects: "A",
      project: "[StreamZ](https://github.com/filipepcampos/streamz)",
    },
    { uc: "Physics II", grade: 19, ects: "A", project: "" },
    { uc: "Computing Theory", grade: 19, ects: "A", project: "TODO " },
    {
      uc: "Operating Systems",
      grade: 18,
      ects: "A",
      project: "[Projects](https://github.com/filipepcampos/feup-sope-proj) ",
    },
    {
      uc: "Object Oriented Programming Laboratory",
      grade: 17,
      ects: "B",
      project: "[LPOOMon](https://github.com/filipepcampos/lpoomon) ",
    },
    {
      uc: "Computer Laboratory",
      grade: 20,
      ects: "A",
      project: "[CFLAP](https://github.com/filipepcampos/cflap) ",
    },
    {
      uc: "Databases",
      grade: 18,
      ects: "A",
      project: "[Project](https://github.com/filipepcampos/feup-bdad-proj) ",
    },
    { uc: "Numerical Methods", grade: 14, ects: "C", project: "N/A " },
    {
      uc: "Algorithm Design and Analysis",
      grade: 19,
      ects: "A",
      project:
        "[Vaccine Router](https://github.com/filipepcampos/vaccine_router) ",
    },
    {
      uc: "Computer Graphics",
      grade: 19,
      ects: "A",
      project: "[Project](https://github.com/filipepcampos/feup-cgra) ",
    },
  ];

  const bscThirdYear = [
    {
      uc: "Functional and Logic Programming",
      grade: 19,
      ects: "A",
      project:
        "[BigNumbers & Renpaarden](https://github.com/filipepcampos/feup-pfl-proj) ",
    },
    {
      uc: "Computer Networks",
      grade: 18,
      ects: "A",
      project: "[Projects](https://github.com/filipepcampos/feup-rc-proj) ",
    },
    {
      uc: "Web Languages and Technologies",
      grade: 18,
      ects: "A",
      project: "[Mancala](https://github.com/filipepcampos/feup-ltw) ",
    },
    {
      uc: "Computer Security Foundations",
      grade: 19,
      ects: "A",
      project: "TODO ",
    },
    {
      uc: "Database and Web Applications Laboratory",
      grade: 19,
      ects: "A",
      project: "[Eventful](https://github.com/filipepcampos/eventful) ",
    },
    {
      uc: "Software Engineering",
      grade: 19,
      ects: "A",
      project: "[UniCalendar](https://github.com/filipepcampos/unicalendar) ",
    },
    {
      uc: "Compilers",
      grade: 20,
      ects: "A",
      project: "[JMM Compiler](https://github.com/filipepcampos/jmm_compiler) ",
    },
    {
      uc: "Parallel and Distributed Computing",
      grade: 18,
      ects: "A",
      project: "[Projects](https://github.com/filipepcampos/feup-cpd-proj) ",
    },
    { uc: "Capstone Project", grade: 18, ects: "A", project: "TODO " },
    {
      uc: "Artificial Intelligence",
      grade: 20,
      ects: "A",
      project:
        "[robot-mazes](https://github.com/filipepcampos/robot-mazes) & [Churn Classification](https://github.com/filipepcampos/telco-churn-classification) ",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-16 max-w-screen-xl min-y-screen-xl px-8 py-8 mx-auto">
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
        </div>
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
      </div>
    </section>
  );
}
