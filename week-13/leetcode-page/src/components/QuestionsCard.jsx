import { FilterIcon } from "./icons/FilterIcon";
import { CheckIcon } from "./icons/CheckIcon";
import { CrossIcon } from "./icons/CrossIcon";
import { useState } from "react";
import { FilterCard } from "./FilterCard";

export const QuestionsCard = () => {
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

  const [openFilterCard, setOpenFilterCard] = useState(false);

  const toggleFilterCard = () => {
    setOpenFilterCard(!openFilterCard); //if open then close and vice-versa
  };

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
          <FilterCard />
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex justify-between flex-grow">
          <div className="flex">
            <CheckIcon />
            <p>88. </p>
            <p>Merge Sorted Array</p>
          </div>
          <p className="text-teal-500">Easy</p>
        </div>
      </div>
    </div>
  );
};
