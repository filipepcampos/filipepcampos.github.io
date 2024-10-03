export default function GradeTable({
  data,
}: {
  data: {
    uc: string;
    grade: number;
    ects: string;
    projects?: { name: string; url: string; weburl?: string }[];
  }[];
}) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="col" className="px-6 py-3">
            Curricular Unit
          </th>
          <th scope="col" className="px-6 py-3">
            Grade
          </th>
          <th scope="col" className="px-6 py-3">
            ECTS Grade
          </th>
          <th scope="col" className="px-6 py-3">
            Project(s)
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ uc, grade, ects, projects }, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            key={index}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {uc}
            </th>
            <td className="px-6 py-4">{grade}</td>
            <td className="px-6 py-4">{ects}</td>
            <td className="px-6 py-4">
              {projects &&
                projects.map(({ name, url, weburl }, index) => (
                  <div key={index}>
                    <a href={url} className="text-blue-500 hover:text-blue-800">
                      {index > 0 ? ` ` : ""} {name}
                    </a>
                    {weburl && (
                      <a
                        href={weburl}
                        className="text-gray-500 hover:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-1 py-1 ml-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        Web
                      </a>
                    )}
                  </div>
                ))}
            </td>
            {/* <td className="px-6 py-4">{projects}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
