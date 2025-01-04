export const FilterCard = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-col text-white font-font-awesome bg-neutral-800 p-4 rounded-lg">
      <p className="text-lg font-semibold mb-2">Status</p>
      <div>
        <div className="inline-flex items-center mb-2">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-todo"
          >
            <input
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border bg-neutral-800 checked:bg-white checked:border-black"
              id="check-todo"
              checked={filters.todo}
              onChange={() => onFilterChange("todo")}
            />
            <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-white text-sm"
            htmlFor="check-todo"
          >
            Todo
          </label>
        </div>
        <div className="inline-flex items-center">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-solved"
          >
            <input
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border bg-neutral-800 checked:bg-white checked:border-black"
              id="check-solved"
              checked={filters.solved}
              onChange={() => onFilterChange("solved")}
            />
            <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-white text-sm"
            htmlFor="check-solved"
          >
            Solved
          </label>
        </div>
      </div>

      <p className="text-lg font-semibold mb-2">Difficulty</p>
      <div>
        <div className="inline-flex items-center mb-2">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-easy"
          >
            <input
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border bg-neutral-800 checked:bg-white checked:border-black"
              id="check-easy"
              checked={filters.easy}
              onChange={() => onFilterChange("easy")}
            />
            <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-teal-500 text-sm"
            htmlFor="check-easy"
          >
            Easy
          </label>
        </div>
        <div className="inline-flex items-center">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-medium"
          >
            <input
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border bg-neutral-800 checked:bg-white checked:border-black"
              id="check-medium"
              checked={filters.medium}
              onChange={() => onFilterChange("medium")}
            />
            <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-yellow-500 text-sm"
            htmlFor="check-medium"
          >
            Medium
          </label>
        </div>
        <div className="inline-flex items-center">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-hard"
          >
            <input
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border bg-neutral-800 checked:bg-white checked:border-black"
              id="check-hard"
              checked={filters.hard}
              onChange={() => onFilterChange("hard")}
            />
            <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-red-500 text-sm"
            htmlFor="check-hard"
          >
            Hard
          </label>
        </div>
      </div>
    </div>
  );
};
