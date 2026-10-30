/*
 * File: StudentList.tsx
 * Author: Zara Qadri
 * Date: October 30, 2026
 *
 * This component displays a list of student cards.
 * It receives a student array and an onRemove callback as props.
 * It checks whether the array is empty and displays a message if needed.
 * Otherwise, it creates a StudentCard for each student and passes along the callback.
 * The cards appear in a responsive grid that adjusts to the screen width.
 */

import type { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard";

interface StudentListProps {
    students: Student[];
    onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {

    if (students.length === 0) {
    return (
        <p className="py-6 text-center text-gray-600">
        No students to display.
        </p>
    );
    }


    return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
        <StudentCard
            key={student.id}
            student={student}
            onRemove={onRemove}
        />
        ))}
    </div>
    );
};

export default StudentList;
