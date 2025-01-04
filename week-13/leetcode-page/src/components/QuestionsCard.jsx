import { FilterIcon } from "./icons/FilterIcon";
import { CheckIcon } from "./icons/CheckIcon";
import { CrossIcon } from "./icons/CrossIcon";
import { useState } from "react";
import { FilterCard } from "./FilterCard";

export const QuestionsCard = () => {
  const [openFilterCard, setOpenFilterCard] = useState(false);
  const [filters, setFilters] = useState({
    todo: false,
    solved: false,
    easy: false,
    medium: false,
    hard: false,
  });

  const toggleFilterCard = () => {
    setOpenFilterCard(!openFilterCard); //if open then close and vice-versa
  };

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName], //if true sets to false and vice-versa,
    }));
  };

  const problems = [
    {
      nameOfProblem: "Longest Common Prefix",
      type: "Easy",
      problemNumber: 14,
      solved: true,
    },
    {
      nameOfProblem: "Contains Duplicate",
      type: "Medium",
      problemNumber: 217,
      solved: false,
    },
    {
      nameOfProblem: "Valid Palindrome",
      type: "Easy",
      problemNumber: 125,
      solved: true,
    },
    {
      nameOfProblem: "Remove Duplicates from Sorted Array",
      type: "Hard",
      problemNumber: 26,
      solved: true,
    },
    {
      nameOfProblem: "Plus One",
      type: "Easy",
      problemNumber: 66,
      solved: true,
    },
    {
      nameOfProblem: "Single Number",
      type: "Medium",
      problemNumber: 136,
      solved: true,
    },
    {
      nameOfProblem: "Best Time to Buy and Sell Stock",
      type: "Hard",
      problemNumber: 121,
      solved: false,
    },
    {
      nameOfProblem: "Merge Sorted Array",
      type: "Easy",
      problemNumber: 88,
      solved: false,
    },
    {
      nameOfProblem: "Sqrt(x)",
      type: "Medium",
      problemNumber: 69,
      solved: true,
    },
    {
      nameOfProblem: "Reverse Linked List",
      type: "Hard",
      problemNumber: 206,
      solved: true,
    },
    {
      nameOfProblem: "Linked List Cycle",
      type: "Medium",
      problemNumber: 141,
      solved: false,
    },
  ];

  const filteredProblems = problems.filter((problem) => {
    //logic to remove problems
    if (filters.todo && problem.solved) return false;
    if (filters.solved && !problem.solved) return false;
    if (filters.easy && problem.type !== "Easy") return false;
    if (filters.medium && problem.type !== "Medium") return false;
    if (filters.hard && problem.type !== "Hard") return false;
    return true;
  });

  return (
    <div className="flex flex-col text-white flex-grow relative">
      <div
        className="flex text-black bg-white w-28 justify-center rounded-md cursor-pointer"
        onClick={toggleFilterCard}
      >
        <FilterIcon />
        <p> Filter</p>
      </div>
      {openFilterCard && (
        <div className="absolute top-8 left-0 w-64 z-10">
          <FilterCard filters={filters} onFilterChange={handleFilterChange} />
        </div>
      )}
      <div className="flex flex-col mt-4">
        {filteredProblems.map((problem) => (
          <div
            key={problem.problemNumber}
            className="flex justify-between flex-grow mb-2"
          >
            <div className="flex">
              {problem.solved ? <CheckIcon /> : <CrossIcon />}
              <p>{problem.problemNumber}. </p>
              <p>{problem.nameOfProblem}</p>
            </div>
            <p
              className={`${
                problem.type === "Easy"
                  ? "text-teal-500"
                  : problem.type === "Medium"
                  ? "text-yellow-500"
                  : problem.type === "Hard"
                  ? "text-red-500"
                  : ""
              }`}
            >
              {problem.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
