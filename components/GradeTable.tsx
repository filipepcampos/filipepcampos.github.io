export default function GradeTable ({data}: {data: {uc: string, grade: number, ects: string, project: string}[]}) {
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
              {data.map(({ uc, grade, ects, project }, index) => (
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
                  <td className="px-6 py-4">{project}</td>
                </tr>
              ))}
            </tbody>
          </table>
    );
}