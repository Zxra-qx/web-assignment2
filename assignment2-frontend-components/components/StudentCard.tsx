"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

// Define the props received from StudentList.
interface StudentCardProps {
    student: Student;
    onRemove: (id: number) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // Track details visibility separately for each card.
    const [showDetails, setShowDetails] = useState(false);

    return (
    <article className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 text-gray-900 shadow-sm">
      {/* Display the student's name and grade. */}
        <h3 className="break-words text-xl font-semibold">
        {student.firstName} {student.lastName}
        </h3>

        <p className="mt-1 text-gray-600">Grade {student.grade}</p>

      {/* Display details only when this card is open. */}
        {showDetails && (
        <div className="mt-4 space-y-2">
            <p>Average: {student.average}%</p>

            {student.average >= 80 && (
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Honour roll
            </span>
            )}
        </div>
        )}

      {/* Toggle details or request removal through the callback. */}
        <div className="mt-4 flex flex-wrap gap-2">
        <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            aria-expanded={showDetails}
            className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
            {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
            type="button"
            onClick={() => onRemove(student.id)}
            className="rounded bg-red-700 px-4 py-2 text-white hover:bg-red-800"
        >
            Remove
        </button>
        </div>
    </article>
    );
};

export default StudentCard;
