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
