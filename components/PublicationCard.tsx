export default function PublicationCard({
  title,
  authors,
  year,
  link,
  where,
}: {
  title: string;
  authors: string;
  year: string;
  link: string;
  where: string;
}) {
  return (
    <a
      href={link}
      className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <h4 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h4>
        <div className="text-sm text-base text-gray-700 dark:text-gray-400">
          <div className="flex flex-row gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:invert"
            >
              <path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z" />
            </svg>
            <p>
              <u>F. Campos</u> { authors } ({ year }).
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:invert"
            >
              <path d="M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v16h-14v-16z" />
            </svg>
            <p>
              { where }
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
